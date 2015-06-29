var values = [];
var temp = [];
var screenVal = 0;
var operators = [];
var joined = [];
var realfinal =0 ;



var input = function (value) {
    temp.push(value); //Moves incoming values into a "temporary" array
    screenVal = value;
    document.getElementById("screen").innerHTML = screenVal; //Displays the latest value pressed
    console.log("temp is " + temp);


};

var operator = function(op){
    if (temp.length >0 ) { //checks if the length is >1 so it can execute the code before resetting the array to 0
        joined = temp.join("");
        values.push(joined); //pushes the temporary array values into the mail array
        console.log("values is " + values);
        operators.push(op); // pushes the operator value into the operator array
        console.log(operators);
        screenVal = op;
        document.getElementById("screen").innerHTML = screenVal;

    };
    temp.length = 0;
};

var equals = function () {
    if (temp.length >0 ) { // same code as above, need to optimize
        joined = temp.join("");
        values.push(joined);
        console.log("values is " + values);
        document.getElementById("screen").innerHTML = screenVal;

    };
    temp.length = 0;

    realfinal = parseInt(values[0]); // setting the base value, using parseInt to pass the value as an integer
    for (var i = 0; i < values.length; i++){ //cycling through the array
        var j=i+1;

        if (operators[i]){ //as long as operators exist in my operators array, execute the math.

            switch (operators[i]){
                case "+":
                    realfinal = realfinal + parseInt(values[j]);
                    console.log(" final is " + final);
                    break;
                case "-":
                    realfinal = realfinal - parseInt(values[j]);
                    i++;
                    console.log(" final is " + final);
                    break;
                case "*":
                    realfinal = realfinal * parseInt(values[j]);
                    console.log(" final is " + final);
                    break;
                case "/":
                    realfinal = realfinal / parseInt(values[j]);
                    console.log(" final is " + final);
                    break;
                default:
                    console.log("Something went wrong");
            };
        };
    };
    console.log("real final is " + realfinal);

    document.getElementById("screen").innerHTML = realfinal;


};
var clear = function () {
    values.length = 0; //clears the array
    location.reload();
};
