//Subscribe Adiosbotz lah Kakð
//Udah No Enc Masak Ga Subscribeð
//Yang Ga subscribe Nanti Sc Nya Error:v
//áBOT By Adios 
//Base Ori punya Dappa(DEFFBOTz)
//áááááááááááááááá//
let {WAConnection: _WAConnection, MessageType, Presence, MessageOptions,	Mimetype, WALocationMessage, WAMessageProto, ReconnectMode,	ProxyAgent, ChatModification, GroupSettingChange, WA_MESSAGE_STUB_TYPES, WA_DEAFULT_EPHEMERAL, waChatKey, mentionedJid, processTime, prepareMessageFromContent, relayWAMessage, Browsers	} = require("@adiwajshing/baileys")
let moment = require("moment-timezone")
let speed = require('performance-now')
let { EmojiAPI } = require("emoji-api")
let phoneNum = require('awesome-phonenumber')
let emoji = new EmojiAPI()
let { spawn, exec, execSync } = require("child_process")
let ffmpeg = require('fluent-ffmpeg')
let twitterGetUrl = require("twitter-url-direct")
let googleImage = require('g-i-s')
let brainly = require('brainly-scraper')
let fetch = require('node-fetch');
let ggs = require('google-it')
let request = require('request');
let emojidl = new EmojiAPI()
let Math_js = require('mathjs')
let crypto = require('crypto')
let yts = require( 'yt-search')
let premium = require("./lib/premium");
let ms = require('parse-ms')
let toMs = require('ms')
let axios = require("axios")
let fs = require("fs-extra")
let util = require('util')
let got = require("got");
let qrcodes = require('qrcode');
let imgbb = require('imgbb-uploader');
let os = require('os');
let fbdl = require('fb-video-downloader');
//<------------------------------------------------------------------------------->/
let Exif = require('./lib/exif');
let exif = new Exif();
var kuis = false
hit_today = []
ky_ttt = []
tttawal= ["0ï¸â£","1ï¸â£","2ï¸â£","3ï¸â£","4ï¸â£","5ï¸â£","6ï¸â£","7ï¸â£","8ï¸â£","9ï¸â£"]
let control = JSON.parse(fs.readFileSync('./setting.json'))
owner = `${control.NomorOwner}`
banChats = false;
LolApi = "Deffbotz" //Ganti sama Api
target = `${control.NomorOwner}@s.whatsapp.net`//Ganti jadi nomor lu
//<------------------------------------------------------------------------------->/
let { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
let { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
let { color, bgcolor } = require('./lib/color')
let { mess } = require('./message/mess')
let hx = require('hxz-api')
let { dungeon } = require('./lib/rpg/dungeon.js') 
let { msgFilter } = require('./lib/antispam')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { limitCount, gcount, gamewaktu} = require('./setting.json') 
let { cmdadd } = require('./lib/totalcmd.js')
let { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
let { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
let { mediafireDl } = require('./lib/mediafire.js')
let { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
let { y2mateA, y2mateV } = require('./lib/y2mate')
let { ythd } = require('./lib/ytdl')

//<------------------------------------------------------------------------------->/
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/bot/user.json'))
//<------------------------------------------------------------------------------->/
let _sewa = require("./lib/sewa");
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let level = require("./lib/level");
let atm = require("./lib/atm");
//<------------------------------------------------------------------------------->/
let fake = fs.readFileSync ('./gambar/deff.jpg','base64')
let afk = require("./lib/afk");
let { recognize } = require('./lib/ocr')
let reminder = require ('./lib/reminder') 
//<------------------------------------------------------------------------------->/
let audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
let stick = fs.readFileSync("./database/result/randomstic.json");
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let event = JSON.parse(fs.readFileSync('./lib/data/event.json'))
let _user = JSON.parse(fs.readFileSync('./database/user.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
let bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let banc = JSON.parse(fs.readFileSync('./database/banchat.json'))
let limit = JSON.parse(fs.readFileSync('./lib/bot/limit.json'))
let balance = JSON.parse(fs.readFileSync('./lib/bot/balance.json'));
let _reminder = JSON.parse(fs.readFileSync('./database/reminder.json'));
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'));
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
//<------------------------------------------------------------------------------->/
let family100 = [];
let tebaklirik =  [];
let siapaaku = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
//<------------------------------------------------------------------------------->/
let headshot = fs.readFileSync('./media/headshot.jpg')
let fakeimage = fs.readFileSync ('./gambar/deff.jpg')
let thumb = fs.readFileSync("./gambar/thumb.jpg");
//<------------------------------------------------------------------------------->/
let addCmd = (id, command) => {
    let obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}
//<------------------------------------------------------------------------------->/
let getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
//<------------------------------------------------------------------------------->/
let isFiltered = (from) => !!usedCommandRecently.has(from)

let addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) //5 detik bang
}
//<------------------------------------------------------------------------------->/

let getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}
//<------------------------------------------------------------------------------->/
let checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//<------------------------------------------------------------------------------->/
module.exports = deff = async (deff, mek) => {
	try {
        if (!mek.hasNewMessage) return
       mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		let { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        let tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      	let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
	     let hour_now = moment().format('HH:mm:ss')
		let deff1 = ['1','2','3','4','5','6','7','8','9']
          let deff2 = ['1','2','3','4','5','6','7','8','9'] 
          let deff3 = deff1[Math.floor(Math.random() * (deff1.length))]
          let deff4 = deff2[Math.floor(Math.random() * (deff2.length))] 
		let type = Object.keys(mek.message)[0]        
          let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
          let prefix = /^[Â°!â¢ÏÃ·ÃÂ¶âÂ£Â¢â¬Â¥Â®â¢=|~#%^&.?/\\Â©^z+*,;]/.test(cmd) ? cmd.match(/^[Â°!â¢ÏÃ·ÃÂ¶âÂ£Â¢â¬Â¥Â®â¢=|~#%^&.?/\\Â©^z+*,;]/gi) : '#'
          var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''		
          body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
          budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let args = body.trim().split(/ +/).slice(1)
	     let v = args.join(' ')
		hit_today.push(command)
		let arg = body.substring(body.indexOf(' ') + 1)
		let messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		let ar = args.map((v) => v.toLowerCase())
		let argz = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		let totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd       
          let c = args.join(' ')
          let q = args.join(' ')
          let Rfake = fs.readFileSync ('./gambar/thumb.jpg','base64')
          pe = 'wa.me/6285707042602?utm_medium=copy_'
          faketeks = 'Â©Creator Adioss'
//<------------------------------------------------------------------------------->/
          let botNumber = deff.user.jid
          let ownerNumber = `${control.NomorOwner}`
		let ownerName = `${control.NamaOwner}`
		let botName = `${control.NamaBot}`
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? deff.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		let totalchat = await deff.chats.all()
		let groupMetadata = isGroup ? await deff.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let isClaimOn = _claim.includes(sender)
          let conts = mek.key.fromMe ? deff.user.jid : deff.contacts[sender] || { notify: jid.replace(/@.+/, '') }
          let pushname = mek.key.fromMe ? deff.user.name : conts.notify || conts.vname || conts.name || '-'
          let mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
          let mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
          let mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
	     let bio_nya = await deff.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
          mention != undefined ? mention.push(mentionByreply) : []
          let mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	     players1 = []
	     players2 = []
	     gilir = []
	     for (let t of ky_ttt){
	     idttt.push(t.id)
	     players1.push(t.player1)
	     players2.push(t.player2)
	     gilir.push(t.gilir)
}

//<------------------------------------------------------------------------------->/

	   let isTTT = isGroup ? idttt.includes(from) : false
	   isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        let isOwner = ownerNumber.includes(sender)                
        let isSimi = samih.includes(from)
        let isAfkOn = afk.checkAfkUser(sender, _afk)
        let isWelkom = isGroup ? welkom.includes(from) : false
        let isAntiLink = isGroup ? antilink.includes(from) : false
        let isPremium = premium.checkPremiumUser(sender, _premium)
        let isAntivirtex = isGroup ? antivirtex.includes(from) : false;
        let isEventon = isGroup ? event.includes(from) : false
        let isBanned = ban.includes(sender)
        let isBanchat = banc.includes(from)
        let isPetualang = checkPetualangUser(sender)
        let isAntidel = isGroup ? antidel.includes(from) : false;
        let isLevelingOn = isGroup ? _leveling.includes(from) : true
//<------------------------------------------------------------------------------->/

        let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 1010101,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `ã	BâOâT Wâ¢HAâ¢TSAâ¢PP   ã	`, orderTitle: 'deffpratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `ã	BOT WHATSAPP   ã	`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
        let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`ã	BOT WHATSAPP   ã	`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ã	BOT WHATSAPP   ã	`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `ã	BOT WHATSAPP   ã	`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`ã	BOT WHATSAPP   ã	`, "h": `Hmm`,'seconds': '99999', 'caption': `ã	BOT WHATSAPP   ã	`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `ã	BOT WHATSAPP   ã	`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
	   let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `@${sender.split('@')[0]}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;@BY DEFF,;;;\nFN:@BY DEFF,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`), thumbnail: fs.readFileSync(`./gambar/thumb.jpg`),sendEphemeral: true}}}
	   var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
	   var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
//<------------------------------------------------------------------------------->/
let fakeitem = (teks) => {
            deff.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./gambar/thumb.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`ã	BOT WHATSAPP   ã	`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
//<------------------------------------------------------------------------------->/
//punya nya Zeroyt\\
            const sotoy = ['ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð',		'ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð']
            const sotoy2 = ['ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð',		'ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð']
            const sotoy1 = ['ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð',		'ð : ð : ð','ð : ð : ð','?? : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð','ð : ð : ð']
            const sotoy3 = ['ð : ð : ð','ð : ð : ð','ð : ð : ð']
            const buruh1 = ['ð³','ð¦','ð¬','ð','ð','ð ','ð¦','ð¦','ð¦','ð']
            const buruh2 = ['ð','ð¦','ð¿','ð','ð','ð','ð','ð','ðº','ð¦©']
            const buruh3 = ['ð¦','ð·','ð','ð','ð¦','ð¦','ð','ð§','ð¦','ð¦']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
//<------------------------------------------------------------------------------->/
    let game = require('./lib/game' );
    game.cekWaktuTG(deff, tebakgambar) 
    game.cekWaktuSA(deff, siapaaku)
    game.cekWaktuFam(deff, family100)
    game.cekWaktuTK(deff, tebakkata)
    game.cekWaktuTA(deff, tebakanime)
    game.cekWaktuTU(deff, tebakkimia)
    game.cekWaktuTL(deff, tebaklirik)
    game.cekWaktuTB(deff, tebakbendera)
 //<------------------------------------------------------------------------------->/
   /*[Button Function]*/
       
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        let gcount = control.gcount
        
        let listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = deff.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return deff.relayWAMessage(po, {waitForAck: true})
        }
        
        let isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        
        let reply2 = (teks) => {
            deff.sendMessage(from, teks, text, {quoted:ftroli})
        }
        let reply1 = (teks) => {
			deff.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6285954993954`}}})
		}
		let reply = (teks) => {
            deff.sendMessage(from, teks, text, {quoted: mek})
        }
		let fakestatus = (teks) => {
            deff.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `[DÍ«Í«ÍÌÌÌÌÍÌ¦Ì¤ÍÍÍ¡Ì¡ÍEÍÍ«Í£ÌÌÌÌÌÌ³ÍÌ Ì¥Ì´ÒÌFÍÍ®Ì¿Í§Í­ÍÍÌ­Ì­ÍÌÌ¹ÍÍÌ´FÍ¤Í«ÌÍ¨Í¬ÌÌ½Ì¯ÍÌ®Ì»Ì¼Ì¸Ì¡ÒBÍÍÌÌÍÌÌÌ©Ì¯ÌÍÌÍ Ì¡Ì¡OÌ½ÌÌÍ©Í§ÌÍÍÌÌ©Ì£ÍÌ¸Ì§ÌµTÌÍ«ÌÍÌÍ¥Í­ÌÍÌ¤Ì¹ÍÍÍÍzÌÌÍÍÍÍªÌ¿Ì±Ì¦Ì©Ì¬ÍÍÌ§Ò]`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`gambar/thumb.jpg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        let sendMess = (hehe, teks) => {
           deff.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? deff.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : deff.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        let sendText = (from, text) => {
           deff.sendMessage(from, text, MessageType.text)
        }
        let textImg = (teks) => {
           return deff.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')})
        }
        let freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./gambar/thumb.jpg')
        }}}
       let math = (teks) => {
           return Math.floor(teks)
       }
       let kick = function(from, orangnya){
	       for (let i of orangnya){
	       deff.groupRemove(from, [i])
        }
        }
       let kickMember = async(id, target = []) => {
           let group = await deff.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = deff.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await deff.groupRemove(to, [i])
        } else {
           await deff.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       let add = function(from, orangnya){
	       deff.groupAdd(from, orangnya)
}
       let sendKontak = (from, nomor, nama, org = "") => {
	       let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       deff.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
      let hideTag = async function(from, text){
	       let anu = await deff.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       deff.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('gambar/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
//<------------------------------------------------------------------------------->/
let huluh = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "u") 
return text
}
let holoh = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "o") 
return text
}
let hilih = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "i") 
return text
}
let heleh = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "e") 
return text
}
let halah = (text) => {
let K = new RegExp("[AIUEOaiueo]", "g")
text = text.replace(K, "a") 
return text
}
//<------------------------------------------------------------------------------->/
let sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      let kma = vid1;
      let mhan = await deff.prepareMessage(from, kma, video);
      let buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      deff.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
//<------------------------------------------------------------------------------->/
let sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
	kma = doc1
	mhan = await deff.prepareMessage(from, media, document, kma)
	let buttonMessages = {
	documentMessage: mhan.message.documentMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: "DOCUMENT"
	}
	deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
      let sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           deff.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
//<------------------------------------------------------------------------------->/
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return deff.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }        
        let sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await deff.prepareMessage(from, kma, image)
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//<------------------------------------------------------------------------------->/
let sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      deff.sendMessage(
        id,  
        buttonMessage, 
        MessageType.buttonsMessage,
        {
        caption: '${NamaBot}',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fkontak,
			sendEphemeral: true 
			})
			}
//<------------------------------------------------------------------------------->/
let sendFileFromStorage = (path, type, options) => {
        deff.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }       
//<------------------------------------------------------------------------------->/
let sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           let fn = Date.now() / 10000;
           let filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           deff.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
//<------------------------------------------------------------------------------->/
let sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
deff.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
deff.sendMessage(from, hasil, type, options).catch(e => {
deff.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
//<------------------------------------------------------------------------------->/
let sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       deff.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       deff.sendMessage(from, hasil, type, options).catch(e => {
	       deff.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
//<------------------------------------------------------------------------------->/
let promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await deff.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = deff.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           let res = await deff.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[â VERIFIED]'
			}
}
//<------------------------------------------------------------------------------->/
let demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await deff.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = deff.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           let res = await deff.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
//<------------------------------------------------------------------------------->/
let authorname = deff.contacts[from] != undefined ? deff.contacts[from].vname || deff.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          let json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         let littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         let bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       let buf2 = Buffer.from(last, "hex")	
	   let buf3 = Buffer.from(bytes)	
	   let buf4 = Buffer.from(JSON.stringify(json))	
	   let buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
//<------------------------------------------------------------------------------->/
let jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
	try {
		pporang = await deff.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }       
	  let ofrply = await getBuffer(pporang)	       
       let time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ðGood Night'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
//<------------------------------------------------------------------------------->/
let levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Newbie ã¡'
        if (levelRole <= 2) {
            role = 'Newbie ã¡'
        } else if (levelRole <= 4) {
            role = 'ðððððð 1 âÂ¹'
        } else if (levelRole <= 6) {
            role = 'ðððððð 2 âÂ²'
        } else if (levelRole <= 8) {
            role = 'ðððððð 3 âÂ³'
        } else if (levelRole <= 10) {
            role = 'ðððððð 4 ââ´'
        } else if (levelRole <= 12) {
            role = 'ð´ðððð 1 âÂ¹'
        } else if (levelRole <= 14) {
            role = 'ð´ðððð 2 âÂ²'
        } else if (levelRole <= 16) {
            role = 'ð´ðððð 3 âÂ³'
        } else if (levelRole <= 18) {
            role = 'ð´ðððð 4 ââ´'
        } else if (levelRole <= 20) {
            role = 'ð´ðððð 5 ââµ'
        } else if (levelRole <= 22) {
            role = 'ð¼ððððð 1 â°Â¹'
        } else if (levelRole <= 24) {
            role = 'ð¼ððððð 2 â°Â²'
        } else if (levelRole <= 26) {
            role = 'ð¼ððððð 3 â°Â³'
        } else if (levelRole <= 28) {
            role = 'ð¼ððððð 4 â°â´'
        } else if (levelRole <= 30) {
            role = 'ð¼ððððð 5 â°âµ'
        } else if (levelRole <= 32) {
            role = 'ð¶ðððð ð¼ððððð 1 â£Â¹'
        } else if (levelRole <= 34) {
            role = 'ð¶ðððð ð¼ððððð 2 â£Â²'
        } else if (levelRole <= 36) {
            role = 'ð¶ðððð ð¼ððððð 3 â£Â³'
        } else if (levelRole <= 38) {
            role = 'ð¶ðððð ð¼ððððð 4 â£â´'
        } else if (levelRole <= 40) {
            role = 'ð¶ðððð ð¼ððððð 5 â£âµ'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 áÂ¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 áÂ²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 áÂ³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 áâ´'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 áâµ'
        } else if (levelRole <= 52) {
            role = 'ð¶ðððð ð¼ððððð 1 áÂ¹'
        } else if (levelRole <= 54) {
            role = 'ð¶??ððð ð¼ððððð 2 áÂ²'
        } else if (levelRole <= 56) {
            role = 'ð¶ðððð ð¼ððððð 3 áÂ³'
        } else if (levelRole <= 58) {
            role = 'ð¶ðððð ð¼ððððð 4 áâ´'
        } else if (levelRole <= 60) {
            role = 'ð¶ðððð ð¼ððððð 5 áâµ'
        } else if (levelRole <= 62) {
            role = 'ð´ððð 1 â¢Â¹ '
        } else if (levelRole <= 64) {
            role = 'ð´ððð 2 â¢Â²'
        } else if (levelRole <= 66) {
            role = 'ð´ððð 3 â¢Â³'
        } else if (levelRole <= 68) {
            role = 'ð´ððð 4 â¢â´'
        } else if (levelRole <= 70) {
            role = 'ð´ððð 5 â¢âµ'
        } else if (levelRole <= 72) {
            role = 'ð»ððððð 1 â¢â¢Â¹'
        } else if (levelRole <= 74) {
            role = 'ð»ððððð 2 â¢â¢Â²'
        } else if (levelRole <= 76) {
            role = 'ð»ððððð 3 â¢â¢Â³'
        } else if (levelRole <= 78) {
            role = 'ð»ððððð 4 â¢â¢â´'
        } else if (levelRole <= 80) {
            role = 'ð»ððððð 5 â¢â¢âµ'
        } else if (levelRole <= 82) {
            role = 'ð¼ð¢ðððð 1 â·Â¹'
        } else if (levelRole <= 84) {
            role = 'ð¼ð¢ðððð 2 â·Â²'
        } else if (levelRole <= 86) {
            role = 'ð¼ð¢ðððð 3 â·Â³'
        } else if (levelRole <= 88) {
            role = 'ð¼ð¢ðððð 4 â·â´'
        } else if (levelRole <= 90) {
            role = 'ð¼ð¢ðððð 5 â·âµ'
        } else if (levelRole <= 92) {
            role = 'ð¼ð¢ðððð ð¶ðððð¢ 1 â·â·Â¹'
        } else if (levelRole <= 94) {
            role = 'ð¼ð¢ðððð ð¶ðððð¢ 2 â·â·Â²'
        } else if (levelRole <= 96) {
            role = 'ð¼ð¢ðððð ð¶ðððð¢ 3 â·â·Â³'
        } else if (levelRole <= 98) {
            role = 'ð¼ð¢ðððð ð¶ðððð¢ 4 â·â·â´'
        } else if (levelRole <= 100) {
            role = 'ð¼ð¢ðððð ð¶ðððð¢ 5 â·â·âµ'
            }
//<------------------------------------------------------------------------------->/
if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isCmd ) {
try {
let checkATM = atm.checkATMuser(sender, _uang)
if (checkATM === undefined) atm.addATM(sender, _uang)
let uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
atm.addKoinUser(sender, uangsaku, _uang)
let currentLevel = level.getLevelingLevel(sender, _level)
let amountXp = Math.floor(Math.random() * (5 - 10 + 1) + 10)
let requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
level.addLevelingXp(sender, amountXp, _level)
if (requiredXp <= level.getLevelingXp(sender, _level)) {
level.addLevelingLevel(sender, 1, _level)
let userLevel = level.getLevelingLevel(sender, _level)
let fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
//Ngambil Punya DEFFBOTZZ(dapa)
D =`
â­âª *ã ððððð ðð ã* 
â°ââââââââââââââââ®  
â­ââââââââââââââââ¯
ââ±ð  *ðµððð :* ${pushname}
ââ±ð *ð¿ð· :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}
ââ±ð *ð³ðððð :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} ð 
ââ±ð *ð¹ððð*: *${role}*
â°ââââââââââââââââ¯`
sendButMessage(from, D, `SELAMAT ANDA TELAH NAIK LEVELð¥³`, [
             {              
                buttonId: `${prefix}menu`,
                buttonText: {
                  displayText: `MENU`,
                },
                type: 1,
              },
            ]);           
} 
} catch (err) {
console.error(err)
}
}
//<------------------------------------------------------------------------------->/
let Levelnye = level.getLevelingLevel(sender, _level)
let Xpluu = level.getLevelingXp(sender, _level)
let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
//<------------------------------------------------------------------------------->/
 let getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

let addRegisterUser = (userid, sender, age, bio, time) => {
	let obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

let createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

let cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			let isUser = cekUser(sender)
//<------------------------------------------------------------------------------->/
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isStickers = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

//<------------------------------------------------------------------------------->/
let sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					deff.sendMessage(to, media, sticker, {quoted:fkontak})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
//<------------------------------------------------------------------------------->/
let chats =
type === 'conversation' && mek.message.conversation
? mek.message.conversation
: type == 'imageMessage' && mek.message.imageMessage.caption
? mek.message.imageMessage.caption
: type == 'videoMessage' && mek.message.videoMessage.caption
? mek.message.videoMessage.caption
: type == 'extendedTextMessage' && mek.message.extendedTextMessage.text
? mek.message.extendedTextMessage.text
: type == 'buttonsResponseMessage' && mek.message[
type].selectedButtonId
? mek.message[type].selectedButtonId
: type == 'stickerMessage' &&
getCmd(mek.message[
type].fileSha256.toString(
'base64')) !== null &&
getCmd(mek.message[
type].fileSha256.toString(
'base64')) !== undefined
? getCmd(mek.message[
type].fileSha256.toString(
'base64'))
: '';
//=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã==Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã==Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã==Ã=Ã=Ã=Ã=Ã=Ã=Ã=Ã=
if (game.isTebakLirik(from, tebaklirik)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, tebaklirik))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))) {
  var htgml = randomNomor(100)
  addBalance(sender, htgml, balance)
  b =`GAME TEBAK LIRIK\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgml}\nIngin bermain lagi? kirim *${prefix}tebaklirik*`
return sendButMessage(from, b, `Fix Tau Lagunya:v`, [
              {              
                buttonId: `${prefix}tebaklirik`,
                buttonText: {
                  displayText: `main Lagi`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}gamemenu`,
                buttonText: {
                  displayText: `BACK`,
                },
                type: 1,
              },
            ]);           
  tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}
    }
