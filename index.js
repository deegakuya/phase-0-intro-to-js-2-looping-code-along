// Code your solutions in this file
// Function to create 'thank you' cards
function writeCards(names, eventName) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(message);
    }
    return thankYouCards;
  }
  
  // Function to count down from a positive integer
  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  