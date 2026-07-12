module.exports.run=async(s,m)=>{
const fs=require('fs');
let txt=`╭━ 🦁 DRAX NOVA V5.1 - LISTE COMPLETE ━╮\n\n`;
const order=[["core","📜 PRINCIPAL"],["groupe","👥 GROUPE"],["admin","👑 ADMIN"],["fun","😂 FUN & DIVERTISSEMENT"],["games","🎮 JEUX"],["anime","🌸 ANIME"],["dl","📥 DOWNLOAD"],["tools","🛠️ OUTILS"],["ia","🤖 IA"],["freefire","🎮 FREE FIRE"],["owner","🔐 OWNER"],["eco","💰 ECO"]];
for(let [folder,title] of order){
 try{
  let files=fs.readdirSync("./commands/"+folder).map(f=>"."+f.replace(".js",""));
  txt+=`┏━『 ${title} 』 [${files.length}]\n`;
  // Séparé par ligne de 3 pour lisibilité
  for(let i=0;i<files.length;i+=3){ txt+=`┃ ${files.slice(i,i+3).join(" ")}\n`; }
  txt+=`┗━━━━━━━━━━━━━━\n\n`;
 }catch{}
}
txt+=`> Total ${fs.readdirSync("./commands").reduce((a,c)=>a+fs.readdirSync("./commands/"+c).length,0)} commandes\n> Tape .funmenu .groupmenu etc pour détail avec explications\n> Drax Nova V5.1 🦁`;
await s.sendMessage(m.key.remoteJid,{text:txt},{quoted:m});
}
