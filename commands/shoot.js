//const Discord = require("discord.js");
//const db = require("quick.db");

//module.exports.run = async (bot, message, args, utils) => {
  //if(!message.content.startsWith('wd!'))return;

  //let user = message.mentions.members.first()
  //let killer = message.author;

  //let member = db.fetch(`gun_${message.guild.id}_${message.author.id}`)

  //let embed1 = new Discord.MessageEmbed()
  //.setColor("#FFFFFF")
  //.setDescription(`<:x:618736570337591296> ${killer} Mention someone to shoot`);

  //if (!user) {
      //return message.channel.send(embed1)
  //}

  //let embed4 = new Discord.MessageEmbed()
  //.setColor("#FFFFFF")
  //.setDescription(`<:x:618736570337591296> ${killer} you dont have any guns`);

  //if (member < .5) {
      //return message.channel.send(embed4)
  //}

  //let embed5 = new Discord.MessageEmbed()
  //.setColor("#FFFFFF")
  //.setDescription(`<:crossed_swords:618736570337591296> ${killer} shot ${user.user.username}`);

  //message.channel.send(embed5)
  //db.subtract(`gun_${message.guild.id}_${message.author.id}`, 1)
  //console.log(`${killer} shot ${user.user.username} ${args[1]}`);

//}

module.exports.help = {
  name:"old",
  aliases: ["old"]
}
