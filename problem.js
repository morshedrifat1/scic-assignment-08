// problem 1 : Write a function that takes a string and returns it reversed.

const reversedString = (string) => {
  let reversed = [];
  for (let i = 0; i < string.length; i++) {
    reversed.unshift(string[i]);
  }
  return reversed.join("");
};
console.log("Reversed String =", reversedString("morshedrifat"));

// Problem 2: Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const countVowels = (string) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log("Total Vowels =", countVowels("morshedrifat"));

// Problem 3: Write a function that checks if a string is a palindrome (reads the same forward and backward).

const palindrome = (str) => {
  let reversed = [];
  for (let i = 0; i < str.length; i++) {
    reversed.unshift(str[i]);
  }
  const reversedString = reversed.join("");
  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};

console.log("palindrome = ", palindrome("madammm"));

// Problem 4: Write a function that takes an array of numbers and returns the largest number.

const maxNum = (num) => {
  let MaximumNumber = 0;
  for (let number of num) {
    if (number > MaximumNumber) {
      MaximumNumber = number;
    }
  }
  return MaximumNumber;
};

const numList = [51, 11, 90, 33];
console.log("Maximum Number = ", maxNum(numList));

// Problem 5: Write a function that removes all duplicate numbers from an array.

const removeDupNum = (num) => {
  let newNumList = [];
  for (let number of num) {
    if (!newNumList.includes(number)) {
      newNumList.push(number);
    }
  }
  return newNumList;
};

const num = [1, 2, 2, 3, 4, 4];
console.log("New Num List = ", removeDupNum(num));

// Problem 6: Write a function that returns the sum of all numbers in an array.

const sumNumber = (num) => {
  let sumNumber = 0;
  for (let number of num) {
    sumNumber = sumNumber + number;
  }
  return sumNumber;
};

const sumNum = [1, 2, 3, 4, 5, 10, 15];
console.log("Sum Number =", sumNumber(sumNum));

// Problem 7: Write a function that returns all even numbers from a given array.

const evenNumber = (num) => {
  let evenNumber = [];
  for (let number of num) {
    if (number % 2 === 0) {
      evenNumber.push(number);
    }
  }
  return evenNumber;
};

const allNum = [1, 2, 3, 4, 5, 6, 8, 10];
console.log("Even Numbers = ", evenNumber(allNum));

// Problem 8: Write a function that capitalizes the first letter of each word in a string.

const capitalize = (string) => {
  const word = string.split(" ");
  let result = [];
  for (let i = 0; i < word.length; i++) {
    result.push(word[i][0].toUpperCase() + word[i].slice(1));
  }
  return result.join(" ");
};

console.log("Capitalize Text = ", capitalize("morshed rifat"));

// Problem 9: Write a function that calculates the factorial of a number using a loop.

const factorialNum = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

console.log("Factorial Number = ", factorialNum(5));

// Problem 10: Write a function that prints numbers from 1 to 20.

const pingPong = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("ping");
    } else if (i % 5 === 0) {
      result.push("pong");
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log("PingPong Challenge = ", pingPong(20));
