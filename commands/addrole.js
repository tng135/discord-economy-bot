const Discord = require("discord.js");
const db = require("quick.db");

permissionOverwrites = {
  allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_ROLES']
}

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('y!'))return;

    let user = message.mentions.members.first()

    let role = message.guild.roles.cache.find(r => r.name === "Shot");

    let timeout = 10000;

    let gun = db.fetch(`gun_${message.guild.id}_${message.author.id}`)

    let killer = message.author;

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    let embed4 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:x:618736570337591296> You dont have any guns`);

    // or the person who made started the command: let member = message.member;
    let embed5 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:crossed_swords:618736570337591296> You shot ${user.user.username}`);

    if (gun < .5) {
        return message.channel.send(embed4)
    } else {
        member.roles.add(role).catch(console.error);
        db.subtract(`gun_${message.guild.id}_${message.author.id}`, 1)
        message.channel.send(embed5)
        await new Promise(r => setTimeout(r, 86400000));
        member.roles.remove(role).catch(console.error);
    }

    //adds the role

  }

module.exports.help = {
  name:"shoot",
  aliases: ["shoot"]
}
