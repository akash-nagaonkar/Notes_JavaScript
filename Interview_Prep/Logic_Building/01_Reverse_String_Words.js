/*
Q. You have given a string. How can you reverse each word in the sentence?
*/
let greetings = "How have you been up to man?";

const reversedStringArray = greetings.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

console.log(reversedStringArray.join(" "));
// woH evah uoy neeb pu ot ?nam