if (game.isSiapaAku(from, siapaaku)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))) {
  var htgmu = randomNomor(100)
  addBalance(sender, htgmu, balance)
  let b = `GAME SIAPAKAH AKU\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmu}\n Ingin bermain lagi? kirim *${prefix}siapakahaku*`
return sendButMessage(from, b, `Fix Cocok Jadi Dosen:v`, [
              {              
                buttonId: `${prefix}siapaaku`,
                buttonText: {
                  displayText: `main Lagi`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}gamemenu`,
                buttonText: {
                  displayText: `BACK`,
                },
                type: 1,
              },
            ]);                  
  siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}
    }
if (game.isTebakKata(from, tebakkata)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, tebakkata))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))) {
  var htgtk = randomNomor(100)
  addBalance(sender, htgtk, balance)
  let b = `GAME TEBAK KATA\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTK(from, tebakkata)}\n*Hadiah :* $${htgtk}\nIngin bermain lagi? kirim *${prefix}tebakkata*`
return sendButMessage(from, b, `Anjay Jago bnr:v`, [
              {              
                buttonId: `${prefix}tebakkata`,
                buttonText: {
                  displayText: `main Lagi`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}gamemenu`,
                buttonText: {
                  displayText: `BACK`,
                },
                type: 1,
              },
            ]);           
  tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}
    }
