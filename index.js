/*We Asu Mau ngapain kesini?
*ini scrip untuk Subscriber saya

*apakah anda Subscriber ArdiGansYT?
*SUBSCRIBE DULU Jangan reedit sembarangan

*INGAT INI KALO LO EDIT SEMBARANG
*NANTI ADA YANG ERROR NYALAHIN GUA🗿
*/

const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const _premium = JSON.parse(fs.readFileSync('./lib/premium.json'))
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN: Patrickstar\n' 
            + 'ORG: PatrickStar;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=62852829961460:+6285282996146\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '!'
limitawal = 30
memberlimit = 5
cr = '*PATRICKSTAR BOT*'
/*************************************/
mess = {
				wait: '*「 WAIT 」⏳ Patrick Sedang Membuat,kecepatan Tergantung Signal Wifi🐦*'
}
/******** OWNER & PREMIUM NUMBER**********/
const ownerNumber = ["6285282996146@s.whatsapp.net","62852829961460@s.whatsapp.net"]  //ganti salah satu aja
❗
const premiumNumber = ["6285282996146@s.whatsapp.net","62852829961460@s.whatsapp.net"] // ganti salah satu❗
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('ampibi gaming','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* 
❍█╭━━━━━━━━━━━━━
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAME:*
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *GENDER:*
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *ASKOT:*
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA IG:*
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA DOI:*
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *FAVORIT:*
❍█│【♡ۣۜۜ፝͜͜͡͡✿➣ *HOBBY:*
❍█╰━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = PremiumNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
	        /*****************END SCURITY FEATURE ********/
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
           
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				//itsmei 
				case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
               case 'instaimg':
				if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'instavid':
				if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'hekerbucin':
				if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`http://itsmeikygans.my.id/bacotanhacker?apikey=${apikey}`, {method: 'get'})
				reply (anu.result)
				await limitAdd(sender) 
				break 
			    case 'katailham':
				if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`http://itsmeikygans.my.id/bacotanilham?apikey=${apikey}`, {method: 'get'})
				kata = anu.result
				client.sendMessage(from, kata, text, {quoted: mek})
				await limitAdd(sender)
				break
       case 'play':
                if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://api.itsmeikyxsec404.xyz/playmp3?apikey=${apikey}&query=${body.slice(6)}`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `「 *PLAY* 」\n*Judul* : ${data.result.title}\n*Duration* : ${data.result.duration}\n*Filesize* : ${data.result.size}\n\n*Tunggu PATRICK Sedang mengirim audio nya jangan spam*`
                bufferddd = await getBuffer(data.result.image)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break             
			    case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fakta':
                    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					anu = await fetchJson(`http://api.itsmeikyxsec404.xyz/fakta?apikey=${apikey}`, {method: 'get'})
					reply(anu.result)
					break
					case 'asupan':
					if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(mess.wait)
                anu = await fetchJson(`http://itsmeikygans.my.id/asupan?apikey=${apikey}`)
                asup = await getBuffer(anu.result)
                client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v Jangan Lupa Nambah kalo Blom Kenyang🐦'})
                await limitAdd(sender) 
                break
                case 'bucin':
                     if (!isRegistered) return reply(ind.noregis())
				     if (isLimit(sender)) return reply(ind.limitend(pusname))
                     reply(ind.wait())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					break
           case 'infocuaca':
	 if (!isRegistered) return reply(ind.noregis())
   if (isLimit(sender)) return reply(ind.limitend(pusname)) 
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             client.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 
             case 'wait':
				if (!isRegistered) return reply(ind.noregis())
				     if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
               case 'quran':
			 if (!isRegistered) return reply(ind.noregis())
				     if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
                case 'randomquran':
			data = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
			teks = `Nama: ${data.result.nama}\nArti: ${data.result.arti}\nayat: ${data.result.ayat}\nAsma: ${data.result.asma}\nRukuk: ${data.result.rukuk}\nNomor: ${data.result.nomor}\nType: ${data.result.type}\nKeterangan: ${data.result.keterangan}`
			buffs = await getBuffer(data.result.audio)
		    client.sendMessage(from, `${teks}`, MessageType.text, {quoted: mek})
			client.sendMessage(from, buffs, audio, {mimetype: 'audio/mp4', filename: `quran.mp3`, quoted: mek})
			break
				case 'toptt':
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
						break
				case 'qrcode':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				//tobz 
				case 'lirik':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=akad&apikey=${apikey}`)
				thum = await getBuffer(anu.result.thumb)
				teks = `*「 LAGU DI TEMUKAN 」*\n\n*Judul* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*public in* : ${anu.result.dipublikasi}\n*Lyrics* : ${anu.result.lirik}`
				client.sendMessage(from, thum, image, { quoted : mek, caption: teks })
				break
				case 'ttp':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=${apikey}`)
				res = await getBase64(anu.base64)
				client.sendMessage(from, res, sticker, {quoted:mek})
				break
				case 'attp'
				const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

(m, { conn, text }) => {
  if (text) conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text }), 'attp.webp', '', m, false, { asSticker: true })
  else throw 'Uhm...Teksnya?'
                break
                case 'maubot'
                let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')
