/// <reference path="jquery-1.10.2.js" />


$(function () {

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

    $("#products").change(function () {
        console.log(this.value);

        var id = this.value;
        $("#message").slideUp();

        $("#result").fadeOut(function () {

            $.ajax({
                url: '/api/product/' + id,
                type: 'GET',
                success: function (data, status, xhr) {
                    console.log("success", data);

                    $("#name").val(data.ProductName);
                    $("#price").val(data.UnitPrice);

                    $("#result").fadeIn();

                    //$("<div>").text("Name: " + data.ProductName).appendTo("#result");
                    //$("<div>").text("Price: " + data.UnitPrice).appendTo("#result");
                },
                error: function () {
                    $("#result").text("Error loading product details");
                }
            });

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