if (game.isTebakKimia(from, tebakkimia)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, tebakkima))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))) {
  var reva = randomNomor(100)
  addBalance(sender, reva, balance)
  let b = `GAME TEBAK KIMIA\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}\n*Hadiah :* $${reva}\nPengen Main Lagi? ketik *${prefix}tebakkimia*`
return sendButMessage(from, b, `Fix Siswa Teladan Di Kelas Kimia:v`, [
              {              
                buttonId: `${prefix}tebakkimia`,
                buttonText: {
                  displayText: `Play Again`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}gamemenu`,
                buttonText: {
                  displayText: `BACK`,
                },
                type: 1,
              },
            ]);           
  tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
}
    }
if (game.isTebakBendera(from, tebakbendera)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, tebakbendera))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))) {
  var deffrini = randomNomor(100)
  addBalance(sender, deffrini, balance)
  let b = `GAME TEBAK BENDERA\n *Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${deffrini}\nPengen Main Lagi? kirim *${prefix}tebakbendera*`
return sendButMessage(from, b, `Fix Tau Semua Negara:v`, [
              {              
                buttonId: `${prefix}tebakbendera`,
                buttonText: {
                  displayText: `main Lagi`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}gamemenu`,
                buttonText: {
                  displayText: `BACK`,
                },
                type: 1,
              },
            ]);           
  tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
    }
if (game.isTebakAnime(from, tebakanime)) {
if (!chats.toLowerCase().includes(game.getJawabanSA(from, tebakanime))) return reply('*Salah*') 
if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))) {
  var vinna = randomNomor(100)
  addBalance(sender, vinna, balance)
  let b = `GAME TEBAK ANIME\n*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTA(from, tebakanime)}\n*Hadiah :* $${vinna}\nIngin bermain lagi? kirim *${prefix}tebakanime*`
return sendButMessage(from, b, `Fix Wibu Elite:v`, [
              {              
                buttonId: `${prefix}tebakanime`,
                buttonText: {
                  displayText: `main Lagi`,
                },
                type: 1,
              },{              
                buttonId: `${prefix}gamemenu`, 
                buttonText: {
                  displayText: `BACK`,
                },
                type: 1,
              },
            ]);           
  tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
    }
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var kimak = randomNomor(100)
  addBalance(sender, kimak, balance)
                    sendButMessage(from, "Selamat ð Jawaban kamu benar!\n*Hadiah :* $77", `â¢ ${ownerName}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }

if (game.isfam(from, family100)) {
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy) {
  if (budy.toLowerCase().includes(i)) {
    var htgmp = Math.floor(Math.random() * 20) + 1
    atm.addKoinUser(sender, htgmp, _uang)
    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
    var anug = anjuy.indexOf(i)
    anjuy.splice(anug, 1)
  }
}
if (anjuy.length < 1) {
  deff.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
  family100.splice(game.getfamposi(from, family100), 1)
}
    }
//<------------------------------------AntiLink------------------------------------------->/
      if (isGroup && isAntiLink && !isOwner && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            if (isGroupAdmins) return reply("Admin mah bebas ye kanð");
                setTimeout( () => {
		deff.groupRemove(from, [sender]).catch((e) => { deff.reply(from, global.db.mess.BotAdmin, mek) })
		}, 7000)
        setTimeout( () => {
        deff.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        deff.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        deff.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        deff.sendMessage(from, `*ã GROUP LINK DETECTOR ã*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick dalam 3 Detikâ`, MessageType.text)
        }, 0)               
               
        }
        }
//<---------------------------------------AntiVirtex---------------------------------------->/
if (isGroup && isAntivirtex && !mek.key.fromMe) {
if (budy.length > 1200) {
if (isGroupAdmins) return reply("Admin mah bebas ye kanð");
        deff.updatePresence(from, Presence.composing)
        let ayhd = "\n".repeat(420)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`        
		setTimeout( () => {
		deff.groupRemove(from, [kic]).catch((e) => { deff.reply(from, global.db.mess.BotAdmin, mek) })
		deff.sendMessage(`6285954993954@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n telah mengirim Virtex â`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BOT WHATSAPP",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6285954993954"}}})            
        }, 7000)
        setTimeout( () => {
        deff.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        deff.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        deff.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        deff.reply(from, `${ayhd}\nAnti Virtex Terdeteksi, pengguna ${kic} Telah Mengirimkan Virtex\n\nMaaf ${pushname} Anda akan di kick 3 detik lagiâ`, mek)                
        }, 0)               
               
        }
        }
		
