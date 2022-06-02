let handler = async (m, { conn }) => {
    conn.guessdis = conn.guessdis ? conn.guessdis : {}
    let id = m.chat
    if (!(id in conn.guessdis)) throw false
    let json = conn.guessdis[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEO]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^hint$/i
handler.limit = true
module.exports = handler
