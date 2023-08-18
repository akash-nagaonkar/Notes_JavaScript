## JSON ##

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is widely used to transmit and store structured data between a server and a client, as well as for configuration files and other data storage purposes. JSON is a text-based format and is often used in web development to exchange data between a server and a web application.

JSON is structured as key-value pairs, where each key is a string enclosed in double quotes and followed by a colon, and the values can be strings, numbers, booleans, objects, arrays, or `null`. JSON closely resembles JavaScript object literal notation, but it is a language-independent data format that can be used with various programming languages.

Here's a basic example of JSON:

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "favorites": ["pizza", "music", "movies"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "isNull": null
}
```

Key points about JSON:

- **Key-Value Pairs:** Data is stored as key-value pairs, where keys are strings and values can be strings, numbers, booleans, objects, arrays, or `null`.
- **Strings:** JSON strings must be enclosed in double quotes.
- **Objects:** JSON objects are enclosed in curly braces `{}` and contain key-value pairs.
- **Arrays:** JSON arrays are ordered lists of values enclosed in square brackets `[]`.
- **Numbers:** JSON supports both integer and floating-point numbers.
- **Booleans:** JSON supports the values `true` and `false` for boolean data.
- **Null:** JSON has a special value `null` to represent the absence of a value.
- **Whitespace:** JSON is whitespace-insensitive, meaning extra whitespace (like spaces and line breaks) is ignored.

JSON is often used in web APIs to send data back and forth between a client (such as a web browser) and a server. In JavaScript, you can parse JSON strings into JavaScript objects using the `JSON.parse()` method, and you can stringify JavaScript objects into JSON strings using the `JSON.stringify()` method.

Here's an example of parsing JSON and stringifying JavaScript objects:

```javascript
const jsonString = '{"name": "Alice", "age": 25}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: Alice

const person = { name: "Bob", age: 30 };
const jsonStringified = JSON.stringify(person);

console.log(jsonStringified); // Output: {"name":"Bob","age":30}
```

JSON's simplicity, ease of use, and compatibility with various programming languages make it a popular choice for data exchange and storage in many applications.