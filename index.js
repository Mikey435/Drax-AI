const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const P = require('pino');
const express = require('express');
const QRCode = require('qrcode');

const app = express();
let qrImage = '';
let lastQR = '';

app.get('/', async (req,res)=>{
  if(!qrImage){
    return res.send(`<h1 style="font-family:sans-serif;text-align:center;margin-top:100px">Drax-AI QR Mode ✅<br><br>Generation du QR...<br>Patiente 10s et actualise</h1><script>setTimeout(()=>location.reload(),5000)</script>`);
  }
  res.send(`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif"><h1>Drax-AI QR</h1>${qrImage}<p>Scanne dans WhatsApp > Appareils lies</p></div>`);
});
app.listen(process.env.PORT||10000, ()=>console.log('Web ON'));

async function startBot(){
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const sock = makeWASocket({ auth: state, logger: P({level:'fatal'}), printQRInTerminal:false, browser:["Drax-AI","Chrome","1.0"] });
  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('connection.update', async (u)=>{
    const { connection, qr } = u;
    if(qr){
      const url = await QRCode.toDataURL(qr, {width:350});
      qrImage = `<img src="${url}" style="border:15px solid #000;border-radius:12px">`;
      console.log('QR GENERE');
    }
    if(connection === 'open'){ console.log('CONNECTE'); qrImage='<h1>CONNECTE ✅ Tape .ping</h1>'; }
    if(connection === 'close'){ qrImage=''; setTimeout(startBot,3000); }
  });
}
startBot();
