var i;
var multiplicator = 1;
var plyer;

alert("Make sure you read the instructions before you continue")
alert("Also input a multiplyer greater than your number for it to run smoothely, or it wont work")

function assignValue() {
    i = parseInt(document.getElementById("index").value);
    plyer = parseInt(document.getElementById("ply").value);
    console.log("value assigned as " + i)
}

function run() {
    for (; multiplicator > 0, multiplicator < plyer + 1; multiplicator++) {
        console.log(i * multiplicator);
    }
}

function reset() {
    i = 0;
    multiplicator = 0;
}

