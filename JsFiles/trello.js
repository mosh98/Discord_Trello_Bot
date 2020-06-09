


var Trello = require("trello");
var trello = new Trello("b6ff93f1a80809117aff665d95d2463e", "3116bc38d08c88744b55c835a5d1f950c559407ea3905590d2e87fa10953759c");




//Here you can add cards
/*trello.addCard('Fix Trello Bot ', 'Anatuan', "5dbf2029a2683747c473c29d",
    function (error, trelloCard) {
        if (error) {
            console.log('Could not add card:', error);
        }
        else {
            console.log('Added card:', trelloCard);
        }
    });*/


// Get all registered tokens and webhooks
// Url will look like: https://api.trello.com/1/members/me/tokens?webhooks=true&key=YOURKEY&token=YOURTOKEN

trello.makeRequest('get', '/1/members/me/tokens', { webhooks: true })
    .then((res) => {
        console.log(res)
    });