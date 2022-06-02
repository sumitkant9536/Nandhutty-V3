let handler = async (m, { conn }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (!(id in conn.tebaklirik)) throw false
    let json = conn.tebaklirik[id][1]
    m.reply('```' + json.jawaban.replace(/[AUIEOaiueo]/g, '_') + '```')
}
handler.command = /^teli$/i
handler.limit = true
module.exports = handler
