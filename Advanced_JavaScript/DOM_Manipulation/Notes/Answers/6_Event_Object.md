**Event Object:**

## 15. What is the event object, and why is it useful in event handling?

- - > The event object is a JavaScript object that is automatically created and passed to the callback function of an event handler when an event occurs. It contains information and properties related to the event that occurred, allowing you to access details about the event and the element it happened on. The event object is extremely useful in event handling because it provides context and data to the event handler, enabling you to respond to events effectively and make informed decisions based on the event's characteristics.

Here's why the event object is useful in event handling:

1. **Event Type:** The event object provides information about the type of event that occurred, such as "click," "keydown," "submit," etc. This allows you to identify the specific event that triggered the handler.

2. **Target Element:** The event object has a property called `target` that references the DOM element on which the event occurred. This is particularly useful when you have multiple similar elements with the same event handler, as it allows you to determine which element triggered the event.

3. **Event Coordinates:** For events related to mouse actions (like clicks or mouse movements), the event object provides coordinates (X and Y) of the cursor at the time of the event. This can be used to determine where the event occurred within an element.

4. **Preventing Default Behavior:** The event object includes a method called `preventDefault()`. By calling this method within an event handler, you can prevent the default behavior associated with the event. For example, you can prevent a link from navigating to a new page or prevent a form from submitting.

5. **Stopping Propagation:** The event object also includes a method called `stopPropagation()`. By calling this method, you can stop the event from propagating further through the DOM hierarchy, preventing it from triggering event handlers on ancestor or descendant elements.

6. **Additional Event Information:** Depending on the event type, the event object might provide additional information specific to that event. For example, for keyboard events, you can access the pressed key code.

Here's an example of using the event object in a click event handler:

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  console.log("Button was clicked!");
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
  console.log("Mouse X coordinate:", event.clientX);
  console.log("Mouse Y coordinate:", event.clientY);

  // Prevent the default behavior (e.g., link navigation)
  event.preventDefault();
});
```

By leveraging the event object, you can gather important information about the event and control its behavior, leading to more interactive and responsive web applications.

## 16. How can you access properties of the event object inside an event handler?

- - > You can access properties of the event object inside an event handler by referencing the event object parameter that is automatically passed to the callback function when the event occurs. The event object contains various properties that provide information about the event and its characteristics. Here's how you can access properties of the event object:

1. **Declare an Event Handler:**
   Start by declaring an event handler function that takes the event object as a parameter. You can name the parameter anything you like, but conventionally, it's named `event` or `e`.

   ```javascript
   const button = document.getElementById("myButton");

   button.addEventListener("click", function(event) {
     // Access event object properties here
   });
   ```

2. **Access Event Object Properties:**
   Inside the event handler, you can access various properties of the event object using dot notation. Here are some commonly used event object properties:

   - `event.type`: Returns the type of the event (e.g., "click", "keydown").
   - `event.target`: Returns the DOM element on which the event occurred.
   - `event.clientX` and `event.clientY`: Return the X and Y coordinates of the mouse cursor during mouse events.

   ```javascript
   button.addEventListener("click", function(event) {
     console.log("Event type:", event.type);
     console.log("Target element:", event.target);
     console.log("Mouse X coordinate:", event.clientX);
     console.log("Mouse Y coordinate:", event.clientY);
   });
   ```

3. **Preventing Default Behavior:**
   You can also access methods of the event object, such as `preventDefault()` and `stopPropagation()`, to modify the behavior of the event.

   ```javascript
   button.addEventListener("click", function(event) {
     // Prevent default behavior
     event.preventDefault();
   });
   ```

In summary, when you declare an event handler and specify the event object parameter, you gain access to various properties and methods that provide valuable information about the event and allow you to control its behavior. These properties and methods are essential for creating interactive and responsive web applications.
