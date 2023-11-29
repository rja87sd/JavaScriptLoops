'use strict';

// Part 2 Answer(s)
const fruits = ["Apple", "Banana", "Cherry", "Date", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  console.log(`The current value of i:`, i);

  if (i < fruits.length - 1) {
    console.log("Fruits is still counting.");
  }
}

// Part 3 Answer(s)
let userReply = prompt("Guess the password. (Hint: It's on my luggage.)");
while (userReply !== "12345") {
  userReply = prompt("Guess the password. (Hint: It's on my luggage.)");
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Part 4 Answer(s)
const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  for (let j = 0; j < nums[i].length; j++) {
    console.log(nums[i][j]);
  }
}