exports.run=async(s,m)=>{await s.sendMessage(m.key.remoteJid,{text:'♔ *PING* activé! Fonction complète dans la V3.1 Boss 🔥'},{quoted:m})}
module.exports.run = async (s,m) => {
 await s.sendMessage(m.key.remoteJid, {text: "✅ PONG! Le bot reçoit bien les messages Chef 👑"}, {quoted:m});
}
