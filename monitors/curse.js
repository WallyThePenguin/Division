const { Monitor } = require('klasa');

module.exports = class extends Monitor {

    constructor(...args) {
        super(...args, {
            enabled: true,
            ignoreBots: true,
            ignoreSelf: true,
            ignoreOthers: false // 0.4.0-dev only
        });
    }

    run(msg) {
        const cWords = [
        `fuck`,
        `arse`,
        `ass`,
        `asshole`,
        `shit`,
        `motherfucker`,
        `slut`,
        `dickface`,
        `shitface`,
        `cock`,
        `cocksucker`,
        `porn`,
        `pornhub`,
        `assface`
    ];
        if (cWords.some(words => msg.content.includes(words))) {
           { msg.delete()
msg.reply(`Bad words aren't allowed on this server...`)
          }
        }
    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};