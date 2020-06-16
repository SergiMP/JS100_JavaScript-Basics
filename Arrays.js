/*
Write a function that returns the first element of an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'

What would you return if the input array was empty?
*/

//If the array was empty the function would return undefined.

let first = (array) => array[0];

/*
Write a function that returns the last element of an input array. For example:

last(['Earth', 'Moon', 'Mars']); // 'Mars'

*/

let last = (array) => array[array.length -1];

/*
We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
*/

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift('fossil');
energy.push('geothermal');

/*
Split the string alphabet into an array of characters.
*/

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split("");

/*
Count the number of elements in scores that are 100 or above.
*/

let scores = [96, 47, 113, 89, 100, 102];

scores.filter(x => x > 100).reduce((acc, x)=> acc +1,0);

/*
We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. 
Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
*/

let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

vocabulary.forEach(subarray => subarray.forEach(x => console.log(x)));

/*
Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?
*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

// It will print false, since both objects have different memory addresses and we are using
// the strict comparator ===
console.log(array1 === array2);

/*
The destinations array contains a list of travel destinations.

Write a function that checks whether or not a particular destination is included within destinations,
without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, 
whereas the expected output for 'Nashville' is false.
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (word, array) => array.filter(x => x.toLowerCase() === word.toLowerCase())
                                     .length >= 1;
/*
We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
*/

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
    passcode.join("-");

/*
We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty. 
If you log the elements you remove, the expected behavior would look as follows.
*/
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while(groceryList.length > 0){
   console.log(groceryList.shift());
}