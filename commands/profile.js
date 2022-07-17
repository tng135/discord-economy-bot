const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('y!'))return;

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let gun = await db.fetch(`gun_${message.guild.id}_${user.id}`)
  if(gun === null) gun = '0'

  let newcar = await db.fetch(`farm_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`**${user}'s Profile**\n\nPocket: ${money}\nBank: ${bank}\n\n**Inventory**\n\nGuns: ${gun}\nFarms: ${newcar}\nHouse: ${newhouse}`);
  message.channel.send(moneyEmbed)
  console.log(`${user}'s Profile\nPocket: ${money}\nBank: ${bank}\nInventory\nGuns: ${gun}\nFarms: ${newcar}\nHouse: ${newhouse}`);
};

module.exports.help = {
  name:"profile",
  aliases: ["inv"]
}
