const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const P = require('pino');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req,res)=>{
  res.send('<h1 style="font-family:sans-serif;text-align:center">Drax-AI CODE ✅<br>Va dans Render > Logs pour voir ton code</h1>');
});
app.listen(PORT, ()=> console.log('Web en ligne sur port ' + PORT));

const PHONE_NUMBER = "224621740232"; // TON NUMERO, NE TOUCHE PLUS

async function startBot(){
  const { state, saveCreds } = await useMultiFileAuthState('session');
  const sock = makeWASocket({
    auth: state,
    logger: P({ level: 'silent' }),
    printQRInTerminal: false,
    browser: ["Ubuntu", "Chrome", "20.0.0"]
  });

  sock.ev.on('creds.update', saveCreds);

  if(!sock.authState.creds.registered){
    setTimeout(async ()=>{
      try{
        console.log('Demande du code pour ' + PHONE_NUMBER + '...');
        let code = await sock.requestPairingCode(PHONE_NUMBER);
        console.log('===========================================');
        console.log('TON CODE : ' + code);
        console.log('WhatsApp > Appareils lies > Lier avec numero');
        console.log('===========================================');
      }catch(e){
        console.log('Erreur code:', e.message);
      }
    }, 5000);
  }

  sock.ev.on('connection.update', (update)=>{
    const { connection, lastDisconnect } = update;
    if(connection === 'open'){
      console.log('✅ CONNECTE CHEF! BOT LIVE!');
    }
    if(connection === 'close'){
      let shouldReconnect = lastDisconnect?.error?.output?.statusCode!== DisconnectReason.loggedOut;
      console.log('Deconnecte, reconnexion...', shouldReconnect);
      if(shouldReconnect) setTimeout(startBot, 3000);
    }
  });

  sock.ev.on('messages.upsert', async m=>{
    const msg = m.messages[0];
    if(!msg.message) return;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
    if(text.toLowerCase() === '.ping'){
      await sock.sendMessage(msg.key.remoteJid, { text: 'pong ✅ Drax-AI est LIVE Chef!' });
    }
  });
}

startBot();
