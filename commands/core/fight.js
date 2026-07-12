// DRAX NOVA V3 - 50 VRAIS PERSOS FULL POUVOIRS + BOSS
let lobbies = global.DRAX_LOBBY || (global.DRAX_LOBBY = {});

const BOSSES = [
  { name: "Antares - Roi Dragon", hp: 15000, atk: 350, power: "Dragon Breath Apocalypse", reward: "Titre Dragon Slayer" },
  { name: "Yhwach - The Almighty", hp: 20000, atk: 450, power: "Voit et change le futur", reward: "Yeux du Roi" },
  { name: "DRAX CORROMPU - BOSS FINAL", hp: 25000, atk: 500, power: "Trou Noir + Big Bang Inverse", reward: "Titre Dieu de Drax" }
];

const CHARACTERS = {
1: { name: "Goku UI", hp: 3200, atk: 280, powers: ["Kamehameha Divin","Genkidama Universel","Ultra Instinct Esquive Auto","Téléportation Instantanée","Hakai"], ultimate: "Kamehameha MUI - Efface l'âme" },
2: { name: "Naruto Baryon", hp: 3100, atk: 270, powers: ["Rasengan Géant","Rasenshuriken Baryon","1000 Clones Kurama","Chakra Baryon - Brûle vie adverse","Frog Kata"], ultimate: "Baryon Barrage - Vole 50% vie max" },
3: { name: "Luffy Gear 5 Joy Boy", hp: 3400, atk: 275, powers: ["Bajrang Gun - Poing taille île","Toon Force - Transforme sol en caoutchouc","Haki des Rois Infini","Gomu Gomu Dawn Rocket","Liberté Totale"], ultimate: "Dawn - Rire qui brise la réalité" },
4: { name: "Ichigo True Bankai", hp: 3100, atk: 280, powers: ["Getsuga Tensho Double","Blut Vene Défense","Gran Rey Cero Getsuga","Horn of Salvation","True Zangetsu Fusion"], ultimate: "Getsuga Jujisho - Fend les dimensions" },
5: { name: "Sung Jinwoo", hp: 3000, atk: 290, powers: ["Domaine du Monarque - 10M ombres","Dague Baruka Poison","Stealth Assassin","Arise - Relève les morts","Échange d'Ombre"], ultimate: "100 Ombres attaquent ensemble" },
6: { name: "Gojo Satoru", hp: 2800, atk: 260, powers: ["Infini - Intouchable","Hollow Purple","Blue attire + Red repousse","Lapse Blue + Reversal Red","Six Eyes Analyse"], ultimate: "Vide Infini - Cerveau frit 0.2s = mort" },
7: { name: "Sukuna 20 Doigts", hp: 2950, atk: 285, powers: ["Dismantle / Cleave tranche espace","Flèche de Feu - Ouvre","Autel Démoniaque","Toile d'Araignée","Black Box"], ultimate: "Fournaise Divine 15M degrés" },
8: { name: "Asta Anti-Magia", hp: 2900, atk: 265, powers: ["Anti-Magie annule tout","Demon Slayer tranche magie","Demon Dweller vole magie","Demon Destroyer efface effet","Ki + Vol"], ultimate: "Anti-Magie Totale - 0 pouvoir adverse 1 tour" },
9: { name: "Deku 100% + Eri", hp: 2850, atk: 260, powers: ["One For All 100% Full Cowl","Fa Jin + Fumée + Flottaison","Blackwhip + Danger Sense","Delaware Smash Air Force","Remontage Eri - se heal"], ultimate: "United States of World Smash" },
10: { name: "Tanjiro Soleil + Nezuko", hp: 2700, atk: 250, powers: ["Hinokami Kagura 13 formes","Souffle de l'Eau + Foudre","Nezuko Blood Burst","Monde Transparent","Lame Rouge Nichirin"], ultimate: "13ème forme - Danse du Dieu Soleil infinie" },
11: { name: "Eren Titan Originel", hp: 3000, atk: 265, powers: ["Titan Originel contrôle Eldiens","Titan Marteau + Titan Assaillant","Durcissement + Cri","Armée de Titans Colossaux","Voie - voit futur"], ultimate: "Grand Terrassement - 10M Titans" },
12: { name: "Levi Ackerman", hp: 2600, atk: 255, powers: ["Lames Tourbillon Supersonique","Tranchage Nuque Titan","Ultra Instinct Ackerman","Spin Slash","Zeke Killer - précision 100%"], ultimate: "Levi vs Beast Titan - 1 sec 50 coups" },
13: { name: "Itachi Susanoo", hp: 2750, atk: 260, powers: ["Tsukuyomi 72h en 1s","Amaterasu flammes noires","Susanoo + Miroir Yata + Totsuka","Izanami boucle infinie","Kotoamatsukami"], ultimate: "Susanoo Complet + Épée de Totsuka scelle l'âme" },
14: { name: "Madara Juubi Jin", hp: 3200, atk: 285, powers: ["Limbo - 4 clones invisibles","Meteor 2x","Susanoo Parfait + Kurama","Rinnegan + Mokuton","Tsukuyomi Infini"], ultimate: "Deux Météorites + Limbo Combo" },
15: { name: "Vegeta Ultra Ego", hp: 3150, atk: 285, powers: ["Hakai Énergie Destruction","Ultra Ego - plus on prend dégâts plus fort","Galick Gun + Final Flash","Big Bang Attack","Esprit Saiyan"], ultimate: "Hakai Ultime - Efface l'existence" },
16: { name: "Zoro Enma / Roi Enfers", hp: 2900, atk: 275, powers: ["Santoryu Ashura 9 sabres","Enma tranche le Haki","Haki des Rois + Vert","Shishi Sonson","Purgatory Onigiri"], ultimate: "Ashura Bakkei Moja no Tawamure - 9 lames enfer" },
17: { name: "Sanji Ifrit Jambe", hp: 2850, atk: 270, powers: ["Ifrit Jambe - Feu bleu 1000°C","Diable Jambe + Haki","Sky Walk + Blue Walk","Hell Memories","Amour Cook - boost si femme dans team"], ultimate: "Boeuf Burst - Coup qui cuit de l'intérieur" },
18: { name: "Killua Godspeed", hp: 2700, atk: 255, powers: ["Godspeed - Vitesse éclair","Thunderbolt - Paralyse","Whirlwind + White Lightning","Assassin - Griffe + poison","Nen Éclair"], ultimate: "Godspeed Ultime - 1000 coups en 1s" },
19: { name: "Gon Adulte - Pacte", hp: 2800, atk: 275, powers: ["Jajanken Pierre ultra","Jajanken Ciseaux lame","Jajanken Papier blast","Pacte Nen - Sacrifie tout","Aura Géante"], ultimate: "Jajanken Ultime Adulte - Montagne rasée" },
20: { name: "Yuji Itadori + Sukuna", hp: 2900, atk: 265, powers: ["Black Flash x10","Divergent Fist","Sukuna Cleave furtif","Force surhumaine + Endurance","Simple Domain"], ultimate: "Black Flash x8 + Dismantle Sukuna" },
21: { name: "Yuta Okkotsu + Rika", hp: 2950, atk: 270, powers: ["Rika Reine Maudite - Stock infini","Copy - Copie pouvoir adverse","Lame fine + Énergie maudite","Discours Envoûtant","Reverse Cursed Technique heal"], ultimate: "Rika Full Manifestation - 5 min invincible" },
22: { name: "Toji Fushiguro", hp: 2850, atk: 275, powers: ["Inverted Spear annule pouvoir","Corps Céleste - 0 énergie maudite","Armes maudites + Nuage vagabond","Sens surhumain","Assassin Sorcier"], ultimate: "Inverted Spear + Split Soul Katana combo" },
23: { name: "Shanks le Roux", hp: 3100, atk: 285, powers: ["Haki des Rois qui casse bateau","Haki Observation tue futur","Kamimusari - tranche divine","Vitesse lumière - coupe Kid en 1 coup","Intimidation Yonko"], ultimate: "Haki du Conquérant Divin - K.O 90% ennemis" },
24: { name: "Mihawk Oeil de Faucon", hp: 3050, atk: 290, powers: ["Kokuto Yoru - Lame noire la plus forte","Slash qui coupe iceberg à 10km","Haki + Observation ultime","Duelliste N°1 mondial","Précision absolue"], ultimate: "Slash Monde - Coupe une île en deux" },
25: { name: "Akainu Magma", hp: 3000, atk: 280, powers: ["Magma Meigou - Poing volcan","Inugami Guren - Chien magma","Ryusei Kazan - Pluie météores magma","Logia intangibilité","Volcan Eruption"], ultimate: "Dai Funka - Éruption qui rase île" },
26: { name: "Aokiji Glace", hp: 2950, atk: 270, powers: ["Ice Age - Gèle océan","Ice Block Pheasant Beak","Ice Ball + Ice Saber","Logia Glace","Faisan + Mamouth glace"], ultimate: "Ice Age - Absolute Zero - Gèle le temps" },
27: { name: "Kaido Dragon Azur", hp: 3600, atk: 300, powers: ["Boro Breath - Souffle destructeur","Forme Dragon + Hybride","Ragnarok - Massue + Haki","Tatsumaki - Tornade coupe montagne","Ivresse - Imprévisible"], ultimate: "Forme Dragon Flame - Souffle qui brûle ciel" },
28: { name: "Big Mom Âme", hp: 3500, atk: 285, powers: ["Soul Pocus - Vole âme","Zeus + Prométhée + Napoléon","Ikoku Sovereignty slash","Haki + Peau dure","Cri Yonko"], ultimate: "Mama Raid - Combo Zeus Prométhée" },
29: { name: "Barbe Noire 2 Fruits", hp: 3100, atk: 285, powers: ["Yami Yami - Annule pouvoir + gravité","Gura Gura - Tremblement terre/mer","Black Hole + Libération","Vole pouvoir des morts","2 Fruits du Démon"], ultimate: "Black Hole + Tremblement - Effondre l'espace" },
30: { name: "Trafalgar Law Awakening", hp: 2850, atk: 270, powers: ["ROOM + Shambles téléporte","K-Room + Anesthesia","Shock Wille - Électrocute interne","Puncture Wille - Perce tout","Scalpel + Injection"], ultimate: "Puncture Wille - Lame qui traverse île + coeur" },
31: { name: "Saitama One Punch", hp: 4000, atk: 320, powers: ["One Punch Normal","Consecutive Normal Punches","Saut Lune-Terre","Éternuement rase Jupiter","Résistance infinie"], ultimate: "Serious Punch² - Détruit galaxie (retient)" },
32: { name: "Garou Cosmique", hp: 3400, atk: 310, powers: ["Copie pouvoir + évolution","Gamma Ray Burst - Explosion gamma","Nuclear Fission","Failles dimensionnelles","Mode Saitama"], ultimate: "Gamma Ray Burst - Explosion réelle trou noir" },
33: { name: "Ichigo Vasto Lorde", hp: 3000, atk: 285, powers: ["Cero Oscuras noir","Sonido + Hierro","Régénération instant","Lanza + Getsuga noir","Rugissement Vasto"], ultimate: "Cero Oscuras + Getsuga Noir fusion" },
34: { name: "Kenpachi Bankai Démon", hp: 3300, atk: 295, powers: ["Nozarashi tranche espace","Bankai Démon peau rouge","Force brute infinie","Coupe météorite sans effort","Soif de sang - boost dégâts"], ultimate: "Bankai tranche - Coupe tout même concept" },
35: { name: "Toshiro Adulte Bankai", hp: 2850, atk: 265, powers: ["Daiguren Hyorinmaru adulte","Flash Freeze - Gèle 4 éléments","Hyoten Hyakkaso - 100 fleurs glace","Glace qui annule pouvoir","Ailes de glace + Vol"], ultimate: "Shikai Hyoketsu - Gèle au zéro absolu 4 sec" },
36: { name: "Meliodas Roi Démon", hp: 3100, atk: 280, powers: ["Full Counter - renvoie magie x10","Hellblaze + God Thunder","Trillion Dark","Mode Assaut + Marque démon","Contre Vanish"], ultimate: "Trillion Dark + Full Counter 1000x" },
37: { name: "Escanor The One Ultimate", hp: 3000, atk: 320, powers: ["Sunshine midi = invincible","Cruel Sun - Mini soleil","Divine Sword Escanor","Pride - boost si midi","Axe Rhitta feu"], ultimate: "The One Ultimate - 1 min Dieu Soleil 100k°C" },
38: { name: "Ban Immortel + Hunter Fest", hp: 3800, atk: 260, powers: ["Immortalité - heal infini","Hunter Fest - Vole force adverse","Snatch + Fox Hunt","Zero Sign - Indétectable","Cou de l'Immortel"], ultimate: "Hunter Fest - Vole 100% stats ennemis" },
39: { name: "Giorno Giovanna GER", hp: 2900, atk: 300, powers: ["Gold Experience - Donne vie","Crée organes + animaux","Return To Zero - Annule toute action","Volonté infinie","Piège vie"], ultimate: "GER - Tu n'atteindras jamais la vérité - Mort infinie" },
40: { name: "Jotaro Star Platinum", hp: 2850, atk: 275, powers: ["Star Platinum - Force + Précision","Time Stop 5 sec","Ora Ora Barrage","Star Finger + Zoom oeil","Haki Joestar"], ultimate: "Time Stop + Ora Ora 100 coups arrêt temps" },
41: { name: "Dio Over Heaven", hp: 3100, atk: 295, powers: ["The World Over Heaven - Réécrit réalité","Time Stop 10 sec + Dieu","Laser yeux + Gèle","Régénération vampire","Charisme démoniaque"], ultimate: "Reality Overwrite - Réécrit que tu es mort" },
42: { name: "Guts Berserker Armor", hp: 3200, atk: 285, powers: ["Dragonslayer tranche démon","Berserker Armor - Douleur off + boost","Canon bras + Arbalète","Épée qui coupe causalité future","Rage infinie"], ultimate: "Berserker Rage - 1 min invincible + 300% dégâts" },
43: { name: "Griffith Femto", hp: 3000, atk: 305, powers: ["Reality Warp - Plie espace","Cause + Destin - Contrôle destin","Ailes ténèbres + Téléport","Corruption mentale","Dieu de la Main"], ultimate: "Monde de Fantasia - Fusion monde astral/réel" },
44: { name: "Alucard Level 0", hp: 3800, atk: 290, powers: ["Level 0 - Armée 3M âmes","Intangibilité + Régénération","Baskerville + Jackal + Canon","Schrödinger - Existe partout/nulle part","Immortalité quantique"], ultimate: "Level 0 Release - 3.424.867 âmes attaquent" },
45: { name: "Ainz Ooal Gown", hp: 2900, atk: 285, powers: ["The Goal Of All Life Is Death - Tue même immortel","Time Stop + True Death","Black Hole + Meteor","Staff of Ainz + 700 sorts","Invocation + Armée morts"], ultimate: "TGOALID + Cry of the Banshee - Tue tout 300m" },
46: { name: "Anos Voldigoad", hp: 3500, atk: 310, powers: ["Venuzdonoa détruit logique","Yeux Destruction Chaotique","<Sargeld> + <Gilieriam>","Ressuscite + Temps + Espace","Source destruction"], ultimate: "Venuzdonoa - Même immortalité meurt définitivement" },
47: { name: "Rimuru Tempest Dieu", hp: 3600, atk: 315, powers: ["Beelzebuth dévore tout","Raphael Roi Sagesse + Prédiction","Turn Null énergie création univers","Clone + Téléport + Barrière","Veldora + Shizu pouvoir"], ultimate: "Turn Null - Recrée univers sans ennemi" },
48: { name: "Veldora Tempest Dragon", hp: 3800, atk: 300, powers: ["Storm Breath - Ouragan nucléaire","Clone + Télépathie","Analyse + Mémoire infinie","Barrière + Régénération","Kamehameha Dragon"], ultimate: "Veldora Storm - Ouragan qui rase continent" },
49: { name: "Drax Nova Créateur", hp: 5000, atk: 350, powers: ["Nova Explosion - Big Bang miniature","Code Source - Réécrit règles combat","Copie Pouvoir - Vole 1 pouvoir adverse","Bouclier Nova invincible 1 tour","Boost Team +50%"], ultimate: "NOVA FINALE - 9999 dégâts à tous + heal full team" },
50: { name: "The Apostle d Sadeus", hp: 4800, atk: 340, powers: ["Jugement Divin Lumière Éternelle purifie","Ailes Séraphin 6 ailes vitesse lumière","Épée de Sadeus tranche destin","Bénédiction ressuscite allié full HP","Aura Sacrée - Dégâts +30% vs Boss"], ultimate: "Apocalypse 7:12 - Lumière efface ténèbres - One Shot Boss <30% HP" }
};

