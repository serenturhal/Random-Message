const firstWord = [
'learning',
'practicing',
'applying'
];

const secondWord = [
'HTML',
'Javascript',
'CSS'
];

const thirdWord = [
'amazing',
'unique',
'advanced'
];

const randomSentence = () => {
    const randomOne = firstWord[Math.floor(Math.random() * firstWord.length)];
    const randomTwo = secondWord[Math.floor(Math.random() * secondWord.length)];
    const randomThree = thirdWord[Math.floor(Math.random() * thirdWord.length)];

    const message = `${randomOne} ${randomTwo} to your project help you  
    build a/an ${randomThree} program`

    return message;
}

console.log(randomSentence());