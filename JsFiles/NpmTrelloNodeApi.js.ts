
/** This class is Obsolete, please ignore them*/

//var trelloNode = require('trello-node-api')("b6ff93f1a80809117aff665d95d2463e", "427335a5f7660b74134755d39f8c2a6356d8e62085e177eff9c8c3268184b9a3");

import * as TrelloNodeAPI from 'trello-node-api';
const Trello = new TrelloNodeAPI();
Trello.setApiKey("b6ff93f1a80809117aff665d95d2463e");
Trello.setOauthToken("427335a5f7660b74134755d39f8c2a6356d8e62085e177eff9c8c3268184b9a3");


//export TRELLO_API_KEY="b6ff93f1a80809117aff665d95d2463e";
//export TRELLO_OAUTH_TOKEN="427335a5f7660b74134755d39f8c2a6356d8e62085e177eff9c8c3268184b9a3";

let data = {
    name: 'CARD_NAME',
    desc: 'Card description',
    pos: 'top',
    idList: 'LIST_ID', //REQUIRED
    due: null,
    dueComplete: false,
    idMembers: ['MEMBER_ID', 'MEMBER_ID', 'MEMBER_ID'],
    idLabels: ['LABEL_ID', 'LABEL_ID', 'LABEL_ID'],
    urlSource: 'https://example.com',
    fileSource: 'file',
    idCardSource: 'CARD_ID',
    keepFromSource: 'attachments,checklists,comments,due,labels,members,stickers'
};
let response;
try {
    response = await Trello.card.create(data);
} catch (error) {
    if (error) {
        console.log('error ', error);
    }
}
console.log('response', response);

/*

async function foo(){
    let data = {
        description: 'Discord Bot (CaptainHook)',
        callbackURL: 'https://discordapp.com/api/webhooks/716625143169941505/R1xKKFtGf7mQUNdzfMSxld5vcdJWZB7-3KXYCK5sljX3zaWpB0cX8xKg2suUkrGGmp_q', // REQUIRED
        idModel: '5dbf2029a2683747c473c29d', // REQUIRED
        active: false
    };
    let response;

    try {

        response = await Trello.webhook.create(data);
    } catch (error) {
        if (error) {
            console.log('error ', error);
        }
    }
    console.log('response', response);
}

foo();
*/

