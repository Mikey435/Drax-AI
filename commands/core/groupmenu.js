module.exports.run=async(s,m)=>{
await s.sendMessage(m.key.remoteJid,{text:`
╭━━━━━━━━━━━━━━━━╮
 👥 𝗚𝗥𝗢𝗨𝗣𝗘 - 𝗧𝗢𝗨𝗧 𝗗𝗘𝗧𝗔𝗜𝗟𝗘
╰━━━━━━━━━━━━━━━━╯

┏━『 ⚙️ 𝗚𝗘𝗦𝗧𝗜𝗢𝗡 𝗚𝗥𝗢𝗨𝗣𝗘 』
┃ ◦.grouplink → Obtenir lien groupe
┃ ◦.revoke → Révoquer lien
┃ ◦.setname [nom] → Changer nom groupe
┃ ◦.setdesc [desc] → Changer description
┃ ◦.setppgc [image] → Changer photo groupe
┃ ◦.groupopen → Ouvrir groupe (tous parlent)
┃ ◦.groupclose → Fermer (admins seuls)
┃ ◦.welcome on/off → Activer bienvenue
┃ ◦.goodbye on/off → Activer au revoir
┗━━━━━━━━━━━━━━━

┏━『 🛡️ 𝗦𝗘𝗖𝗨𝗥𝗜𝗧𝗘 』
┃ ◦.antilink on/off → Anti-lien
┃ ◦.antispam on/off → Anti-spam
┃ ◦.antibot on/off → Anti-bot
┗━━━━━━━━━━━━━━━

┏━『 👑 𝗔𝗗𝗠𝗜𝗡 𝗚𝗥𝗢𝗨𝗣𝗘 』
┃ ◦.tagall [msg] → Tag tous les membres
┃ ◦.hidetag [msg] → Tag caché
┃ ◦.tagadmin → Tag seulement admins
┃ ◦.promote @user → Rendre admin
┃ ◦.demote @user → Retirer admin
┃ ◦.kick @user → Expulser
┃ ◦.add 224xxx → Ajouter membre
┃ ◦.ban @user → Bannir
┃ ◦.unban → Débannir
┃ ◦.mute @user → Muter
┃ ◦.unmute → Démuter
┃ ◦.warn @user → Avertir
┃ ◦.unwarn → Retirer warn
┃ ◦.clear → Vider chat
┃ ◦.delete [rep msg] → Supprimer message
┗━━━━━━━━━━━━━━━

┏━『 📊 𝗜𝗡𝗙𝗢𝗦 』
┃ ◦.groupinfo → Infos groupe
┃ ◦.listonline → Liste en ligne
┃ ◦.staff / .admins → Liste admins
┃ ◦.membres → Nombre membres
┃ ◦.link → Lien groupe
┃ ◦.invite → Inviter
┗━━━━━━━━━━━━━━━

> 32 commandes groupe séparées et détaillées
`},{quoted:m})}
