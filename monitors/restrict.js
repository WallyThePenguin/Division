const { Monitor } = require('klasa');

module.exports = class extends Monitor {

    constructor(...args) {
        super(...args, {
            enabled: false,
            ignoreBots: true,
            ignoreSelf: true,
            ignoreOthers: false // 0.4.0-dev only
        });
    }

    run(msg) {
        if(message.member.roles.exists("name", "Jamie's Executive")) return
        if(message.channel.id === "381930040528470026"){

        }
          }
        
    

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};