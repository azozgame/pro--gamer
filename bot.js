const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on("ready", () => {
  function lol() {
    client.guilds.get('id server').roles.find("name", "『pro gamer』").setColor("RANDOM");
  }
  setInterval(lol, 6000);
})


 
  












// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
