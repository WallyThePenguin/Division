const { Command } = require('klasa')
const config = require('../../config/config.json')
const absentrole = [
  '393505548558925854'
];
module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      name: 'absent',
      enabled: true,
      runIn: ['text', 'dm', 'group'],
      cooldown: 0,
      aliases: ['abs'],
      permLevel: 0,
      botPerms: ['MANAGE_ROLES'],
      requiredSettings: [],
      description: 'For Valid Divinity use only',
      quotedStringSupport: false,
      usage: '<reason|urgent> <reas:str> [...]',
      usageDelim: ' ',
      extendedHelp: 'No extended help available.'
    })
  }

  async run (msg, [abs, ...reas]) {
    msg.delete()
    const final = await reas.join(' ')
    if (msg.guild.id !== '393927898144440332') return msg.channel.send('Sorry this is a command only meant for EZL Staff Server.')
    switch (abs) {
      case 'reason':
        await this.client.channels.get('394352377647333386').send(final)
        return msg.channel.send('Worked, Cya l8er Alligator!')
        break
        return msg.channel.send('Sorry, this is a EZL Command Only :smiley:')
    }
  }

  async init () {
    // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
  }
}
