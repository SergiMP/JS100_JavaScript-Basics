
/*
How can we alter the function definition of greet so that the parameter greeting 
is assigned a default value of 'Hello' when no argument is passed to the function invocation?
*/
function greet(greeting, toWhom = "world!") {
    console.log(greeting + ', world!');
  }
  
  greet('Salutations'); // logs: Salutations, world!
  
  greet(); 

  /*
Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 
'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:
  */
 function greet(greeting = "Hello ", toWhom = "world!") {
    console.log(greeting + ', world!');
  }

/*
Now we are going to outsource the greeting and recipient to functions. 
Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.
*/

function greeting() {
    return 'Good morning';
  }
  
  function recipient() {
    return 'Launch School';
  }

  let greet = () => `${greeting()} ${recipient()}`;

  /*
Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

bmi = weightInKilograms / heightInMeters**2;

Note that formular requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:

calculateBMI(180, 80); // "24.69"
  */

  let calculateBMI = (height, weight) => weight /(Math.pow(height/100,2));

/*
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.

*/

let catAge = (num) =>{
    switch(num){
    case 1:
        return 15;
        break;
    case 2:
        return 15 + 9;
        break;
    default:
        return (15 + 9) + (num -2) * 4;
    }   
}

/*
Create a function removeLastChar that takes a string as argument, and returns the string without the last character.

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
*/

let removeLastChar = (words)=> words.replace(words.split("")[words.length -1],"");

/*
Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
*/
const template = 'I VERB NOUN.';
let sentence =(verb,noun) =>  template.replace('VERB', verb)
                                      .replace('NOUN', noun);
                              
console.log(sentence('like', 'birds'));

/*
The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};
*/
let initGame = () => ({level : 1, score: 0})