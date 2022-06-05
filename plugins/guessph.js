
const fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.guessph = conn.guessph ? conn.guessph : {}
    let id = m.chat
    if (id in conn.guessph) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.guessph[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/sumitkant9536/database/master/games/guesspic.json'))).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} second*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
    `.trim()
  conn.guessph[id] = [
    await conn.sendFile(m.chat, json.img, 'guesspic.jpg', caption, m, false),
    json, poin,
        setTimeout(() => {
            if (conn.guessph[id]) conn.reply(m.chat, `Time is up!\nThe Answer Is *${json.answer}*`, conn.guessph[id][0])
            delete conn.guessph[id]
        }, timeout)
    ]
}
handler.help = ['guessph']
handler.tags = ['game']
handler.command = /^guessph/i

module.exports = handler
