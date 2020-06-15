/***************FUNCTIONS*****************/

/*
Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that 
the function arguments will always be numbers.
*/

let sum = (x,y) => x + y;

/*
Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?
*/

function brendanEichQuote() {
    console.log('Always bet on JavaScript.');
  }

  // console.log() returns undefined.

/*
Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. 
It then logs the quote to the console, as in the following example.
*/

let cite = (a,b) => console.log(`${a} said: \"${b}\."`);

/*
Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an 
exponent of 2 (also known as squaring the number).
*/

let squaredNumber = (x) => x * x;

/*
Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length,
as in the following example:
*/

let compareByLength = (a,b) =>{
    if(a.length === b.length){return 0}
    else{
       return a.length < b.length ? -1 : 1
    }
}

/*
Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.
*/
let greet = (languageCode) =>{
    let language ={ en: 'Hi!', fr:"Salut", pt:'Olá!'};

    return language[languageCode] !== undefined ? language[languageCode] :
                                                 "I don\'t recognize that language."
    
  }

/*
Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.
*/

let extractLanguage = (locale) => {
    return locale.split('_')[0];
  }

  /*
Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:
  */

 let extractRegion = (locale) => {
    return locale.split('_')[1].split('.')[0];
  }

  /*
 Internationalization 2 
 */

  let localGreet = (locale) => {
    let language = extractLanguage(locale);
    let region = extractRegion(locale);
  
    let hey = {
      US: 'Hey!',
      GB:'Hello!',
      AU: 'Howdy!'
    }
    return region[hey] !== undefined ? region[hey] : greet(language)
  }