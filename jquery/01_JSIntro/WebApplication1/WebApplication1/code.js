// alert('hello JS!'); // 1990s style JS debugging
//console.log("hello console!"); // modern way 

// types in JS:
// 6 bulit-in types: 
// number, boolean, string, 
// object, function, undefined

// number ~= double
//var n = .1 + .2;
//console.log(n, typeof n);

// bool
//var b = true;
//console.log(typeof b);

// string
//var s = "O'Grady";
//console.log(typeof s);

// object
//var o = {
//    name: "Brock"
//};
//o['name'] = "Joe";
//o.age = 23;
//console.log(typeof o, o.name, o["age"]);

// function
//var f = function (a, b) {
//    return a + b;
//};
//var x = 10;
//var x = 10;
//var x = 10;
//var x = 10;
//var x = 10;

//function f(a, b) {
//    //if (a < 10) {
//    //    return a;
//    //}

//    return a * b;
//}

//var f = function () {
//    return 100;
//};

//var result = f(2, 3, 1, 2, 3, 4);
//console.log(result, typeof f);

// undefined
//var x;
//console.log(typeof x, x == undefined, x);

//function f(a, b) {
//    console.log(a, b);
//}
//var result = f(5, x);
//console.log(result);

//var d = new Date();
//console.log(typeof d);

//var a = [1, 2, 3];
//console.log(typeof a);

//var elem = document.getElementById('hello');
//console.log(typeof elem);

//var names = ["Alice", "Bob", "Brock", "Sue"];
////names.push("Sue");
////var sue = names.pop();
////names.unshift("Sue");
////var sue = names.shift();
////names.splice(1, 2);
////names.splice(2, 0, "Fred");
////names.splice(2, 1, "Fred");
//for (var i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

//var x = 1 - { name: "Brock" };
//var x = "";
//console.log(x, typeof x);
//// truthy: !falsy 
//// falsy: false, undefined, null, 0, "", NaN
//if (x) {
//    console.log('x is truthy');
//}
//else {
//    console.log("x is falsy");
//}

//var a = false;
//var b = "";
//if (a === b) {
//    console.log('same');
//}
//else {
//    console.log('not same');
//}

// var x = 10;

// IIFE
(function() {

    "use strict";

    function work1() {

        x = 20;

        console.log(x);
    }

    work1();
    console.log(x);
})();
