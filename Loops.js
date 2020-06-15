

//////////////////////////////LOOPS/////////////////////////////////////

/*
    Add some code inside of the for loop below that logs the current value of i to the console on each iteration. 
    Before you run the code: What sequence of numbers do you expect to be logged?
*/

let i;
/*Iteration starts at zero, incremented by two till i is less or equal to ten
   Expected sequence is 0,2,4,6,8,10 */
for (i = 0; i <= 10; i += 2) {

  console.log(i);
}

/*
The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in 
decreasing order, and then logs 'Launch!'.
*/

for (i = 10; i >= 0; i -= 1) {

    i >= 1 ? console.log(i):console.log("Launch!");
  }

/*
Write a loop that logs greeting three times.
*/

for (i = 0; i <=2; i += 1) {

    console.log('Aloha!');
  }

/*
Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.
*/

for (i = 1; i <=100; i += 1) {

    console.log(`${i*2}`);
  }

  /*
Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates 
after logging the last element of the array.
  */

 let array = [1, 2, 3, 4];
 let index = 0;

 while(index < array.length){
     console.log(array[index]);
     index +=1;
 }

 /*
Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward 
to the next iteration without logging anything to the console.
 */

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for(let word in cities){
    if(cities[word] === null){
        continue;
    }else{
        console.log(cities[word]); 
    }
}

/*
The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration
*/

let i;
//No litiming condition to break the loop has been declared
for (i = 0; /**Condition needed**/; i += 1) {
  console.log("and on");
}

/*
Write a while loop that logs all odd natural numbers between 1 and 40.
*/
let i = 1
while(i<41){
   if(i % 2 !==0){console.log(i);}
   i += 1;
}

/*
Loop over the elements of the array fish, logging each one. Terminate 
the loop immediately after logging the string 'Nemo'.
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let idx = 0;
while(fish[idx] !== 'Nemo'){
    if(console.log(fish[idx]));
    idx += 1;
}

/*
What is the difference between these two snippets.
*/

let counter = 0;

// This code will never execute since the initial condition is 
// not met in the first evaluation.
while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
let counter = 0;

// This snippet executes first, then evaluates the While condition,
// after which it will stop.
do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);