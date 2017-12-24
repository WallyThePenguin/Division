const { Client, PermissionLevels } = require('klasa')
const config = require('./config/config.json')

const client = new Client({
  clientOptions: {
    fetchAllMembers: true
  },
  prefix: '-',
  cmdEditing: true,
  cmdLogging: true,
  typing: true,
  readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
})

client.login(config.botToken)
