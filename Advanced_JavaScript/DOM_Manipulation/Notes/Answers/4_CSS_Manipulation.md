**CSS Manipulation:**

## 10. How can you add and remove CSS classes from an HTML element using JavaScript?

- - > You can add and remove CSS classes from an HTML element using JavaScript by manipulating the `classList` property of the element. The `classList` property provides methods to add, remove, toggle, and check for classes on an element.

**Adding a CSS Class:**

To add a CSS class to an element, you can use the `add` method of the `classList` property:

```javascript
const element = document.getElementById("myElement");
element.classList.add("newClass");
```

This will add the "newClass" to the element's existing classes.

**Removing a CSS Class:**

To remove a CSS class from an element, you can use the `remove` method:

```javascript
element.classList.remove("newClass");
```

This will remove the "newClass" from the element's class list.

**Toggling a CSS Class:**

You can toggle the presence of a CSS class using the `toggle` method. If the class is present, it will be removed; if not, it will be added:

```javascript
element.classList.toggle("active");
```

**Checking for a CSS Class:**

You can check if an element has a specific CSS class using the `contains` method:

```javascript
if (element.classList.contains("special")) {
  // The element has the "special" class
}
```

Using these methods, you can dynamically manipulate the classes of HTML elements to control styling and behavior based on user interactions, events, or other conditions. This approach is particularly useful when you want to apply or remove styles without directly modifying the inline `style` attribute.

## 11. Explain how to change the style properties of an element dynamically.

- - > You can change the style properties of an element dynamically in JavaScript by directly modifying the properties of the `style` object associated with the element. The `style` object represents the inline style attributes of the element and allows you to apply CSS styles programmatically.

Here's how you can change the style properties of an element:

1. **Access the Element:**
   First, you need to select the HTML element you want to modify. You can use methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, or `querySelector` to select the element.

   ```javascript
   const element = document.getElementById("myElement");
   ```

2. **Modify Style Properties:**
   Once you have the element, you can access and modify its style properties using the `style` object. Simply assign values to the desired properties just like you would in CSS.

   ```javascript
   // Change the background color
   element.style.backgroundColor = "blue";

   // Change the font size
   element.style.fontSize = "16px";

   // Add a border
   element.style.border = "1px solid black";
   ```

3. **Camel Case Property Names:**
   When accessing style properties via the `style` object, use camel case property names (e.g., `backgroundColor` instead of `background-color`). CSS property names with hyphens are converted to camel case in JavaScript.

4. **Removing Inline Styles:**
   To remove a specific inline style, you can set its value to an empty string.

   ```javascript
   element.style.backgroundColor = ""; // Removes background color
   ```

Here's an example with a complete HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Change Element Style</title>
  </head>
  <body>
    <div id="myElement">This is a div element.</div>
    <button id="changeStyleButton">Change Style</button>

    <script>
      const changeStyleButton = document.getElementById("changeStyleButton");
      const element = document.getElementById("myElement");

      changeStyleButton.addEventListener("click", () => {
        // Change style properties dynamically
        element.style.backgroundColor = "yellow";
        element.style.fontSize = "20px";
        element.style.border = "2px solid red";
      });
    </script>
  </body>
</html>
```

In this example, clicking the "Change Style" button will dynamically modify the style properties of the `myElement` div element.
