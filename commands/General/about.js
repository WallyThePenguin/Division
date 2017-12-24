const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            cooldown: 0,
            aliases: [],
            permLevel: 0,
            botPerms: [],
            requiredSettings: [],
            description: '',
            usage: '',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }

    async run(msg, [...params]) {
        const embed = new this.client.methods.Embed()
        .setTitle('About Division -')
        .setAuthor(this.client.user.username, this.client.user.displayAvatarURL())
        .setColor(0x00AE86)
        .setDescription('Hi, I\'m Division, a bot that gets new features for normal, regular commands.🤖')
        .setURL('https://discord.me/ovd')
        .addField('What can I do?',
          'For a sneak-peak at what I can do type **%help**.', true)
        .addField('Talk To My Developer!', 'Come join us [here](https://discord.me/ovd).', true)
        .addField('Bot Status', `Servers: ${this.client.guilds.size}\nUsers: ${this.client.users.size}\nLast Updated: ${Math.floor(((((this.client.uptime / 1000) / 60) / 60) / 24))} Days ${Math.floor((((this.client.uptime / 1000) / 60) / 60))} Hours ${Math.floor(((this.client.uptime / 1000) / 60))} Minutes`, true)
        .addField('Updates', 
        'For a full list of update features please check out the [Changelog](https://github.com/WallyThePenguin/Division).', true)
      return msg.reply({ embed })
    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
