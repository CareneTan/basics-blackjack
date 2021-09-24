//function to create deck
var makeDeck = function () {
  var deck = [];
  var suits = ['hearts','diamonds', 'clubs', 'spades'];
  var suitIndex = 0;
  while (suitIndex < suits.length){
    var currentSuit = suits[suitIndex];

    //loop to create all cards in this suit
    //rank 1-13
    var counter= 1;
    while (counter <= 13){
      var rankCounter = counter;
      var cardName = rankCounter;

      //For 1,11,12,13 need to change the name 
      if (cardName ==1){
        cardName = 'ace';
      } 
      else if (cardName == 11){
        rankCounter = 10; //why use rank counter here?
        cardName ='jack';
      }
      else if (cardName == 12){
        rankCounter = 10;
        cardName = 'queen';
      }
      else if (cardName == 13){
        rankCounter =10;
        cardName = 'king';
      }

      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      deck.push(card);
      
      counter = counter + 1; 
      console.log (counter);
    }
    suitIndex = suitIndex + 1;
  }
  
  return deck;
}

// function to generate random number
var getRandomIndex = function (size){
  return Math.floor (Math.random() *size);
}

//fucntion to shuffle cards and generate random number
var shuffleCards = function (cardDeck) {
var currentIndex = 0;
while (currentIndex < cardDeck.length) {
var randomIndex = getRandomIndex(cardDeck.length);
var randomCard = cardDeck[randomIndex];
var currentCard = cardDeck[currentIndex];
cardDeck[currentIndex] = randomCard;
cardDeck[randomIndex] = currentCard;
currentIndex = currentIndex + 1;
}
return cardDeck;
};

//global variable for game mode for message
//types of game mode = 'start game', 'hit or stand'
var gameMode = 'Start game';
var myOutputValue;

//global variable to store player & dealer cards in array & value
var playerHand = [];
var playerHandValue = '';
var computerHand = [];
var computerHandValue = '';

//global variable to check if player or computer gets BlackJack
var playerBlackJack = '';
var computerBlackJack = '';

//global variable: For Ace value conversion
var playerAceCardValue;
var playerAceCounter = 0;
var computerAceCardValue;
var computerAceCounter = 0;
var playerAceInHand = false;
var computerAceInHand = false;

// create deck of cards upon loading 
var cardDeck = shuffleCards (makeDeck()); 

//If BlackJack is true in first round
var checkBlackJack = function(cardsInHand){
  if ((cardsInHand[0].name == 'ace' && cardsInHand[1].rank == '10') || (cardsInHand[0].rank == '10' && cardsInHand[1].name == 'ace')){
    return true;
  } else {
    return false;
  }
}
console.log (checkBlackJack)

//function to return output of cards
  var outputOfCards = function (cardsInHand){
    var cards = '';
    var handIndex=0;
    while (handIndex <cardsInHand.length {
      cards = cards + ' , ' + cardsInHand[handIndex].emojiName + ' of ' + cardsInHandp[handIndex].suit;
      handIndex += 1;
    }
    return cards;
  }

//function to provide output message if blackjack or proceed to ask player if hit or stand
var outcomeOfCheckBlackJack = function (playerBlackJack, computerBlackJack){
  if (playerBlackJack == true && computerBlackJack != true){
    gameMode = 'Start Game';
    return myOutputValue = `You got ${outputOfCards(playerHand)}. <br> BLACKJACK! You win the game!`
  } else if (playerBlackJack == true && computerBlackJack == true){
    gameMode = 'Start Game';
    return myOutputValue = `You got ${outputOfCards(playerHand)}. Computer got ${computerHand}. Both of you got a BLACKJACK! Its a tie!`
  }
  else {
    gameMode = 'Hit or Stand';
    if (playerAceInHand == true && playerAceCardValue <=21){
      return myOutputValue = `You got ${outputOfCards (playerHand)} and your total value can be ${playerHandValue} or ${playerAceCardValue}. <br> The first card computer got was ${computerHand[0].name}. <br> Please choose Hit or Stand.`
    }
    else {
      return myOutputValue = `You got ${outputOfCards(playerHand)} and your total value is ${playerHandValue}. <br> The first card computer got was ${computerHand[0].name}. <br> Please choose Hit or Stand`
    }
  }


//cardDeck.splice(0, 1); // remove 1 card from index 0
//total value of player card before deciding to hit or stand
