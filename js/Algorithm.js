/*Day 1
    Question 1
    The formula to convert from celsius to fahrenheit is the temperature in celsius times 9/5, plus 32.
    You are given a variable celsius representing a temperature in celsius. Define a variable fahrenheit and assign it
        the fahrenheit temperature equivalent to the given celsius temperature to fahreheit.
    NOTE; Return the value of the result from the function*/

function convert(c) {
  let F = (c * 9) / 5 + 32;
  return F;
}
 let temperature = convert(30);
console.log(temperature);

//DAY 2
//Write a function that returns true if a number passed into it is an even number andfalse if otherwise.

/*if(4%2==0){
    return true;
}else{
        return false
}*/
function isEven(num) {
    if (num % 2 == 0) {
    return true;
} else {
    return false;
}
}

let result = isEven(6);
console.log(result);

/*1 create a function that takes a number as an argument , increments the number  by 1 and return the result. Example addition (0) => 1, addition (4) => 5
2 create a funtion that takes voltage and current and retuns the calculated power. Example circuit power(230, 10) => 2300
3 you are counting points for a basketball game, given the amount of 2 pointers scored and 3 pointers scored, find the final points for te team and return that value. Examples points(1,1)=>5, points (5,7)=> 29*/
//number1

function increment(num){
let increament = num + 1;
    return increament;
}
console.log(increment(5));

//num2

function cctpower(voltage, current) {
  return voltage * current;
}
console.log(cctpower(230, 10));

function score(twopoint, threepoint) {
  return twopoint * 2 + threepoint * 3;
}
console.log(score(7, 9));


//Day4
//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//.chikens = 2legs
//.cows = 4legs
//.pigs = 4legs

//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total nuuber of legs of all the animals.

function animals(chicken, cows, pigs) {
  let total = chicken * 2 + cows * 4 + pigs * 4;
    return total;
}
console.log(animals(3, 5, 8));

//Day 5
//create a function that takes a number (step) as an argument and returns the number ofmatchsticks in that step. see step 1,2,3 in the image above
//Examples
//matchHouses(1)->6
//matchHouses(4)->21
//matchHouses(87)->436
function matchStick(num) {
  let matchStick = num * 6 - (num - 1);
    return matchStick;
}
console.log(matchStick(1));

//Week2- Day1
/*Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form(letter[l], number[num]) where the letter will be either "s" for sqare, or "c"for circle, and the number will be the side of the square or the radius of the circle.

use the following formulas:
perimeter of a square: 4 * side.
perimeter of a circle: 6.28 * radius.*/

function perimeter(l,num){
  return(4 * (l=="s") + 6.28 * (l == "c")) * num;
}
let answer = perimeter("c", 4);
console.log(answer);


/* DAY2
<p>create a function that takes a country's name and it's area as arguments and returns the area of the country's proportion of the total world's landmass.*/
function country(name, area){
    let worldLandmass = 148940000;
let countryProportion = ((area/worldLandmass) * 100);
    let approximated = countryProportion.toFixed(2) + "%"
return approximated;
}
console.log(country("USA", 9372610));

//DAY3
/*Write a function that reverses the provided string.
Example:
reverseString('Hello') => ollew
reverserString('javascript') => tpircsavaj*/


function reverseString(str){
    return str.split("").reverse().join("");
}
// reverseString("hello");
console.log(reverseString("Hello"))

function reverseString(str){
    return str.split("")
}
console.log(reverseString("communication"))


//Day 5
// check if a string(first argument, str) ends with the given target string(second argument, target)
//e.g confirmEnding('congratulation', 'on')
function checkString(str, target) {
    if (str.endsWith(target)) {
        return true
    } else {
        return false
    }
    console.log(checkString('congratulation', 'on'))
    let a = str.lastIndexOf(target);
    if (str.substr(a, target.length) === target) {
        return true
    } else {
        return false
    }
}
console.log(checkString('congratulation', 'on'))
    

//Day1 week 4
// make a function that looks through an array of objects(first argument) and returns an array of objects that have matching name and value pairs(second argument).Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// for example, if the first argument is[{
//   first: 'Romeo', last: 'montague'
// }, { first: 'mercutio', last: null
// }, {first:'tybalt', last:'capulet'}], and the second argument is {last:'capulet'}, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as second argument

function searchOut(arr, obj) {
  let objKeys = Object.keys(obj);
  return arr.filter((object) => {
    console.log(object["last"]);
    for (let i = 0; i < objKeys.length; i++) {
      if (
        !object.hasOwnProperty(objKeys[i]) ||
        object[objKeys[i]] != obj[objKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
console.log(
  searchOut(
    [
      { first: "Romeo", last: "montague" },
      { first: "mercutio", last: null },
      { first: "tybalt", last: "capulet" },
    ],
    { last: "capulet" }
  )
);


//DAY2
// perform a search and replace on the sentence using the arguments provided and return in the new sentence
//   first argument is the sentence to perform the search and replace on.
//   second argument is the word that you will be replacing(before)
//   third argument is what you will be replacing the second argument with (after)
//  note: preserve the case of the first character in the original word when you are replacing it
//  for example if you mean to replace the word Book with the dog, it should be replaced as Dog

//  Template:
//myReplace ("Let us go to the store", "store", "mall")should return the string Let us go to the mall.
//mrReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch
//myReplace("I think we should look up there", "up", "Down")should return the string I think we should look Down

        function searchAndReplace(str, before, after){
                const index = str.indexOf(before)

                // using regx
                //oR
                if(/^[A-Z]/.test(before)){
                    after = after[0].toUpperCase() + after.substring(1)
                }else{
                    after = after[0].toLowerCase() + after.substring(1)
                }
           //OR
                // console.log(str[index] === str[index].toUpperCase())
                // if(str[index] === str[index].toUpperCase()){
                //     after = after.charAt(0).toUpperCase() + after.slice(1)
                // }else{
                //     after = after.charAt(0).toLowerCase() + after.slice(1)
                // }
                // console.log('before', before)
                // console.log('after', after)
               return  str.replace(before, after)
        }

        // console.log(searchAndReplace("Let us go to the store", "store", "mall"))


//DAY3
//function sum range:
//you are passed an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first. for example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive)is 10.
// sumAll([1, 4])should return 10
// sumAll([4, 1])should return  10;
// sumAll([5, 10])should return 45
// sumAll([10, 5])should return 45

function sumAll(arr){
  let max = Math.max(arr[0], arr[1])
  let min = Math.min(arr[0], arr[1])
  let sum = 0;
  for (let i = min; i <= max; i++){
     sum += i
  }
  return sum;
}
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));


//DAY 4
//SUM ALL PRIME
//A prime number is a whole number greater than 1 with excatly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2 in contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num

// sumPrimes(10) should return 17
// sumPrimes(997) should return 73156


function sumPrime(num) {
  let sum = 0;
  //sum all prime only
  for (let i = 2; i < num; i++){
    if (isPrime(i)) {
      sum += i; 
    }
  }
  return sum

     //check that number is a prime
function isPrime(num) {
  for (let i = 2; i < num; i++){
    if (num % i == 0) {
      return false
    }
  }
  return true
    }
}
  console.log(sumPrime(10))
  console.log(sumPrime(997));



























