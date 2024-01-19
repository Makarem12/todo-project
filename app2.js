
function askQuestion(question) {
    let answer = prompt(question).toLowerCase();
    if (answer=="yes" || answer=="no") {
        return answer;}
        else 
    {
        return "invalid";
    }
    
}




function askQuestions() {
    const answers = [];

    for (let i = 1; i <= 3; i++) {
        const question = `Question ${i}:please type Yes/No?`;
        const answer = askQuestion(question);
        answers.push(answer);
    }

    return answers;
}

function printAnswers(answers) {
    console.log("Answers:");
    answers.forEach((answer, index) => {
        console.log(`Question ${index + 1}: ${answer}`);
    });
}


function main() {
    const userAnswers = askQuestions();
    printAnswers(userAnswers);
}


main();
