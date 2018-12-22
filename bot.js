const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on("ready", () => {
  function lol() {
    client.guilds.get('499971880401371137').roles.find("name", "『pro gamer』").setColor("RANDOM");
  }
  setInterval(lol, 3000);
})


 
  












// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
