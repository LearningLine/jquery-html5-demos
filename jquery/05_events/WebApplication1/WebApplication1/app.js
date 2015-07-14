/// <reference path='jquery.js' />

$(function () {

    $("a").on("click", function (e) {
        console.log("google link was clicked");
        e.preventDefault();
    });

    $("form").on("submit", function (e) {
        console.log("google link was clicked");
        e.preventDefault();
    });

    function addPerson(e) {
        //console.log(e);
        var name = $("#name").val();
        var li = $("<li>");
        li.text(name);
        li.appendTo("#people");

        //$("li:first").trigger("click");

        $("#people").trigger("customers_changed");
    }

    $("body").on("customers_changed", function () {
        var customers = $("#people").find("li").length;
        $("#count").text(customers);
    });

    $("#people").trigger("customers_changed");
    
    //$("body").off("customers_changed");

    $("#addPerson").on("click", addPerson);
    //$("#addPerson").off("click", addPerson);

    //$("#addPerson").toggle(
    //    function () { },
    //    function () { });

    //$("li").on({
    //    mouseenter: function () {
    //        $(this).toggleClass("hover");
    //    },
    //    mouseleave: function () {
    //        $(this).toggleClass("hover");
    //    }
    //    //mouseover: function () {
    //    //    $(this).addClass("hover");
    //    //},
    //    //mouseout: function () {
    //    //    $(this).removeClass("hover");
    //    //}
    //});

    //$("ul").on("mouseenter mouseleave", "li:not(.female):last", function (e) {
    //    //console.log(e);
    //    $(this).toggleClass("hover");
    //});
    $("ul").on("mouseenter mouseleave", "li", function (e) {
        //console.log(e);
        $(this).toggleClass("hover");
    });
    $("ul").on("click", "li", function (e) {
        //console.log(e);
        $(this).toggleClass("selected");
    });

    $("#removePeople").click(function () {
        $(".selected").remove();
        $("#people").trigger("customers_changed");
    });


    //$("li").on("click", function (e) {
    //    // this === e.target
    //    console.log("li was clicked: ", e.target.innerHTML);

    //    // e.stopImmediatePropagation();
    //    // e.stopPropagation();
    //    // e.preventDefault();

    //    //return false;
    //});

    //$("ul").on("click", function (e) {
    //    // this === e.target
    //    console.log("ul was clicked: ", e.target.innerHTML);
    //});
});
