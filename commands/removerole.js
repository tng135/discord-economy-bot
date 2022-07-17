const Discord = require("discord.js");
const db = require("quick.db");

permissionOverwrites = {
  allow: ['VIEW_CHANNEL', 'MANAGE_CHANNELS', 'MANAGE_ROLES']
}

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('y!'))return;

    let user = message.mentions.members.first()

    let role = message.guild.roles.cache.find(r => r.name === "Shot");

    let health = 4

    let killer = message.author;

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    // or the person who made started the command: let member = message.member;
    let embed5 = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:heart:618736570337591296> ${killer} Revived ${user.user.username}`);

    if (health < 5) {
        member.roles.remove(role).catch(console.error);
        //db.subtract(`gun_${message.guild.id}_${message.author.id}`, 1)
        message.channel.send(embed5)
    }

    //adds the role

  }

module.exports.help = {
  name:"ncf79346b5f835897m3489n7346h87f53n4vyt9848mtn3333347tn9b48n7m435f7983475v348cn5798347cnbv7f4385fm9343v0756m894n6",
  aliases: ["763428726b48327463274662792946289g43289743h927492"]
}