//<---------------------------------AutoRead---------------------------------------------->/
deff.updatePresence(from, Presence.composing)// hapus aja bang kalo risih	
deff.chatRead(from, "read")// hapus aja bang kalo risih
//<------------------------------------------------------------------------------->/
if (isCmd && !isGroup)
atm.addKoinUser(sender, randomNomor(100), _uang)
console.log(color('[','magenta'), color('â³','white'), color(']','white'), color('NAMA','magenta'), color(pushname,'magenta'), color('MENGGUNAKAN','white'), color('FITUR :','magenta'), color(command, 'magenta'), 'args :', color(args.length))      
//<------------------------------------------------------------------------------->/
if (isCmd && isGroup)
atm.addKoinUser(sender, randomNomor(100), _uang)
console.log(color('[','magenta'), color('â³','white'), color(']','white'), color('NAMA','magenta'), color(pushname,'magenta'), color('MENGGUNAKAN','white'), color('FITUR :','magenta'), color(command, 'magenta'), color(`Di Group ${groupName}`,'white'), 'args :', color(args.length))
addBalance(sender, randomNomor(80), balance)

//<-----------------------------------AntiSpam-------------------------------------------->/
let spam1 = `Jangan Spam Ajg\nNanti Delay Ngenð¡`
let spam2 = 'DÍ«Í«ÍÌÌÌÌÍÌ¦Ì¤ÍÍÍ¡Ì¡ÍEÍÍ«Í£ÌÌÌÌÌÌ³ÍÌ Ì¥Ì´ÒÌFÍÍ®Ì¿Í§Í­ÍÍÌ­Ì­ÍÌÌ¹ÍÍÌ´FÍ¤Í«ÌÍ¨Í¬ÌÌ½Ì¯ÍÌ®Ì»Ì¼Ì¸Ì¡ÒBÍÍÌÌÍÌÌÌ©Ì¯ÌÍÌÍ Ì¡Ì¡OÌ½ÌÌÍ©Í§ÌÍÍÌÌ©Ì£ÍÌ¸Ì§ÌµTÌÍ«ÌÍÌÍ¥Í­ÌÍÌ¤Ì¹ÍÍÍÍzÌÌÍÍÍÍªÌ¿Ì±Ì¦Ì©Ì¬ÍÍÌ§Ò'
let spam3 = [{
buttonId: `${prefix}maap`,
buttonText: {
displayText: `Yamaap:v  `,
},
type: 1,}]
if (isCmd && msgFilter.isFiltered(from)) {
return sendButMessage (from, spam1, spam2, spam3, { quoted: freply})
}
if (isCmd) msgFilter.addFilter(from)

//<----------------------------------MenuPremium--------------------------------------------->/        
const prem1 = `NOT PREMIUM DETEC:V`
const prem2 = `*Hai kak @${senderr.split('@')[0]}*\nJika kamu ingin menggunakan fitur ini kamu harus menjadi user premium\nChat owner jika ingin membeli premium`
const prem3 = [{
buttonId: `${prefix}owner`,
buttonText: {
displayText: ` OWNER  `,
},
type: 1,}]
//<------------------------------------------------------------------------------->/        
switch(command){
//<------------------------------------------------------------------------------->/ð¤

//=====================COMMAND====================================

case 'menu':
timestampe = speed();
  latensie = speed() - timestampe
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
menu = `Hai Kak ${pushname} ð

âââ¤ *INFO BOT* 
*â£â* ð¦¢Creator : ${ownerName}
*ââ* ð¦¢Owner : ${ownerName}
*ââ* ð¦¢Nama Bot : ${botName}
*ââ* ð¦¢Prefix : Multi Prefix
*ââ* ð¦¢Baterai : ${baterai}% ${charger}
*ââ* ð¦¢Speed : ${latensie.toFixed(4)} second
*ââ* ð¦¢Language : Javascript
*ââ* ð¦¢Type : Nodejs
*ââââââââââ*
*ââ³ â ï¸INFO USERâ ï¸*
*ââ³ â¢Nama : ${pushname}*
*ââ³ â¢@${sender.split('@')[0]}*
*ââ³ Bot Ini Masih Tahap Pengembangan*
*ââ³ Kalo Error Chat Owner
*ââââââââ
*ââ³ Thank To DEFFBOTZZ*
*ââ³ Thank To Hadi Official*
*ââ³ Thanks To All Creator BOTz*
*ââââââââ â¢*`
img = fs.readFileSync('./gambar/deff.jpg')
trans = `Dilarang Spam Bot!! Jeda Minimal 5detik Spam/Call Auto Baned!.Mohon Hargai Creator Bot\nRuntime : ${runtime(process.uptime())}`
but = [
          { buttonId: `${prefix}status`, buttonText: { displayText: 'INFORMATION' }, type: 1 },
          { buttonId: `${prefix}rules`, buttonText: { displayText: 'RULES' }, type: 1 },
          { buttonId: `${prefix}command`, buttonText: { displayText: 'LIST MENU' }, type: 1 }
        ]
        sendButImage(from, menu, trans, img, but, {quoted: ftroli})
break
case 'allmenu':
menunya = `âðºðððð ðð¸ððâ
ââ¤â ${prefix}antilink <enable/disable>
ââ¤â ${prefix}antivirtex <enable/disable>
ââ¤â ${prefix}antidel <enable/disable>
ââ¤â ${prefix}welcome <enable/disable>
ââ¤â ${prefix}group _buka|tutup_
ââ¤â ${prefix}promote _@tag|reply_
ââ¤â ${prefix}demote _@tag|reply_
ââ¤â ${prefix}add _628xx_
ââ¤â ${prefix}kick _@tag|reply
ââ¤â ${prefix}setpp _reply|cap_
ââ¤â ${prefix}setdesc _teks_
ââ¤â ${prefix}setname _teks_
ââ¤â ${prefix}hidetag _teks_
ââ¤â ${prefix}linkgrup
ââ¤â ${prefix}infogrup
ââ¤â ${prefix}listonline
ââ¤â ${prefix}resetlinkgrup

âððð¼ð¶ð¾ð¸ð ðð¸ððâ
ââ¤â ${prefix}stiker _reply foto_
ââ¤â ${prefix}semoji ð¿
ââ¤â ${prefix}toimg _reply stiker_
ââ¤â ${prefix}patrick

âðððð¸ð ðð¸ððâ
ââ¤â ${prefix}owner
ââ¤â ${prefix}bc _Teks_
ââ¤â ${prefix}spam
ââ¤â ${prefix}mode
ââ¤â ${prefix}public
ââ¤â ${prefix}self

âð¼ðð¿ð´ð ðð¸ððâ
ââ¤â ${prefix}listsurah
ââ¤â ${prefix}alquran
ââ¤â ${prefix}jadwalsholat
ââ¤â ${prefix}asmaulhusna
ââ¤â ${prefix}alquranaudio
ââ¤â ${prefix}kisahnabi

âð·ðððð¿ðð´ð· ðð¸ððâ
ââ¤â ${prefix}play _judul_
ââ¤â ${prefix}ytmp3 _send link yt_
ââ¤â ${prefix}ytmp4 _send link yt_
ââ¤â ${prefix}tiktok _send link tt_
ââ¤â ${prefix}tiktoknowm _send link tt_
ââ¤â ${prefix}tiktokwm _send link tt_
ââ¤â ${prefix}pinterest
ââ¤â ${prefix}mediafire

âðð´ðº ðð¸ð??â
ââ¤â ${prefix}ganteng
ââ¤â ${prefix}cantik
ââ¤â ${prefix}jelek
ââ¤â ${prefix}goblok
ââ¤â ${prefix}bego
ââ¤â ${prefix}pinter
ââ¤â ${prefix}jago
ââ¤â ${prefix}nolep
ââ¤â ${prefix}monyet 	 
ââ¤â ${prefix}babi
ââ¤â ${prefix}beban
ââ¤â ${prefix}baik
ââ¤â ${prefix}jahat
ââ¤â ${prefix}anjing
ââ¤â ${prefix}haram
ââ¤â ${prefix}kontol
ââ¤â ${prefix}pakboy
ââ¤â ${prefix}pakgirl
ââ¤â ${prefix}wibu
ââ¤â ${prefix}hebat
ââ¤â ${prefix}sadboy
ââ¤â ${prefix}sadgirl 

âðºð´ðð¸ ðð¸ððâ
ââ¤â ${prefix}truth
ââ¤â ${prefix}dare
ââ¤â ${prefix}siapaaku
ââ¤â ${prefix}tebakkata
ââ¤â ${prefix}tebakgambar

âðð´ðð·ðð ð¼ðð´ðºð¸â
ââ¤â ${prefix}ppcp
ââ¤â ${prefix}kartun
ââ¤â ${prefix}aesthetic
ââ¤â ${prefix}tatasurya
ââ¤â ${prefix}darkjokes
ââ¤â ${prefix}memeindo
ââ¤â ${prefix}pokemon
ââ¤â ${prefix}katakataimage
ââ¤â ${prefix}doraemon

â ð¶ð¸ð¶ð´ð ðð¸ðð â
ââ¤â ${prefix}cecan
ââ¤â ${prefix}cogan
ââ¤â ${prefix}indonesia
ââ¤â ${prefix}vietnam
ââ¤â ${prefix}malaysia
ââ¤â ${prefix}japan
ââ¤â ${prefix}china
ââ¤â ${prefix}korea
ââ¤â ${prefix}thailand

âð´ðð¼ðð¸ ðð¸ððâ
ââ¤â ${prefix}husbu
ââ¤â ${prefix}loli
ââ¤â ${prefix}milf
ââ¤â ${prefix}waifu

âðð´ðð·ðð ðð¸ððâ
ââ¤â ${prefix}nickepep
ââ¤â ${prefix}tongue
ââ¤â ${prefix}katasindiran
ââ¤â ${prefix}pantun
ââ¤â ${prefix}katailham
ââ¤â ${prefix}namaninja _nama kamu_

âðð´ð¾ð¸ð ðð¸ððâ
ââ¤â ${prefix}blackpink
ââ¤â ${prefix}neon
ââ¤â ${prefix}greenneon
ââ¤â ${prefix}advanceglow
ââ¤â ${prefix}futureneon
ââ¤â ${prefix}sandwriting
ââ¤â ${prefix}sandsummer
ââ¤â ${prefix}sandengraved
ââ¤â ${prefix}metaldark
ââ¤â ${prefix}neonlight
ââ¤â ${prefix}holographic
ââ¤â ${prefix}text1917
ââ¤â ${prefix}minion
ââ¤â ${prefix}deluxesilver
ââ¤â ${prefix}newyearcard
ââ¤â ${prefix}bloodfrosted
ââ¤â ${prefix}halloween
ââ¤â ${prefix}jokerlogo
ââ¤â ${prefix}fireworksparkle
ââ¤â ${prefix}natureleaves
ââ¤â ${prefix}bokeh
ââ¤â ${prefix}toxic
ââ¤â ${prefix}strawberry
ââ¤â ${prefix}box3d
ââ¤â ${prefix}roadwarning
ââ¤â ${prefix}breakwall
ââ¤â ${prefix}icecold
ââ¤â ${prefix}luxury
ââ¤â ${prefix}cloud
ââ¤â ${prefix}summersand
ââ¤â ${prefix}horrorblood
ââ¤â ${prefix}thunder
ââ¤â ${prefix}8bit _Teks1&Teks2_
ââ¤â ${prefix}pornhub _Teks1&Teks2_
ââ¤â ${prefix}glitch _Teks1&Teks2_
ââ¤â ${prefix}glitch2 _Teks1&Teks2_
ââ¤â ${prefix}layered _Teks1&Teks2_
ââ¤â ${prefix}3dsteel _Teks1&Teks2_
ââ¤â ${prefix}realistic _Teks1&Teks2_
ââ¤â ${prefix}lionlogo _Teks1&Teks2_
ââ¤â ${prefix}ninjalogo _Teks1&Teks2_
ââ¤â ${prefix}wolf _Teks1&Teks2_
ââ¤â ${prefix}wolf2 _Teks1&Teks2_
ââ¤â ${prefix}halloween2 _Teks1&Teks2_
ââ¤â ${prefix}marvel _Teks1&Teks2_
ââ¤â ${prefix}marvel2 _Teks1&Teks2_
ââ¤â ${prefix}cinematichorror _Teks1&Teks2_
ââ¤â ${prefix}avengers _Teks1&Teks2_
ââ¤â ${prefix}graffiti3 _Teks1&Teks2_
ââ¤â ${prefix}captainamerica _Teks1&Teks2_
ââ¤â ${prefix}girlneko _Teks1&Teks2_
ââ¤â ${prefix}sadboy _Teks1&Teks2_
ââ¤â ${prefix}kaneki _Teks1&Teks2_
ââ¤â ${prefix}rem _Teks1&Teks2_
ââ¤â ${prefix}lolimaker _Teks1&Teks2_
ââ¤â ${prefix}gura _Teks1&Teks2_
`
img = fs.readFileSync('./gambar/deff.jpg')
trans = `halo Ka ${pushname} ð`
but = [
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'Sewa Bot' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }
        ]
        sendButImage(from, trans, menunya, img, but, {quoted: ftroli})
                  break
