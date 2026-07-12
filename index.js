const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const P = require('pino');
const express = require('express');
const app = express();

app.get('/', (req,res)=> res.send(`<h1>Drax-AI Mode CODE ✅<br>Regarde les Logs sur Render</h1>`));
app.listen(process.env.PORT||10000);

async function startBot(){
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const sock = makeWASocket({ auth: state, logger: P({level:'fatal'}), printQRInTerminal:false, browser:["Drax-AI","Chrome","1.0"] });
  sock.ev.on('creds.update', saveCreds);

  if(!sock.authState.creds.registered){
    let num = "224XXXXXXXXX"; // <--- METS TON NUMERO ICI SANS + EX: 224620000000
    setTimeout(async()=>{
      let code = await sock.requestPairingCode(num);
      console.log("TON CODE D'APPARIAGE EST : " + code);
    }, 4000);
  }

  sock.ev.on('connection.update', u=>{
    if(u.connection==='open'){ console.log('CONNECTE CHEF !'); }
  });
}
startBot();
