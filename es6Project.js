//Lecture let and const in ES 6

/*
//ES 5
var name5 = 'John Snow';
var age = 23;
name5 = 'John stone';
console.log(name5);

//ES 6
const name6 = 'Jack wilder';
let age6 = 23 ;
name6 = 'smiht';
console.log(name6); 
*/
//ES 5
/*function driversLicense5 (passedTest) {
    if(passedTest) {
        console.log(firstName);                     //it is undefined as expected
        var firstName = 'Smith';
        var year = 1990;

        
    }
    console.log(firstName + ' is born in the year '+ year +' so he eligible for driving');
}
driversLicense5(true);


//ES 6
function driversLicense6 (passedTest) {

   // console.log(firstName);
    let firstName;
    const year = 1990;;                                     //const should be initialised as well
                                                
    if(passedTest) {
         firstName = 'Smith'; 
    }
    console.log(firstName+ ' is born in the year '+ year +' so he eligible for driving');
    }
driversLicense6(true);


let i = 23;
for (let i=0 ; i<5 ; i++ ) {
    console.log(i);
 
}
console.log(i);*/
/*********************************************************************************************************************************************************
 * **********************************************************************************************************************************************************************
 * *************************************************************************************************************************************************************
 *///BLOCKS AND IIFEs
 /*{ //IIFE IN ES 6
     let a = 5;
     const b = 1;
 }
 console.log(a+b);*/
 /************************************************************************************************************************************************************
  * ********************************************************************************************************************************************************/
 //STRINGS
 /*let firstName = 'John';
 let lastName  = 'Snow';
 const yearOfBirth = 1990;

 function calcAge (year) {
    return 2020 - year ;

 }
 //ES 5
 console.log('this is ' + firstName + lastName + ' .He is born in the year '+ yearOfBirth +' and now he is '
 + calcAge(yearOfBirth) + ' years old.');

 //ES 6
 console.log(`this is ${firstName} ${lastName}. He is born in the year ${yearOfBirth} and now he is ${calcAge(yearOfBirth)} years old.`);

 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('Jo'));
 console.log(n.endsWith('ow'));
 console.log(n.includes('oh'));
 console.log(`${firstName} `.repeat(5));*/
 /****************************************************************************************************************************************************************
  * ****************************************************************************************************************************************************************
  * *****************************************************************************************************************************************************************/
  //Lecture : Arrow function

  /*const year = [1990, 1996, 1994, 1992, 2000];

  //ES 5
  var ages5 = year.map(function(el) {
    return 2020 - el;
  } );
  console.log(ages5);

  //ES 6
let ages6 = year.map(el => 2020 -el);       //first el is the argument  and arrow is used as return shorthand
console.log(ages6);

//more than one argument then use parenthesis
ages6 = year.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

//more thaan one line of code
ages6 = year.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;

});
console.log(ages6);*/
/**********************************************************************************************************************************
 ************************************************************************************************************************************/
//lecture : Arrow functions 2

//ES 5
/*var box5 = {
    color : 'green',
    position : 1 ,
    clickMe : function() {

        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This box no ' + this.position + ' is having a color '+ this.color;
            alert(str);
        });
    }
}
box5.clickMe();*/
//because this now points out to the window and not the object properties since we have defined a function 
//clickMe ,inside it this points out to the object properties but as we make callback function inside it that makes this 
//keyword to point to the window object.
/**********************************************************************************************************************************************
 * ************************************************************************************************************************************************
 */
//ES 5
/*var box5 = {
    color : 'green',
    position : 1 ,
    clickMe : function() {
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This box no ' + self.position + ' is having a color '+ self.color;
            alert(str);
        });
    }
}
box5.clickMe();*/
/************************************ *
**************************************/

//ES 6
/*var box6 = {
    color : 'green',
    position : 1 ,
    clickMe : function() {
        
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This box no ' + this.position + ' is having a color '+ this.color;
            alert(str);
        });
    }
}*/
//box6.clickMe();
//now in here we have a callback function that shares the this keyword with its surrounding, so with the clickMe
//method here. And we know that in here, the this keyword points to the object. because the arrow function shares
//the lexical this keyword of its surroundings.if you want to use this keyword than use arrow function that uses the surroundings
//this keyword feature.
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//ES 6
/*var box6 = {
    color : 'green',
    position : 1 ,
    clickMe : () => {
        
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This box no ' + this.position + ' is having a color '+ this.color;
            alert(str);
        });
    }
}
box6.clickMe();*/
//now clickMe method here also shares the lexical this keyword from its surroundings and its surrounding 
//of this is the global context.this means that this clickMe method here also no longer has its own this 
//keyword.


//function Person(name) {
  //  this.name = name;
//}

/*//ES 5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    });
    console.log(arr);
}
var friends = ['bob', 'jack', 'rane'];
new Person('John').myFriends5(friends);*/
//myfriends5 has access to this keyword which points to the function constructors properties but as
//we write another function inside it the this keyword will point to the window object.

//ES 5
/*Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}*/
//var friends = ['bob', 'jack', 'rane'];
//new Person('John').myFriends5(friends);
//WE have created a copy of a myfriends5 function with the this variable set to this.
//remember outside arr function we still have access to this variable and it points to the 
//new person so we can pass it into myfirends5 function here simply by creating  a new 
//copy of the function with a manually defined this keyword.
//ES 6
/*Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => 
         `${this.name} is friends with ${el}`);
    
  //  console.log(arr);
}*/
//var friends = ['bob', 'jack', 'rane'];
//new Person('Mike').myFriends6(friends);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////Lecture : DESTRUCTURING

