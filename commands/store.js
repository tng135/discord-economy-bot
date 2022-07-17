const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;


    let embed = new Discord.MessageEmbed()
    .setDescription("**Lifestyle Items**\n\nGuns: 200 [y!buy gun]\nFarms: 800 [y!buy farm]\nFactories: 1800 [y!buy factory]\nColonies: 2800 [y!buy colony]\nHouse: 1200 [y!buy house]")
    .setColor("#FF0000")
    message.channel.send(embed)
    console.log(`${user} Checked Store`);




}


module.exports.help = {
  name:"store",
  aliases: ["shop"]
}