case 'rules':
fakestatus(`ââ ã *â¤RULESâ¤* ã ââ\n\n1. ðððððð ðð¡ðð ð¹ð ð¥. \nÑÎ±Ð¸ÎºÑÎ¹: *WARN/SOFT BLOCK*\n\n2. ðððððð ððððð¡ð ð ð¹ð ð¥.\nÑÎ±Ð¸ÎºÑÎ¹: *SOFT BLOCK*\n\n3. ðððððð ððððððð¤ð¡ðð ðð¥ðð¤ð ð¹ð ð¥.\nÑÎ±Ð¸ÎºÑÎ¹: *PERMANENT BLOCK*\n\n4. ðððððð ðððð ð¹ð ð¥ ð»ð ð¾ð£ð¦ð¡ ðððððð.\nÑÎ±Ð¸ÎºÑÎ¹ : *BOT TIDAK BISA MASUK LAGI*\n\nð½ððð ðð¢ððð ð·ððððððð ðð¢ððð ðð¦ð, ððððððð ð¾ðð¡ðð *${prefix}ððððððð* ððð¡ð¢ð ðððð¢ððð!\n\nââã *${botName}* ãââ`)
break
          case 'd':
        case 'del':
        case 'delete':
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               deff.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
case 'simpelmenu':
case 'command':
case 'listmenu':
timestampe = speed();
latensie = speed() - timestampe
 let listMsg = {
 title: "Â©Deffri Gans",
 buttonText: 'KLIK DISINI',
 footerText: 'DÍ«Í«ÍÌÌÌÌÍÌ¦Ì¤ÍÍÍ¡Ì¡ÍEÍÍ«Í£ÌÌÌÌÌÌ³ÍÌ Ì¥Ì´ÒÌFÍÍ®Ì¿Í§Í­ÍÍÌ­Ì­ÍÌÌ¹ÍÍÌ´FÍ¤Í«ÌÍ¨Í¬ÌÌ½Ì¯ÍÌ®Ì»Ì¼Ì¸Ì¡ÒBÍÍÌÌÍÌÌÌ©Ì¯ÌÍÌÍ Ì¡Ì¡OÌ½ÌÌÍ©Í§ÌÍÍÌÌ©Ì£ÍÌ¸Ì§ÌµTÌÍ«ÌÍÌÍ¥Í­ÌÍÌ¤Ì¹ÍÍÍÍzÌÌÍÍÍÍªÌ¿Ì±Ì¦Ì©Ì¬ÍÍÌ§Ò',
 description: `Hai kak @${sender.split('@')[0]},\nâââ£ âÌ¥-Ì¶Ì¯Í¡..Ì·Ì´â½Ì¶\nâ *INFO BOT*\nââââââââââ\n\nCreator Bot : Deâfâ¢fri Gaâ¢ânsâ¦\nNama Owner : ${ownerName}\nNama Bot : ${botName}\nPrefix : Multi Prefix\nBaterai : ${baterai}%\nSpeed : ${latensie.toFixed(4)} second\nLanguage : Javascript`,
 sections: [
                 {
                 "title": `SIMPLE MENU`, 
                 "rows" : [
                          {
                        "title": "--->Semua Menu[ð]",
                       "description" :"Menampilkan Semua Menu BOT",
                       "rowId": `${prefix}allmenu`
                           },
                          {
                        "title": "--->Owner Menu[ð¤´]",
                       "description" :"Menampilkan Menu...",
                       "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "--->Maker Menu[ð]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "--->Kerang Menu[ð]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}kerangmenu`
                           },
                           {                         
                              "title": "--->Islam Menu[ð]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}islamicmenu`
                           },
                           {                         
                              "title": "--->Download Menu[ð¤]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "--->Game Menu[ð®]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}gamemenu`
                           },
                           {                         
                              "title": "--->Cecan Menu[ð¸]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}cecanmenu`
                           },
                           {                         
                              "title": "--->Hewan Menu[ð¦]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "--->Sticker Menu[ð¿]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "--->Group Menu[ð£]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}groupmenu`
                           },
                           {                         
                              "title": "--->Random Image[ð¼ï¸]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}randomimg`
                           },
                           {                         
                              "title": "--->Random Menu[ð]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}randommenu`
                           },
                           {                         
                              "title": "--->Anime Menu[ð¯ðµ]",
                              "description" :"Menampilkan Menu...",
                              "rowId": `${prefix}animemenu`
                           }]
                 },{
                 "title": `INFO`, 
                 "rows" : [
                           {
                        "title": "--->SCRIPT[ðï¸]",
                       "description" :"",
                       "rowId": `${prefix}sc`
                           },
                           {
                        "title": "--->STATUS[â]",
                       "description" :"",
                       "rowId": `${prefix}status`
                           },
                           {                         
                              "title": "--->RUNTIME[â°]",
                              "description" :"",
                              "rowId": `${prefix}runtime`
                           },
                           {                         
                              "title": "--->SPEED[ð]",
                              "description" :"",
                              "rowId": `${prefix}ping`
                           },
                           {                         
                              "title": "--->OWNER[ð]",
                              "description" :"",
                              "rowId": `${prefix}owner`
                           }]
                 }
                 ],
                 listType: 1
            }