//ES 5
const John = ['John' , 26];
//var name = John[0];
//var age = John[1];


//ES 6
/*const [name, age] = ['John', 26];
console.log(name);
console.log(age);
const obj = {
    firstName : 'john',
    lastName : 'Snow'
}
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(firstName);
console.log(lastName);*/
///////////////////////////////////////////////////////////////////////////////////
/*function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age,65 - age];

}
const [age, reitrement] = calcAgeRetirement(1996);
console.log(age)
console.log(reitrement);*/
//In this way we can return more than one values in ES 6 by using destructuring
//In ES 5 we have to use the object method to return more than one value.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////Lecture : ARRAYS
//const boxes = document.querySelectorAll('.box');

//ES 5
//var boxesArr5 = Array.prototype.slice.call(boxes);
/*boxesArr.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';    
});*/

//ES 6
//var boxArr6 = Array.from(boxes); 
//Array.from(boxes).forEach(cur=>cur.style.backgroundColor = 'dodgerblue');

//ES 5
/*for (var i=0; i<boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I am changed to blue';

}*/

//ES 6
/*for (const cur of boxArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I am changed to blue';
}*/

//ES 5 
/*var ages = [12, 13, 14, 17, 18 ];
var full = ages.map(function(cur){
    return cur>=18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES 6
console.log(ages.findIndex(cur => cur >= 18 ));
console.log(ages.find(cur => cur >= 18));
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Lecture: SPREAD OPERATOR
/*function fourAges(a, b, c, d) {
    return (a+b+c+d);
}
//console.log(fourAges(16, 17 ,28 ,18));

//ES 5
var ages = [18, 19, 20, 21];
var sum1 = fourAges.apply(null, ages);
console.log(sum1);

//ES 6
const sum2 = fourAges (... ages)
console.log(sum2);
///////////////////////////////////////////////////////////
//ES 6
const familySmith = ['John', 'Mike', 'Miller'];
const familyemily = ['Emily', 'Jack', 'Jill'];

const bigFamily = [... familySmith,'Lilly' ,... familyemily];
console.log(bigFamily);
////////////////////////////////////////////////////////////////
//ES 6
const h = document.querySelector('h1');       //We do not have to use . or # and select in ES6
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); */ //here Array.from method converts the nodelist into an array
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Lecture: REST OPERATOR

//ES 5
/*function isFullAge5 () {
    //console.log(arguments);
    var arrArg = Array.prototype.slice.call(arguments);
    console.log(arrArg);
    arrArg.forEach(function(cur){
        console.log((2020 - cur) >= 25);
    });
 }
 isFullAge6 (1990, 1996, 1992, 1980);
 
//ES 6
function isFullAge6 (...years) {
    years.forEach(cur => console.log(2020 - cur >= 26));
}*/
/////////////////////////////////////////////////////////////////////
/*function isFullAge5 (limit) {
    console.log(arguments);
    var arrArg = Array.prototype.slice.call(arguments, 1);
    console.log(arrArg);
    arrArg.forEach(function(cur){
        console.log((2020 - cur) >= limit);
    });
 }
 //isFullAge5 (25, 1990, 1996, 1992, 1980);
 
 isFullAge6 (25, 1990, 1996, 1992, 1980);
 
//ES 6
function isFullAge6 (limit,...years) {
    years.forEach(cur => console.log(2020 - cur >= limit));
}*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Lecutre : Default Parameters

//ES 5
/*function SmithPerson (firstName, yearOfBirth, lastName, nationality ) {
    lastName === undefined ? lastName = 'Snow':lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality; 

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth ;
    this.nationality = nationality ;
}

var john = new SmithPerson('John', 1990);
var Emily =new SmithPerson('Emily', 1986, 'Diaz', 'spanish');*/

//ES 6
/*function SmithPerson6 (firstName, yearOfBirth, lastName = 'Snow', nationality = 'American' ) {
   
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth ;
    this.nationality = nationality ;
}
var john = new SmithPerson6('John', 1990);
var Emily =new SmithPerson6('Emily', 1986, 'Diaz', 'spanish');*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Lecture:MAPS
/*const question = new Map();
question.set('question','What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct ans');
question.set(false, 'Wrong answer');

console.log(question.get('question'));*/
//console.log(question.size);
//question.delete(4);
//question.clear();
//question.forEach((value, key) => console.log(`this is ${key} and it is set to ${value}.`));

//for(let [key, value] of question.entries()) {
  //  console.log(`this is ${key} and it is set to ${value}.`)
//}

/*for(let [key, value] of question.entries() ){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} : ${value}`)
    }
}

const ans = parseInt (prompt('What is the correct Answer:'));
console.log(question.get (ans === question.get('correct')));*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////LECTURE : CLASSES

//ES 5
/*var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
 
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5 ('John', 1996, 'Programmer');

//ES 6
class Person6  {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log('Hey There');
    }
}
const john6 = new Person6 ('John', 1996, 'Programmer');
const Jay = Person6.greeting();*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////LECTURE : CLASSES AND SUBCLASSES

//ES 5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
 
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;

}
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedals = function() {
     
    this.medals++;
    console.log(this.medals);
}
var johnAthlete5 = new Athlete5('John', '1990', 'cricket', 4, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedals();
/////////////////////////////
//ES 6
class Person6  {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
}
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedals () {
        this.medals++;
        console.log(this.medals);

    }
}

var johnAthlete6 = new Athlete6('John', '1993', 'cricketer', 3, 12);
johnAthlete6.calculateAge();
johnAthlete6.wonMedals();