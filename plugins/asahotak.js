let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'not answered!', conn.asahotak[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/sumitkant9536/database/master/games/asahotak.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}oo for help
Bonus: ${poin} XP
`.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, author, 'Help', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Time up!\nThe answer is *${json.result.jawaban}*`, author, 'Asah Otak', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^usebrain/i

module.exports = handler