let WAConnection = require('../lib/simple').WAConnection(_WAConnection)
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new WAConnection()
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 20 detik', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.once('connection-validated', user => {
      parent.reply(m.chat, 'Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang jioa saya off anda akan juga off [BOT] Jika saya on kembali kirimkan ke saya text jadibot itu, bukan qr ya...*\n' + JSON.stringify(user, null, 2), m)
    })
    conn.welcome = global.conn.welcome
    conn.bye = global.conn.bye
    conn.on('group-add', global.conn.onAdd)
    conn.on('group-leave', global.conn.onLeave)
    conn.on('message-new', global.conn.handler)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({user}) => {
      if (auth) return
      await parent.sendMessage(user.jid, `Kamu bisa login tanpa qr dengan pesan dibawah ini. untuk mendapatkan kode lengkapnya, silahkan kirim *${usedPrefix}getcode* untuk mendapatkan kode yang akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      delete global.conns[id]
    }, 60000)
    conn.on('close', conn.logger.info)
    global.conns.push(conn)
  } else throw 'Tidak bisa membuat bot didalam bot!\n\nhttps://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=.jadibot'
				break
                case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${apikey}`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${apikey}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break 
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply(mess.only.premiumB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply(mess.only.premiumB)
					memberLimit = args[0]
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${apikey}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'addprem':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply(mess.only.premiumB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply(mess.only.premiumB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
			break
            case 'bitly':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${apikey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'nangis':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${apikey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${apikey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=${apikey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${apikey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'husbu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${apikey}`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'ranime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${apikey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
               case 'caklontong':
            if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${apikey}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
           if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${apikey}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'randombokep':
				client.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				 data = fs.readFileSync('./50Subs/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = jsonData[Math.floor(Math.random() * (jsonData.length))];
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = await fetchJson(randKey.teks)
                 client.sendMessage(from, image, randBokep, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break   
				case 'slide':
				if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${apikey}`, {method: 'get'})
					reply(mess.wait)
					client.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'paper':
				if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
				cpaper = `${body.slice(8)}`
				reply(mess.wait)
				buffer = await getBuffer(`https://api.arugaz.my.id/api/photooxy/text-on-burn-paper?text=${cpaper}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'party':
					if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					part = `${body.slice(7)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${apikey}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'glitch':
				if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    hm = `${body.slice(8)}`
                    text1 = hm.split("|")[0];
                    text2 = hm.split("|")[1];                    
                    glitch = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${text1}&text2=${text2}&apikey=${apikey}`, {method: 'get'})
                    client.sendMessage(from, glitch, image, {quoted: mek, caption: 'nih gan'})
			     	await limitAdd(sender) 
			     	break 
					case 'roman':
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return reply(ind.limitend(pusname))
                    roman = `${body.slice(7)}`
                     reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${apikey}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
					case 'love':
					  if (!isRegistered) return reply(ind.noregis())
			          if (isLimit(sender)) return reply(ind.limitend(pusname))
					  if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
					 love = `${body.slice(6)}`
					 buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${apikey}`, {method: 'get'})
					 client.sendMessage(from, buffer, image, {quoted: mek})
					 await limitAdd(sender)
					 break 
					case 'jokerlogo':
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(11)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/jokerlogo/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
                  case 'wall':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(6)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/breakwall//${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case '2021':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(6)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/newyearcard/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'holographic':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(12)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/holographic/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
					case 'serem':
					if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/halloween/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'metaldark':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(11)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/metaldark/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'strawberry':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(11)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/strawberry/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'ice':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(5)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/icecold/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'bokeh':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/bokeh/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'bunga':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/natureleaves/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'racun':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/toxic/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'holiday':
                  if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(8)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/christmas/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                 case 'blood2':
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/horrorblood/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
				case 'blood':
				if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/bloodfrosted/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
				case 'lawas':
				if (!isGroup) return reply(ind.groupo())
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/text1917/${tahta}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
				case 'tahta1':
                 if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
                   tahta = `${body.slice(7)}`
                    reply(mess.wait)
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${tahta}&apikey=${apikey}`, {method: 'get'})
                     client.sendMessage(from, buffer, image, {quoted: mek})
                  await limitAdd(sender) 
                  break  
                  case 'steel3d':
                if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(9)}`
					reply(mess.wait)
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/steel3d/${gbl1}/${gbl2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 
                  case 'prome':
                if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(7)}`
					reply(mess.wait)
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/space/${gbl1}/${gbl2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 
                case 'pronlogo':
                if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(9)}`
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl1}&text2=${gbl2}&apikey=${apikey}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 
			  case 'apiteks':
				      if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(9)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                    reply(mess.wait)
					bufferxcz = await getBuffer(`https://api.vhtear.com/fire_maker?text=${love}&apikey=${apikey}`, {method: 'get'})
					client.sendMessage(from, bufferxcz, image, {quoted: mek, caption: ' '+love})
					await limitAdd(sender)
					break
	case '#bikinteks':
	case '#bikintext':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
	        const txtnya = await fetch(`http://api-melodicxt-2.herokuapp.com/api/img-text?text=${body.slice(11)}&apiKey=administrator`)
			const txt = await txtnya.json()
			client.sendFileFromUrl(dari, txt.result.result, 'txt.jpg', 'Neh...', id)
			break
	case '#tahta':
	case '#tahta':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
				if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	    client.reply(dari, mess.wait, id)
		const tahtanya = `https://api.vhtear.com/hartatahta?text=${body.slice(7)}&apikey=JanganDiGantiKontol`
		client.sendFileFromUrl(dari, tahtanya, '', 'Anjay bah', id)
		break
	case '#textdaun':
	case '#teksdaun':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     client.reply(dari, mess.wait, id)
		 const daunnya = await fetch(`https://api.zeks.xyz/api/leavest?text=${body.slice(10)}&apikey=apivinz`)
		  const daun = await daunnya.json()
		  client.sendFileFromUrl(dari, daun.result, 'daun.jpg', 'Anjay bah', id)
		  break
	case '#textkopi':
	case '#tekskopi':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     client.reply(dari, mess.wait, id)
		 const kopinya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${body.slice(10)}&apikey=BotWeA`)
		  const kopi = await kopinya.json()
		  client.sendFileFromUrl(dari, kopi.result, 'daun.jpg', 'Anjay bah', id)
		  break
	case '#teksrumput':
	case '#textrumput':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     client.reply(dari, mess.wait, id)
		 const rumputnya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${body.slice(12)}&apikey=BotWeA`)
		  const rumput = await rumputnya.json()
		  client.sendFileFromUrl(dari, rumput.result, 'rumput.jpg', 'Anjay bah', id)
		  break
	case '#tekshp':
	case '#texthp':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     client.reply(dari, mess.wait, id)
		 const hpnya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${body.slice(8)}&apikey=BotWeA`)
		  const hp = await hp.json()
		  client.sendFileFromUrl(dari, hp.result, 'hp.jpg', 'Anjay bah', id)
		  break
    case '#teks8bit':
	case '#text8bit':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	      const lapanbitnya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text=${body.slice(10)}&apikey=BotWeA`)
		  const lapan = await lapanbitnya.json()
		  client.sendFileFromUrl(dari, lapan.result, 'rumput.jpg', 'Anjay bah', id)
		  break
	case '#tekspubg':
	case '#textpubg':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     arg = body.trim().split('|')
		 client.reply(dari, mess.wait, id)
		 const pubgnya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${arg[1]}&text2=${arg[2]}&apikey=BotWeA`)
		  const pubg = await pubgnya.json()
		  client.sendFileFromUrl(dari, pubg.result, 'rumput.jpg', 'Anjay bah', id)
		  break
    case '#teksnaruto':
	case '#textnaruto':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const narutonya = await fetch(`https://api.zeks.xyz/api/naruto?text=${body.slice(12)}&apikey=apivinz`)
		  const naruto = await narutonya.json()
		  client.sendFileFromUrl(dari, naruto.result, 'naruto.jpg', 'Anjay bah', id)
		  break
	case '#tekslol':
	case '#textlol':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	    client.reply(dari, mess.wait, id)
		const lolnya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=league_of_legends&text=${body.slice(9)}&apikey=BotWeA`)
		  const lol = await lolnya.json()
		  client.sendFileFromUrl(dari, lol.result, 'lol.jpg', 'Anjay bah', id)
		  break
    case '#tekscsgo':
	case '#textcsgo':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	    if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	    client.reply(dari, mess.wait, id)
		const csgonya = await fetch(`https://tobz-api.herokuapp.com/api/photooxy?theme=csgo&text=${body.slice(10)}&apikey=BotWeA`)
		  const csgo = await csgonya.json()
		  client.sendFileFromUrl(dari, csgo.result, 'csgo.jpg', 'Anjay bah', id)
		  break
    case '#textballon':
	case '#teksballon':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     client.reply(dari, mess.wait, id)
		 client.sendFileFromUrl(dari, `https://api.arugaz.my.id/api/textpro/foilballoon?text=${body.slice(12)}`, 'daun.jpg', 'Anjay bah', id)
		  break
	case '#textmatrix':
	case '#teksmatrix':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 0) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const matrixnya = `https://naufalhoster.xyz/textmaker/matrix?apikey=JanganDiGantiKontol&text=${body.slice(12)}`
			client.sendFileFromUrl(dari, matrixnya, 'matrix.jpg', 'Anjay bah', id)
			break
	case '#texttechno':
	case '#tekstechno':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const technonya = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${body.slice(12)}&apikey=BotWeA`)
			const techno = await technonya.json()
			client.sendFileFromUrl(dari, techno.result, 'techo.jpg', 'Anjay bah', id)
			break
	case '#textpetir':
	case '#tekspetir':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const textnye = body.slice(11)
			const petirnya = `https://api.vhtear.com/thundertext?text=${textnye}&apikey=JanganDiGantiKontol`
			client.sendFileFromUrl(dari, petirnya, '', 'Anjay bah', id)
            break
	case '#textlava': 
	case '#tekslava':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const lavanyaa = `https://api.arugaz.my.id/api/textpro/lavatext?text=${body.slice(10)}`
			client.sendFileFromUrl(dari, lavanyaa, 'lava.jpg', 'Anjay bah', id)
	case '#textequal':
	case '#teksequal':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const equalnyab = `ttps://api.arugaz.my.id/api/textpro/equalizer?text=${body.slice(11)}`
			client.sendFileFromUrl(dari, equalnyab, 'equal.jpg', 'Anjay bah', id)
			break
	case '#textracun':
	case '#teksracun':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
	    const racunnyac = `https://api.arugaz.my.id/api/textpro/toxictext?text=${body.slice(11)}`
		client.sendFileFromUrl(dari, racunnyac, 'racun.jpg', 'Anjay bah', id)
			break
	case '#textbokeh':
	case '#teksbokeh':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const bokehnyad = `https://api.arugaz.my.id/api/textpro/bokehtext?text=${body.slice(11)}`
			client.sendFileFromUrl(dari, bokehnyad, 'bokeh.jpg', 'Anjay bah', id)
			break
	case '#textgneon':
	case '#teksgneon':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const gneonnyae = `https://api.arugaz.my.id/api/textpro/greenneon?text=${body.slice(11)}`
			client.sendFileFromUrl(dari, gneonnyae, 'gneon.jpg', 'Anjay bah', id)
			break
	case '#textold':
	case '#teksold':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const oldnya = `https://api.arugaz.my.id/api/textpro/old1917?text=${body.slice(9)}`
			client.sendFileFromUrl(dari, oldnya, 'old.jpg', 'Anjay bah', id)
			break
	case '#textholo':
	case '#teksholo':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const holonya = `https://api.arugaz.my.id/api/textpro/holographic?text=${body.slice(10)}`
			client.sendFileFromUrl(dari, holonya, 'holo.jpg', 'Anjay bah', id)
			break
	case '#textglue':
	case '#teksglue':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const gluenya = `https://api.arugaz.my.id/api/textpro/glue3d?text=${body.slice(10)}`
			client.sendFileFromUrl(dari, gluenya, 'glue.jpg', 'Anjay bah', id)
			break
	case '#text3d':
	case '#teks3d':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const textnya = body.slice(8)
			const gbrnya = `https://api.arugaz.my.id/api/flamingtext/text3d?text=${textnya}`
			client.sendFileFromUrl(dari, gbrnya, '', 'Anjay bah', id)
            break
	case '#textsunset':
                    if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
                    const jokqas = body.slice(12)
                    const jokiqas = `http://nzcha-api.herokuapp.com/styletext/senja?text1=${jokqas}`
                    client.sendFile(dari, jokiqas.result, '', 'Anjay bah', id)
                    break
	case '#textbp':
	case '#teksbp':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const textnyo = body.slice(8)
			const bpnya = `https://api.arugaz.my.id/api/textpro/blackpink?text=${textnyo}`
			client.sendFileFromUrl(dari, bpnya, '', 'Anjay bah', id)
            break
	
	case '#textglitch':
	case '#teksglitch':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            if (args.length === 1) return client.reply(dari, 'Silahkan ketik #textglitch text1 text2 Contoh #textglitch Ardi Gans', id)
            if (args.length === 2) return client.reply(dari, 'Silahkan ketik #textglitch text1 text2 Contoh #textglitch Ardi Gans', id)
			arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const text1 = arg[1]
			const text2 = arg[2]
			const glitchnya = `http://docs-jojo.herokuapp.com/api/textpro/glitchtext?text1=${text1}&text2=${text2}`
			client.sendFileFromUrl(dari, glitchnya, '', 'Anjay bah', id)
            break
	case '#textwolf':
	case '#tekswolf':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
           if (args.length === 1) return client.reply(dari, 'Silahkan ketik #textwolf text1 text2 Contoh #textwolf Ardi Gans', id)
           if (args.length === 2) return client.reply(dari, 'Silahkan ketik #textwolf text1 text2 Contoh #textwolf ArdiGans', id)
		   arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const textn = arg[1]
			const textm = arg[2]
			const wolfnya = `https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${textn}&text2=${textm}&apikey=BotWeA`
			client.sendFileFromUrl(dari, wolfnya, '', 'Anjay bah', id)
            break
	case '#textph':
	case '#teksph':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            if (args.length === 0) return client.reply(dari, 'Silahkan ketik #textph text1 text2 Contoh #textph Ardi Gans', id)
          arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
		 const phnya = `https://naufalhoster.xyz/textmaker/pornhub?apikey=JanganDiGantiKontol&text1=${arg[0]}&text2=${arg[1]}`
			client.sendFileFromUrl(dari, phnya, '', 'Anjay bah', id)
            break
	case '#textneon':
	case '#teksneon':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            if (args.length === 0) return client.reply(dari, 'Teksnya mana ??', id)
			client.reply(dari, mess.wait, id)
			const neonnya = `https://api.arugaz.my.id/api/textpro/neontext?text=${body.slice(10)}`
			client.sendFileFromUrl(dari, neonnya, '', 'Anjay bah', id)
            break
	case '#ttg':
	      if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
                 client.reply(dari, mess.wait, id)
                await client.sendStickerfromUrl(dari, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=JanganDiGantiKontol`)
                    .then(() => console.log('Success creating GIF!'))
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(dari, 'Error!', id)
                    })
            break
	 case '#emojisticker':
     case '#emojistiker':
               if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		       if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
                client.reply(dari, mess.wait, id)
                    const bjbjbja = emojiUnicode(args[1])
                    client.sendStickerfromUrl(dari, "https://api.vhtear.com/emojitopng?code=" + bjbjbja + "&apikey=" + "JanganDiGantiKontol")
                    break
	case '#textff':
	case '#teksff':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textff = body.slice(8)
		 const ff = await fetch(`https://api.zeks.xyz/api/epep?text=${textff}&apikey=apivinz`)
		 const ffnya = await ff.json()
		 client.sendFile(dari, ffnya.result, 'epep.jpg', 'Anjay bah', id)
		 break
	case '#textlight':
	case '#tekslight':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textlight = body.slice(11)
		 const light = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${textlight}&apikey=BotWeA`)
		 const lightnya = await light.json()
		 client.sendFile(dari, lightnya.result, 'light.jpg', 'Anjay bah', id)
		 break
	case '#textgplay':
	case '#textgplay':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textgold = body.slice(11)
		 const gold = await fetch(`https://api.zeks.xyz/api/gplaybutton?text=${textgold}&apikey=apivinz`)
		 const goldnya = await gold.json()
		 client.sendFile(dari, goldnya.result, 'gold.jpg', 'Anjay bah', id)
		 break
	case '#textpelangi':
	case '#textpelangi':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const pelangi = await fetch(`https://api.zeks.xyz/api/glowtext?text=${body.slice(13)}&apikey=apivinz`)
		 const pelanginya = await pelangi.json()
		 client.sendFileFromUrl(dari, pelanginya.result, 'pelangi.jpg', 'Anjay bah', id)
		 break
	case '#textgoogle':
	case '#textgoogle':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 arg = body.trim().split('|')
		 const googlenya = `https://api.vhtear.com/googletext?text1=${arg[1]}&text2=${arg[2]}&text3=${arg[3]}&apikey=JanganDiGantiKontol`
		 client.sendFileFromUrl(dari, googlenya, 'gold.jpg', 'Anjay bah', id)
		 break
    case '#textsplay':
	case '#tekssplay':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textsilver = body.slice(11)
		 const silvernya = await fetch(`https://api.zeks.xyz/api/splaybutton?text=${textsilver}&apikey=apivinz`)
		 const silver = await silvernya.json()
		 client.sendFile(dari, silver.result, 'silver.jpg', 'Anjay bah', id)
		 break
	case '#textnatal':
	case '#textnatal':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textnatal = body.slice(11)
		 const natal = await fetch(`https://api.zeks.xyz/api/crismes?text=${textnatal}&apikey=apivinz`)
		 const natalnya = await natal.json()
		 client.sendFile(dari, natalnya.result, 'natal.jpg', 'Anjay bah', id)
		 break
    case '#textlion':
	case '#tekslion':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 if (args.length === 2) return client.reply(dari, 'Silahkan ketik #textlion text1 text2 Contoh #textlion Ardi Gans', id)
		 arg = body.trim().split('|')
		 client.reply(dari, mess.wait, id)
		 const textlion = arg[1]
		 const liontext = arg[2]
		 const lion = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${textlion}&text2=${liontext}&apikey=BotWeA`)
		 const lionnya = await lion.json()
		 client.sendFile(dari, lionnya.result, 'lion.jpg', 'Anjay bah', id)
		 break
	case '#textsnow':
	case '#tekssnow':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const snownya = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${body.slice(10)}&apikey=BotWeA`)
		const snow = await snownya.json()
		client.sendFileFromUrl(dari, snow.result, 'snow.jpg', 'Anjay bah', id)
		break
	case '#textdarcula':
	case '#teksdarcula':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)	
	     const darculanya = `https://carbonnowsh.herokuapp.com/?code=${body.slice(13)}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`
	      client.sendFileFromUrl(dari, darculanya, 'darcula.jpg', 'Anjay bah', id)
	     break
	case '#textml':
	case '#teksml':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 arg = body.trim().split('|')
		 const mlnya = `https://api.vhtear.com/logoml?hero=${arg[1]}&text=${arg[2]}&apikey=JanganDiGantiKontol`
		 client.sendFileFromUrl(dari, mlnya, 'emel.jpg', 'Anjay bah', id)
		 break
	case '#textmarvel':
	case '#teksmarvel':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 if (args.length === 2) return client.reply(dari, 'Silahkan ketik #textmarvel text1 text2 Contoh #textmarvel Ardi Gans', id)
		 arg = body.trim().split('|')
		 client.reply(dari, mess.wait, id)
		 const textmarvel = arg[1]
		 const marveltext = arg[2]
		 const marvel = await fetch(`https://api.zeks.xyz/api/marvellogo?text1=${textmarvel}&text2=${marveltext}&apikey=apivinz`)
		 const marvelnya = await marvel.json()
		 client.sendFile(dari, marvelnya.result, 'marvel.jpg', 'Anjay bah', id)
		 break
	case '#textawan':
	case '#teksawan':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const awannya = await fetch(`http://api-melodicxt-2.herokuapp.com/api/txtcustom?theme=sky_online&text=${body.slice(10)}&apiKey=administrator`)
	        const awan = await awannya.json()
			client.sendFileFromUrl(dari, awan.result, 'awan.jpg', 'Anjay bah', id)
			break
	case '#textcolor':
	case '#tekscolor':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textcolor = body.slice(11)
		 const color = await fetch(`https://api.zeks.xyz/api/colortext?text=${textcolor}&apikey=apivinz`)
		 const colornya = await color.json()
		 client.sendFile(dari, colornya.result, 'color.jpg', 'Anjay bah', id)
		 break
	case '#textfire':
	case '#teksfire':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textfire = body.slice(10)
		 const fire = await fetch(`https://api.zeks.xyz/api/tfire?text=${textfire}&apikey=apivinz`)
		 const firenya = await fire.json()
		 client.sendFile(dari, firenya.result, 'color.jpg', 'Anjay bah', id)
		 break
	case '#textgrafiti':
	case '#teksgrafiti':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textgrafiti = body.slice(13)
		 const grafiti = await fetch(`https://api.zeks.xyz/api/grafiti?text=${textgrafiti}&apikey=apivinz`)
		 const grafitinya = await grafiti.json()
		 client.sendFile(dari, grafitinya.result, 'grafiti.jpg', 'Anjay bah', id)
		 break
	case '#textblood':
	case '#teksblood':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textblood = body.slice(11)
		 const blood = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${textblood}&apikey=BotWeA`)
		 const bloodnya = await blood.json()
		 client.sendFile(dari, bloodnya.result, 'blood.jpg', 'Anjay bah', id)
		 break
	case '#textdarah':
	case '#teksdarah':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const darah = `https://naufalhoster.xyz/textmaker/blood?apikey=JanganDiGantiKontol&text=${body.slice(11)}`
		 client.sendFileFromUrl(dari, darah, 'darah.jpg', 'Anjay bah', id)
		 break
	case '#textpantai':
	case '#tekspantai':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textpantai = body.slice(12)
		 const pantai = await fetch(`https://api.zeks.xyz/api/tpantai?text=${textpantai}&apikey=apivinz`)
		 const pantainya = await pantai.json()
		 client.sendFile(dari, pantainya.result, 'pantai.jpg', 'Anjay bah', id)
		 break
	case '#textwater':
	case '#tekswater':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textwater = body.slice(11)
		 const water = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=dropwater&text=${textwater}&apikey=BotWeA`)
		 const waternya = await water.json()
		 client.sendFile(dari, waternya.result, 'water.jpg', 'Anjay bah', id)
		 break
    case '#textjoker':
	case '#teksjoker':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textjoker = body.slice(11)
		 const joker = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${textjoker}&apikey=BotWeA`)
		 const jokernya = await joker.json()
		 client.sendFile(dari, jokernya.result, 'joker.jpg', 'Anjay bah', id)
		 break
	case '#textasap':
	case '#teksasap':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	     client.reply(dari, mess.wait, id)
		 const asapnya = await fetch(`https://api.zeks.xyz/api/smoketext?text=${body.slice(10)}&apikey=apivinz`)
		  const asap = await asapnya.json()
		  client.sendFileFromUrl(dari, asap.result, 'daun.jpg', 'Anjay bah', id)
		  break
	case '#textgaming':
	case '#teksgaming':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
	   client.reply(dari, mess.wait, id)
		const gamenya = body.slice(12)
		 const gaming = await fetch(`https://api.zeks.xyz/api/crosslogo?text=${gamenya}&apikey=apivinz`)
		 const gamnya = await gaming.json()
		 client.sendFileFromUrl(dari, gamnya.result, 'gaming.jpg', 'Anjay bah', id)
		 break
	case '#textmetal':
	case '#teksmetal':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const metalnya = `https://api.arugaz.my.id/api/textpro/metaldark?text=${body.slice(11)}`
		client.sendFileFromUrl(dari, metalnya, 'metal.jpg', 'Anjay bah', id)
		break
	case '#textwroom':
	case '#tekswroom':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const wroomnya = `https://api.arugaz.my.id/api/flamingtext/wroom?text=${body.slice(11)}`
		client.sendFileFromUrl(dari, wroomnya, 'wroom.jpg', 'Anjay bah', id)
		break
	case '#text3d2':
	case '#teks3d2':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const t3d2nya = `https://api.arugaz.my.id/api/flamingtext/text3d?text=${body.slice(9)}`
		client.sendFileFromUrl(dari, t3d2nya, 'metal.jpg', 'Anjay bah', id)
		break
	case '#textfwater':
	case '#teksfwater':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const fwaternya = `ttps://api.arugaz.my.id/api/flamingtext/water?text=${body.slice(12)}`
		client.sendFileFromUrl(dari, fwaternya, 'metal.jpg', 'Anjay bah', id)
		break
	case '#textbird':
	case '#teksbird':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const birdnya = `https://api.arugaz.my.id/api/flamingtext/blackbird?text=${body.slice(10)}`
		client.sendFileFromUrl(dari, birdnya, 'metal.jpg', 'Anjay bah', id)
		break
	case '#textsmurf':
	case '#tekssmurf':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const smurfnya = `https://api.arugaz.my.id/api/flamingtext/smurf?text=${body.slice(11)}`
		client.sendFileFromUrl(dari, smurfnya, 'metal.jpg', 'Anjay bah', id)
		break
	case '#textmemo':
	case '#teksmemo':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const memonya = `https://api.arugaz.my.id/api/flamingtext/memories?text=${body.slice(10)}`
		client.sendFileFromUrl(dari, memonya, 'metal.jpg', 'Anjay bah', id)
		break
	case '#quote':
    case '#quotes':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            const quotes = await fetch(`https://api-zefian.glitch.me/api/randomquotes`)
			const qts = await quotes.json()
            return await client.reply(dari, `➸ *Author* : ${qts.author} \n➸ *Quotes* : ${qts.quotes}`, id)
            break
	case '#quotesnime':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            const skya = await fetch(`https://api-zefian.glitch.me/api/quotesnime/random`)
            const skya_ = await skya.json()
            client.reply(dari, `➸ *Quotes* : ${skya_.data.quote}\n➸ *Character* : ${skya_.data.character}\n➸ *Anime* : ${skya_.data.anime}`, id)
					break
         case 'yt':
    				if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 DOWNLOADER* 」\n\n• Title : *${anu.title}*\n• *Size:* ${anu.size}\n• *Durasi:* ${anu.duration}\n• *Deskripsi:* ${anu.desc}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buffer = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url_video)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ytt})
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
		    case 'cersex':
           if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${apikey}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'cerpen':
                   if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`, {method: 'get'})
                   cerpen = `• *Title:* ${anu.result.title}\n• *Pengarang:* ${anu.result.pengarang}\n• *Kategori:* ${anu.result.kategori}\n\n${anu.result.cerpen}`
                   client.sendMessage(from, cerpen, text, {quoted: mek})
                   break 
                  case 'playstore':
                  if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
                case 'katabijak':
				if (!isRegistered) return reply(ind.noregis())
			      if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					client.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break 
                    case 'mimpi':
			    if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
			        await limitAdd(sender) 
			       	break 
				case 'yt3':
					if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/yta?url=${args[0]}`)
					if (anu.error) return reply(anu.error)
					yta = `「 *YOUTUBE MP3 DOWNLOADER* 」\n\n• Title : *${anu.title}*\n• *Size:* ${anu.filesize}\n• *Resolusi:* ${anu.resolution}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buffer = await getBuffer(anu.thumb)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: yta})
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
					case 'nulis':
				case 'tulis':
				  client.updatePresence(from, Presence.composing)
				  if (!isRegistered) return reply(ind.noregis())
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			     if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			    reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("|")[0];
					kelas = tulis.split("|")[1];
					isi = tulis.split("|")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					client.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
			case 'instastory':
				if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Upload:* ${story.uploaded}\n• *Berakhir:* ${story.expired}\n• *Size: ${story.filesize}\n• *Type:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
            case 'spamsms':
            if (!isGroup) return reply(ind.groupo())
		    if (!isGroupAdmins) return reply(ind.admin())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			sms = `${body.slice(9)}`
			nomer = sms.split("|")[0];
			jumlah = sms.split("|")[1];
			anu = await fetchJson(`http://itsmeikygans.my.id/spamsms?apikey=itsmeiky633&no=${body.slice(10)}&jum=${jumlah}`, {method: 'get'})
			client.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'bokep':
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
           if (!isGroup) return reply(ind.groupo())
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
		case 'spamcall':
		    if (!isGroup) return reply(ind.groupo())
            if (!isGroupAdmins) return reply(ind.admin())
			if (!isRegistered) return reply(ind.noregis())
	        if (isLimit(sender)) return reply(ind.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'ytsearch':
				if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Title\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Published\`\`\` : *${i.uploadDate}*\n\`\`\`Duration\`\`\` : *${i.duration}*\n\`\`\`Viewers: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Channel:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
		case 'spamgmail':
		    if (!isGroup) return reply(ind.groupo())
		    if (!isGroupAdmins) return reply(ind.admin())
		    if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			client.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
            case 'smule':
	       if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break  
              case 'snack':
			if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buffer = await getBuffer(anu.result)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
                case 'joox':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${apikey}`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
               case 'goku':
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                     reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Goku SuperSaiyan`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption:'Goku!!', quoted: mek })
					await limitAdd(sender)
					break 
         case 'meme':
                   if (!isRegistered) return reply(ind.noregis())
				   if (isLimit(sender)) return reply(ind.limitend(pusname))
                  reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEME INDONESIA`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption:'Ga ketawa autid', quoted: mek })
					await limitAdd(sender)
					break
                  case 'tomp3':
                 if (!isRegistered) return reply(ind.noregis())
				   if (isLimit(sender)) return reply(ind.limitend(pusname))
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
                   reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)

					})

					break
              case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            client.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break
				//freerestapi 
				case 'igstalk':
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
				//daftar 
				case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
				//terhambar 
				case 'quotemaker':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
				//fadli 
				case 'pinterest':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					await limitAdd(sender)
					break 
				case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'nsfwloli':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${apikey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${apikey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${apikey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'nsfwtrap':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${apikey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'animebooty':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/animebooty`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'ahegao':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/ahegao`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'nsfwwaifu':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/waifu`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'ecchi':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/ecchi`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'hentaiparadise':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/hentaiparadise`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'animethighss':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/animethighss`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'hololewd':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/hololewd`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'animefeets':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/animefeets`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'sideoppai':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/sideoppai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'hentai':
				    try {
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${apikey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'nekonime':
					case 'neko':
					if (!isGroup) return reply(ind.groupo())
                    if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(6)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${apikey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
					break
				case 'gantengcek':
				case 'cekganteng':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				//case 'rate':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', text, { quoted: mek })
					break 
				case 'watak':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
				case 'hobby':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					hob =["Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break 
					case 'naruto':
					if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${apikey}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					client.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					case 'loli':

                    if (!isRegistered) return reply(ind.noregis())

				    if (isLimit(sender)) return reply(ind.limitend(pusname))

                    reply(ind.wait())

					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LOLI`, {method: 'get'})

					naru = JSON.parse(JSON.stringify(anu));

					to =  naru[Math.floor(Math.random() * naru.length)];

					nye = await getBuffer(to)

					client.sendMessage(from, nye, image, { caption: '*LOLI* !!', quoted: mek })

					await limitAdd(sender)

					break
				case 'miku':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					case 'tagme':
                if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var no = mek.participant
					const tag = {
					text: `@${no.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [no] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break
				case 'cantikcek':
				case 'cekcantik':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
				case 'tiktok':
				if (!isGroup) return reply(ind.groupo())
				    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('vt')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${apikey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.video)
					client.sendMessage(from, buffer, video, {quoted: mek})
					await limitAdd(sender)
					break
				case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break		
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
				break 
				case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
				case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ytvideo/=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break 
				case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.linkga())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio/${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
				break
			    case 'fototiktok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
				break
				//mhazria 
				case 'resepmasakan':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
				case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'map':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
				case 'halo':
				if (!isGroup) return reply(ind.groupo())
				data = await fetchJson(`https://api.i-tech.id/tagihan/halo?key=${techkey}&no=${body.slice(6)}`)
				teks = `Nomor: ${data.nomor}\nNama: ${data.nama}\nTotal: ${data.total}\nStatus: ${data.status}\ntagihan: ${data.lembar_tagihan}`
				client.sendMessage(from, `${teks}`, MessageType.text, {quoted: mek})
				break
			case 'gas':
			if (!isGroup) return reply(ind.groupo())
				data = await fetchJson(`https://api.i-tech.id/tagihan/gas?key=${techkey}&no=${body.slice(5)}`)
				teks = `Nomor: ${data.nomor}\nNama: ${data.nama}\nTotal: ${data.total}\nStatus: ${data.status}\ntagihan: ${data.lembar_tagihan}`
				client.sendMessage(from, `${teks}`, MessageType.text, {quoted: mek})
				break
			case 'readall':
					if (!isOwner)return reply(mess.only.ownerB)
					if (!ispremium)return reply(mess).only.premiumB)
					var chats = await client.chats.all()
                    chats.map( async ({ jid }) => {
                          await client.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``
					await client.sendMessage(from, teks, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
				break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
				break
				//auto respond 
				case 'ping':
          		if (!isRegistered) return reply(ind.noregis())
           		 await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
               case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'ownermenu': 
				case 'menuowner':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.ownermenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'groupmenu': 
				case 'menugroup':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.groupmenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'soundmenu': 
				case 'menusound':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.soundmenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'makermenu': 
				case 'menumaker':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.makermenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					teks = \`\`\`menu maker patrick tidak semuanya work, karena ada kesalahan apikey ❗,Mohon bersabar🐦\`\`\`
					break
               case 'funmenu': 
				case 'menufun':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.funmenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'mediamenu': 
				case 'menumedia':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.mediamenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'nsfwmenu': 
				case 'menunsfw':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.nsfwmenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'limitmenu': 
				case 'menulimit':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.limitmenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'animemenu': 
				case 'menuanime':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.animemenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'stickermaker': 
				case 'stikermeker':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.stickermaker(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'premiummenu': 
				case 'menupremium':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.premiummenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'plusmenu': 
				case 'menuplus':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.plusmenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
               case 'semuamenu': 
				case 'menusemua':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.semuamenu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *ARDI*\n*AUTHOR* : ARDI\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
				case 'admin':
         	   case 'owner':
         	   case 'premium'
         	   case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, '\`\`\`Tuh nomernya Dia Cogan Lo🐦\`\`\`',MessageType.text, { quoted: mek} )
					break    
				case 'leaderboard':
				case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
				case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6289503750700@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'dompet':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				//no rest api 
				case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rame = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const me = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rame+'*\n\nJawaban : '+ me+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
				break             
              case 'persengay':
			case 'gaypersen':
			  if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				client.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  
			case 'pbucin':
			case 'persenbucin':
			case 'bucinpersen':
			  if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				client.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
                case 'stickergif':
                case 'sgif':
				case 'stiker': 
				case 'sticker':
				case 's':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
						break
	case '#stickpetir':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			client.reply(dari, mess.wait, id)
			const textss = body.slice(12)
			const petirnyis = await fetch(`https://api.zeks.xyz/api/thundertext?text=${textss}&apikey=apivinz`)
			const petirn = await petirnyis.json()
			client.sendStickerfromUrl(dari, petirn.result)
            break
	case '#stickquotes':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			client.reply(dari, mess.wait, id)
	        await client.sendStickerfromUrl(dari, `https://terhambar.com/aw/qts/proses.php?kata=${body.slice(13)}&tipe=random&font=./font/font3.otf&size=200`)
			break
	case '#stickdaun':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	      const daunnyas = await fetch(`https://api.zeks.xyz/api/leavest?text=${body.slice(11)}&apikey=apivinz`)
		  const dauns = await daunnyas.json()
		  client.sendStickerfromUrl(dari, dauns.result)
		  break
	case '#stickballon':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
	      client.sendStickerfromUrl(dari, `https://api.arugaz.my.id/api/textpro/foilballoon?text=${body.slice(13)}`, 'daun.jpg', 'Anjay bah', id)
		  break
	case '#stickmatrix':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const matrixnyas = await fetch(`http://api-melodicxt-2.herokuapp.com/api/txtcustom?theme=matrix&text=${body.slice(13)}&apiKey=administrator`)
	        const matrixs = await matrixnya.json()
			client.sendStickerfromUrl(dari, matrixs.result)
			break
	case '#stickawan':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const awannyas = await fetch(`http://api-melodicxt-2.herokuapp.com/api/txtcustom?theme=sky_online&text=${body.slice(11)}&apiKey=administrator`)
	        const awans = await awannyas.json()
			client.sendStickerfromUrl(dari, awans.result)
			break
	case '#sticktechno':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const technonyas = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${body.slice(13)}&apikey=BotWeA`)
			const technos = await technonyas.json()
			client.sendStickerfromUrl(dari, technos.result)
			break
	case '#stickerfire':
                    if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
                   if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		           client.reply(dari, mess.wait, id)
				   if (isMedia && typu === 'image' || isQuotedImage) {
                        const dataMediaa = isQuotedImage ? quotedMsg : message
                        const mediaData = await decryptMedia(dataMediaa, uaOverride)
                        const getUrli = await uploadImages(mediaData, false)
                        const imgnya = await stickerburn(getUrli)
                        const Sfire = imgnya.result.imgUrl
                        await client.sendStickerfromUrl(dari, Sfire)
                    } else {
                        await client.reply(dari, 'Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !stickerfire', id)
                    }
                    break
	case '#trigger':
                    if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
                   if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		           client.reply(dari, mess.wait, id)
				   if (isMedia && type === 'image' || isQuotedImage) {
                        const dataMe = isQuotedImage ? quotedMsg : message
                        const mediaDt = await decryptMedia(dataMe, uaOverride)
                        const getUr = await uploadImages(mediaDt, false)
                        const imgnyas = `https://api.zeks.xyz/api/triger?apikey=apivinz&img=${getUr}`
                        await client.sendStickerfromUrl(dari, imgnyas)
                    } else {
                        await client.reply(dari, 'Wrong Format!\n⚠️ Harap Kirim Gambar Dengan !stickerfire', id)
                    }
                    break
	case '#stickdarcula':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)	
	     const darculanyas = `https://carbonnowsh.herokuapp.com/?code=${body.slice(14)}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`
	      client.sendFileFromUrl(dari, darculanyas)
	     break
	case '#sticklava':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const lavanya = `https://api.arugaz.my.id/api/textpro/lavatext?text=${body.slice(10)}`
			client.sendStickerfromUrl(dari, lavanya)
			break
	case '#stickequal':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const equalnya = `ttps://api.arugaz.my.id/api/textpro/equalizer?text=${body.slice(11)}`
			client.sendStickerfromUrl(dari, equalnya)
			break
	case '#stickracun':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
	    const racunnya = `https://api.arugaz.my.id/api/textpro/toxictext?text=${body.slice(11)}`
		client.sendStickerfromUrl(dari, racunnya)
			break
	case '#stickbokeh':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const bokehnya = `https://api.arugaz.my.id/api/textpro/bokehtext?text=${body.slice(11)}`
			client.sendStickerfromUrl(dari, bokehnya)
			break
	case '#stickgneon':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const gneonnya = `https://api.arugaz.my.id/api/textpro/greenneon?text=${body.slice(11)}`
			client.sendStickerfromUrl(dari, gneonnya,)
			break
	case '#stickold':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const oldnyah = `https://api.arugaz.my.id/api/textpro/old1917?text=${body.slice(9)}`
			client.sendStickerfromUrl(dari, oldnyah)
			break
	case '#stickholo':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const holonyai = `https://api.arugaz.my.id/api/textpro/holographic?text=${body.slice(10)}`
			client.sendStickerfromUrl(dari, holonyai)
			break
	case '#stickglue':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			if (args.length === 1) return client.reply(dari, 'Teksnya mana??', id)
			client.reply(dari, mess.wait, id)
			const gluenyaj = `https://api.arugaz.my.id/api/textpro/glue3d?text=${body.slice(10)}`
			client.sendStickerfromUrl(dari, gluenyaj)
			break
	case '#stick3d':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			client.reply(dari, mess.wait, id)
			const textnyi = body.slice(8)
			const gbrnyi = `https://api.arugaz.my.id/api/textpro/text3d?text=${textnyi}`
			client.sendStickerfromUrl(dari, gbrnyi)
            break
	case '#stickbp':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
			client.reply(dari, mess.wait, id)
			const textnyu = body.slice(8)
			const bpnyi = `https://api.arugaz.my.id/api/textpro/blackpink?text=${textnyu}`
			client.sendStickerfromUrl(dari, bpnyi)
            break
	case '#stickmeme':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            const responsen = await fetch('https://api.zeks.xyz/api/memeindo?apikey=apivinz')
            const memem = await responsen.json()
            client.sendStickerfromUrl(dari, memem.result, id)
            break
	case '#screed':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            client.sendStickerfromUrl(dari, `http://docs-jojo.herokuapp.com/api/screed?text=${body.slice(8)}`)
            break
	case '#stickglitch':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const glitchnyi = `https://api.arugaz.my.id/api/textpro/glitchtext?text1=${arg[1]}&text2=${arg[2]}`
			client.sendStickerfromUrl(dari, glitchnyi)
            break
	case '#sticktahta':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const tahtalu = arg[1]
	        client.sendStickerfromUrl(dari, `https://api.vhtear.com/hartatahta?text=${tahtalu}&apikey=JanganDiGantiKontol`)
			break
	case '#stickwolf':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const textc = arg[1]
			const textd = arg[2]
			const wolfnyi = `http://docs-jojo.herokuapp.com/api/wolf?text1=${textc}&text2=${textd}`
			client.sendStickerfromUrl(dari, wolfnyi)
            break
	case '#tsticker':
	if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
	   const tstnya = await fetch(`http://api-melodicxt-2.herokuapp.com/api/img-text?text=${body.slice(10)}&apiKey=administrator`)
	   const tst = await tstnya.json()
	   client.sendStickerfromUrl(dari, tst.result.result, id)
	   break
	case '#stickph':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const ph9 = arg[1]
			const ph7 = arg[2]
			const phnyi = `http://docs-jojo.herokuapp.com/api/phblogo?text1=${ph3}&text2=${ph4}`
			client.sendStickerfromUrl(dari, phnyi)
            break
	case '#sticksunset':
                    if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
                    const suns = body.slice(13)
                    const sunset = `http://nzcha-api.herokuapp.com/styletext/senja?text1=${suns}`
                    client.sendStickerfromUrl(dari, sunset.result)
                    break
case '#stickff':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textffs = body.slice(9)
		 const ffs = await fetch(`https://api.zeks.xyz/api/epep?text=${textffs}&apikey=apivinz`)
		 const ffsnya = await ffs.json()
		 client.sendStickerfromUrl(dari, ffsnya.result)
		 break
	case '#sticklight':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textlights = body.slice(12)
		 const lights = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${textlights}&apikey=BotWeA`)
		 const lightnyas = await lights.json()
		 client.sendStickerfromUrl(dari, lightnyas.result)
		 break
	case '#stickgplay':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textgolds = body.slice(12)
		 const golds = await fetch(`https://api.zeks.xyz/api/gplaybutton?text=${textgolds}&apikey=apivinz`)
		 const goldnyas = await golds.json()
		 client.sendStickerfromUrl(dari, goldnyas.result)
		 break
	case '#stickgoogle':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 arg = body.trim().split('|')
		 const googlenyas = `https://api.vhtear.com/googletext?text1=${arg[1]}&text2=${arg[2]}&text3=${arg[3]}&apikey=JanganDiGantiKontol`
		 client.sendStickerfromUrl(dari, googlenyas)
		 break
	case '#sticksplay':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textsilvers = body.slice(12)
		 const silvernyas = await fetch(`https://api.zeks.xyz/api/splaybutton?text=${textsilvers}&apikey=apivinz`)
		 const silvers = await silvernyas.json()
		 client.sendStickerfromUrl(dari, silvers.result)
		 break
	case '#sticknatal':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textnatals = body.slice(11)
		 const natals = await fetch(`https://api.zeks.xyz/api/crismes?text=${textnatals}&apikey=apivinz`)
		 const natalnyas = await natals.json()
		 client.sendStickerfromUrl(dari, natalnyas.result)
		 break
    case '#sticklion':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 if (args.length === 2) return client.reply(dari, 'Silahkan ketik #sticklion text1 text2 Contoh #sticklion Ardi Gans', id)
		 arg = body.trim().split('|')
		 client.reply(dari, mess.wait, id)
		 const textlions = arg[1]
		 const liontexts = arg[2]
		 const lions = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${textlions}&text2=${liontexts}&apikey=BotWeA`)
		 const lionnyas = await lions.json()
		 client.sendStickerfromUrl(dari, lionnyas.result)
		 break
	case '#sticksnow':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const snownyas = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${body.slice(11)}&apikey=BotWeA`)
		const snows = await snownyas.json()
		client.sendStickerfromUrl(dari, snows.result)
		break
	case '#stickmarvel':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 if (args.length === 2) return client.reply(dari, 'Silahkan ketik #stickmarvel text1 text2 Contoh #stickmarvel Ardi Gans', id)
		 arg = body.trim().split('|')
		 client.reply(dari, mess.wait, id)
		 const textmarvels = arg[1]
		 const marveltexts = arg[2]
		 const marvels = await fetch(`https://api.zeks.xyz/api/marvellogo?text1=${textmarvels}&text2=${marveltexts}&apikey=apivinz`)
		 const marvelnyas = await marvels.json()
		 client.sendStickerfromUrl(dari, marvelnyas.result)
		 break
	case '#stickcolor':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textcolors = body.slice(12)
		 const colors = await fetch(`https://api.zeks.xyz/api/colortext?text=${textcolors}&apikey=apivinz`)
		 const colornyas = await colors.json()
		 client.sendStickerfromUrl(dari, colornyas.result)
		 break
	case '#stickfire':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textfires = body.slice(11)
		 const fires = await fetch(`https://api.zeks.xyz/api/tfire?text=${textfire}&apikey=apivinz`)
		 const firenyas = await fires.json()
		 client.sendStickerfromUrl(dari, firenyas.result)
		 break
	case '#stickgrafiti':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textgrafitis = body.slice(14)
		 const grafitis = await fetch(`https://api.zeks.xyz/api/grafiti?text=${textgrafitis}&apikey=apivinz`)
		 const grafitinyas = await grafitis.json()
		 client.sendStickerfromUrl(dari, grafitinyas.result)
		 break
	case '#stickblood':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textbloods = body.slice(12)
		 const bloods = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${textblood}&apikey=BotWeA`)
		 const bloodnyas = await bloods.json()
		 client.sendStickerfromUrl(dari, bloodnyas.result)
		 break
	case '#stickpantai':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textpantais = body.slice(13)
		 const pantais = await fetch(`https://api.zeks.xyz/api/tpantai?text=${textpantais}&apikey=apivinz`)
		 const pantainyas = await pantais.json()
		 client.sendStickerfromUrl(dari, pantainyas.result)
		 break
	case '#stickwater':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textwaters = body.slice(12)
		 const waters = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=dropwater&text=${textwaters}&apikey=BotWeA`)
		 const waternyas = await waters.json()
		 client.sendStickerfromUrl(dari, waternyas.result)
		 break
    case '#stickjoker':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
		 const textjokers = body.slice(12)
		 const jokers = await fetch(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${textjokers}&apikey=BotWeA`)
		 const jokernyas = await jokers.json()
		 client.sendStickerfromUrl(dari, jokernyas.result)
		 break
	case '#stickgaming':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
	   client.reply(dari, mess.wait, id)
		const gamenyas = body.slice(13)
		 const gamings = await fetch(`https://api.zeks.xyz/api/crosslogo?text=${gamenyas}&apikey=apivinz`)
		 const gamnyas = await gamings.json()
		 client.sendStickerfromUrl(dari, gamnyas.result)
		 break
	case '#stickmetal':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const metalnyas = `https://api.arugaz.my.id/api/textpro/metaldark?text=${body.slice(12)}`
		client.sendStickerfromUrl(dari, metalnyas)
		break
	case '#stickwroom':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const wroomnyas = `https://api.arugaz.my.id/api/flamingtext/wroom?text=${body.slice(12)}`
		client.sendStickerfromUrl(dari, wroomnyas)
		break
	case '#stick3d2':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const t3d2nyas = `https://api.arugaz.my.id/api/flamingtext/text3d?text=${body.slice(10)}`
		client.sendStickerfromUrl(dari, t3d2nyas)
		break
	case '#stickfwater':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const fwaternyas = `https://api.arugaz.my.id/api/flamingtext/water?text=${body.slice(12)}`
		client.sendStickerfromUrl(dari, fwaternyas)
		break
	case '#stickbird':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const birdnyas = `https://api.arugaz.my.id/api/flamingtext/blackbird?text=${body.slice(11)}`
		client.sendStickerfromUrl(dari, birdnyas)
		break
	case '#sticksmurf':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		const smurfnyas = `https://api.arugaz.my.id/api/flamingtext/smurf?text=${body.slice(12)}`
		client.sendStickerfromUrl(dari, smurfnyas)
		break
	case '#stickneon':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			const textxs = arg[1]
			const textts = arg[2]
			const texths = arg[3]
			const neonnyis = `http://docs-jojo.herokuapp.com/api/neon?text1=${textxs}&text2=${textts}&text3=${texths}`
			client.sendStickerfromUrl(dari, neonnyis)
            break	
	case '#customtahta':
		if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
            arg = body.trim().split('|')
			client.reply(dari, mess.wait, id)
			 const noon = `https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=JanganDiGantiKontol&text1=${arg[1]}&text2=${arg[2]}&text3=${arg[3]}`
			client.sendFileFromUrl(dari, noon, 'custom.jpg', 'Neh..', id)
            break	
			case '#stickml':
	case '#stickerml':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		 client.reply(dari, mess.wait, id)
	     arg = body.trim().split('|')
		 const textmls = arg[2]
		 const mlnyas = `https://api.vhtear.com/logoml?hero=arg[1]&text=${textmls}&apikey=JanganDiGantiKontol`
		 client.sendStickerfromUrl(dari, mlnyas)
		 break
	case '#sticker2':
		      if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
              if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
			  if (args.length == 0) return client.reply(dari, `Untuk mencari sticker dari pinterest\nketik: ${prefix}sticker2 [search]\ncontoh: ${prefix}sticker2 naruto`, id)
            const cariwallu = body.slice(8)
            const hasilwallu = await images.fdci(cariwallu)
            await client.sendStickerfromUrl(dari, hasilwallu, '', '', id)
            .catch(() => {
                client.reply(dari, 'Ada yang Error!', id)
				break
	 case '#stickerbokep':
	 case '#stickhot':
	 case '#stickbokep':
	if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       client.reply(dari, mess.wait, id)
	   const bokepi = ['https://i.ibb.co/8jRQ01J/IMG-20201205-223443-917.jpg','https://i.ibb.co/KKzmXzY/IMG-20201206-033352-192.jpg','https://i.ibb.co/8srYLFL/IMG-20201206-034512-690.jpg','https://i.ibb.co/B32Nq01/E0yui-GCvum-STqdm-G2-6-Os-FBJYMh2-Vd-Da4ayhip-Ub-B4-Xx-Cl-H7-Vt-Ju-j-J-s-Ri-A9kww-Q83-GFPnp-W9nl-Zva.jpg','https://i.ibb.co/9psS49T/Lvu-JQ8-Ut-AELo-AGZ0o-F9-RDQNk-W28e-QHj-CZPo-Ak-Wm2u-Rey-RAay-Ku-Ub4-f2-P-m-F6-DLdc67l-Ko-IRy-NZZIth.jpg','https://i.ibb.co/BVB8fbj/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/BTFg7yT/IEsp-UDTc6-YFw-Hro-E3-Eq-VXGgo-PV8-4-Il4-HWy-Usc-Kw-JMVW4ql-WVBOSzmxjz6-W6r-Dw4-E2-GPo7cygc-HH6-XFy7.jpg','https://i.ibb.co/bsJfgz7/H3-GSk-Spdcw-Uc-E8t-Mk-A5-ZM6y-MO2-Kk-Fdp5qxr-E0ju-Y3-N-Dx-Ln-YWp-Epx2jug-DEFg-LAloq-1g5-NYr-A2tz-O4.jpg','https://i.ibb.co/KNsD0tT/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/g6Fwp8S/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/gPFMxr6/image.png','https://i.ibb.co/0YPwyVc/image.png','https://i.ibb.co/vCWZWQP/image.png','https://i.ibb.co/c66fNtR/image.png','https://i.ibb.co/XDB3nxX/image.png','https://i.ibb.co/s9dJRr1/image.png','https://i.ibb.co/tqXh4c7/image.png','https://i.ibb.co/ZBBxgqy/image.png','https://i.ibb.co/jWx7DHR/image.png','https://i.ibb.co/SRQ590w/image.png','https://i.ibb.co/CsL5XWy/image.png','https://i.ibb.co/zsSh5t8/image.png','https://i.ibb.co/L9M2pH4/image.png','https://i.ibb.co/q53mKTp/image.png','https://i.ibb.co/12myv6w/image.png','https://i.ibb.co/yhbnjtR/image.png']
	   let bokepio = bokepi[Math.floor(Math.random() * bokepi.length)]
		   client.sendStickerfromUrl(dari, bokepio)
		   break
    case '#randomgif':
	case '#rgif':
	if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
    client.reply(dari, mess.wait, id)
	const giffo = ['https://c.tenor.com/wgX4i8giG9wAAAAj/mochi-peachcat-cat.gif','https://c.tenor.com/UUhe2fIowxAAAAAj/love-mochi.gif','https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif','https://media.tenor.com/images/ebb65bb0ca7bdd155c198a066ecfcb92/tenor.gif','https://media.tenor.com/images/75b3c8eca95d917c650cd574b91db7f7/tenor.gif','https://media.tenor.com/images/492a250e5ac486d298ec88e71079eeb1/tenor.gif','https://media.tenor.com/images/6321fa6690d59b2f37c25ce0d271cb6c/tenor.gif','https://media.tenor.com/images/ec85a866a451e1a47008ac6a8534d1c4/tenor.gif','https://media.tenor.com/images/73b6bc522e27fcc81fcdbf7012bdd323/tenor.gif','https://media.tenor.com/images/e411846cebbe99eb56e42a4d188cf5ca/tenor.gif','https://media.tenor.com/images/b418cde4ddb9ed4a8548500048d3bafb/tenor.gif','https://media.tenor.com/images/a13ada2790e7e128cd87958c9d166073/tenor.gif','https://media.tenor.com/images/f2f20ce49f0ecc1c3315c146e737bdc9/tenor.gif','https://media.tenor.com/images/23bfa35425bcd3794bea802adb5b9bfc/tenor.gif','https://media.tenor.com/images/eafc0f0bef6d6fd135908eaba24393ac/tenor.gif','https://media.tenor.com/images/d4173fe821ee176f5077ba98d7cdf417/tenor.gif','https://media.tenor.com/images/9164f10a0dbbf7cdb6aeb46184b16365/tenor.gif','https://media.tenor.com/images/3a9d2bd1bde9ed8ea02b2222988be6da/tenor.gif','https://media.tenor.com/images/fae2bbbba0be4db589e47dac43e266f9/tenor.gif','https://media.tenor.com/images/f599d464f0041f9899f8ec41a8e280ac/tenor.gif','https://media.tenor.com/images/8d94e004d553aa9edbb38c823454e421/tenor.gif','https://media.tenor.com/images/269250f1277adbbdafff69f2595ece0c/tenor.gif','https://media.tenor.com/images/558ebbab68370c33c69517b341c3f627/tenor.gif']
	let giffok = giffo[Math.floor(Math.random() * giffo.length)]
		   client.sendStickerfromUrl(dari, giffok)
		   break
    case '#giphysticker':
	case '#gpsticker':
	if (!isRegistered) return await client.reply(dari, `Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#





*`, id)
    client.reply(dari, mess.wait, id)
	const giph = ['http://i.imgur.com/UGw1mKB.gif','http://i.imgur.com/pqnXV9o.gif','http://25.media.tumblr.com/3001a8872eff95532084422a9e3bbb5e/tumblr_mgt8eaMwyS1r75klfo1_250.gif']
	      let giphy = giph[Math.floor(Math.random() * giph.length)]
		   client.sendStickerfromUrl(dari, giphy)
		   break
	case '#patrickgif':
	case '#gifpatrick':
	   if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         client.reply(dari, mess.wait, id)
		 const patric = ['https://media.tenor.com/images/1f73d3b99fc0e8edc83d42b42ac54dd3/tenor.gif','https://media.tenor.com/images/4c22f6e140a8985084d91b1de596b84b/tenor.gif','https://media.tenor.com/images/aa5230a94e9417487ceae9ad432d66d3/tenor.gif','https://media.tenor.com/images/f6b093b763e7d716dd7d25cfa7af46bc/tenor.gif','https://media.tenor.com/images/5751fce6378d5aa8ae5f09167a4430d2/tenor.gif','https://media.tenor.com/images/38d85cb97f2438e31bb6b1f441a1b862/tenor.gif','https://media.tenor.com/images/1263f70a2fb28a9512b8dd0c9c16b3af/tenor.gif','https://media.tenor.com/images/18c974ee6d824dde7170f6c40bb14bc6/tenor.gif','https://media.tenor.com/images/ff7a1b585d019c58862afc5075338606/tenor.gif','https://media.tenor.com/images/a71554b96df82b06fbaa2510a906b847/tenor.gif','https://media.tenor.com/images/2a3cfb4899aca0b8b772490320948363/tenor.gif','https://media.tenor.com/images/89296e552a8f155726f37e5d883776e1/tenor.gif']
	     let patrick = patric[Math.floor(Math.random() * patric.length)]
	     client.sendStickerfromUrl(dari, patrick, 'Neh..', id)
		 break
    case '#patrickstick':
	case '#stickpatrick':
	case '#patricksticker':
	case '#stickerpatrick':
	     if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
         const pati = ['https://ibb.co/cbQS7Tx','https://ibb.co/HpFMhqq','https://ibb.co/DMYpBJy','https://ibb.co/4KtL6VZ','https://ibb.co/VSkKVdY','https://ibb.co/GxgsMFf','https://ibb.co/hHSC82g','https://ibb.co/jWnW0XG','https://ibb.co/Vw9FjPq','https://ibb.co/s24LJ9P','https://ibb.co/7j07dGL','https://ibb.co/n3DgpV1','https://ibb.co/1z4Hk0Y','https://ibb.co/2WNykDP','https://ibb.co/5v9sHsX']
	     client.reply(dari, mess.wait, id)
		 let patri = pati[Math.floor(Math.random() * pati.length)]
	     client.sendStickerfromUrl(dari, patri)
		 break
	case '#randomsticker':
	case '#randomstick':
	case '#randomstik':
	case '#rstick':
	case '#rstik':
	if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
           const walnimeo = ['https://camo.githubusercontent.com/9c184e56a76795eaeb8e7584424520de07a9aa4db57323f626ef9ff7730f62b9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f34644d3155373661415133646245366263332f67697068792e676966','https://camo.githubusercontent.com/0afcc6050ce6d1858e1f8136ad418fadea998a0188ae20364504ed6c9bbb6b2c/68747470733a2f2f696d61676573352e616c706861636f646572732e636f6d2f3931312f3931313631342e706e67','https://raw.githubusercontent.com/mhankbarbar/whatsapp-bot/master/media/img/Kaguya.png','https://images.alphacoders.com/605/thumb-350-605592.png','https://images5.alphacoders.com/481/thumb-350-481903.png','https://images7.alphacoders.com/611/thumb-350-611138.png','https://images4.alphacoders.com/476/thumb-350-47698.png','https://images2.alphacoders.com/727/thumb-350-72732.png','https://images5.alphacoders.com/314/thumb-350-314574.png','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
		   client.reply(dari, mess.wait, id)
		   let walnimeok = walnimeo[Math.floor(Math.random() * walnimeo.length)]
		   client.sendStickerfromUrl(dari, walnimeok)
		   break
            case '#stickerlightning':
            case '#slightning':
                if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)       
		        if (isMedia && type === 'image' || isQuotedImage) {
                    await client.reply(dari, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData, `lightning.${sender.id}`)
                    sticker.stickerLight(imageLink)
                        .then(async ({ result }) => {
                            await client.sendStickerfromUrl(dari, result.imgUrl)
                                .then(async () => {
                                    console.log(`Sticker processed for a seconds`)
                                    await client.sendText(dari, `ok`)
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(dari, `Error!\n${err}`, id)
                        })
                } else {
                    await client.reply(dari, `Format salah!`, id)
                }
            break
			case '#stickerhentai':
			case '#shentai':
			if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)       
			     client.reply(dari, mess.wait, id)
				 const hentayo = ['http://i4.xxxhentaigallery.com/photos/204/747-part.jpg','http://i1.xxxhentaigallery.com/photos/193/809__8.jpg','http://i2.xxxhentaigallery.com/photos/165/356_Kidmo.jpg','http://i4.xxxhentaigallery.com/photos/192/811___.jpg','http://i2.xxxhentaigallery.com/photos/179/075_.jpg','http://i1.xxxhentaigallery.com/photos/174/070_Zeroshiki.jpg','http://i1.xxxhentaigallery.com/photos/132/678__Captain_.jpg']
				 let hentayok = hentayo[Math.floor(Math.random() * hentayo.length)]
				 client.sendStickerfromUrl(dari, hentayok, '', 'Neh...', id)
				 break
	case '#stickernobg':
    case '#stikernobg':
	case '#sticknobg':
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
		if (isMedia && isQuotedImage) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: '5LXrQ1MAYDnE1iib6B6NaHMv', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(dari, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break
	case '#stickmemo':
	case '#stickermemo':
	    if (isAfk) return await client.reply(dari, `Maaf ${pushname}, Kamu sedang afk! Ketik #unafk untuk mematikan`, id)
		if (!isRegistered) return await client.reply(dari, `*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Patrick|17*`, id)
       if (args.length === 1) return client.reply(dari, 'Teks nya mana??', id)
		client.reply(dari, mess.wait, id)
		arg = body.trim().split('|')
		const smemonya = `https://api.arugaz.my.id/api/flamingtext/memories?text=${body.slice(11)}`
		client.sendStickerfromUrl(dari, smemonya)
					}
				break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
				break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) 
					reply(anu)
				break 
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗱𝗮?? 𝗷𝗮𝗱𝗶 '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '𝘂𝘀𝗲??𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
				break
				//group feature 
				case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				break 
				case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break 
				case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner/premium`)
                      if (isOwner)
                      if (isPremium) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'grup':
				case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} 𝗷𝗮??𝗮??𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗺𝘂 𝘀??𝗱𝗮𝗵 𝗱𝗶 𝗰𝗼𝗽𝗼𝘁🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱?? 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ngab² :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break 
					case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ngab² :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮??𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
                  case 'delete':
					case 'del':
					case 'd':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
               case 'kicktime':
                   if (!isBotGroupAdmins) return reply(ind.badmin())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'disable') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break
				case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
					
				//admin feature 
				case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isPremium) return reply(ind.premiumb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (!isPremium) return reply(ind.premiumg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			  	case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* ❗')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸??𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
				break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
				break 
				case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
				case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('SUCCESS CHANGE PROFILE GROUP')
					break				
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				if (!isPremium) return reply(ind.premiumb())
				await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'broadcast': 
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (!isPremium) return reply(ind.premiumb())
					if (isNaN(args[0])) return reply('Limitnya angka bukan titid🐦')
                    memberlimit = args[0]
                    reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
				     if (!isPremium) return reply(ind.premiumb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
					
					
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*! PATRICK`)
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
