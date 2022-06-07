
// fortune teller kinda thing made up of three sections in a sentance.
// EXAMPLE Good news! You have an unexpected opportunity coming tomorrow.

// First part says whether it's good, concerning, sad, etc.
// Whether it's good or bad affects the latter two parts. 
// Second part gives a brief description. 'something intriguing', 'an unexpected gift', etc.
// Third part is time. 'in two weeks', 'in the next day', 'over the next season'

const goodBeginning = [
    'Good news!', 
    'Congratulations!', 
    'Hooray!', 
    'Look at you!', 
    'Fantastic!', 
    'Wink Wink!'
];

const badBeginning = [
    'Bad news.', 
    'Oh no!', 
    'dam dam daaaaam', 
    ': (', 
    'Careful!', 
    'Be aware!', 
    "I'm sorry..."
];

const goodMiddle = [
    'A long awaited opportunity is coming',
    'The desired change will fall from the sky', 
    'The monetary wish is finally approaching',
    'A romantic adventure will entice you', // is this good or bad?
];

const badMiddle = [
    'A betreyal is approaching',
    'A harsh fight will come',
    'A recession is coming',
    'You will be broke',
];

const time = [
    'today', 
    'tomorrow', 
    'during this week', 
    'over the next month', 
    'during this season', 
    'this year'
];


// returns a random element of the inputted array regardless of the size of the array
const pickRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    //console.log('the randomly picked item is: ', array[randomIndex])
    return array[randomIndex]
}

const buildMessage = () => {
    const message = []
    // randomly deciding whether message will be good or bad
    if (Math.random() < 0.5) {
        message.push(pickRandom(goodBeginning))
        message.push(pickRandom(goodMiddle))
    } else {
        message.push(pickRandom(badBeginning))
        message.push(pickRandom(badMiddle))
    }

    message.push(pickRandom(time) + '.');
    return message
}


let myMessage = buildMessage()
myMessage = myMessage.join(' ')
console.log(myMessage)