let handler = async (m, { conn }) => {
    conn.whoami = conn.whoami ? conn.whoami : {}
    let id = m.chat
    if (!(id in conn.whoami)) throw false
    let json = conn.whoami[id][1]
    m.reply('```' + json.jawaban.replace(/[AUIEOaiueo]/g, '_') + '```')
}
handler.command = /^whhint$/i
handler.limit = true
module.exports = handler
