function Vehicle(speed) {
    this.speed = speed;
    this.movingForward = function() {
        return `Moving forward at ${this.speed}`;
    }
}

const flexuralStrength = [349];

function calculateFlexural(x,y,z) {
    let math = ((x * y * z)/2);
    return math;
}

let antiCorrosion = calculateFlexural(3,11.25,349);
console.log(antiCorrosion);

const dinnerFood = 'tacos';

makeDinner(dinnerFood);

function makeDinner(whatToMake) {
    console.log(`I see you want ${whatToMake}.`)
    whatToMake = 'salad';
    console.log(`I've decided to make ${whatToMake} instead.`)
}

const person = {username: "Noramc48", password: "123456"};

const loginStatus = login(person);
console.log(loginStatus);
console.warn(`The passwowrd is now ${person.password}`);

function login(userCredentials) {
    if (userCredentials.password === '123456') {
        let randomString = Math.random().toString(36).slice(-16);
        userCredentials.password = randomString;
        return `Terrible password. Your password has been reset to a random string.`
        
    }
    return 'Logged In'
}

function updateTitle(title) {
    document.title = title;
}

updateTitle('Bacon Pancakes');

function orderedList() {
    let numberedList = '<ol>';
    for(let i =0; i < arguments.length; i++) {
        numberedList += `<li>${arguments[i]}</li>`
    }
    numberedList += '</ol>'
    return numberedList;
}

function greetInSpanish(name) {
    return `Hola ${name}`;
}

function getUserName(callback) {
    let firstName = prompt('What is your first name');
    return callback(firstName);
}

/*let identify = "Oscar";
document.getElementById('personalMessage').innerHTML = `Hola ${identify}`;

function makeunorderedList(array) {
    let listItems = array.map(function(element) {
        return `<li>${element}</li>`;
    })
    return `<ul>${listItems.join('')}</ul>`
}*/

const singleArray = [2,4,6,8];
const doubleArray = singleArray.map(singleArray => singleArray * 2);
console.log(doubleArray);

//Returning data about weather through different functions and variables.
function getLocalWeather(postalCode) {
    let forcast = `I don't know what the weather is looking like in ${postalCode}. Maybe take a peak outside!`;
    return forcast;
} //Returns a statement about what the weather is at the specified area code.
let weather = getLocalWeather('60466'); //This variable displays the message from the function with the area code 30350.
displayWeatherForcast(weather);//This functions calls the weather variable.
function displayWeatherForcast(climate) {
    document.getElementById('climate').innerHTML = `<h3>Here's the current weather forcast:</h3> ${climate}`;
}/*This function calls a message inside the HTML document about weather. 
The argument or parameter passed here will be displayed after. 
Since we call weather here then the message about weather will be called.*/

const convertMilesToKM = function conversion(miles) {
    let distance = miles * 1.609;
    return distance;
}

console.log(convertMilesToKM(10));

function estimatedTripDuration(distance) {
    let timeTraveled;
    if (water === true) {
        const getSwimTime = function() {
            return distance / 2;
        };
        timeTraveled = getSwimTime();
    } else {
        const getWalkTime = function() {
            return distance / 4;
        }
        timeTraveled = getWalkTime();
    }
    return timeTraveled;

}

water = false;
let distance = 40;

console.log(`It took me a long time to travel from Chicago to Atlanta, approx ${estimatedTripDuration(distance)} hours;`);

const movieOptions = ['I am legend', 'Sonic', 'A Walk To Remember'];

const chooseMovie = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const displayMovie = () => {
    const movieChoice = chooseMovie(movieOptions);
    document.getElementById('movie-option').innerText = movieChoice;
}
//New Test function
document.getElementById('movieButton').onclick = function() {
    displayMovie();  
}

const notePad = notes => {
    return notes;
}

const classnotes = [
   {
    name: "Sandy",
    occupation: "Garbage Man"
   },

   {
    name: "Mandy",
    occupation: "Punisher"
   },

   {
    name: "Randy",
    occupation: "Global Locator"
   },
]

const sample = ['Valentines Day', 'Happy New Year', 'Smokey Robinson'];

const displayIt = random => {
   return random[Math.floor(Math.random() *random.length)];
}

const getItOut = () => {
    const wendys = displayIt(sample);
    document.getElementById('noteArea').innerText = wendys;
}


document.getElementById('noteButton').onclick = () => {
   character.devilFruit("logia")
}

//Arrays can NOT display objects and templates literals when called upon.

//Writing methods which is really just an function within an object.
const batMan = {
        strenth: 0,
        powerlevel(stamina) {
            this.strenth = stamina;
            console.log(`Batman has a high power level of ${this.strenth}`);
        }
}

const character = {
    dangerLevel : "",
    devilFruit(type) {
        this.dangerLevel = type;
        document.getElementById('noteArea') = `This user has a very high danger level based on the type of devil fruit they ate. The devilfruit this guy ate a ${this.dangerLevel} type.`;
    }
}

const myCar = {
    speed : 0,
}

const myScooter = {
    speed : 0,
}

function drive(vehicle, speedLimit) {
    vehicle.speed = speedLimit;
    console.log(`Driving at ${vehicle.speed}mph.`)
}


const soccerPlayer = {
    activityLevel:0,
};

const wrestler = {
    activityLevel:0,
}

function twist(person, contort) {
    person.activityLevel = contort;
    console.log(`This person is an athlet with a high activity level: ${person.activityLevel}`)
}


