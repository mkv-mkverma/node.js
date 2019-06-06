// var count = 1;
// var str = "GeeksforGeeks";
// var arr = str.split("").sort();
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] != arr[i + 1]) {
//     console.log(arr[i] + " => " + count);
//     count = 1;
//   } else {
//     count++;
//   }
// }

// let markMass = 65; //kg
// let markHeight = 1.63; // meter
// let johnMass = 70;
// let johnHeight = 1.69;
// let BMI = 0;



// BMI = (mass, height) => {
//   return mass / (height * height);
// };

// console.log(`mark BMI ${BMI(markMass,markHeight)} kg/m2`);
// console.log(`john BMI ${BMI(johnMass,johnHeight)} kg/m2`);

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);


/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

// let  bills = [124,48,268];
// let tips = [];
// // (bill + tip)
// let amounts = [];
// function tipCalculator(bills){
// bills.forEach((element,index)=>{
//   if(element < 50){
//     tips.push(element*0.2)
//     amounts.push(element + element*0.2)
//   }else if(element >=50 && element < 200){
//     tips.push(element*0.15)
//     amounts.push(element +element*0.15)
//   }else{
//     tips.push(element*0.15)
//     amounts.push(element +element*0.10)
//   }
// })
// return tips;
// }
// console.log(tipCalculator(bills));
// console.log(amounts);

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
      this.age = 2018 - this.birthYear;
  }
};

console.log(john);
john.calcAge();
console.log(john);


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log('---------------------------');

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
console.log('--------------------------');

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

