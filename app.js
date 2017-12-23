const { Client } = require('klasa');

new Client({
    clientOptions: {
        apiRequestMethod: 'sequential',
        fetchAllMembers: false
    },
    prefix: '+',
    cmdEditing: true,
    cmdPrompt: false,
    cmdLogging: true,
    typing: true,
    quotedStringSupport: false,
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
}).login('your-bot-token');
