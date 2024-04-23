function greeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour > 5 && hour < 11) {
        greeting = "Good Morning!";
    }

    else if (hour >= 11 && hour < 17) {
        greeting = "Good Day!";
    }
    
    else {
        greeting = "Good Evening!";
    }

    alert(greeting)
}

function changer() {
    let button = document.getElementById("button2");
    console.log("Before change: ", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-outline-success";

    console.log("After change: ", button.textContent, button.className);
}

function obtainUser() {
    user_name = prompt("What is your name?");
    alert("Hello " + user_name + "!");
}

function animalNoises() {
    do {
        var opperation = prompt("What is your favorite pet? Please enter dog, cat, bird, or fish")
    }
    while ( opperation != "dog" && opperation != "cat" && opperation != "bird" && opperation != "fish");

    if (opperation == "dog"){
        alert("Woof!");
    }
       
    else if (opperation == "cat"){
        alert("Meow!")
    }

    else if (opperation == "bird"){
        alert("Tweet!");
    }

    else{
        alert("...!");
    }
}

document.getElementById("button1").addEventListener("click", greeting);
document.getElementById("button2").addEventListener("click", changer);
document.getElementById("button3").addEventListener("click", obtainUser);
document.getElementById("button4").addEventListener("click", animalNoises);