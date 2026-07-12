module.exports.run=async(s,m)=>{
await s.sendMessage(m.key.remoteJid,{text:`
╭━〘 👑 DRAX NOVA V5.1 • 280+ CMDS 〙━╮
┃ ⏳ Uptime: ${Math.floor(process.uptime()/60)} min
┃ 👑 Owner: Drax | ⚙️ Mode: ${require('../../config').mode}
╰━━━━━━━━━━━━━━━━━━━━━╯

┏━『 📜 TOUS LES MENUS 』━┓

┃ • .allmenu ~ Tout voir en 1 fois (280+)
┃ • .groupmenu ~ Groupe (30 cmds détaillées)
┃ • .adminmenu ~ Admin (20 cmds détaillées)
┃ • .funmenu ~ Fun & Divertissement (50+)
┃ • .gamesmenu ~ Jeux interactifs (12)
┃ • .animemenu ~ Anime (30+)
┃ • .dlmenu ~ Download (18)
┃ • .toolsmenu ~ Outils (20)
┃ • .iamenu ~ IA & Absence (20)
┃ • .ffmenu ~ Free Fire (16)
┃ • .ownermenu ~ Owner
┃ • .ecomenu ~ Economie

┗━━━━━━━━━━━━━━━━━━━━━┛

💡 Chaque menu est détaillé et séparé
> Drax Nova le plus complet 👑
`},{quoted:m})
}

