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