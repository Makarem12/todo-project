var userName=prompt("please enter your name :")
var gender=prompt("please enter your gender :")
var age=prompt("please enter your age :")
if(age<=0){
    alert("sorry , your age is not correct")
}
var confirmMsg=confirm("Do you want to skip the welcoming message?")

if(confirmMsg==false){
    if(gender=="male" || gender=="Male"){
        alert("Welcome Mr "+userName+" to our tasks website")
    }
    else if(gender=="female" || gender=="Female"){
        alert("Welcome Ms "+userName+" to our tasks website")
    }
    else{
        alert("Welcome to our tasks website")
    }
}

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












































