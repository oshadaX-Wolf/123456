require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6289675733552"
global.namaowner = "Ipennzcooll"
global.namaowner2 = "Ipennzcooll"

//======== Setting Bot & Link ========//
global.namabot = "IPENNZ NEED TOBRUT" 
global.namabot2 = "IPEEN NEED CEKER BABAT"
global.version = "v0.0.1"
global.foother = "Created By Ipennz"
global.waowner = "https://wa.me/6289675733552"
global.linkgc = 'https://whatsapp.com/channel/0029VamIHdd8qIzqrbIgXp0w'
global.linkgc2 = "https://whatsapp.com/channel/0029VamIHdd8qIzqrbIgXp0w"
global.linkqris = "https://telegra.ph/file/ddb03c59576a3f472d440.jpg"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 8500
global.delayjpm = 8000

//========== Setting Foto ===========//
global.imgreply = fs.readFileSync("./media/Reply.jpg")
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = fs.readFileSync("./media/Slide.jpg")

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi "Belum Tersedia"
global.dana = "-"
global.gopay = "Belum Tersedia"
global.ovo = "Belum Tersedia"
global.qris = fs.readFileSync("./media/Qris.jpg")
                             
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Bang *Cima Reall.*"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})