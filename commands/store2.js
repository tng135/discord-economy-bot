const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;

    if (args[0] == 'bronze') {

      let embed = new Discord.MessageEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more coins from robbing someone")
      .setColor("#FF0000")
      message.channel.send(embed)
    } else if(args[0] == 'gun') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**gun**\n\nBenefits: use it to kill people you dont like")
      .setColor("#FF0000")
      message.channel.send(embed)
    } else if(args[0] == 'farm') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**farm**\n\nBenefits: use them to get money from child labor")
      .setColor("#FF0000")
      message.channel.send(embed)
    } else if(args[0] == 'gulag') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Gulag**\n\nBenefits: you get money from cobalt mine")
      .setColor("#FF0000")
      message.channel.send(embed)
  } else if(args[0] == 'house') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**house**\n\nBenefits: this is the most expesive usless item you can buy")
    .setColor("#FF0000")
    message.channel.send(embed)
  }

  }


  module.exports.help = {
    name:"storeinfo",
    aliases: ["si"]
  }
