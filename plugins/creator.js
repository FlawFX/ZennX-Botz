import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

 let thumb = 'https://telegra.ph/file/84ee8b87faa10d35eb755.jpg'
 
let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: 'Click untuk chat owner',
  address: botdate,
  url: nomorowner,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: 'tes',
  jpegThumbnail: await( await fetch(thumb)).buffer()
}}, { quoted: fpay })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
