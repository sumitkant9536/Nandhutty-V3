//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Please enter URL as text \n\nExample : .xnxxdl https://www.xnxx.com/video-13ezat5c/fuck_while_other_is_away`
    let res = await fetch(`https://api.zacros.my.id/nsfw/xnxx-download?link=${text}`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.files.low, 'bkp.mp4', `Title : ${json.result.title}\nLink : ${json.result.link}\n\nVideo msih kurang HD ?coba klik link di bawah ini \n\n\nHD : ${json.result.files.high}`, m)
}
handler.help = ['xnxxd *link*']
handler.tags = ['nsfw']
handler.command = /^xnxxd$/i

handler.private = false
handler.limit = 1

module.exports = handler
