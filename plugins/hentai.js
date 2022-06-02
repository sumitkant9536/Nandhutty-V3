let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.jpg', '', m)
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
"http://cdn.awwni.me/16c8v.jpg",
"http://i.imgur.com/06YTAjg.jpg",
"http://i.imgur.com/0cXfzlu.jpg",
"http://i.imgur.com/0skVenv.jpg",
"http://i.imgur.com/16rGP2n.jpg",
"http://i.imgur.com/2ixz0tk.jpg",
"http://i.imgur.com/3z74PMH.jpg",
"http://i.imgur.com/4PYuCei.jpg",
"http://i.imgur.com/7xWnKOn.jpg",
"http://i.imgur.com/C30p5wA.jpg",
]
