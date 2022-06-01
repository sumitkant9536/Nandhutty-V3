const quotes = require('../lib/jagokata')
let handler = async (m, { command, args, usedPrefix }) => {
    let er = `contoh:\n\n${usedPrefix + command} cinta

┌「 *Options* 」
├ love
├ miss
├ dream
├ alone
├ bepatient
├ sadness
├ wedding
├ independence

by Ariffb, thanks to Wildan Izzudin
https://neoxr-api.herokuapp.com/docs`
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'love':
        case 'miss':
        case 'dream':
        case 'alone':
        case 'patient':
        case 'sadness':
        case 'wedding':
        case 'independence':
            quotes(args[0].toLowerCase()).then(res => {
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                m.reply(`“${quote}”\n\n${author} - ${bio}`)
            })
            break
        default:
            throw er
    }
}
handler.help = ['katabijak'].map(v => v + ' <opsi>')
handler.tags = ['internet']
handler.command = /^(katabijak|jagokata)$/i

module.exports = handler
