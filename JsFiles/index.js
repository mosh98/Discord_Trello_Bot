
'use strict';

const Discord = require('discord.js');
const {prefix,token,webhookId,webhookToken,trelloBoardId} = require('../config.json');
const client = new Discord.Client();
var Trello = require("trello");
var trello = new Trello("b6ff93f1a80809117aff665d95d2463e", "3116bc38d08c88744b55c835a5d1f950c559407ea3905590d2e87fa10953759c");


//Urgent/important : 5d8ba1a4cbcda784c1d23099




let flag = false;

client.on('message', message => {
   // if(message.content.startsWith(`${prefix},`)){
        try{
            if(flag == false)
                AddToTrelz(message);

        }catch(e){
            console.error(e);
        }


})



function AddToTrelz(Title){
    flag= true;
    trello.addCard(Title.toString() , "", "5d8ba1a4cbcda784c1d23099",

        function (error, trelloCard) {
                console.log('Added card:', trelloCard);

                Title.channel.send("Card has been created");



        })
}

client.login(token);


