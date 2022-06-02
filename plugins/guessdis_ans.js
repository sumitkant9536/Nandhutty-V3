const similarity = require('similarity')
const threshold = 0.72
module.exports = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*hintw/i.test(m.quoted.text)) return !0
        this.guessdis = this.guessdis ? this.guessdis : {}
        if (!(id in this.guessdis)) return m.reply('The matter has ended')
        if (m.quoted.id == this.guessdis[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.guessdis[id][1]))
            // m.reply(JSON.stringify(json, null, '\t'))
            if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += this.guessdis[id][2]
                m.reply(`*Correct!*\n+${this.guessdis[id][2]} XP`)
                clearTimeout(this.guessdis[id][3])
                delete this.guessdis[id]
            } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*a little more!*`)
            else m.reply(`*Wrong!*`)
        }
        return !0
    },
    exp: 0
}
