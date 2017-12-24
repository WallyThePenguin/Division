const facts = [
'Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.',
'There are cats who have survived falls from over 32 stories (320 meters) onto concrete.',
'A group of cats is called a clowder.',
'Cats have over 20 muscles that control their ears.',
'Cats sleep 70% of their lives.',
'A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.',
'one cat ran for mayor of Mexico City in 2013.',
'In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.',
'When cats grimace, they are usually "taste-scenting." They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.',
'Cats cant taste sweetness.',
'Owning a cat can reduce the risk of stroke and heart attack by a third.',
'Wikipedia has a recording of a cat meowing because why not?',
'In the 1960s, the CIA tried to turn a cat into a bonafide spy by implanting a microphone into her ear and a radio transmitter at the base of her skull. She somehow survived the surgery but got hit by a taxi on her first mission.',
'The technical term for "hairball" is "bezoar."',
'Female cats are typically right-pawed while male cats are typically left-pawed',
'Cats make more than 100 different sounds whereas dogs make around 10.',
'A cats brain is 90% similar to a humans — more similar than to a dogs.',
'Cats and humans have nearly identical sections of the brain that control emotion.',
'A cats cerebral cortex (the part of the brain in charge of cognitive information processing) has 300 million neurons, compared with a dogs 160 million.',
'Cats have a longer-term memory than dogs, especially when they learn by actually doing rather than simply seeing.'
]
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
        return msg.reply(facts[Math.floor(Math.random() * facts.length)])
        
    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
