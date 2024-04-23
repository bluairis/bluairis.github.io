function triviaChecker() {
    const answer = document.getElementById("triviaAnswer").value.trim();
    const responseElement = document.getElementById("triviaResponse");
    if (answer.toLowerCase() === "paris") {
        responseElement.textContent = "Correct! The answer was Paris!";
    }
    else {
        responseElement.textContent = "Incorrect. The correct answer was Paris!";
    }
}

function fiveDigitEvenOrOdd() {
    const numberInput = document.getElementById("numberAnswer").value;
    const number = parseInt(numberInput);
    if (!isNaN(number) && number >= 10000 && number <= 99999) {
        const isEven = number % 2 === 0;
        document.getElementById("numberResponse").innerText = `The number ${number} is ${isEven ? "even":"odd"}.`;
    }
    else {
        document.getElementById("numberResponse").innerText = `Please enter a valid input: a 5-digit number`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const triviaInput = document.getElementById("triviaAnswer");
    triviaInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            triviaChecker();
        }
    });
    const numberInput = document.getElementById("numberAnswer");
    numberInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            fiveDigitEvenOrOdd();
        }
    });
});

document.getElementById("triviaButton").addEventListener("click", triviaChecker);
document.getElementById("numberButton").addEventListener("click", fiveDigitEvenOrOdd);