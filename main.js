
// fortune teller kinda thing made up of three sections in a sentance.
// EXAMPLE Good news! You have an unexpected opportunity coming along.
// First part says whether it's good, concerning, sad, etc.
// Whether it's good or bad affects the latter two parts. 
// Second part gives a brief description. 'something intriguing', 'an unexpected gift', etc.
// Third part is time. 'in two weeks', 'in the next day', 'over the next season'


let finalMessage = [];

const goodBeginning = ['Good news!', 'Congratulations!', 'Hooray!', 'Look at you!', 'Fantastic!', 'Wink Wink!'];
const badBeginning = ['Bad news.', 'Oh no!', 'dam dam daaaaam', ': (', 'Careful!', 'Be aware!', "I'm sorry..."];

// returns a random element of the inputted array 
const pickRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log('the randomly picked item is: ', array[randomIndex])
    return array[randomIndex]
}

const decideBeginning = (goodOrBad) => {
    if (goodOrBad) {
        console.log('picking good')
        return pickRandom(goodBeginning);
    }
    console.log("picking bad")
    return pickRandom(badBeginning)
}




// randomly decides if the horoscope is gonna be good or bad
const goodNews = Math.random() < 0.5;

// adding first part to the final message array
finalMessage.push(decideBeginning(goodNews));



finalMessage = finalMessage.join(' ');
console.log(finalMessage);