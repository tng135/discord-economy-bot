const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('y!'))return;

  let user = message.mentions.members.first() || message.author;

  let gun = await db.fetch(`gun_${message.guild.id}_${user.id}`)
  if(gun === null) gun = '0'


  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`**${user}'s Gun Balance**\n\n**Inventory**\n\nGuns: ${gun}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"gunbal",
  aliases: ["gb"]
}
