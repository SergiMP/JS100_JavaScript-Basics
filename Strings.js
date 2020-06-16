/****************STRINGS******************/

/*
Determine the length of the string "These aren't the droids you're looking for.".
*/

"These aren't the droids you're looking for.".length;

/*
Take the string 'confetti floating everywhere' and transform it to upper case.
*/

'confetti floating everywhere'.toUpperCase();

/*
Implement a function repeat that repeats an input string a given number of times, 
as shown in the example below; without using the pre-defined string method String.prototype.repeat().
*/

let repeat = (string,times) => {
    let result = string;
    for(let i = 0; i < times; i++){
        result += string;
    }
    return result;
}

/*
Take the following rhyme:

A pirate I was meant to be!
Trim the sails and roam the sea!

How can you assign this string to a single variable, preserving the line break?
*/

let rhyme = "A pirate I was meant to be!\n"+"Trim the sails and roam the sea!";

/*
Given strings like the following, how can you check whether they're equal irrespective of whether 
the characters they contain are upper or lower case?
*/
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
string1.localeCompare(string2);

// Or also compare them using .toLowerCase() .toUpperCase()

/*
Write code that checks whether the string byteSequence contains the character x.
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

/x/.test('TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu');
//Or for case insensitive
/x/i.test('TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu');
//Or using pre-defined functions
byteSequence.includes("x");

/*
Write a function that checks whether a string is empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

let isBlank = (x) => /^$|\s/.test(x);

/*
Write code that capitalizes the words in the string 'launch school tech & talk', 
so that you get the string 'Launch School Tech & Talk'.
*/
let string = 'launch school tech & talk';
string.replace(/(^\w|\s\w)/g, m => m.toUpperCase());