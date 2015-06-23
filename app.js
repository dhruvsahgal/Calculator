var values = [];
var conVal ;
var screenVal = 0;

var input = function(value){
    values.push(value);
    console.log(values);
    screenVal = value;
    document.getElementById("screen").innerHTML = screenVal;
};

var equals = function(){
    conVal = values.join("");
    var a = eval(conVal);
    console.log(conVal);
    console.log(a);
    document.getElementById("screen").innerHTML = a;
    values.length = 0;

};
var clear = function(){
    location.reload();
};




