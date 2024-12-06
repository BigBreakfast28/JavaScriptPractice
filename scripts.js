let authorsFirstName = "Cameron";
let authorsLastName = " T";
let authorsFullName = authorsFirstName + authorsLastName;


const ball = document.getElementById("ball");
document.addEventListener('keydown', handleKeyPress);
let x = 0;
let y = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowUp') {
        y = y - 10;
    }

    if (e.code === 'ArrowDown') {
       y = y + 10;
    }

    if (e.code === "ArrowLeft") {
       x = x - 10;
    }

    if (e.code === "ArrowRight") {
        x = x + 10;
    }

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    left(); //Update the balls position on the x axis
    up(); // Update the balls position on the y axis
}

function left() {
  ball.style.left = x + "px"; // Adds pixels to the x position
}

function up() {
    ball.style.top = y + "px"; //Adds pixels to the y position
}


let orderTotal = 19.99;
let orderSummary = "\nSlim Fit Jeans\n" + "Nike Crew Neck\n" + "Nike Dunks.\n";
let customerName = "Sasha Morgan";

const CUSTOMER_MESSAGE = `Greetings ${customerName}, thank you for shopping with us. Your order total is ${19.99}. 
The items you purchased were: ${orderSummary} If you have any questions please contact Special Agent Sasha.`;

function order() {
    return CUSTOMER_MESSAGE;
}

const user = { //object
    name:"Cameron",
    age: 28,
    address: "123 Chill Ville",
    city: "Atlanta", 
    occupation: "Business Owner", 
    maritalStatus: "Married"
}

let favortieFood = [ //array
    'tacos',
    'pizza',
    'chicken',
    'steak',
    'burger',
    'shrimp'
]

//floating-point number is any number where we want to include the decimal in the number. Converting a number to integer will remove the decimal. 
const today = new Date;
let msg;
msg = today < 12 ? ("Good Morning,") : ("Good Evening,") + ` Welcome back to another day of programming. Today's date is ${today.toDateString()}. Let's continue programming.`;
let word = document.getElementById('myMessage')
word.innerHTML = msg;

const month = today.getMonth();
let celebration;
switch(month) {
    case 0:
        celebration = "Aint shit going on in January.";
        break;
    case 1:
        celebration = "Valentines Day is this month, plus it's black history month.";
        break;
    case 2:
        celebration = "Aint shit going on in March.";
        break;
    case 3:
        celebration = "Aint shit going on in April.";
        break;
    case 4:
        celebration = "It's my birthday month.";
        break;
    case 5:
        celebration = "Aint shit going on in June.";
        break;
    case 6:
        celebration = "Corey's birthday and 4th of July this month.";
        break;
    case 7:
        celebration = "We going camping this month.";
        break;
    case 8:
        celebration = "Aint shit going on in September.";
        break;
    case 9:
        celebration = "Aint shit going on in October.";
        break;
    case 10:
        celebration = "Thanksgiving is this month!";
        break;
    case 11:
        celebration = "Ok, so we got Jaiden's birthday, Khayla's birthday, Christmas, and New Years this month.";
        break;
}

let holidayMessage = document.getElementById('holiday');
holidayMessage.innerHTML = celebration;