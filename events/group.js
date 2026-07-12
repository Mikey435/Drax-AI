const fs=require('fs');
module.exports=async(sock,a)=>{
try{
const f='./data/group.json'; const db=(()=>{try{return JSON.parse(fs.readFileSync(f))}catch{return{}}})();
const jid=a.id; if(!db[jid]) return; const meta=await sock.groupMetadata(jid).catch(()=>null);
if(a.action==='add' && db[jid].welcome){ for(let p of a.participants){ let msg=(db[jid].welcomeMsg||'Bienvenue @user dans {group} 🦁').replace('{group}',meta?.subject||'').replace('@user','@'+p.split('@')[0]); await sock.sendMessage(jid,{text:msg,mentions:[p]}); } }
if(a.action==='remove' && db[jid].goodbye){ for(let p of a.participants){ let msg=(db[jid].goodbyeMsg||'Aurevoir @user 👋').replace('@user','@'+p.split('@')[0]); await sock.sendMessage(jid,{text:msg,mentions:[p]}); } }
}catch(e){}
}
