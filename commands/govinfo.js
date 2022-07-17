const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;

    if (args[0] == 'govpay') {
      let embed = new Discord.MessageEmbed() /////`govpay` `govbal` `tax` `taxall` `jail` `shoot` `unjail
      .setDescription("**GovPay**\n\nUse: Pays people")
      .setColor("#FF0000")
      message.channel.send(embed)
    } else if(args[0] == 'govbal') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**GovBal**\n\nUse: Checks the governments balance")
      .setColor("#FF0000")
      message.channel.send(embed)
    } else if(args[0] == 'tax') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Tax**\n\nUse: Only taxes one person")
      .setColor("#FF0000")
      message.channel.send(embed)
    } else if(args[0] == 'jail') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Jail**\n\nUse: Puts people in jail")
    .setColor("#FF0000")
    message.channel.send(embed)
  } else if(args[0] == 'shoot') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Shoot**\n\nUse: Executes people")
    .setColor("#FF0000")
    message.channel.send(embed)
  } else if(args[0] == 'unjail') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Unjail**\n\nUse: Unjails people")
    .setColor("#FF0000")
    message.channel.send(embed)
  }

  }


  module.exports.help = {
    name:"govinfo",
    aliases: ["gi"]
  }
