let authorsFirstName = "Cameron";
let authorsLastName = "X";
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

const favortieFood = [ //array
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
        celebration = "It's my birthday month. RIP Dad";
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
        celebration = "Aint shit going on in September. Moms birthday is this month.";
        break;
    case 9:
        celebration = "Aint shit going on in October.";
        break;
    case 10:
        celebration = "Thanksgiving is this month! Chris birthday is this month";
        break;
    case 11:
        celebration = "This month we got Khayla's birthday, Jaiden's birthday, Khayla's and I anniversary, Christmas, and New Years.";
        break;
} //I can also define months with celebrations and set a default message to apply when there isnt a celebration that month. 

let holidayMessage = document.getElementById('holiday');
holidayMessage.innerHTML = celebration;


let topic = "<h3>This object was looped through using a 'for...in' loop which is frowned upon. Here are some properties stored about the author in an object:</h3>";
for (prop in user) {
    topic = `${topic}\n ${prop}:${user[prop]} <br>`;
    document.getElementById('objprop').innerHTML = topic;
};


let foodDisplay = favortieFood.map(
    (foodList) => `<li>${foodList}</li>`
).join('');

document.getElementById('myFoods').innerHTML = foodDisplay;


let randomNumber = Math.floor(Math.random()*10);
console.log(randomNumber);
let randomResult = randomNumber < 5 ? ("The number is less than 5!") : ("The number is greater than 5!");
document.getElementById('randomGenerator').innerHTML = randomResult;



const myDog = {}
myDog.furColor = "brown";
myDog.eyeColor = "brown";
myDog.height = '1 Foot';
myDog.fullName = {firstName : "Sasha", lastName : "Morgan" }
console.log(myDog);

function Cat(name,color) {
    this.name = name;
    this.color = color;
}

const familyCat = new Cat('Marilyn', 'Black and White');
console.log(familyCat);
const neighborsCat = new Cat('Puddin', "Calicoat");
console.log(neighborsCat);
const coreysCat = {}
coreysCat.name = 'Thor';
coreysCat.color = 'Gray';
console.log(coreysCat);

const breakfast = {
    protein: "Eggs and Sausage",
    grains: "Grits",
    fruit: "apple and bananas"
}

const firstMeal = Object.create(breakfast);
console.log(firstMeal);
firstMeal.vegetable = "peppers";
firstMeal.grains = "toast";
