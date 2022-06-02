let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.guessdis = conn.guessdis ? conn.guessdis : {}
    let id = m.chat
    if (id in conn.guessdis) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.guessdis[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/tebakkata', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}puzzle for help
Bonus: ${poin} XP
`.trim()
    conn.guessdis[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.guessdis[id]) conn.reply(m.chat, `Time is up!\nThe Answer Is *${json.result.jawaban}*`, conn.guessdis[id][0])
            delete conn.guessdis[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^guessdis/i

module.exports = handler
