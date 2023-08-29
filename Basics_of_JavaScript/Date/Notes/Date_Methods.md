## Commonly used methods of the JavaScript `Date` object ##

1. **`getFullYear()`**: Returns the year (4 digits) of the `Date` object.

   ```javascript
   const now = new Date();
   const year = now.getFullYear(); // Returns the current year (e.g., 2023)
   ```

2. **`getMonth()`**: Returns the month (0-11) of the `Date` object. January is 0, February is 1, and so on.

3. **`getDate()`**: Returns the day of the month (1-31) of the `Date` object.

4. **`getDay()`**: Returns the day of the week (0-6), where Sunday is 0, Monday is 1, and so on.

5. **`getHours()`**: Returns the hour (0-23) of the `Date` object.

6. **`getMinutes()`**: Returns the minutes (0-59) of the `Date` object.

7. **`getSeconds()`**: Returns the seconds (0-59) of the `Date` object.

8. **`getMilliseconds()`**: Returns the milliseconds (0-999) of the `Date` object.

9. **`getTime()`**: Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix timestamp).

   ```javascript
   const now = new Date();
   const timestamp = now.getTime(); // Returns the current timestamp in milliseconds
   ```

10. **`toDateString()`**: Returns a human-readable string representing the date portion of the `Date` object.

11. **`toTimeString()`**: Returns a human-readable string representing the time portion of the `Date` object.

12. **`toLocaleString()`**: Returns a human-readable string representing the complete date and time using the system's locale settings.

13. **`toString()`**: Returns a human-readable string representing the complete date and time in a standardized format.

14. **`toISOString()`**: Returns a string representing the date and time in the ISO 8601 format (e.g., "2023-08-17T12:30:00.000Z").

15. **`setFullYear(year [, month [, day]])`**: Sets the year, optionally the month (0-11), and optionally the day of the `Date` object.

16. **`setMonth(month [, day])`**: Sets the month (0-11) and optionally the day of the `Date` object.

17. **`setDate(day)`**: Sets the day of the month (1-31) of the `Date` object.

18. **`setHours(hour [, min [, sec [, ms]]])`**: Sets the hour (0-23), optionally the minutes, optionally the seconds, and optionally the milliseconds of the `Date` object.

19. **`setMinutes(min [, sec [, ms]])`**: Sets the minutes (0-59), optionally the seconds, and optionally the milliseconds of the `Date` object.

20. **`setSeconds(sec [, ms])`**: Sets the seconds (0-59) and optionally the milliseconds of the `Date` object.

21. **`setMilliseconds(ms)`**: Sets the milliseconds (0-999) of the `Date` object.

22. **`setTime(time)`**: Sets the time of the `Date` object using a Unix timestamp.

These are some of the core methods provided by the `Date` object in JavaScript. Understanding and utilizing these methods will allow you to effectively work with dates and times in your applications. Keep in mind that JavaScript's `Date` object has limitations, and if you're dealing with complex date and time operations, you might consider using specialized libraries like `date-fns` or `luxon`.