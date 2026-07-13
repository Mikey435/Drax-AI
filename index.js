// DRAX-ULTIME V4 - QR EDITION BY CHEF
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys')
const P = require('pino')
const qrcode = require('qrcode-terminal')

async function startDrax() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')

    const sock = makeWASocket({
        auth: state,
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ["DRAX-ULTIME", "Chrome", "1.0"]
    })

    sock.ev.on('creds.update', saveCreds)

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update

        if(qr) {
            console.log("=== SCANNE CE QR CHEF ===")
            qrcode.generate(qr, { small: false })
        }

        if(connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode!== DisconnectReason.loggedOut
            console.log('Deconnecté, reconnexion...', shouldReconnect)
            if(shouldReconnect) startDrax()
        } else if(connection === 'open') {
            console.log('✅ DRAX CONNECTÉ CHEF! BOT EN LIGNE!')
        }
    })

    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0]
        if(!m.message || m.key.fromMe) return
        const text = m.message.conversation || m.message.extendedTextMessage?.text || ""
        const from = m.key.remoteJid

        if(text.toLowerCase() === '.ping') {
            await sock.sendMessage(from, { text: '*PONG! 🏓 DRAX EST EN LIGNE CHEF!*\n> Vitesse: Ultra Rapide\n> Version: V4 QR' })
        }
        if(text.toLowerCase() === '.menu') {
            await sock.sendMessage(from, { text: `*🔥 DRAX-ULTIME MENU 🔥*\n\n.ping - Teste le bot\n.menu - Affiche ce menu\n.sticker - Envoie image +.sticker\n\n_Bot by Chef 224_*` })
        }
    })
}

startDrax()
