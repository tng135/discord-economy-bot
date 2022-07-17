const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('y!'))return;
  if(!message.member.roles.cache.find(r => r.name === "Overseer"))return;

  let user = message.author;

  let bal = db.fetch(`govmoney_`)

  if (bal === null) bal = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`**Government's Balance**\n\nBalance: ${bal}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"govbalance",
  aliases: ["govbal"]
}
