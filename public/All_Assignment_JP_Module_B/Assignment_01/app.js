// // Q1: Write a program in which you have to create your own biodata details are: your name, email, city,
// // education, occupation, phone number, institute name etc. Using template literals and variable using let
// and const and final output is shown in document.write() same as in below: 

let name = "Muhammad Azam Mustafa";
let age = 21;
let Occupation = "Software Developer";
let Email = "azammustafa201@gmail.com";
let Phone = "03112687298";
let Institute_Name = "Jawan Pakistan";
let Education = "Graduation"

document.write("<h2>Question No. 01 <br /> Output: </h2> ");
document.write(`Name: ${name} <br/> Age: ${21} <br/> Occupation: ${Occupation} <br/> Email: ${Email}<br/>Phone: ${Phone}<br/>Institute Name: ${Institute_Name}<br/> Education: ${Education}<br/>`)


// Q2: Write a program of a basic mark sheet using JavaScript involves let, const variables to store marks
// for different subjects and then calculating the total marks, percentage, and grade based on those marks.
// Using template literals and variable using let and const and final output is shown in document.write().
document.write("<h2>Question No. 02 <br /> Output: </h2> ");
const mathMarks = 85;
const scienceMarks = 78;
const englishMarks = 92;
const historyMarks = 74;
const geographyMarks = 80;

// Total possible marks per subject
const totalMarksPerSubject = 100;

// Calculating total marks obtained
const totalMarksObtained = mathMarks + scienceMarks + englishMarks + historyMarks + geographyMarks;

// Calculating the total maximum marks
const totalMaxMarks = 5 * totalMarksPerSubject;

// Calculating the percentage
const percentage = (totalMarksObtained / totalMaxMarks) * 100;

// Determining the grade based on the percentage
let grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

// Displaying the mark sheet
document.write(`
    <h1>Mark Sheet</h1>
    <p>Math: ${mathMarks} / ${totalMarksPerSubject}</p>
    <p>Science: ${scienceMarks} / ${totalMarksPerSubject}</p>
    <p>English: ${englishMarks} / ${totalMarksPerSubject}</p>
    <p>History: ${historyMarks} / ${totalMarksPerSubject}</p>
    <p>Geography: ${geographyMarks} / ${totalMarksPerSubject}</p>
    <hr>
    <p>Total Marks Obtained: ${totalMarksObtained} / ${totalMaxMarks}</p>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
    <p>Grade: ${grade}</p>
`);


// Q3: Students using this below image you have to create each variable keyword apply at least one
// example for tasks executing. I share the output everyone must same as in the image.
// var    
// reinitialize (y)
// reassign (y)
// hoisting (y)  
// blockscope (y)

// var a = "Mohammad";
// var abc;
// var a = "Azam";

// console.log(a);

// var a = "Muhammad";

// // Function scope var keyword

// function abc() {
//   var a = "Azam";
//   console.log(a);
// }
// abc();


// // const
// // reinitialize (n)
// // reassign (n)
// // hoisting (n)
// // blockscope (y)


// const a = 12;

// {
//   const a = 10;
//   console.log(a);
// }
// console.log(a);


// // let
// // reinitialize (n)
// // reassign (y)
// // hoisting (n)
// // blockscope (y)

// let a = 12;

// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);

// // Function scope const keyword

// function abc() {
//   const a = 100;
// }

// abc();

// console.log(a);

// const a = 12;

// a = 10;  

// console.log(a);

// // const firstName = "Muhammad";
// // const firstName = "usman";

// console.log(firstName);

// console.log(abc);

// var abc = true;

// abc();

// function abc() {
//   console.log("abc");
// }

// console.log(abc);

// const abc = 12;
