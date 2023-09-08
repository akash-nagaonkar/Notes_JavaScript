**Question:**

# You have given a string. How can you reverse each word in the sentence?

**Answer:**

To reverse each word in a sentence, you can follow these steps in JavaScript:

1. Split the input sentence into an array of words using the space character as a delimiter.
2. Use the `map()` function to iterate through each word in the array.
3. For each word, split it into an array of characters, reverse the order of characters, and then join them back into a single word.
4. Finally, join the reversed words back together with spaces to form the reversed sentence.

Here's the code that accomplishes this:

```javascript
let greetings = "How have you been up to man?";

const reversedStringArray = greetings.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

const reversedSentence = reversedStringArray.join(" ");

console.log(reversedSentence);
// Output: "woH evah uoy neeb pu ot ?nam"
```

**Explanation:**

- `split(" ")`: This splits the input string `greetings` into an array of words based on the space character, creating an array like `["How", "have", "you", "been", "up", "to", "man?"]`.

- `map()`: The `map()` function is used to iterate through each word in the array.

- `word.split("")`: This splits each word into an array of characters, so `"How"` becomes `["H", "o", "w"]`.

- `.reverse()`: The `reverse()` method reverses the order of characters within each word, so `["H", "o", "w"]` becomes `["w", "o", "H"]`.

- `.join("")`: Finally, `join("")` is used to combine the characters back into a single reversed word, so `["w", "o", "H"]` becomes `"woH"`.

- `reversedStringArray.join(" ")`: After reversing all words, this line joins them back together with spaces, forming the reversed sentence.

The end result is a reversed sentence with each word reversed, as shown in the output.