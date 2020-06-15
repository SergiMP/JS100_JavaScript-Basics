/*
The code provided below will randomly initialize randomNumber 
to either 0 or 1 each time it is executed.

Write a statement that logs 'Yes!' if randomNumber is 1, 
and 'No.' if randomNumber is 0.
*/

let randomNumber = Math.round(Math.random());
// Part 1
if(randomNumber == 1){
    console.log('Yes!');
}else{
    console.log('No!');
}
// Part 2
randomNumber === 1 ? console.log('Yes!'):console.log('No!');

/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.
*/

let weather = 'Cloudy';

let answer = weather === 'sunny' ? "It's a beautiful day!" : weather === 'rainy' ? "Grab your umbrella.":"Let's stay inside.";

/*
Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the 
MDN documentation on switch statements.
*/
let animal = 'horse';
// Since there is not BREAK statement after each case, all the cases after the matching
// condition will be output.
switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/*
Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. 
Feel free to add more cases besides 'sunny' and 'rainy'.
*/

switch (weather) {
    case 'rainy':
      console.log('That is when I\'m only happy.');
      break;
    case 'cloudy':
      console.log('cold');
      break;
      default:
          console.log('No clue!');
  }