module.exports.run = async (sock, msg, args) => {
  const jid = msg.key.remoteJid;
  let senderId = msg.key.fromMe? sock.user.id.split(':')[0].split('@')[0]+'@s.whatsapp.net' : (msg.key.participant || msg.key.remoteJid);
  if(msg.key.fromMe && sock.user.id.includes('@lid')) senderId = msg.key.participant || jid;
  const sender = senderId; const sName = msg.pushName || sender.split('@')[0];
  if(!lobbies[jid]) lobbies[jid] = { players: [], boss: null };
  let lobby = lobbies[jid];
  let sub = (args[0]||'').toLowerCase();

  if(sub==='create'){ lobbies[jid]={players:[],boss:null}; return sock.sendMessage(jid,{text:`⚔️ *LOBBY RESET!*\n.fight join 1-50\n.fight powers 1 pour voir pouvoirs\n.fight boss pour boss coop`},{quoted:msg}); }
  if(sub==='join'){
    if(lobby.players.find(p=>p.jid===sender)) return sock.sendMessage(jid,{text:`⚠️ @${sName} déjà dedans!`,mentions:[sender]},{quoted:msg});
    let id = parseInt(args[1])|| Math.floor(Math.random()*50)+1; if(id<1||id>50) id=50;
    let c = CHARACTERS[id];
    lobby.players.push({ jid: sender, name: sName, char: {...c}, curHp: c.hp });
    return sock.sendMessage(jid,{text:`✅ @${sName} rejoint!\n🎭 *${c.name}*\n❤️ ${c.hp} | ⚔️ ${c.atk}\n💥 *5 Pouvoirs:*\n- ${c.powers.join("\n- ")}\n🔥 *ULTIME:* ${c.ultimate}\n\n👥 ${lobby.players.length}/50`,mentions:[sender]},{quoted:msg});
  }
  if(sub==='powers' || sub==='pouvoirs'){
    let id = parseInt(args[1])||1; if(id<1||id>50) id=1; let c=CHARACTERS[id];
    return sock.sendMessage(jid,{text:`*${id}. ${c.name} - FICHE COMPLÈTE*\n❤️ ${c.hp} | ⚔️ ${c.atk}\n\n*5 POUVOIRS:*\n${c.powers.map((p,i)=>`${i+1}. ${p}`).join("\n")}\n\n*ULTIME:*\n${c.ultimate}\n\nPour choisir:.fight join ${id}`},{quoted:msg});
  }
  if(sub==='list'){
    let txt=`*📜 50 PERSONNAGES - LISTE COMPLÈTE*\nTape.fight powers [num] pour détails\n\n`;
    for(let i=1;i<=50;i++){ txt+=`*${i}.* ${CHARACTERS[i].name}\n`; }
    txt+=`\nEx:.fight powers 49 pour voir Drax Nova\n.fight join 50 pour The Apostle`;
    return sock.sendMessage(jid,{text:txt},{quoted:msg});
  }
  if(sub==='players'){ if(!lobby.players.length) return sock.sendMessage(jid,{text:"Lobby vide"},{quoted:msg}); let t=`*👥 LOBBY (${lobby.players.length})*\n`; lobby.players.forEach((p,i)=>t+=`${i+1}. @${p.jid.split('@')[0]} = ${p.char.name} [${p.curHp}/${p.char.hp}]\n`); return sock.sendMessage(jid,{text:t,mentions:lobby.players.map(p=>p.jid)},{quoted:msg}); }
  if(sub==='boss'){
    if(!lobby.players.length) return sock.sendMessage(jid,{text:"Fais.fight join d'abord"},{quoted:msg});
    let b = BOSSES[Math.floor(Math.random()*BOSSES.length)]; lobby.boss={...b,curHp:b.hp};
    return sock.sendMessage(jid,{text:`🐲 *BOSS: ${b.name}*\n❤️ ${b.hp} | ⚔️ ${b.atk}\n💀 ${b.power}\n\nTEAM: ${lobby.players.map(p=>p.char.name).join(" + ")}\n\nTape *.fight atk* pour attaquer ensemble!`},{quoted:msg});
  }
  if(sub==='atk' || sub==='attack'){
    if(!lobby.boss) return sock.sendMessage(jid,{text:"Pas de boss!.fight boss"},{quoted:msg});
    let p = lobby.players.find(x=>x.jid===sender); if(!p) return sock.sendMessage(jid,{text:"Tu n'es pas dans le lobby!"},{quoted:msg});
    let power = p.char.powers[Math.floor(Math.random()*p.char.powers.length)];
    let dmg = Math.floor(p.char.atk + Math.random()*150); if(Math.random()<0.2) dmg*=2;
    lobby.boss.curHp-=dmg;
    let txt=`⚔️ @${sName} [${p.char.name}] utilise *${power}* [-${dmg}]\nBoss ${lobby.boss.name}: ${Math.max(0,lobby.boss.curHp)}/${lobby.boss.hp}\n`;
    if(lobby.boss.curHp<=0){ txt+=`🎉 *BOSS VAINCU!* Récompense: ${lobby.boss.reward}`; lobbies[jid]={players:[],boss:null}; return sock.sendMessage(jid,{text:txt,mentions:[sender]},{quoted:msg}); }
    let target = lobby.players[Math.floor(Math.random()*lobby.players.length)]; let bdmg = Math.floor(lobby.boss.atk/2 + Math.random()*80); target.curHp-=bdmg; txt+=`👹 Boss riposte sur @${target.jid.split('@')[0]} [-${bdmg}] HP:${Math.max(0,target.curHp)}`;
    if(target.curHp<=0){ txt+=`\n💀 @${target.jid.split('@')[0]} K.O!`; lobby.players=lobby.players.filter(x=>x.jid!==target.jid); }
    return sock.sendMessage(jid,{text:txt,mentions:lobby.players.map(x=>x.jid).concat(sender)},{quoted:msg});
  }
  return sock.sendMessage(jid,{text:`*DRAX FIGHT V3 - 50 PERSOS*\n\n.fight list - voir les 50 noms\n.fight powers 1 - voir les 5 pouvoirs + ultime de Goku\n.fight powers 49 - voir Drax Nova\n.fight join 50 - prendre The Apostle\n.fight boss - lancer boss coop\n.fight atk - attaquer boss`},{quoted:msg});
};
