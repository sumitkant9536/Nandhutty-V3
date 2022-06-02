let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '', m)
}
handler.help = ['hentai']
handler.tags = ['tools']
handler.command = /^hentai$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://www.reddit.com/r/hentai/top/?t=all",
"https://www.reddit.com/r/HentaiHumiliation/top/?t=all",
"https://www.reddit.com/r/HentaiPics/top/?t=all",
"https://www.reddit.com/r/HentaiLovers/top/?t=all",
"https://www.reddit.com/r/Hentai4Everyone/top/?t=all",
"https://www.reddit.com/r/ecchi/top/?t=all",
"https://www.reddit.com/r/MonsterGirl/top/?t=all",
"https://www.reddit.com/r/sukebei/top/?t=all",
"https://www.reddit.com/r/yaoi/top/?t=all"
]
