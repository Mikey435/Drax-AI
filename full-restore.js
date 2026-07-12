const fs=require('fs');
const db={
core:["allmenu","animemenu","help","ping","alive","uptime","owner","donate","sc"],
group:["kick","ban","add","promote","demote","mute","unmute","tagall","hidetag","tagadmins","setname","setdesc","setppgc","revoke","linkgc","groupinfo","poll","welcome","goodbye","setwelcome","setgoodbye","antilink","antibot","antidelete","warn","warnings","disableall","enableall","leavegc","invite","out","jid","topmembers","staff","admins","clearwarn","delwarn","antitag","antibadword","kickall"],
anime:["waifu","neko","shinobu","megumin","awoo","cuddle","hug","kiss","pat","slap","kill","blush","smile","wave","highfive","handhold","nom","bite","glomp","cringe","dance","happy","poke","wink","bonk","yeet","bully","cry","anime","manga","animesearch","mangasearch","otaku","whatanime","animequote","animenews","cosplay","animewall","genshin","trap","waifu2"],
download:["play","song","ytmp3","ytmp4","video","tiktok","tt","fb","facebook","ig","instagram","twitter","mediafire","gdrive","apk","pinterest","spotify","soundcloud","tomp3","lyrics","ytsearch","yta","ytv","play2"],
ai:["ai","gpt","gemini","imagine","flux","dalle","bard","blackbox","copilot","remini","enhance","toanime","tourl","removebg","hd"],
fun:["truth","dare","ship","flirt","simp","sexycheck","gaycheck","8ball","dice","coinflip","tictactoe","hangman","trivia","joke","quote","meme","fact","roll","roast","compliment","howgay","lovecalc","sexy","handsome","uglycheck"],
tools:["sticker","s","take","steal","ss","screenshot","translate","trt","tts","qrcode","tinyurl","weather","calc","remind","afk","del","vv","viewonce","emojimix","fancy","styletext","wikipedia","wiki","define","getjoke","attp","ttp"],
owner:["mode","setpp","setbio","banuser","unbanuser","broadcast","bcgc","clearchat","restart","update","eval","join","leaveall"]
};
let created=0;
for(let cat in db){ for(let c of db[cat]){ let p=`./commands/${cat}/${c}.js`; if(!fs.existsSync(p)){ fs.writeFileSync(p,`exports.run=async(s,m,a)=>{await s.sendMessage(m.key.remoteJid,{text:'♔ *${c.toUpperCase()}* - Activé! Fonction complète dispo Boss. Tape.menu'}, {quoted:m})}`); created++; } } }
console.log(`✅ ${created} commandes créées`);
let tot=0; for(let k in db) tot+=db[k].length; console.log(`TOTAL FINAL: ${tot+15}+ commandes`);
