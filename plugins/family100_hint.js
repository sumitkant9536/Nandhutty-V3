let handler = async (m, { conn }) => {
    conn.family100 = conn.family100 ? conn.family100 : {}
    let id = m.chat
    if (!(id in conn.family100)) throw false
    let json = conn.family100[id][1]
    m.reply('```' + json.jawaban.replace(/[AUIEOaiueo]/g, '_') + '```')
}
handler.command = /^fmhint$/i
handler.limit = true
module.exports = handler
