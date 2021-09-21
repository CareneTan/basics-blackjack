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

var getRandomIndex = function (size){
  return Math.floor (Math.random() *size);
}

//shuffle cards
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

var playerHand = [];
var computerHand = [];

var main = function (input) {
var cardDeck = shuffleCards (makeDeck());

//max points for blackjack is 21
var maxPoints = 21;
//dealer will have to hit when its below 17 
var thresholdForDealer = 16

// Transfer cardDeck to playerHand and computerHand
console.log (cardDeck)
playerHand.push (cardDeck[0]);
playerHand.push (cardDeck[1]);
cardDeck.splice(0, 2)
console.log (cardDeck)
//computerHand.push (cardDeck[0]);
//computerHand.push (cardDeck[1]);
//cardDeck.splice(0,2);
// console.log (cardDeck)
// console.log (playerHand)
// console.log (computerHand)
}; 

//cardDeck.splice(0, 1); // remove 1 card from index 0
//total value of player card before deciding to hit or stand
