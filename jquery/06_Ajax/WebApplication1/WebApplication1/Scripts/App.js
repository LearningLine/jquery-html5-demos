﻿/// <reference path="jquery-1.10.2.js" />


$(function () {

    // Task
    // C# 5: async/await
    /*
        void DoAsyncWork(Action callback)
        {
             StartNew(()=>{
               // do async stuff
               // ...
               callback();
            });

        
        // .NET 4/4.5
        var task = Task.Factory.StartNew(()=>{
            // do async stuff
        });
        task.ContinueWith(()=>{

        });

        // C# 5
        async void DoWork()
        {
            // pre

            await DoAsync();

            // this code here is in the implicit callback/ContinueWith
        }
    */


    $("#result button").click(function () {
        $("#message").slideUp(function () {
            $.ajax({
                url: '/api/product/' + $("#products").val(),
                type: 'PUT',
                contentType:'application/json',
                data: JSON.stringify({
                    name: $("#name").val(),
                    price: $("#price").val()
                }),
                success: function () {
                    console.log("success");

                    $("#message").text("Update Success!").slideDown().delay(2000).slideUp();
                },
                error: function () {
                    $("#message").text("Update Error!").slideDown();
                }
            });
        });
    });

    function getProduct(id) {
        return $.ajax({
            url: '/api/product/' + id,
            type: 'GET'
        });
    }

    function updateDetails(prod) {
        $("#name").val(prod.ProductName);
        $("#price").val(prod.UnitPrice);
    }

    $("#products").change(function () {
        console.log(this.value);

        var id = this.value;
        $("#message").slideUp();

        $("#result").fadeOut(function () {

            var promise = getProduct(id);
            //promise.then(function () { }, function () { });
            promise
                .done(updateDetails)
                .done(function () {
                    $("#result").fadeIn();
                });

            //var product = await getProduct(id);
            //updateDetails(product);
        });



    //$("#result button").click(function () {
    //    $("#message").slideUp(function () {
    //        $.ajax({
    //            url: '/Home/ProductDetails',
    //            type: 'POST',
    //            data: {
    //                productId: $("#products").val(),
    //                productName: $("#name").val(),
    //                unitPrice: $("#price").val()
    //            },
    //            success: function () {
    //                console.log("success");

    //                $("#message").text("Update Success!").slideDown().delay(2000).slideUp();
    //            },
    //            error: function () {
    //                $("#message").text("Update Error!").slideDown();
    //            }
    //        });
    //    });
    //});

    //$("#products").change(function () {
    //    console.log(this.value);

    //    var id = this.value;
    //    $("#message").slideUp();

    //    $("#result").fadeOut(function () {

    //        $.ajax({
    //            url: '/Home/ProductDetails',
    //            type: 'GET',
    //            data: {
    //                productId: id
    //            },
    //            success: function (data, status, xhr) {
    //                console.log("success", data);

    //                $("#name").val(data.ProductName);
    //                $("#price").val(data.UnitPrice);

    //                $("#result").fadeIn();

    //                //$("<div>").text("Name: " + data.ProductName).appendTo("#result");
    //                //$("<div>").text("Price: " + data.UnitPrice).appendTo("#result");
    //            },
    //            error: function () {
    //                $("#result").text("Error loading product details");
    //            }
    //        });

    //    });

        

        //$("#result").load("/Home/ProductDetails", {
        //    productId: this.value
        //});

        //$.ajax({
        //    url: '/Home/ProductDetails',
        //    type:'GET',
        //    data: {
        //        productId:this.value
        //    },
        //    success: function (data, status, xhr) {
        //        console.log("success");
        //        $("#result").html(data);
        //    },
        //    error: function () {
        //        $("#result").text("Error loading product details");
        //    }
        //});
    });
});