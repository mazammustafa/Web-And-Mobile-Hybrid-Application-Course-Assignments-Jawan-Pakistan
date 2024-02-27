// Chapter # 04 VARIABLE NAMES: LEGAL & ILLEGAL

// Declare 3 variables in one statement.

var home, about, service;

// Declare 5 legal & 5 illegal variable names.

// var legal, word, user, count, resgister;
// var 1illegal, & word, /user , #count ,my-resgister;

var allowedCharacters = "number, $ and _ ";
var beginWith = "varter, $ or ";
var caseSensitive = "sensitive";
var reservedWords = "keywords";

// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("<h1>Rules for naming JS variables</h1> <br />");
document.write("Variable names can only contain " + allowedCharacters + ". For example $my_1stVariable <br />");
document.write("Variables must begin with a " + beginWith + ". For example $name, _name or name <br />");
document.write("Variable names are case " + caseSensitive + "<br />");
document.write("Variable names should not be JS " + reservedWords + "<br />");


// Chapter # 05 MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var a = 3;
var b = 5;
var add = a + b;
document.write("Sum of " + a + " and " + b + " is " + add + "<br />");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// a. Declare a variable.
var myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br />");
myVariable = 5;
document.write("Initial value: " + myVariable + "<br />");
myVariable++;
document.write("Value after increment is: " + myVariable + "<br />");
myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br />");
myVariable--;
document.write("Value after decrement is: " + myVariable + "<br />");
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br />");

// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticket_cost = 600;
var total_cost = 600 * 5;
document.write("Total cost to 5 tickets to a moives is " + total_cost + "PKR <br />");

// Write a script to display multiplication table of any
// number in your browser. E.g

var table_number = 6;
document.write(table_number + " x 1 = " + table_number * 1 + "<br />");
document.write(table_number + " x 2 = " + table_number * 2 + "<br />");
document.write(table_number + " x 3 = " + table_number * 3 + "<br />");
document.write(table_number + " x 4 = " + table_number * 4 + "<br />");
document.write(table_number + " x 5 = " + table_number * 5 + "<br />");
document.write(table_number + " x 6 = " + table_number * 6 + "<br />");
document.write(table_number + " x 7 = " + table_number * 7 + "<br />");
document.write(table_number + " x 8 = " + table_number * 8 + "<br />");
document.write(table_number + " x 9 = " + table_number * 9 + "<br />");
document.write(table_number + " x 10 = " + table_number * 10 + "<br />");

// The Temperature Converter: It’s hot out! var’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemperature = 20;
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F <br />");
var fahrenheitTemp = 70;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C <br />");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges


var Price_of_item_1 = 650;
var Price_of_item_2 = 100;
var Ordered_quantity_of_item_1 = 3;
var Ordered_Quantity_of_item_2 = 7;
var Shipping_charges = 100;
var total_charge = Price_of_item_1 * Ordered_quantity_of_item_1 + Price_of_item_2 * Ordered_Quantity_of_item_2 + Shipping_charges;
document.write("<h1>Shopping Cart </h1><br />");

document.write("Price of item 1 is " + Price_of_item_1 + "<br />");
document.write("Quantity of item 1 is " + Ordered_quantity_of_item_1 + "<br />");
document.write("Price of item 2 is " + Price_of_item_2 + "<br />");
document.write("Quantity of item 2 is " + Ordered_Quantity_of_item_2 + "<br />");
document.write("Shipping charges is " + Shipping_charges + "<br />");

document.write("Total cost of your order is " + total_charge + "<br />");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total_marks = 980;
var obtain_marks = 804;
var percent = ((obtain_marks / total_marks) * 100);
document.write("<h1>Marks Sheet </h1><br />");
document.write("Total Marks are :" + total_marks + "<br />");
document.write("Obtain Marks are :" + obtain_marks + "<br />");
document.write("Percentage are :" + obtain_marks + "/" + total_marks + "=" + percent + "% <br />");


// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usd = 10;
var sar = 25;
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;
var totalPkr = (usd * usdToPkrRate) + (sar * sarToPkrRate);
document.write("<h1> Currency in PKR</h1><br />");
document.write("Total currency in Pakistani Rupees: " + totalPkr + "<br /><br /> ");

// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 10;
var result = ((number + 5) * 10) / 2;

document.write("Result: " + result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
var current_year = 2024;
var birth_year = 2002
var age = current_year - birth_year;
document.write("<h1>Age Calculator </h1><br />");
document.write("Your Age is :" + age + "<br />");

// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var Circumference = 2 * 3.142 * radius;
var Area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer: </h1><br />");
document.write("The Radius of Circle is: " + radius + ".<br/>");
document.write("The Circumference is: " + Circumference + " <br/>");
document.write("The Area is: " + Area + "<br/>");


document.write("<h1> The Lifetime Supply Calculator: </h1><br />");

var favoriteSnack = "Chocolate Chips";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var yearsRemaining = maxAge - currentAge;;
var totalSnacksNeeded = yearsRemaining * amountPerDay;

document.write("favoriteSnack " + favoriteSnack + "<br />");
document.write("currentAge " + currentAge + "<br />");
document.write("Max Age" + maxAge + "<br />");
document.write("Amount of snacks per day" + amountPerDay + "<br />");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".<br/>");
