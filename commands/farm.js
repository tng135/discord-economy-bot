const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;

    let user = message.author;
    let author = await db.fetch(`farmmoney_${message.guild.id}_${user.id}`)

    let timeoutfarm = 86400000;

    if (author !== null && timeoutfarm - (Date.now() - author) > 0) {
        let time = ms(timeoutfarm - (Date.now() - author));

        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> ${user} You have already farmed recently\n\nTry again in ${time.hours}h ${time.minutes}m `);
        message.channel.send(timeEmbed)
      } else {

        let balance = db.fetch(`money_${message.guild.id}_${user.id}`)
        let farm = db.fetch(`farm_${message.guild.id}_${user.id}`)

        let Embed13 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> You dont have any farms`);

        let farmcount = db.fetch(`farm_${message.guild.id}_${user.id}`)

        if (farmcount < .5) return message.channel.send(Embed13)

        let replies = ['Factory Worker','Farmer','Builder','Busboy','Chief','Mechanic']

        let amount = Math.floor(Math.random() * 0) + 100 * farm;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> ${user} farmed and earned ${amount} coins`);
        message.channel.send(embed1)

        db.add(`money_${message.guild.id}_${user.id}`, amount)
        //amount += balance = bal
        db.set(`farmmoney_${message.guild.id}_${user.id}`, Date.now())
        console.log(`${user} Worked and made`, amount);
    };
}



module.exports.help = {
  name:"farm",
  aliases: ["fm"]
}
