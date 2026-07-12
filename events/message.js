const fs=require('fs');
module.exports=async(sock,m)=>{
try{
const text=m.message?.conversation||m.message?.extendedTextMessage?.text||m.message?.imageMessage?.caption||'';
if(!text.startsWith('.')) return;
const args=text.slice(1).trim().split(/ +/); const cmd=args.shift().toLowerCase();
const cfg=(()=>{try{return JSON.parse(fs.readFileSync('./data/config.json'))}catch{return{mode:'private'}}})();
const sender=m.key.participant||m.key.remoteJid;
const isOwner=sender.includes('224621740232');
if(cfg.mode==='private' &&!isOwner && cmd!=='mode') return;
const paths=[`./commands/core/${cmd}.js`,`./commands/group/${cmd}.js`,`./commands/anime/${cmd}.js`,`./commands/download/${cmd}.js`,`./commands/ai/${cmd}.js`,`./commands/fun/${cmd}.js`,`./commands/tools/${cmd}.js`,`./commands/owner/${cmd}.js`];
for(let p of paths){ if(fs.existsSync(p)){ return await require('.'+p).run(sock,m,args); } }
}catch(e){console.log('CMD ERR:',e.message)}
}
