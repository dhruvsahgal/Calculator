var values = [];
var screenVal = 0;

var recieveNum = function(val){
    if (values.length === 0){
    values[0] = val;
    console.log(values[0]);
    screenVal = val;
    document.getElementById("screen").innerHTML = screenVal;

    } else if (values.length === 1){
    values[1] = val;
    console.log(values[1]);
    screenVal = val;
    document.getElementById("screen").innerHTML = screenVal;
    };
    console.log(values);
};

var recieveOp = function(op){
    operator = op;
    switch(operator){
        case 1:
            screenVal = values[0] + values[1];
            break;
        case 2:
             screenVal = values[0] - values[1];
            break;
        case 3:
            screenVal = values[0] * values[1];
            break;
        case 4:
             screenVal = values[0] / values[1];
            break;   
    };
    document.getElementById("screen").innerHTML = screenVal;
    console.log(screenVal);
         
};  


var reset = function(){
    location.reload();
};
