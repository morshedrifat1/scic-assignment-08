// problem 1 : Write a function that takes a string and returns it reversed.

const reversedString = (string) => {
  const stringArray = string.split("");
  let reversed = [];
  for (let i = 0; i < stringArray.length; i++) {
    reversed.unshift(stringArray[i]);
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


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

const capitalize = (string) => {
    const capitalize = string.split(" ").map((word) => word[0].toUpperCase()+word.slice(1)).join(' ');
    return capitalize
}

console.log("Capitalize Text = ",capitalize('morshed rifat'));