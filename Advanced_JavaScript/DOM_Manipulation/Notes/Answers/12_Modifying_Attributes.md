**Modifying Attributes:**

## 27. How can you modify the `src` attribute of an `img` element using JavaScript?

- - > You can modify the `src` attribute of an `<img>` element using JavaScript by accessing the element and updating its `src` property. Here's how you can do it:

1. **Select the `<img>` Element:**
   Use methods like `getElementById`, `querySelector`, or `getElementsByClassName` to select the `<img>` element you want to modify.

   ```javascript
   const imgElement = document.getElementById("myImage");
   ```

2. **Modify the `src` Attribute:**
   Access the `src` property of the selected `<img>` element and assign a new image URL to it.

   ```javascript
   imgElement.src = "new-image.jpg";
   ```

Here's a complete example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Modify img src Attribute</title>
</head>
<body>
  <img id="myImage" src="old-image.jpg" alt="Old Image">
  <button id="changeButton">Change Image</button>

  <script>
    const imgElement = document.getElementById("myImage");
    const changeButton = document.getElementById("changeButton");

    changeButton.addEventListener("click", function() {
      // Modify the src attribute
      imgElement.src = "new-image.jpg";
      imgElement.alt = "New Image";
    });
  </script>
</body>
</html>
```

In this example, the initial `<img>` element's `src` attribute is set to "old-image.jpg." When the button with the ID "changeButton" is clicked, the event listener updates the `src` attribute to "new-image.jpg" and also updates the `alt` attribute for accessibility purposes. This effectively changes the image displayed on the web page.

## 28. Explain the process of adding and removing attributes from an HTML element.

- - > Adding and removing attributes from an HTML element using JavaScript involves accessing the element and using its properties and methods to modify its attributes. Here's the process for both adding and removing attributes:

**Adding Attributes:**

1. **Select the HTML Element:**
   Use methods like `getElementById`, `querySelector`, or `getElementsByClassName` to select the HTML element to which you want to add attributes.

   ```javascript
   const element = document.getElementById("myElement");
   ```

2. **Add Attributes Using `.setAttribute()`:**
   Use the `.setAttribute(attributeName, attributeValue)` method to add attributes to the selected element. Provide the name of the attribute you want to add and its corresponding value.

   ```javascript
   element.setAttribute("class", "new-class");
   element.setAttribute("data-custom", "custom-value");
   ```

**Removing Attributes:**

1. **Select the HTML Element:**
   Choose the HTML element from which you want to remove attributes.

   ```javascript
   const element = document.getElementById("myElement");
   ```

2. **Remove Attributes Using `.removeAttribute()`:**
   Use the `.removeAttribute(attributeName)` method to remove a specific attribute from the element. Provide the name of the attribute you want to remove.

   ```javascript
   element.removeAttribute("class");
   element.removeAttribute("data-custom");
   ```

Here's a complete example that demonstrates adding and removing attributes:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Adding and Removing Attributes</title>
</head>
<body>
  <div id="myElement" class="initial-class" data-custom="initial-value">Element</div>
  <button id="addButton">Add Attribute</button>
  <button id="removeButton">Remove Attribute</button>

  <script>
    const element = document.getElementById("myElement");
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton");

    addButton.addEventListener("click", function() {
      // Add attributes
      element.setAttribute("style", "color: red;");
      element.setAttribute("title", "New Title");
    });

    removeButton.addEventListener("click", function() {
      // Remove attributes
      element.removeAttribute("style");
      element.removeAttribute("title");
    });
  </script>
</body>
</html>
```

In this example, clicking the "Add Attribute" button adds the `style` and `title` attributes to the `<div>` element, while clicking the "Remove Attribute" button removes those attributes. This illustrates the process of adding and removing attributes from an HTML element using JavaScript.
