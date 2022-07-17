const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('y!'))return;

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 86400000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));

        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:x:618736570337591296> ${user} You have already worked recently\n\nTry again in ${time.hours}h ${time.minutes}m `);
        message.channel.send(timeEmbed)
      } else {

        let balance = db.fetch(`money_${message.guild.id}_${user.id}`)

        let replies = ['Factory Worker','Farmer','Builder','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 59) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:money_with_wings:618736570337591296> ${user} worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)

        db.add(`money_${message.guild.id}_${user.id}`, amount)
        //amount += balance = bal
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
        console.log(`${user} Worked and made`, amount);
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}
