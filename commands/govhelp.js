const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;


    let embed = new Discord.MessageEmbed()
    .setTitle("Help Center [Prefix wd!]")
    .addField("Government Commands", "`govpay` `govbal` `tax` `taxall` `jail` `shoot` `unjail`")
    .addField("Extra Government Commands", "`govinfo [command]`")
    .setColor("#FF0000")
    message.channel.send(embed)




}

module.exports.help = {
  name:"govhelp",
  aliases: [""]
}
