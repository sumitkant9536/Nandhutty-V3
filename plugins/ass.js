let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '', m)
}
handler.help = ['asupan']
handler.tags = ['tools']
handler.command = /^asupan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.nsfw = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
