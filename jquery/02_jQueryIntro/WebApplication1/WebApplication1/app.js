/// <reference path='jquery.js' />

//console.log(jQuery);

//var items = $("#brock");
//console.log(items.length);

//for (var i = 0; i < items.length; i++) {
//    console.log(items[i].innerHTML);
//}

//window.document.rootElement

//$(document).ready(function () {
// shortcut version of the above line of code
$(function () { 

    // class Person {....}
    // var p = new Person();
    // p.Speak();
    // p.FirstName = "Brock";
    // Person.foo();

    // var p = new Person();
    // p.firstName = "Brock";
    // p.sayHello();

    // jQuery/$
    // var list = $("li");
    // list.text("...");
    // jQuery.ajax(...)
    // $.ajax(...);


    var items = $("li");
    console.log(items.length);
    //console.log(items.text());
    //items.text("Hello jQuery!");

    //items.css("color", "Blue");

    items.click(function () {
        //alert("Brock was clicked!");

        $("<li>more stuff!</li>").appendTo("ul");

    });

});

