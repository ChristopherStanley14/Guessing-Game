$(function (val1, val2, val3, num1, num2, num3) {
    $("#startButton").on("click", getRandom);
    $("#checkButton").on("click", getInput);
    $("#startButton").show();
    $("#checkButton").hide();
    $("#tile1").hide();
    $("#tile2").hide();
    $("#tile3").hide();

    

});



// Get random numbers
function getRandom() {
    $("#startButton").hide();
    $("#checkButton").show();
    $("#tile1").show();
    $("#tile2").show();
    $("#tile3").show();
    var val1 = Math.floor((Math.random() * 9) + 1);
    var val2 = Math.floor((Math.random() * 9) + 1);
    var val3 = Math.floor((Math.random() * 9) + 1);

    while (val2 == val1 || val2 == val3) {
        val2 = Math.floor((Math.random() * 9) + 1);
    };

    while (val3 == val1 || val3 == val2) {
        val3 = Math.floor((Math.random() * 9) + 1);
    };



    return (val1, val2, val3);


};





function getInput() {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    var num3 = $("#num3").val();

    return (num1, num2, num3);
}



