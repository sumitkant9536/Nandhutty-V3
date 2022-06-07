let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) throw `Please enter the tittle\n\n\nExample : .xnxxsearch brutal sex`
    let res = await fetch(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xnxxsearch <tittle>']
handler.tags = ['nsfw']
handler.command = /^(xnxxsearch)$/i

handler.private = true
handler.limit = 6

module.exports = handler
