/// <reference path='jquery.js' />

$(function () {
    
    //var text = $("li").text();
    //console.log(text);
    //$("li").text("Hello!");

    //console.log($("#name").val());
    //$("#name").val("something else");

    //var checked = $("#cb").prop("checked");
    //console.log(checked);
    //$("#cb").prop("checked", !checked);

    //var title = $("#brock").attr("title");
    //title += " yahoo!";
    //$("#brock").attr("title", title);

    //$("#brock").data("pk", {
    //    pk: 5,
    //    manager_pk:10
    //});
    var brock_pk = $("#brock").data("pk");
    console.log(brock_pk, typeof brock_pk);

    //$("#brock").css("color", "red");
    //console.log($("#brock").css("font-family"));
    //document.getElementById("brock").style.fontFamily

    //$("#brock")
    //    .css("color", "green")
    //    .css('fontWeight', 'bold');
    //$("#brock").css({
    //    color: "pink",
    //    fontWeight: 'bold'
    //});

    //$("#brock").addClass("colorful");

    //$("#brock").text("<span class='female'>This is great!</span>");
    //$("#brock").html("<span class='female'>This is great!</span><script>alert('haxxored')</script>");



    $("li").click(function () {
        //this.className += " colorful";

        //var $this = $(this);

        //if ($this.hasClass("colorful")) {
        //    $this.removeClass("colorful");
        //}
        //else {
        //    $this.addClass("colorful");
        //}

        $(this).toggleClass("colorful");
    });

    $("#addPerson").click(function () {
        var $name = $("#name");
        var name = $name.val().trim();
        if (name) {
            var li = $("<li>");
            li.text(name);

            //var ul = $("#people");
            //ul.prepend(li);
            //li.appendTo(ul);
            li.appendTo("#people");

            $name.val('').focus();
        }
    });

    $("#removePeople").click(function () {

        //var elem = $(".colorful").detach();
        //elem.appendTo("#people");

        //$(".colorful").remove();
        //$(".colorful").slideUp();
        //$(".colorful").fadeOut();
        //$(".colorful").hide();

        //$(".colorful")
        //    .slideUp("slow", "swing")
        //    .queue(function () {
        //        console.log("i'm in my queue callback");
        //        $(this).dequeue();
        //    })
        //    .slideDown("fast")
        //    .delay(500)
        //    .fadeOut(2000, function () {
        //        //$(this).remove();
        //    });
    });

});
