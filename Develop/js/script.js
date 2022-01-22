// Display current date at top of calendar
var rightNow = moment().format("MMMM Do, YYYY");
$("#currentDay").append(rightNow);
console.log(rightNow);



$(document).ready(function () {

    // Getting current hour
    var currentHour = parseInt(moment().format("H"));
    console.log(typeof currentHour);

    var currentHour = new Date();
    console.log(currentHour.getHours());

    // color-code time blocks to indicate past, present, or future
    $(".description").addClass("present");


    // activate save button for that time block
    $(".saveBtn").on("click", function () {

        //set local storage or save text to local storage
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        localStorage.setItem(time, text)
    })

    // get local storage - or retrive text
    var hour9 = localStorage.getItem("9");
    console.log(hour9)
    $("#9 .description").val(hour9)

    var hour10 = localStorage.getItem("10");
    console.log(hour10)
    $("#10 .description").val(hour10)

    var hour11 = localStorage.getItem("11");
    console.log(hour11)
    $("#11 .description").val(hour11)

    var hour12 = localStorage.getItem("12");
    console.log(hour12)
    $("#12 .description").val(hour12)

    var hour1 = localStorage.getItem("13");
    console.log(hour1)
    $("#13 .description").val(hour1)

    var hour2 = localStorage.getItem("14");
    console.log(hour2)
    $("#14 .description").val(hour2)

    var hour3 = localStorage.getItem("15");
    console.log(hour3)
    $("#15 .description").val(hour3)

    var hour4 = localStorage.getItem("16");
    console.log(hour4)
    $("#16 .description").val(hour4)

});

