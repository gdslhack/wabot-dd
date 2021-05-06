global.owner = ['628973006000','62895373771812'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.vhtear.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.vhtear.com': '2e79255a57ae41fdbab902bea1d8e9fe'
}

// Sticker WM
global.packname = 'halo ngab'
global.author = 'dpramadan'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
