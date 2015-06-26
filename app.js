var values = [];
var conVal;
var screenVal = 0;

var input = function (value) {
    values.push(value); //Moves incoming values into an array
    console.log(values);
    screenVal = value;
    document.getElementById("screen").innerHTML = screenVal; //Displays the latest value pressed
};

var equals = function () {
    conVal = values.join(""); // Joins the array into a single string
    var a = eval(conVal); //method evaluats a string as js
    console.log(conVal);
    console.log(a);
    document.getElementById("screen").innerHTML = a; //puts final answer into the screen of the calculator
    values.length = 0; //clears the array

};
var clear = function () {
    location.reload();
};




