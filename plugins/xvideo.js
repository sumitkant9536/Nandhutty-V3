let fetch = require('node-fetch')
let handler = async(m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `Please enter the title \n\n\nExample : .xvideosearch you and elaina`
    let res = await fetch(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Judul:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xvideosearch <tittle>']
handler.tags = ['nsfw']
handler.command = /^(xvideosearch)$/i
handler.private = false
handler.limit = 1

module.exports = handler
