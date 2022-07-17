const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;

    let user = message.author;

    if(args[0] == 'gun') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736602901905418> You don't have guns to sell`);

        let nikeses = await db.fetch(`gun_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)

        db.fetch(`gun_${message.guild.id}_${user.id}`)
        db.subtract(`gun_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> ${user} Sold a Gun For 200 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 200)
        message.channel.send(Embed3)
        console.log(`${user} sold a gun`);
    } else if(args[0] == 'farm') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> ${user} You don't have a Farm to sell`);

       let cars = await db.fetch(`farm_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)

        db.fetch(`farm_${message.guild.id}_${user.id}`)
        db.subtract(`farm_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> ${user} Sold a Farm For 800 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
        console.log(`${user} sold farm`);
    } else if(args[0] == 'house') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> ${user} You don't have a house to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)

        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> ${user} Sold a house For 1200 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
        console.log(`${user} sold house`);
    };

}

  module.exports.help = {
    name:"sell",
    aliases: [""]
  }