deff.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:mek })
break
case 'groupmenu':
menunya = `âðºðððð ðð¸ððâ
ââ¤â ${prefix}antilink _enable|disable_
ââ¤â ${prefix}antivirtex _enable|disable_
ââ¤â ${prefix}welcome _enable|disable_
ââ¤â ${prefix}group _buka|tutup_
ââ¤â ${prefix}promote _@tag|reply_
ââ¤â ${prefix}demote _@tag|reply_
ââ¤â ${prefix}add _628xx_
ââ¤â ${prefix}kick _@tag|reply
ââ¤â ${prefix}setpp _reply|cap_
ââ¤â ${prefix}setdesc _teks_
ââ¤â ${prefix}setname _teks_
ââ¤â ${prefix}hidetag _teks_
ââ¤â ${prefix}linkgrup
ââ¤â ${prefix}infogrup
ââ¤â ${prefix}listonline
ââ¤â ${prefix}resetlinkgrup
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':
menunya = `âððð¼ð¶ð¾ð¸ð ðð¸ððâ
ââ¤â ${prefix}stiker _reply foto_
ââ¤â ${prefix}semoji ??
ââ¤â ${prefix}toimg _reply stiker_
ââ¤â ${prefix}patrick
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':
menunya = `âðððð¸ð ðð¸ððâ
ââ¤â ${prefix}owner
ââ¤â ${prefix}bc _Teks_
ââ¤â ${prefix}spam
ââ¤â ${prefix}mode
ââ¤â ${prefix}public
ââ¤â ${prefix}self
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'islamicmenu':
menunya = `âð¼ðð¿ð´ð ðð¸ððâ
ââ¤â ${prefix}listsurah
ââ¤â ${prefix}alquran
ââ¤â ${prefix}jadwalsholat
ââ¤â ${prefix}asmaulhusna
ââ¤â ${prefix}alquranaudio
ââ¤â ${prefix}kisahnabi
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
menunya = `âð·ðððð¿ðð´ð· ðð¸ððâ
ââ¤â ${prefix}play _judul_
ââ¤â ${prefix}ytmp3 _send link yt_
ââ¤â ${prefix}ytmp4 _send link yt_
ââ¤â ${prefix}tiktok _send link tt_
ââ¤â ${prefix}tiktoknowm _send link tt_
ââ¤â ${prefix}tiktokwm _send link tt_
ââ¤â ${prefix}pinterest
ââ¤â ${prefix}mediafire
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'gamemenu':
menunya = `âðºð´ðð¸ ðð¸ððâ
ââ¤â ${prefix}truth
ââ¤â ${prefix}dare
ââ¤â ${prefix}siapaaku
ââ¤â ${prefix}tebakkata
ââ¤â ${prefix}tebakgambar
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'tagmenu':
menunya = `âðð´ðº ðð¸ððâ
ââ¤â ${prefix}ganteng
ââ¤â ${prefix}cantik
ââ¤â ${prefix}jelek
ââ¤â ${prefix}goblok
ââ¤â ${prefix}bego
ââ¤â ${prefix}pinter
ââ¤â ${prefix}jago
ââ¤â ${prefix}nolep
ââ¤â ${prefix}monyet 	 
ââ¤â ${prefix}babi
ââ¤â ${prefix}beban
ââ¤â ${prefix}baik
ââ¤â ${prefix}jahat
ââ¤â ${prefix}anjing
ââ¤â ${prefix}haram
ââ¤â ${prefix}kontol
ââ¤â ${prefix}pakboy
ââ¤â ${prefix}pakgirl
ââ¤â ${prefix}wibu
ââ¤â ${prefix}hebat
ââ¤â ${prefix}sadboy
ââ¤â ${prefix}sadgirl 
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomimg':
menunya = `âðð´ðð·ðð ð¼ðð´ðºð¸â
ââ¤â ${prefix}ppcp
ââ¤â ${prefix}kartun
ââ¤â ${prefix}aesthetic
ââ¤â ${prefix}tatasurya
ââ¤â ${prefix}darkjokes
ââ¤â ${prefix}memeindo
ââ¤â ${prefix}pokemon
ââ¤â ${prefix}katakataimage
ââ¤â ${prefix}doraemon
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':
menunya = `âð´ðð¼ðð¸ ðð¸ððâ
ââ¤â ${prefix}husbu
ââ¤â ${prefix}loli
ââ¤â ${prefix}milf
ââ¤â ${prefix}waifu
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randommenu':
menunya = `âðð´ðð·ðð ðð¸ððâ
ââ¤â ${prefix}nickepep
ââ¤â ${prefix}tongue
ââ¤â ${prefix}katasindiran
ââ¤â ${prefix}pantun
ââ¤â ${prefix}katailham
ââ¤â ${prefix}namaninja _nama kamu_
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
menunya = `âðð´ð¾ð¸ð ðð¸ððâ
ââ¤â ${prefix}blackpink
ââ¤â ${prefix}neon
ââ¤â ${prefix}greenneon
ââ¤â ${prefix}advanceglow
ââ¤â ${prefix}futureneon
ââ¤â ${prefix}sandwriting
ââ¤â ${prefix}sandsummer
ââ¤â ${prefix}sandengraved
ââ¤â ${prefix}metaldark
ââ¤â ${prefix}neonlight
ââ¤â ${prefix}holographic
ââ¤â ${prefix}text1917
ââ¤â ${prefix}minion
ââ¤â ${prefix}deluxesilver
ââ¤â ${prefix}newyearcard
ââ¤â ${prefix}bloodfrosted
ââ¤â ${prefix}halloween
ââ¤â ${prefix}jokerlogo
ââ¤â ${prefix}fireworksparkle
ââ¤â ${prefix}natureleaves
ââ¤â ${prefix}bokeh
ââ¤â ${prefix}toxic
ââ¤â ${prefix}strawberry
ââ¤â ${prefix}box3d
ââ¤â ${prefix}roadwarning
ââ¤â ${prefix}breakwall
ââ¤â ${prefix}icecold
ââ¤â ${prefix}luxury
ââ¤â ${prefix}cloud
ââ¤â ${prefix}summersand
ââ¤â ${prefix}horrorblood
ââ¤â ${prefix}thunder
ââ¤â ${prefix}8bit _Teks1&Teks2_
ââ¤â ${prefix}pornhub _Teks1&Teks2_
ââ¤â ${prefix}glitch _Teks1&Teks2_
ââ¤â ${prefix}glitch2 _Teks1&Teks2_
ââ¤â ${prefix}layered _Teks1&Teks2_
ââ¤â ${prefix}3dsteel _Teks1&Teks2_
ââ¤â ${prefix}realistic _Teks1&Teks2_
ââ¤â ${prefix}lionlogo _Teks1&Teks2_
ââ¤â ${prefix}ninjalogo _Teks1&Teks2_
ââ¤â ${prefix}wolf _Teks1&Teks2_
ââ¤â ${prefix}wolf2 _Teks1&Teks2_
ââ¤â ${prefix}halloween2 _Teks1&Teks2_
ââ¤â ${prefix}marvel _Teks1&Teks2_
ââ¤â ${prefix}marvel2 _Teks1&Teks2_
ââ¤â ${prefix}cinematichorror _Teks1&Teks2_
ââ¤â ${prefix}avengers _Teks1&Teks2_
ââ¤â ${prefix}graffiti3 _Teks1&Teks2_
ââ¤â ${prefix}captainamerica _Teks1&Teks2_
ââ¤â ${prefix}girlneko _Teks1&Teks2_
ââ¤â ${prefix}sadboy _Teks1&Teks2_
ââ¤â ${prefix}kaneki _Teks1&Teks2_
ââ¤â ${prefix}rem _Teks1&Teks2_
ââ¤â ${prefix}lolimaker _Teks1&Teks2_
ââ¤â ${prefix}gura _Teks1&Teks2_
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'hewanmenu':
menunya = `â ð»ð¸ðð´ð ðð¸ðð_ â
ââ¤â ${prefix}fox
ââ¤â ${prefix}panda
ââ¤â ${prefix}panda2
ââ¤â ${prefix}koala
ââ¤â ${prefix}bird
ââ¤â ${prefix}cat
ââ¤â ${prefix}dog
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':
menunya = `â ð¶ð¸ð¶ð´ð ðð¸ðð â
ââ¤â ${prefix}cecan
ââ¤â ${prefix}cogan
ââ¤â ${prefix}indonesia
ââ¤â ${prefix}vietnam
ââ¤â ${prefix}malaysia
ââ¤â ${prefix}japan
ââ¤â ${prefix}china
ââ¤â ${prefix}korea
ââ¤â ${prefix}thailand
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'kerangmenu':
menunya = `âð¾ð¸ðð´ððº ðð¸ððâ
ââ¤â ${prefix}apakah [query]
ââ¤â ${prefix}bisakah [query]
ââ¤â ${prefix}kapankah [query]
`
deff.sendMessage(from, { contentText: `${menunya}`, footerText: `${faketeks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ping':
timestampe = speed();
latensie = speed() - timestampe
reply(`ã *DÍ«Í«ÍÌÌÌÌÍÌ¦Ì¤ÍÍÍ¡Ì¡ÍEÍÍ«Í£ÌÌÌÌÌÌ³ÍÌ Ì¥Ì´ÒÌFÍÍ®Ì¿Í§Í­ÍÍÌ­Ì­ÍÌÌ¹ÍÍÌ´FÍ¤Í«ÌÍ¨Í¬ÌÌ½Ì¯ÍÌ®Ì»Ì¼Ì¸Ì¡ÒBÍÍÌÌÍÌÌÌ©Ì¯ÌÍÌÍ Ì¡Ì¡OÌ½ÌÌÍ©Í§ÌÍÍÌÌ©Ì£ÍÌ¸Ì§ÌµTÌÍ«ÌÍÌÍ¥Í­ÌÍÌ¤Ì¹ÍÍÍÍzÌÌÍÍÍÍªÌ¿Ì±Ì¦Ì©Ì¬ÍÍÌ§Ò* ã\n ==[${latensie.toFixed(4)} detik ð¬]==`)
break
case 'script':
case 'sc':
reply(`Mau Sc Yah Kak?\nNihðhttps://youtu.be/ELGyUMeQtiY`)
break
//Khusus Kerang Ajaib Disini YGY

case 'kapankah':
				if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Kemarin','Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await (sender)
					break
case 'bisakah':
		if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapak kau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: fkontak })
					await (sender)
					break
