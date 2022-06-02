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
    let res = await fetch('https://raw.githubusercontent.com/sumitkant9536/database/master/games/tebakkata.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}hint for help
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
handler.help = ['guessword']
handler.tags = ['game']
handler.command = /^guessword/i

module.exports = handler
