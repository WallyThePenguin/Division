const facts = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ]
    
    const { Command } = require('klasa')
    
    module.exports = class extends Command {
      constructor (...args) {
        super(...args, {
          name: 'diceroll',
          enabled: true,
          runIn: ['text', 'dm', 'group'],
          cooldown: 0,
          aliases: ['dice'],
          permLevel: 0,
          botPerms: [],
          requiredSettings: [],
          description: 'Gives you a random dice roll from 1-10',
          quotedStringSupport: false,
          usage: '',
          usageDelim: undefined,
          extendedHelp: 'No extended help available.'
        })
      }
    
      async run (msg) {
        return msg.reply('number rolled is... ' + facts[Math.floor(Math.random() * facts.length)])
      }
    
      async init () {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
      }
    }
    