

var Trello = require('trello-node-api')("b6ff93f1a80809117aff665d95d2463e","3116bc38d08c88744b55c835a5d1f950c559407ea3905590d2e87fa10953759c");

var data = {
    name: 'MOSH TEST',
    desc: 'Card description',
    pos: 'top',
    idList: '5d8ba1a4cbcda784c1d23099', //REQUIRED
    due: null,
    dueComplete: true,
    idMembers: ['MEMBER_ID', 'MEMBER_ID', 'MEMBER_ID'],
    idLabels: ['LABEL_ID', 'LABEL_ID', 'LABEL_ID'],
    urlSource: 'https://example.com',
    fileSource: 'file',
    idCardSource: 'CARD_ID',
    keepFromSource: 'attachments,checklists,comments,due,labels,members,stickers'
};
Trello.card.create(data).then(function (response) {
    console.log('response ', response);
}).catch(function (error) {
    console.log('error', error);
});