case 'apakah':
           if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: fkontak})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi','Mungkin']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: fkontak })
					await (sender)
					break

//âââââââââââââââ[ FITUR CECAN ]âââââââââââââââââ//

case 'cecan':
case 'cogan':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
reply(mess.wait)
cecan = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=NisaaCantik`)
deff.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
//------------------------------Random Image--------------------------\\
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/ppcouple?apikey=NisaaCantik}`)
buff1 = await getBuffer (anu.result.male)
deff.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_'})
buff2 =await getBuffer (anu.result.female)
deff.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_'})
break
case 'kartun':
case 'katakataimage':
case 'aesthetic':
case 'darkjokes':
case 'memeindo':
case 'pokemon':
case 'tatasurya':
case 'doraemon':
 reply(mess.wait)
random = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`)
deff.sendMessage(from, random, image, {quoted: mek, caption: '_Nih Kak_'})
break
 //âââââââââââââInfoBotâââââââââââââÂ°Â°Î©
 case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN: ${control.NamaOwner}\n` +
            `item1.TEL;waid=${control.NomorOwner}:${control.NomorOwner}\n` +
            `item1.X-ABLabel:ð Creator\n` +
            `item2.EMAIL;type=INTERNET: botdeff4@gmail.com\n` +
            `item2.X-ABLabel:ð§ Email\n` +
            `item3.URL:https://youtube.com\n` +
            `item3.X-ABLabel:âï¸ Channel Owner\n` +
            `item4.ADR:;;ð®ð© Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:ð Region\n` +
            `item5.X-ABLabel:âï¸ DEFFBOTz Owner\n` +
            'END:VCARD'.trim()
deff.sendMessage(from, {displayName: `Deffri Gans`, vcard: vcard3}, contact,) 
     break       
     case 'bc':
             if (sender.split("@")[0] != owner) return reply("command Khusus Owner Banh!")
             if (args.length < 1) return reply('teks?')
             anu100 = await deff.chats.all()
             if (isMedia && !deff.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(deff).replace('quotedM','m')).message.extendedTextMessage.contextInfo : deff
             bc100 = await deff.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             deff.sendMessage(_.jid, bc100, image, {quoted: ftroli, caption: `*ã PESAN SIARAN BOT ã*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             deff.sendMessage(_.jid, 
			{"contentText": `*ã á á± á á¯ Æ Æ Ð Õ Æ¬ ã*\n\n${body.slice(4)}`,
			"footerText": `${botName}`,
			"buttons": [
			{"buttonId": `${prefix}y`,
			"buttonText": {"displayText": "Okeh Bangg"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: headshot,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'set':
	      case 'mode':
 
        if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `ð¤ SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `ð¥ PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;

case 'self':
 
              if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
              if (banChats === true) return
        	    uptime = process.uptime()
              banChats = true
              reply(' ```ã SELF MODE ã``` ')
              break   

case 'public':
 
         	 if (!mek.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              reply(' ```ã PUBLIC MODE ã``` ')
              break
case 'spam':
if (isOwner && mek.key.fromMe) return reply(mess.only.owner)
if (!q) return deff.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, fkontak)
                 let argz = q.split("|")
                 if (!argz) return deff.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, fkontak)
				 if (isNaN(argz[1])) return deff.reply(from, `harus berupa angka`, ftroli)
				 for (let i = 0; i < argz[1]; i++){
            deff.reply(from, argz[0], mek)
            }
break
case 'status':
let groups = deff.chats.array.filter(v => v.jid.endsWith('g.us'));
                 let privat = deff.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
                 let totalChat = await deff.chats.all();
                 timestampe = speed();
                 latensie = speed() - timestampe
                 let { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = deff.user.phone;
                 let ramTwo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                 teks1 = `ã *ð¦ð§ðð§ð¨ð¦ ðð¢ð§* ã\nâ¢ Group Chats : ${groups.length}\nâ¢ Private Chats : ${privat.length}\nâ¢ Total Chats : ${totalChat.length}\nâ¢ Speed : ${latensie.toFixed(4)} second\nâ¢ Multi Prefix : iya\n\n\nã *ð¦ð§ðð§ð¨ð¦ ððð©ððð* ã\nâ¢ Total Ram : ${ramTwo}\nâ¢ Platform : ${os.platform()}\nâ¢ Hostname : ${os.hostname()}\nâ¢ Merk Device : ${device_manufacturer}\nâ¢ Version WhatsApp : ${wa_version}\nâ¢ Version OS : ${os_version}\nâ¢ Version Device : ${device_model}\nâ¢ MCC : ${mcc}\nâ¢ MNC : ${mnc}`
                 teks = `${tanggal}\n${botName}`
            deff.sendMessage(from, { contentText: `${teks1}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'á´á´É´á´' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'á´á´¡É´á´Ê' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
            break
case 'sewabot':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*

ð¢ ð£ ð ð¡
ð¦ ð ðª ð ð ð¢ ð§

â *1 Minggu : 5.000 ( 5K )*
â *1 Bulan : 10.000 ( 10K )*
â *Permanen : 15.000 ( 15K )*`
pas = `*${tanggal}*`
deff.sendMessage(from, { contentText: `${menu}`, footerText: `${pas}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'á´á´É´á´' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'á´á´¡É´á´Ê' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'runtime':
textImg(`${runtime(process.uptime())}`)
break       

//âââââââââââââGAMEâââââââââââââÂ°Â°Î©

case 'slot':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
deff.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3 Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftroli })
break
case 'truth': 
let trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
let ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
deff.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: ftroli })
break
case 'dare':
let dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??ð¨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
let der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `â¡ï¸LANJUT`},type:1}]
imageMsg = (await deff.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak â', imageMessage: imageMsg,
contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
deff.relayWAMessage(prep)
break
case 'tebakgambar':
hx.tebakgambar().then(async data =>{
	tebakya = await getBuffer(data[0].image)
jawaban = `${data[0].jawaban.replace('Jawaban ', '')}`
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
deff.sendMessage(from, tebakya, image, {quoted: fkontak, caption: "\n\nTimeout : 120.00 seconds" })
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
deff.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: ftroli}) // ur cods
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    })
					break   
case 'tebakkata': case 'tk': {
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${control.lolkey}`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
  let ahhh = anu.data.result.jawaban.toLowerCase()
  game.addkata(from, ahhh, gamewaktu, tebakkata)
  gameAdd(sender, glimit)
}
  break
case 'tebakkimia': case 'tuk': {
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${control.lolkey}`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
  let revasayank = anu.data.result.lambang.toLowerCase()
  game.addkimia(from, revasayank, gamewaktu, tebakkimia)
  gameAdd(sender, glimit)
}
  break
case 'tebakbendera': case 'tb': {
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${control.lolkey}`)
  let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
  let ikasayank = anu.data.result.name.toLowerCase()
  game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
  gameAdd(sender, glimit)
}
  break
case 'tebakanime': case 'ta': {
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${control.lolkey}`)
  let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), fkontak)
  let nurulsayank = anu.data.result.name.toLowerCase()
  game.addanime(from, nurulsayank, gamewaktu, tebakanime)
  gameAdd(sender, glimit)
}
  break
case 'siapaaku': case 'siapakahaku': case 'sa': {
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
  if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${control.lolkey}`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
  let anau = anu.data.result.answer.toLowerCase()
  game.addsyiko(from, anau, gamewaktu, siapaaku)
  gameAdd(sender, glimit)
}
  break
case 'tebaklirik': case 'tl': {
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
  if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${control.lolkey}`)
  let petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
  let anal = anu.data.result.answer.toLowerCase()
  game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
  gameAdd(sender, glimit)
}
  break
//ââââââââââ[ Menu HEWAN ]ââââââââââââââââââââââââââââ//
                   case 'fox':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
                   case 'dog':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
                   case 'cat':
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
                   case 'panda':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
                   case 'panda1':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
                   case 'bird': 
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
                   case 'koala':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftroli})
                   break
