function addition() {
    let ourAnswer = document.getElementById("answer").value;
    isNaN(ourAnswer);
    if (isNaN(ourAnswer)) {
        document.getElementById("output").innerHTML = "Hey! " + ourAnswer + " is not an answer";
    } else {
        if (ourAnswer == correctAnswer) {   
            document.getElementById("output").innerHTML = "Correct! " + num1 + " + " + num2 + " = " + correctAnswer;
        } else {
            document.getElementById("output").innerHTML = "Incorrect... " + num1 + " + " + num2 + " does not equal " + ourAnswer + ". Please try again.";
        }
    }
}

function newCard() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("answer").value = "";
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("demo").innerHTML = num1 + " + " + num2;
    correctAnswer = num1 + num2;
}