const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;

    let user = message.author;
    let farmcount = db.fetch(`farm_${message.guild.id}_${user.id}`)

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:x:618736570337591296> You need 2000 coins to purchase Bronze VIP`);

    if(args[0] == 'gun') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You need 200 coins to purchase a gun`);

        if (author < 200) return message.channel.send(Embed2)

        db.fetch(`gun_${message.guild.id}_${user.id}`)
        db.add(`gun_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> You purchased a gun For 200 Coins`);
        console.log(`${user} bought a gun`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 200)
        message.channel.send(Embed3)
    } else if(args[0] == 'farm') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You need 800 coins to purchase a farm`);

        let Embed13 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You have to many farms`);

        if (author < 800) return message.channel.send(Embed2)
        if (farmcount > 2.5) return message.channel.send(Embed13)

        db.add(`farm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> You purchased a new farm For 800 Coins`);
        console.log(`${user} bought a farm`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'house') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You need 1200 coins to purchase a house`);

        if (author < 1200) return message.channel.send(Embed2)

        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> You purchased a house For 1200 Coins`);
        console.log(`${user} bought a house`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else if(args[0] == 'factory') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You need 800 coins to purchase a factory`);

        if (author < 800) return message.channel.send(Embed2)

        db.fetch(`factory_${message.guild.id}_${user.id}`)
        db.add(`factory_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> You purchased a new factory For 800 Coins`);
        console.log(`${user} bought a factory`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'colony') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You need 800 coins to purchase a colony`);

        if (author < 800) return message.channel.send(Embed2)

        db.fetch(`colony_${message.guild.id}_${user.id}`)
        db.add(`colony_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> You purchased a new colony For 800 Coins`);
        console.log(`${user} bought a colony`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> Enter an item to buy`)
        message.channel.send(embed3)
    }

}

  module.exports.help = {
    name:"buy",
    aliases: [""]
  }
