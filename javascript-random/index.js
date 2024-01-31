const firstWord = [
'Using',
'Adding',
'Applying'
];

const secondWord = [
'HTML',
'Javascript',
'CSS'
];

const thirdWord = [
'amazing',
'incrdiable',
'advanced'
];

const randomSentence = () => {
    const randomOne = firstWord[Math.floor(Math.random() * firstWord.length)];
    const randomTwo = secondWord[Math.floor(Math.random() * secondWord.length)];
    const randomThree = thirdWord[Math.floor(Math.random() * thirdWord.length)];

    const message = `${randomOne} ${randomTwo} to your project help you build an ${randomThree} program`

    return message;
}

console.log(randomSentence());