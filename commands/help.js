const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;


    let embed = new Discord.MessageEmbed()
    .setTitle("Help Center [Prefix y!]")
    .addField("Economy Commands", "`pay` `balance` `profile` `withdraw` `deposit` `shoot` `store` `buy` `sell`")
    .addField("Economy Extra Commands", "`storeinfo [item]`")
    .setColor("#FF0000")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}
