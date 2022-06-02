/*
Made by Sirius
*/

let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
    let trut = [
"Have you ever taken your parents' money or not?",
"Have you ever lied to any parent?\nTell me about the lie",
"What food do you like?",
"Who wants to be a girlfriend in this GC?",
"What's your worst nightmare?",
"What's the most embarrassing thing about your friend?",
"Have you ever liked anyone? How long?",
"If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
"What is your biggest fear?",
"Have you ever liked someone and felt that person likes you too?",
"What is the name of your friend's ex-girlfriend that you used to secretly like?",
"Have you ever stolen money from your father or father? The reason?",
"What makes you happy when you're sad?",
"Have you ever had a one-sided love? If you've ever been with who? How does it feel, bro?",
"Have you ever been someone's mistress?",
"The most feared thing",
"Who is the most influential person in your life?",
"What are you proud of this year?",
"Who can make you great :v",
"Who is the person who has ever made you great?",
"(For Muslims) have you ever not prayed all day?",
"Who is closest to your ideal type of partner here",
"Do you like mabar (playing together) with who?",
"Ever rejected people? the reason why?",
"Name an incident that made you feel hurt that you still remember.",
"What have you achieved this year?",
"What's your worst habit at school?",
"when was the last time you Masturbation?"
]  // add your own words
	conn.sendFile(m.chat, img, 'maker.jpeg', `*Truth*\n\n“${pickRandom(trut)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
