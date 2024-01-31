const firstWord = [

];

const secondWord = [

];

const thirdWord = [

]

const randomSentence = () => {
    const randomOne = firstWord[Math.floor(Math.random() * firstWord.length)];
    const randomTwo = secondWord[Math.floor(Math.random() * secondWord.length)];
    const randomThree = thirdWord[Math.floor(Math.random() * thirdWord.length)];

    const message = `${randomOne} ${randomTwo} ${randomThree}`

    return message;
}

console.log(randomSentence());