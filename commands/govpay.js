const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('y!'))return;
  if(!message.member.roles.cache.find(r => r.name === "Overseer"))return;

  let user = message.mentions.members.first()

  let member = db.fetch(`govmoney_`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:x:618736570337591296> Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:x:618736570337591296> Specify an amount to pay`);

  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:x:618736570337591296> You can't pay someone negative money`);

  if (message.content.includes('-')) {
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:x:618736570337591296> The government doesnt that much money`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:money_with_wings:618736570337591296> The government has payed ${user.user.username} ${args[1]} coins`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`govmoney_`, args[1])
  console.log(`${user} paid ${user.user.username} ${args[1]} coins`);

}

module.exports.help = {
  name:"govpay",
  aliases: ["gp"]
}
