$(function () {
    // Get Random Numbers
    var val1 = Math.floor((Math.random() * 9) + 1);
    var val2 = Math.floor((Math.random() * 9) + 1);
    var val3 = Math.floor((Math.random() * 9) + 1);

    while (val2 == val1 || val2 == val3) {
        val2 = Math.floor((Math.random() * 9) + 1);
    };

    while (val3 == val1 || val3 == val2) {
        val3 = Math.floor((Math.random() * 9) + 1);
    };

    var tries = 10;

    $("#checkButton").on("click", function () {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        var num3 = $("#num3").val();

    

    $("#checkButton").on("click", function () {
        tries = tries - 1;
        $("#header").html("You have " + tries + " more tries.");

        if (tries == 0) {
            alert("You lose! Correct numbers were: " + val1 + "," + val2 + "," + val3);
        };

    });



        console.log("random num: " + val1);
        console.log("random num: " + val2);
        console.log("random num: " + val3);
        console.log("input num: " + num1);
        console.log("input num: " + num2);
        console.log("input num: " + num3);

        if (num1 == val1) {
            $("#tile1").css("background-color", "green");
            $("#num1").css("background-color", "green");
        }
        else if (num1 == val2 || num1 == val3) {
            $("#tile1").css("background-color", "yellow");
            $("#num1").css("background-color", "yellow");
        }
        else {
            $("#tile1").css("background-color", "red");
            $("#num1").css("background-color", "red");
        }


        if (num2 == val2) {
            $("#tile2").css("background-color", "green");
            $("#num2").css("background-color", "green");
        }
        else if (num2 == val1 || num2 == val3) {
            $("#tile2").css("background-color", "yellow");
            $("#num2").css("background-color", "yellow");
        }
        else {
            $("#tile2").css("background-color", "red");
            $("#num2").css("background-color", "red");
        }


        if (num3 == val3) {
            $("#tile3").css("background-color", "green");
            $("#num3").css("background-color", "green");
        }
        else if (num3 == val1 || num1 == val2) {
            $("#tile3").css("background-color", "yellow");
            $("#num3").css("background-color", "yellow");
        }
        else {
            $("#tile3").css("background-color", "red");
            $("#num3").css("background-color", "red");
        }

        if (num1.length > 1) {
            alert("Please choose a number between 1 and 9");
        }
        if (num2.length > 1) {
            alert("Please choose a number between 1 and 9");
        }
        if (num3.length > 1) {
            alert("Please choose a number between 1 and 9");
        }

});

});








