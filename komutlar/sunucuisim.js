const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {

message.guild.setName('Soulless? #KimseBaş?')
message.guild.setIcon(``)
 }
  
  
  

message.delete()
};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucuismi'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'isim',
  description: 'Sunucu adını ve resmini değistirir.', 
  usage: 'isim'
};