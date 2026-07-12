const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');
const P = require('pino');
const qrcode = require('qrcode-terminal');
const NodeCache = require('node-cache');

// Cache pour éviter le MessageCounterError
const msgRetryCounterCache = new NodeCache();

async function startDrax() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const sock = makeWASocket({
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, P({ level: 'silent' }))
    },
    logger: P({ level: 'silent' }),
    browser: ["DRAX-NOVA", "Chrome", "122"],
    syncFullHistory: false,
    markOnlineOnConnect: false,
    msgRetryCounterCache,
    getMessage: async () => undefined
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (u) => {
    const { connection, lastDisconnect, qr } = u;
    if(qr){ console.log('--- SCANNE CE QR ---'); qrcode.generate(qr, { small: true }); }
    if(connection === 'open'){ console.log('✅ DRAX CONNECTÉ - FIX OK'); }
    if(connection === 'close'){
      const code = lastDisconnect?.error?.output?.statusCode;
      const msg = lastDisconnect?.error?.message || "";
      const isBadMac = msg.includes('Bad MAC') || msg.includes('405') || msg.includes('Key used already');
      if(code!== DisconnectReason.loggedOut &&!isBadMac){
        console.log('Reconnexion 3s...');
        setTimeout(startDrax, 3000);
      } else {
        console.log('Session morte, supprime auth_info et relance manuellement');
        console.log('Fais: rm -rf auth_info && node index.js');
      }
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    try{
      const m = messages[0];
      if(!m ||!m.message) return;
      if(m.message.protocolMessage) return;
      // Ignore les messages qui ne peuvent pas être déchiffrés (c'est ce qui spam ton log)
      if(!m.message.conversation &&!m.message.extendedTextMessage &&!m.message.imageMessage) {
         // laisse passer quand même si c'est une commande
      }
      const raw = m.message.conversation || m.message.extendedTextMessage?.text || "";
      if(!raw.startsWith(".")) return;
      await require('./handler')(sock, m, raw.trim());
    }catch(e){
      // On ignore silencieusement les erreurs de déchiffrement
      if(e?.message?.includes('decrypt') || e?.message?.includes('Session')) return;
      console.log('Handler error:', e.message);
    }
  });
}
startDrax();
// Anti-crash total
process.on('uncaughtException', (err) => {
  if(err.message?.includes('Session') || err.message?.includes('decrypt') || err.message?.includes('MessageCounter')) return;
  console.log('Uncaught:', err.message);
});
process.on('unhandledRejection', (err) => {
  if(err?.message?.includes('Session') || err?.message?.includes('decrypt') || err?.message?.includes('MessageCounter')) return;
});

