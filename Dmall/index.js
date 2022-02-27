const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const config = require('./config.json');
const token = config.token;
const { greenBright } = require('chalk')
const { yellow } = require('chalk')
const prefix = config.prefix;
const noob = config.ID;


client.on("ready", () => {
  console.log(`Use withought abuse`)
  console.log(`Prefix : ${prefix}`)
  console.log(`Credit to 𝓛𝓾𝓷𝓪🌙`)
  client.user.setActivity({ type: "WATCHING", name: `𝓛𝓾𝓷𝓪🌙` });
});


client.on("message", message => {

if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != noob) {
      return message.reply(`Couldn't find your User ID in Database.`)
    }
    else {
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult + ` ${member.user}`).then(console.log(greenBright(` [+] Successfull DM | ${member.user.username}#${member.user.discriminator}#${member.user}`))).catch(e => console.error(yellow(`[+] Retrying | ${member.user.username}#${member.user.discriminator}`)));      })
    }
  }

})

console.log(`Granted!.`)
console.log(`XD`)



client.login(token);
