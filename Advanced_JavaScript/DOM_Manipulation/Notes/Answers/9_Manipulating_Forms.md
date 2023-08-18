**Manipulating Forms:**

## 21. How can you access and modify the values of form elements using JavaScript?

- - > You can access and modify the values of form elements using JavaScript by interacting with the properties and methods provided by the DOM. Form elements such as input fields, checkboxes, radio buttons, select elements, and textareas have specific properties that allow you to retrieve and set their values. Here's how you can do it:

1. **Accessing Form Elements:**
   Use methods like `getElementById`, `querySelector`, or `getElementsByClassName` to select the form element you want to interact with.

   ```javascript
   // Example using getElementById
   const inputElement = document.getElementById("username");
   ```

2. **Accessing Values:**
   You can access the value of a form element using its `value` property. For radio buttons and checkboxes, use the `checked` property to determine if they are selected.

   ```javascript
   // Access the value of an input field
   const inputValue = inputElement.value;

   // Access the value of a radio button or checkbox
   const isChecked = checkboxElement.checked;
   ```

3. **Modifying Values:**
   You can modify the value of a form element by assigning a new value to its `value` property. For radio buttons and checkboxes, use the `checked` property to set their selected state.

   ```javascript
   // Set a new value for an input field
   inputElement.value = "New Value";

   // Set the checked state of a checkbox
   checkboxElement.checked = true;
   ```

4. **Select Elements:**
   For `<select>` elements, you can access and modify the selected option using the `selectedIndex` property or by working with the `<option>` elements.

   ```javascript
   // Access selected index
   const selectedIndex = selectElement.selectedIndex;

   // Access selected option's value and text
   const selectedValue = selectElement.options[selectedIndex].value;
   const selectedText = selectElement.options[selectedIndex].text;

   // Modify selected index
   selectElement.selectedIndex = newIndex;
   ```

5. **Textarea Elements:**
   For `<textarea>` elements, you can access and modify the text content using the `value` property.

   ```javascript
   // Access textarea content
   const textareaContent = textareaElement.value;

   // Modify textarea content
   textareaElement.value = "New text content";
   ```

By using these techniques, you can retrieve user input from form elements and update their values as needed using JavaScript. This is essential for creating interactive and dynamic forms in web applications.

## 22. Explain how to prevent the default behavior of a form submission using an event handler.

- - > To prevent the default behavior of a form submission using an event handler, you can use the `preventDefault()` method provided by the event object. This method stops the normal action associated with an event, such as submitting a form or navigating to a new page. Here's how you can achieve this:

1. **Select the Form Element:**
   First, select the form element you want to prevent from submitting. You can use methods like `getElementById`, `querySelector`, or `getElementsByClassName` to select the form.

   ```javascript
   const form = document.getElementById("myForm");
   ```

2. **Attach the Event Listener:**
   Attach an event listener to the form's `"submit"` event. This event is triggered when the user submits the form, either by clicking a submit button or pressing Enter inside a form field.

   ```javascript
   form.addEventListener("submit", function (event) {
     // Prevent the default form submission behavior
     event.preventDefault();

     // Perform your custom actions here
   });
   ```

3. **Prevent Default Behavior:**
   Inside the event handler, call the `preventDefault()` method on the event object to prevent the form from submitting. This will prevent the form from reloading the page or navigating to a new URL.

By preventing the default behavior of the form submission, you can perform additional actions or validations using JavaScript before allowing the form to be submitted. This is often used to validate user input, handle data submission through AJAX requests, or perform other custom actions without the browser performing its default form submission behavior.

Here's an example with a complete HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Prevent Form Submission</title>
  </head>
  <body>
    <form id="myForm">
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>

    <script>
      const form = document.getElementById("myForm");

      form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform your custom actions here
        console.log("Form submission prevented!");
      });
    </script>
  </body>
</html>
```

In this example, when you click the "Submit" button in the form, the default form submission behavior is prevented, and the message "Form submission prevented!" is logged to the browser's console. You can replace the console log with your desired custom actions or validation logic.
