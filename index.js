const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const qrcode = require('qrcode-terminal')
const pino = require('pino')
const express = require('express')

// Petit serveur pour Render
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Drax-AI is running!'))
app.listen(PORT, () => console.log('Serveur sur port ' + PORT))

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info')
  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' })
  })
  sock.ev.on('creds.update', saveCreds)
  sock.ev.on('connection.update', (update) => {
    const { connection, qr } = update
    if (qr) {
      console.log('=== SCANNE CE QR CHEF ===')
      qrcode.generate(qr, { small: true })
    }
    if (connection === 'open') {
      console.log('✅ Connecté ! Drax-AI est en ligne')
    }
    if (connection === 'close') {
      startBot()
    }
  })
}
startBot()
