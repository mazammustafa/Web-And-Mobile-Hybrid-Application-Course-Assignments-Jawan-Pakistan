// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Please enter your first name:");
// Prompt the user for their last name
let lastName = prompt("Please enter your last name:");
// Merge the first and last names into a new variable called fullName
let fullName = firstName + " " + lastName;
// Greet the user using their full name
alert("Hello, " + fullName + "!");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
let phoneModel = prompt("What is your favorite mobile phone model?");
document.write(`<p>Favorite Phone is: ${phoneModel} </p><p>The length of String: ${phoneModel.length}</p>`);

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let word = "Pakistani";

// Find the index of the letter "n"
let index = word.indexOf("n");

// Check if the letter "n" is found in the word
if (index !== -1) {
    // Display the result in the browser
    document.write("<br>The index of the letter 'n' in the word 'Pakistani' is: " + index);
} else {
    // Display a message if the letter "n" is not found
    document.write("<br>The letter 'n' is not found in the word 'Pakistani'.");
}


// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
let phrase = "Hello World";

// Find the last index of the letter "l"
let lastIndex = phrase.lastIndexOf("l");

// Check if the letter "l" is found in the phrase
if (lastIndex !== -1) {
    // Display the result in the browser
    document.write("<br>The last index of the letter 'l' in the phrase 'Hello World' is: " + lastIndex);
} else {
    // Display a message if the letter "l" is not found
    document.write("<br>The letter 'l' is not found in the phrase 'Hello World'.");
}

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// Find the character at the 3rd index
let character = word.charAt(2); // Note: Indexing starts at 0, so the 3rd index is 2
// Display the result in the browser
document.write("<br>The character at the 3rd index in the word 'Pakistani' is: " + character);

// 6. Repeat Q1 using string concat() method.
let name = firstName.concat(" ", lastName);
document.write(`<br>My full name is: ${name}`);



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let originalWord = "Hyderabad";

// Replace "Hyder" with "Islam"
let newWord = originalWord.replace("Hyder", "Islam");
document.write(`<br>City: ${originalWord}`);
// Display the result in the browser
document.write("<br>The word after replacing 'Hyder' with 'Islam' is: " + newWord);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = 'Ali and Sami are best friends. They play cricket and football together.';
document.write(`<p>Before Replace: ${message}</p>`);
message = message.replace(/and/g, "&");
document.write(`<p>After Replace: ${message}</p>`);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
let stringNumber = "472";
document.write("<br>Value: " + stringNumber + "<br>Type: " + typeof stringNumber);
// Convert the string to a number   
let number = Number(stringNumber);
// Display the value and type in the browser
document.write("<br>Value: " + number + "<br>Type: " + typeof number);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

let userInput = prompt('Enter something');
userInput = userInput.toUpperCase();
document.write("<br>" + userInput);


// 11. Write a program that takes user input. Convert and
// show the input in title case.
let titleCase = prompt("Please enter a string:");

// Convert the input to title case without a separate function
let titleCaseInput = titleCase.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});

// Display the result in the browser
document.write("The input in title case is: " + titleCaseInput);

// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var numString = num.toString();
// Remove the dot from the string
var numWithoutDot = numString.replace('.', '');
document.write("The number without the dot is: " + numWithoutDot);



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
let username = prompt("Please enter a username:");

// Check if the username contains any special characters
while (/[@.,!]/.test(username)) {
    // If it does, prompt the user to enter a valid username
    username = prompt("Invalid username. Please enter a username without special characters (@, ., ,, !):");
}

// Display the valid username in the browser
document.write("Your valid username is: " + username);

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// The array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for an item to search
var searchItem = prompt("Please enter an item to search:");

// Convert the search item to lowercase for case-insensitive search
var lowerCaseSearchItem = searchItem.toLowerCase();

// Initialize a flag to indicate if the item is found
var itemFound = false;

// Search the array for the item
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowerCaseSearchItem) {
        itemFound = true;
        document.write(`${searchItem} is availabe  at index ${i} in our Bakery.`);
        break;
    } else {
        document.write("The item '" + searchItem + "' is not found in the list.");
    }
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// The string to convert
var university = "University of Karachi";

// Convert the string to an array using the split method
var universityArray = university.split(" ");

// Display the elements of the array in the browser
document.write("The elements of the array are:<br>");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

var text = "The quick brown fox jumps over the lazy dog";
    
    // Initialize a counter for the occurrences of "the"
    var count = 0;
    
    // Split the string into an array of words
    var words = text.split(" ");
    
    // Iterate through each word in the array
    for (var i = 0; i < words.length; i++) {
        // Check if the word is "the" (ignoring case)
        if (words[i].toLowerCase() === "the") {
            count++; // Increment the counter
        }
    }
    
    // Display the count
    alert("The word 'the' appears " + count + " times in the given string.");



//  Write a program to display the last character of a user
// input.

var Input = "Pakistan";

// Check if the input is not empty
document.write(Input + "<br/>")
// Display the last character of the input
document.write("The last character of your input is: " + Input[Input.length - 1]);

// 1. Type the characters that are missing from this code. var allLower =
// userInput.toLowerCase; Note: Correct this statement by yourself.

var allLower = userInput.toLowerCase();


// 2. Convert the string represented by x to lower-case and assign the result to
// the same variable.
 var x = x.toLowerCase();

//  3. Convert the string represented by y to upper-case and assign the result to
//  the same variable.

var y = y.toUpperCase();

// 4. Convert the string represented by a variable to lower-case and assign the
// result to a second variable that hasn&#39;t been declared beforehand.

var originalString = "Hello, World";
var lowerCaseString = originalString.toLowerCase();
console.log(lowerCaseString);