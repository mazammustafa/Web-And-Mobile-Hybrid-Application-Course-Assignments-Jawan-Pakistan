// 1. Declare an empty array using JS literal notation to store
// student names in future.

var students = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

students = {
    "name": []
};

// 3. Declare and initialize a strings array.
var strArray = ["Hello", "World", "This", "Is", "Awesome"];

// 4. Declare and initialize a numbers array.
var numArray = [5, 8, 9, 0];

// 5. Declare and initialize a boolean array.
var boolArray = [true, false];

// 6. Declare and initialize a mixed array.
var mixArray = ["Muhammad Azam Mustafa", true, 78];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var eduQualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
document.write("<h1>Qualification</h1>");
for (var i = 0; i < eduQualification.length; i++) {
    document.write(`${i + 1}) ${eduQualification[i]} <br/>`);
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentName = ['Michael', 'John', 'Tony'];
var studentScroe = [320, 230, 480];
for (var i = 0; i < studentName.length; i++) {
    var percentage = `${((studentScroe[i] / 500) * 100)} %`;
    document.write(`<p>Scroe of ${studentName[i]} is ${studentScroe[i]}. Percentage: ${percentage}</p>`);
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colors = ['Red', 'Green', 'Blue', 'Yellow'];
document.write(`Current array is:  ${colors} <br />`);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
colors.unshift(prompt("Enter a color you want to add in the beginning of an array"));
document.write(`After adding new element in the beginning, the current array is :  ${colors} <br />`);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
colors.push(prompt("Enter a color you want to add in the End of an array"));
document.write(`After adding new element in the End, the current array is :  ${colors} <br />`);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.unshift('Violet', 'Orange');
document.write(`After Adding Two More Elements In The Beginning ,The Current Array Is : ${colors} <br />`);

// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
document.write(`After Deleting First Color From The Array ,The Current Array Is : ${colors} <br />`);

// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
document.write(`After Deleting Last Color From The Array ,The Current Array Is : ${colors}<br/>`);

// f. Add color at desired position
var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAdd = prompt("What color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write(`After adding a color at desired position:  ${colors} <br>`);

// g. Delete color(s) at user-defined position
var indexToDelete = prompt("At which index do you want to delete color(s)?");
var countToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, countToDelete);
document.write(`After deleting colors at user-defined position:  ${colors} <br>`);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScores = [];

studentScores.push(320);
studentScores.push(230);
studentScores.push(480);
studentScores.push(120);

document.write(`<br> Student scores: ${studentScores} <br>`);

studentScores.sort((a, b) => a - b);
document.write(`Sorted student scores in ascending order:  ${studentScores}  <br><br>`);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Initialize an array with city names and copy elements
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write(`City Names: ${cities} <br>`);
document.write(`Selected Cities: ${selectedCities} <br><br>`);



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Create a single string from an array
var arr = ["This ", " is ", " my ", " cat"];
var sentence = arr.join("");
document.write("Sentence: " + sentence + "<br><br>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var fifoArray = [];
// Example of inserting values
fifoArray.push("KeyBorad");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
// Accessing values in FIFO order
document.write(`Devices: ${fifoArray}<br>`)
while (fifoArray.length > 0) {
    document.write(`Out: <br> ${fifoArray.shift()} <br>`);
}
document.write(`<br>`)

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var lifo = [];
// Example of inserting values
lifo.push("KeyBorad");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
// Accessing values in FIFO order
document.write(`Devices: ${lifo}<br>`)
while (lifo.length > 0) {
    document.write(`Out: <br> ${lifo.pop()} <br>`);
}
document.write(`<br>`)

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select id="manufacturers">');
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write(`<option value =  ${phoneManufacturers[i]} > ${phoneManufacturers[i]} </option>`);
}
document.write('</select> <br><br>');


// ARRAYS AND LOOP
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multiDimensionalArray = [];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var multiDimensionalArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < multiDimensionalArray.length; i++) {
    var row = "";
    for (var j = 0; j < multiDimensionalArray[i].length; j++) {
        row += `${multiDimensionalArray[i][j]} `;
    }
    document.write(row + "<br />");
}
document.write(`<br><br>`)

// 3. Write a program to print numeric counting from 1 to 10.
var result = "";
for (var i = 1; i <= 10; i++) {
    result += `<br>${i}`;
}
document.write(`Counting: ${result} <br>`);

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var tableNumber = parseInt(prompt("Enter table number"), 10);
var tableLength = parseInt(prompt("Enter table length"), 10);
for (var i = 1; i <= tableLength; i++) {
    document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var fruit = "";
for (let fr of fruits) {
    fruit += `${fr}.`;
}
document.write(`Fruit: ${fruit} <br>`);

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let counting = [], reverseCounting = [], even = [], odd = [], series = [];
for (let i = 1; i <= 20; i++) {
    if (i <= 15) counting.push(i);
    if (i <= 10) reverseCounting.unshift(i);
    if (i % 2 === 0) {
        even.push(i);
        series.push(`${i}k`);
    }
    if (i % 2 !== 0) odd.push(i);
}
document.write(`Counting: ${counting.join(', ')} <br>`);
document.write(`Reverse Counting: ${reverseCounting.join(', ')} <br>`);
document.write(`Even: ${even.join(', ')} <br>`);
document.write(`Odd: ${odd.join(', ')} <br>`);
document.write(`Series: ${series.join(', ')} <br>`);

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("What item are you looking for?");
if (A.includes(search)) {
    alert(`${search} is available in the list.`);
} else {
    alert(`${search} is not available in the list.`);
}
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
let numbers = [24, 53, 78, 91, 12];
document.write(`Largest number: ${Math.max(...numbers)}  <br>`);

// 9. Write a program to identify the smallest number in the
// given array.
A = [24, 53, 78, 91, 12]
document.write(`Smallest number: ${Math.min(...numbers)} <br>`);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write(`Multiple of 5:`);
for (let i = 5; i <= 100; i += 5) {
    document.write(`${i} `);
}

var password = prompt("Please enter your password:");
if (password !== "") {
    if (password.length >= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("ok");
    }
} else {
    alert("empty");
}

//
// var a = 1; 
var c = "max"; 

if (a === 1) {
    if (c === "max") {
        alert("OK");
    }
} else {
    alert("Azam Mustafa");
}
//
if (a === 1 && c === "Max") {
    alert("ok")
}
//
var a = 2;
var b = 2;

if(a !== b){
    if(a<=b){
        alert("it is equal")
    }
    else {
        alert ("not equal")
    }
}

//
var emptyarr = []
var onestring = ["Azam Mustafa"]
//
var alphabet = ["h","i","j","k"];

alert(alphabet[2]);
//
var alphabet = ["h","i","j","k","L","M","n","o","p"];
document.write(`${alphabet.length} <br>`)
//
var mArray = ["first Element"];

mArray[1] = "second Element";

alert(mArray[1]);

//
var myarray = ["Azam Mustafa"]
 myarray.push("last element")

document.write(`${myarray[myarray.length-1]}<br>`)
//
var alphabet2 = ["h","i","j","k"];
alphabet2.pop()
document.write(`${alphabet2}<br>`)
//
var alphabet3= ["h","i","j","k"];
alphabet3.push(5)
document.write(`${alphabet3}<br>`)
//
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift()
document.write(`${sizes}<br>`)
//

var sizes1 = ["<br>","S", "M", "XL", "XXL", "XXXL"];
sizes1.unshift(1,2,3);
document.write(`${sizes1}<br>`)
//
var elementarr = ["one element"]
elementarr[1]="secound element";
document.write(elementarr[elementarr.length-1])
//

var sizes4 = ["S", "M", "XL", "XXL", "XXXL"];
 sizes4.splice(2,0,"L")
document.write(`${sizes4}<br>`)
//
var sizes5 = ["S", "M", "XL", "XXL", "XXXL"];
var regsizes = sizes5.slice(0,3)
document.write(`${regsizes} <br>`)
//
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,3,"tiger","monkey")
document.write(`${pets} <br>`);
//
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2)
document.write(`${pets} <br>`);
//
var pets1 = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets.slice(3,4)
document.write(`${pets1} <br>`)

// 1. A loop that runs 10 times
for (var i = 0; i < 10; i++) {
    document.write("Loop 1 iteration:", i, "<br>");
}

// 2. A loop that runs 12 times using `<=`
for (var i = 0; i <= 11; i++) {
    document.write("Loop 2 iteration:", i, "<br>");
}

// 3. A loop with a counter name that's not `i`, running 100 times
for (var j = 0; j < 100; j++) {
    document.write("Loop 3 iteration:", j, "<br>");
}


for (var i = 2; i >= 0; i--) {
    document.write("Loop 4 iteration:", i, "<br>");
}
var flag = true; // Set a boolean flag

// Loop limited by the number of elements in the array `pets`
for (var i = 0; i < pets.length; i++) {
}

// For loop for a specific action on the second iteration
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i); // Alerts "1"
        break; // Exits the loop
    }
}

// Array of usernames and prompt interaction
var userNames = ["user1", "user2", "user3"]; // Example usernames
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write the correct user name");
    }
}

// Check for match in an array
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("No match found");
}

// Nested loops for concatenating elements from two arrays
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        document.write(firstArr[i] + secondArr[j]);
    }
}