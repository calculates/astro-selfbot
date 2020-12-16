const Discord = require('discord.js');
const client = new Discord.Client()
const colors = require('colors');
const setTitle = require('console-title');
const config = require('./config.json')

function devil () {
    console.log(`
                                .s5SSSs.                                          
                                      SS. .s5SSSs.  .s5SSSSs. .s5SSSs.      .s5SSSs.  
                                sS    S%S       SS.    SSS          SS.           SS. 
                                SS    S%S sS    ':;    S%S    sS    S%S     sS    S%S 
                                SSSs. S%S ':;;;;.      S%S    SS .sS;:'     SS    S%S 
                                SS    S%S       ;;.    S%S    SS    ;,      SS    S%S 
                                SS    ':;       ':;    ':;    SS    ':;     SS    ':; 
                                SS    ;,. .,;   ;,.    ;,.    SS    ;,.     SS    ;,. 
                                :;    ;:' ':;;;;;:'    ;:'    '':    ;:'    ':;;;;;:' 
                                                                                    `. blue)
console.log('                                                                                                                  ')
console.log('                                                                                                                  ')
console.log('                                          All rights reserved § Astro 2020                                        '.white)
console.log('                                              Tool made by: such#1111                                             '.white)
console.log('                                                                                                                  ')
console.log(`                         ┌───────────────────────────────────────────────────────────────────┐                    `. white)
console.log(`                         │ ${client.user.username} está de olho em tudo, e todos...                      │                    `. white)
console.log(`                         └───────────────────────────────────────────────────────────────────┘                    `. white) 
console.log(' ')
setTitle("Astro - Ready")
}
function clear () {
    console.clear()
}
client.on("ready", ready => {
  console.log('root@astro~ node app.js' .green)
  setTitle("Astro - Loading")
  setTimeout(clear, 2000)
  setTimeout(devil, 2000)
})

client.on('message', msg => {
    if (msg.author.id !== client.user.id) return;
    if (msg.author.bot) return;
    if (!msg.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  
    const args = msg.content
      .trim().slice(config.prefix.length)
      .split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      const commandFile = require(`./commands/${command}.js`)
      commandFile.run(client, msg, args);
    } catch (err) {
      console.error('Error => ' + err);
    }
  });

client.login(config.token);
