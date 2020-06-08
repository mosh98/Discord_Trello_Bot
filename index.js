
'use strict';

const Discord = require('discord.js');
const {token,webhookId,webhookToken,trelloBoardId} = require('./config.json');
const client = new Discord.Client();


// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

fetch('https://api.trello.com/1/webhooks/{5d8ba1a4c9620d33d9b87c3f}', {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => {
        console.log(
            `Response: ${response.status} ${response.statusText}`
        );
        return response.text();
    })

/**
 *
 * This is where the app is gonna send a message to discord
 * @type {module:"discord.js".WebhookClient}
 */
//const hook = new Discord.WebhookClient(webhookId,webhookToken);
//hook.send("im captain hook, Arrg") // this is where the bot is gonna send things.
//client.login(token);

