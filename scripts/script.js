// This is a single line comment in JavaScript
/* This is 
a multi-line 
comment in JavaScript
 */


// -- Variables -- named storage for data that gets wiped when process are complete e.g.
let name = "John"; // can be reassigned
const age = 30; // cannot be reassigned
var old= 'deprecated'; // avoid

// -- Data Types -- string, number, boolean, null, undefined, object, array, function
let isStudent = true; 
let score = 95.5;
let colors = ["red", "green", "blue"];
let person = { firstName: "John", lastName: "Doe" };

// Operators
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let remainder = 10 % 3; // 1
let exponent = 2 ** 3; // 8

// comparison
console.log(10 > 5); // true
console.log(10 === '10'); // false (strict equality)
console.log(10 == "10"); // true (loose equality)

// conditional (if/else) and loops (for, while)
// if/else
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

    // for loop
    for (let i = 0; i <5; i++) {
        console.log(i);
    }

    // while loop
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

    // functions and arrow functions
    // A function is referred to as a 'named' block of code that can be called repeatedly 
    // A function can accept arguments if parameters are used when creating them. Arguments are passed when called and parameters are placeholders variables the arguments or actual values go through.
    // function declaration
    function greet(name) {
        return `Hello, ${name}!`;
    }

    // arrow function (anonymous, often assigned )
    const greetArrow = (name) => {
        return `Hello, ${name}!`;
    }

    // If one statement, can omit the braces and return implicitly
    const greetShort = name => `Hello, ${name}!`;

    console.log(greet("Alice"));
    console.log(greetArrow("Alice"));
    console.log(greetShort("Alice"));
    
    // DOM Manipulation - Selecting Elements, Changing content and styles
    //  The Document Object Model (DOM) represents the HTML page as a tree of objects. JavaScript can modify it.

    // Selecting Elements;
    // By ID
    const header = document.getElementById('header');
    console.log(header);

    // By class (returns HTMLCollection)
    const items = document.getElementsByClassName('item');
    console.log(items);
    // By CSS selector (first match)
    const firstItem = document.querySelector('.item');
    console.log(firstItem);
    // By CSS selector (all match)
      const allItems = document.querySelectorAll('.item');
    console.log(allItems);

    // Changing Content and styles:
    // Change text content
    const heading = document.querySelector('h1');
    heading.textContent = 'New Title';
    
    // Changing HTML (use with caution)
    heading.innerHTML = '<span style="color:green;">New Title</span>';
    
    // Changing CSS style
    heading.style.color = 'blue';
    heading.style.fontSize = '3rem';

    // Add/remove classes
    heading.classList.add('highlight');
    heading.classList.remove('highlight');
    heading.classList.toggle('active');

    // Event Listeners - Click, Submit, Mouseover
    // Click event
    const button = document.querySelector('.myButton');
    button.addEventListener('click', function() {
        alert('Button click!');
    });
    // Mouseover, mouseout
    const box = document.querySelector('.box');
    box.addEventListener('mouseover', () => {
        box.style.background = 'lightblue';
    });
     box.addEventListener('mouseout', () => {
        box.style.background = '';
    });

    // Simple Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
         event.preventDefault();// stop actual submission

         const username = document.getElementById('username').Value.trim();
         if (username === '') {
            alert('please enter your username.');
            return;
         }

          const email = document.getElementById('email').Value.trim();
         if (!email.includes('@')) {
            alert('please enter a valid email.');
            return;
         }

         alert('Form submitted successfully!');
        //  You could send data via fetch() here.
    });

    // Dark Mode Toggle
    const toggleBtn = document.getElementById('dark-mode-toggle');
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Optional: change button text
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark-Mode';
    });