//random
              case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`)
reply(`*Random Nick EpEp*\n${anu.result}\n\n${anu.result}\n\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=IkyOgiwara`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=IkyOgiwara`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
              case 'tongue':  
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `â» *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `â» *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (args.length < 1) return reply(`[â] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `â» *NAMA* : ${anu.your_name}\n`
anu1 += `â» *NINJA* : ${anu.result}\n`
reply(anu1)
break 
//Menu Sticker
case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            let media = await deff.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                deff.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                let media = await deff.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
              
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            deff.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break  
case 'tomp3':
    deff.updatePresence(from, Presence.composing)
    if (!isQuotedVideo) return reply('Reply Video Nya Kak')
    reply(mess.wait)
    encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    mediad = await deff.downloadAndSaveMediaMessage(encmediad)
    ran = getRandom('.mp4')
    exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
       fs.unlinkSync(mediad)
       if (err) return reply(mess.error.api)
       mhee = fs.readFileSync(ran)
       deff.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 234, quoted: fkontak })
       fs.unlinkSync(ran)
    })
    break
case 'toimg':  
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)              
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await deff.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              deff.sendMessage(from, buffer, image, {quoted: ftroli, caption: 'Nih Kak Jangan Lupa Subscribe DEFFBOTz'})
              fs.unlinkSync(ran)
})
              break
case 'ttp':  
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ðððððððð»`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    deff.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
          case 'attp':
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           deff.sendMessage(from, buffer, sticker, { quoted: mek })
            break          
case 'semoji': case'emoji':
if (!q) return reply('emojinya?')
					qes = args.join(' ')
reply(mess.wait)
	emoji.get(`${qes}`).then(async emojii => {
					moji = `${emojii.images[4].url}`
					console.log(teks)
					//deff.sendMessage(from, await getBuffer(teks), sticker, {mimetype:'image/webp',quoted: ftroli})
		  sendStickerUrl(from,`${moji}`)	
		
		})
		
		break

//islamic Menu:*

case 'listsurah':{
    get = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
    }
    break
case 'alquran':{
    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=172e5b27c5299af6bfdb45b1`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
        arab = x.arab
        nomor = x.ayat
        latin = x.latin
        indo = x.indonesia
        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    reply(ini_txt)}
    break
case 'asmaulhusna':{
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    reply(ini_txt)}
    break
case 'kisahnabi':{
    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)}
    break
case 'alquranaudio':{
    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
    reply('tunggu sekitar 10 menit kak')
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=172e5b27c5299af6bfdb45b1`)
    await deff.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: 'audio/mpeg' })
    }
    break
case 'jadwalsholat':{
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=172e5b27c5299af6bfdb45b1`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)}
    break

//âââââââââââââGroupâââââââââââââÂ°Â°Î©
case 'welcome':
 
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini âï¸')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini âï¸')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
             
               break   
               case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (args[0] === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo ${pushname} klik button atau Gunakan ${prefix + command }antilink enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!antilink enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!antilin disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${ownerName}ð` ,
buttons: buttonss,
headerType: 1
}
deff.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ â¢ BOTWEA â¢ ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
deff.groupAdd(from, [entah])
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
deff.groupAdd(from, [entah])
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await deff.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'promote' :
reply(`Fitur Ini Membuat BOT TerBanned`)
break
case 'demote' :
reply(`Fitur Ini Membuat BOT TerBanned`)
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
tagni = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
tagni += `â¢ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(tagni, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
deff.groupUpdateSubject(from, `${body.slice(9)}`)
deff.sendMessage(from, `\`\`\`Sukses â, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftroli })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
deff.groupUpdateDescription(from, `${body.slice(9)}`)
deff.sendMessage(from, `\`\`\`Sukses â, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftroli })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await deff.downloadMediaMessage(encmedia)
deff.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await deff.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
deff.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
deff.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(deff.chats.get(ido).presences), deff.user.jid]
deff.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: ftroli, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'group':
case 'grup':
case 'gc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length == 0) return reply(`Example: ${prefix + command} buka/tutup`)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
deff.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
deff.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break

//à¿ âââââââââââââââââââââââ¥SUBSCRIBE Deffri Gansâ¥ââââââââââââââââââââââââââ à¿
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
				   if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  let jdiidc = groupMembers
		  let kosstc = groupMembers
		  let akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  ter = `Yang Ter${command} Disini Adalah Si @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  mentions(ter, jds, true)
	      break	
//Playy youtube download------->
case 'play':
              if (!c) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}ytmp4 ${res.all[0].url}`,buttonText:{displayText:'ð¥VIDEO'},type:1},{buttonId:`${prefix}ytmp3 ${c}`,buttonText:{displayText:'ðµAUDIO'},type:1}]

imageMessage = (await deff.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{})

deff.relayWAMessage(prep)
break               	        	
case 'playy':
case 'ytmp3':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
yt = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${yt}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: ftroli, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
let tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
}
limitAdd(sender, limit) 
break
case 'play2':
					case 'ytmp4':
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            yt = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(yt).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `âââ£ âÌ¥-Ì¶Ì¯Í¡..Ì·Ì´â½Ì¶âââââââââââââ
â *YOUTUBE MP4*
âââââââââââââ£ âÌ¥-Ì¶Ì¯Í¡..Ì·Ì´â½Ì¶â£ â½Ì¶

*Data Berhasil Didapatkan!*
\`\`\ð²â¢ââ Title : ${res[0].judul}\`\`\`
\`\`\ð²â¢ââ Ext : MP4\`\`\`
\`\`\ð²â¢ââ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: ftroli}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
})
            break
					case 'ttnowm': 
      case 'tiktoknowm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktokwm': 
       case 'ttdl':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktok':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              reply(mess.wait)
              bgst =`Jangan Lupa Subscribe Yt DEFFBOTz\n Helpme tu 1k subscriber`
              kntl =`Silahkan pilihan media yg mau di download kak:v`
              deff.sendMessage(from, { contentText: `${kntl}`, footerText: `${bgst}`, buttons: [{ buttonId: `${prefix}tiktoknowm ${q}`, buttonText: { displayText: 'ð¥NO WM' }, type: 1 },{ buttonId: `${prefix}ttdl ${q}`, buttonText: { displayText: 'ð¥WM' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'pinterest':
        if (!q) return reply("gambar apa?");
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `â¡ï¸Next`},type:1}]
              imageMsg = (await deff.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'[ â¢ ÆÅÆ¬Å´ÉÃ â¢ ]ï¸', imageMessage: imageMsg,
              contentText:`Nih Kak Subscribe DEFFBOTz ya Kakð`,buttons,headerType:4}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              deff.relayWAMessage(prep)
        break
case 'fire':      //punya DEFFBOTZZ(Dappa)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  fir = args.join(' ')
  res = await mediafireDl(fir)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli })
  break
case 'fire1':
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  fir = args.join(' ')
  res = await mediafireDl(fir)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, video, { quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output })
  break
case 'fire2':
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  fir = args.join(' ')
  res = await mediafireDl(fir)
  result = `Media Fire Downloader
  Tunggu Proses Mengirim Media......`
  reply(result)
  sendFileFromUrl(res[0].link, audio, { quoted: ftroli, mimetype: 'video/mp3', filename: res[0].output })
  break
case 'mediafire':
  if (args.length < 1) return reply('Link Nya Mana? ')
  if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  reply(mess.wait)
  med = args.join(' ')
  res = await mediafireDl(med)
  result = `Media Fire Downloader

âââââââ Â¤ â - â Â¤ âââââââ
   Nama : ${res[0].nama}
   Ukuran : ${res[0].size}
   Link : ${res[0].link}
âââââââ Â¤ â - â Â¤ âââââââ

Tunggu Proses Mengirim Media......`
  sendButMessage(from, result, `ððð ððððððð ððð ðð ððð ððð\nð·ðððð ððððððð ðððððð ðððððð ðððð ð¢ð ððð ðð ððð ððððð`, [
    {
buttonId: `${prefix}fire ${teks}`,
buttonText: {
  displayText: `ðð°ð¤ð¶ð®ð¦ð¯ðµ`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire1 ${teks}`,
buttonText: {
  displayText: `ððªð¥ð¦ð°`,
},
type: 1,
    },
    {
buttonId: `${prefix}fire2 ${teks}`,
buttonText: {
  displayText: `ðð¶ð¥ðªð°`,
},
type: 1,
    },
  ]);
  break;
//à¿ âââââââââââââââââââââââ¥SUBSCRIBE Deffri Gansâ¥ââââââââââââââââââââââââââ à¿
case 'waifu':
reply(mess.wait)
waifu = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/waifu`)
deff.sendMessage(from, waifu, image, { quoted: fkontak})
break
case 'husbu':
reply(mess.wait)
husbu = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/husbu`)
deff.sendMessage(from, husbu, image, { quoted: fkontak})
break
case 'loli':
reply(mess.wait)
loli = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/loli`)
deff.sendMessage(from, loli, image, { quoted: fkontak})
break
case 'milf':
reply(mess.wait)
milf = await getBuffer(`https://tyz-api.herokuapp.com/randomimg/milf`)
deff.sendMessage(from, milf, image, { quoted: fkontak})
break
   // Maker Menu //
                    case 'cerpen': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)     
anu1 = `â» *JUDUL* : ${anu.result.title}\n`
anu1 += `â» *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `â» *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `â» *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break          
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Deffri Gans`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=172e5b27c5299af6bfdb45b1&text=${ini_txt}`)
                    deff.sendMessage(from, ini_buffer, image, { quoted: fkontak})
                    break
//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=NisaaCantik&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
deff.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
deff.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
//âââââââââââââAkhir Dari Segala CaseâââââââââââââÂ°Â°Î©
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
//<------------------------------------->\\			
if (isCmd) {
return sendButMessage(from, `Maaf kak @${senderr.split('@')[0]} command ${command} tidak terdaftar dalam menu`, 'BACA MENUNYA\nÂ©deff', [
{
"buttonId": ".menu",
"buttonText": {
"displayText": "MENU"
},
"type": "RESPONSE"
}
], {quoted:ftroli})
}
}
//<------------------------------------->\\			
} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     deff.sendMessage(`${target}`, `âââââã *EROR DITEMUKAN* ãâââââ\n\n\`\`\`${e}\`\`\`\n\nââââââââââââââââââââ`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "BâOâT Wâ¢HAâ¢TSAâ¢PP",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6285954993954"}}})
	}
    }
    }
    }
    }
    }
    }