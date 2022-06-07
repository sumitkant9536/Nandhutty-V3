let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch(`https://api.kaysa.xyz/api/${command}?apikey=KaysaS`)
  if (!res.ok) throw 'Error Website server down'
  let json = await res.json()
  if (!json.video) throw 'Error!'
   conn.sendFile(m.chat, json.video, 'meme.mp4', `Global Random`, m)
}
handler.help = ['jjfreefire', 'jjml', 'jjpubg', 'jjanime']
handler.tags = ['fun']
handler.command = /^(jjfreefire|jjml|jjpubg|jjanime)$/i

handler.limit = true

module.exports = handler
