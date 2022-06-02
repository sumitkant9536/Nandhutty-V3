const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.testing1 = conn.testing1 ? conn.testing1 : {}
    let id = m.chat
    if (id in conn.testing1) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.testing1[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/sumitkant9536/database/master/games/tebakbendera2.json')
    if (res.status != 200) throw await res.text()
        let json = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.img}

Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}fmhint for help
Bonus: ${poin} XP
    `.trim()
    conn.testing1[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.testing1[id]) conn.reply(m.chat, `Time is up!\nThe Answer Is *${json.jawaban}*`, conn.testing1[id][0])
            delete conn.testing1[id]
        }, timeout)
    ]
}
handler.help = ['testing1']
handler.tags = ['game']
handler.command = /^testing1/i

module.exports = handler
