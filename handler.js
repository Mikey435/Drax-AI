const fs = require('fs');
const path = require('path');

global.DRAX_BAN = global.DRAX_BAN || new Set();
global.DRAX_WHITE = global.DRAX_WHITE || new Set();
global.DRAX_PRIVATE = global.DRAX_PRIVATE || false;

module.exports = async (sock, msg, text) => {
  if(!text) return;
  console.log(`>>> RECU: ${text} | fromMe=${msg.key.fromMe}`);

  if(!text.startsWith(".")) return;

  const jid = msg.key.remoteJid;
  const sender = msg.key.participant || jid;

  let args = text.slice(1).trim().split(/ +/);
  let cmd = args.shift().toLowerCase();
  if(cmd.startsWith('atk') && cmd.length>3){ args.unshift(cmd.replace('atk','')); cmd='atk'; }

  // ===== COMMANDES OWNER - TOUJOURS AUTORISEES MEME EN PRIVE =====
  // On autorise si c'est toi (fromMe) OU si c'est le owner qui écrit au bot en privé
  const isOwner = msg.key.fromMe || jid.endsWith('@s.whatsapp.net');

  if(cmd === 'private'){
    global.DRAX_PRIVATE = true;
    console.log("MODE -> PRIVE");
    return await sock.sendMessage(jid,{text:"🔒 Mode PRIVÉ activé\nSeuls les.allow peuvent utiliser\n\nTape:.allow @ton_pote en mentionnant\nPour rouvrir:.public"},{quoted:msg});
  }
  if(cmd === 'public'){
    global.DRAX_PRIVATE = false;
    global.DRAX_WHITE.clear();
    global.DRAX_BAN.clear();
    console.log("MODE -> PUBLIC");
    return await sock.sendMessage(jid,{text:"🌍 Mode PUBLIC activé\nTout le monde peut utiliser le bot"},{quoted:msg});
  }
  if(cmd === 'allow'){
    let target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if(!target){
      // si tu réponds à un message, on prend la personne à qui tu réponds
      target = msg.message?.extendedTextMessage?.contextInfo?.participant;
    }
    if(!target) return await sock.sendMessage(jid,{text:"Fais comme ça:\nReste appuyé sur le message de ton pote > Répondre > tape.allow @lui"},{quoted:msg});
    global.DRAX_WHITE.add(target);
    global.DRAX_PRIVATE = true;
    return await sock.sendMessage(jid,{text:`✅ Autorisé @${target.split('@')[0]}\nMode privé ON`,mentions:[target]},{quoted:msg});
  }
  if(cmd === 'whitelist' || cmd === 'list' || cmd === 'liste'){
    let list = [...global.DRAX_WHITE].map(id=>`• @${id.split('@')[0]} ( ${id.split('@')[0]} )`).join("\n") || "Vide - personne autorisé";
    return await sock.sendMessage(jid,{text:`📜 WHITELIST [${global.DRAX_PRIVATE?'PRIVÉ':'PUBLIC'}]:\n${list}\n\nBan: ${global.DRAX_BAN.size} personnes`,mentions:[...global.DRAX_WHITE]},{quoted:msg});
  }
  if(cmd === 'ban'){
    let target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;
    if(!target) return await sock.sendMessage(jid,{text:"Réponds au message du gars et tape.ban"},{quoted:msg});
    global.DRAX_BAN.add(target);
    return await sock.sendMessage(jid,{text:`🚫 Banni @${target.split('@')[0]}`,mentions:[target]},{quoted:msg});
  }
  if(cmd === 'unban'){
    let target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || msg.message?.extendedTextMessage?.contextInfo?.participant;
    if(target){ global.DRAX_BAN.delete(target); return await sock.sendMessage(jid,{text:`✅ Débanni @${target.split('@')[0]}`,mentions:[target]},{quoted:msg}); }
  }
  if(cmd === 'banlist'){
    let list = [...global.DRAX_BAN].map(id=>`• @${id.split('@')[0]}`).join("\n") || "Aucun banni";
    return await sock.sendMessage(jid,{text:`🚫 BAN LIST:\n${list}`,mentions:[...global.DRAX_BAN]},{quoted:msg});
  }

  // ===== VERIF BLOCAGE POUR LES AUTRES =====
  // Si c'est pas toi et que tu es en privé
  if(!msg.key.fromMe){
    if(global.DRAX_BAN.has(sender)) return; // banni = silence total
    if(global.DRAX_PRIVATE &&!global.DRAX_WHITE.has(sender)){
      console.log(`BLOQUE ${sender.split('@')[0]} - pas autorisé`);
      return;
    }
  }

  // ===== EXECUTE LES COMMANDES NORMALES =====
  let fp = path.join(__dirname, `commands/core/${cmd}.js`);
  if(fs.existsSync(fp)){ delete require.cache[require.resolve(fp)]; return await require(fp).run(sock,msg,args); }
  let fp2 = path.join(__dirname, `commands/${cmd}.js`);
  if(fs.existsSync(fp2)){ delete require.cache[require.resolve(fp2)]; return await require(fp2).run(sock,msg,args); }
  if(cmd==='atk'){ let f3=path.join(__dirname,'commands/core/fight.js'); if(fs.existsSync(f3)){ delete require.cache[require.resolve(f3)]; return await require(f3).run(sock,msg,[cmd,...args]); } }
}

