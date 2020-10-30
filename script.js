$(document).ready(function() { 

// add Moment.js
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDate);

// to create the day element in html
$("#currentDay").text(currentDate);

//link the hours of the day with the current time
var currentHour = moment().format('h:mm:ss a');
  
function schedule() {
console.log(currentHour);
localStorage.setItem('storeMePlease', 3);
console.log("la hora es" + currentHour);

var btnNine =  $("#nine");
btnNine.on("click", function() { 
    localStorage.setItem('09:00am', $("#09").val());
    console.log(localStorage.getItem("09:00am"));  
    //to store even after page gets refreshed
    $("#09").append(localStorage.getItem('09:00am'));
});

var btnTen = $("#ten");
btnTen.on("click", function() {
    localStorage.setItem('10:00am', $("#10").val());
    console.log(localStorage.getItem("10:00am"));
    $("#10").append(localStorage.getItem('10:00am'));
});  

var btnTen = $("#eleven");
btnTen.on("click", function() {
    localStorage.setItem('11:00am', $("#11").val());
    console.log(localStorage.getItem("11:00am"));
    $("#11").append(localStorage.getItem('11:00am'));
});  

var btnTen = $("#twelve");
btnTen.on("click", function() {
    localStorage.setItem('12:00pm', $("#12").val());
    console.log(localStorage.getItem("12:00pm"));
    $("#12").append(localStorage.getItem('12:00pm'));
}); 

var btnTen = $("#thirteen");
btnTen.on("click", function() {
    localStorage.setItem('13:00pm', $("#13").val());
    console.log(localStorage.getItem("13:00pm"));
    $("#13").append(localStorage.getItem('13:00pm'));
}); 

var btnTen = $("#fourteen");
btnTen.on("click", function() {
    localStorage.setItem('14:00pm', $("#14").val());
    console.log(localStorage.getItem("14:00pm"));
    $("#14").append(localStorage.getItem('14:00pm'));
}); 

var btnTen = $("#fifteen");
btnTen.on("click", function() {
    localStorage.setItem('15:00pm', $("#15").val());
    console.log(localStorage.getItem("15:00pm"));
    $("#15").append(localStorage.getItem('15:00pm'));
}); 

var btnTen = $("#sixteen");
btnTen.on("click", function() {
    localStorage.setItem('16:00pm', $("#16").val());
    console.log(localStorage.getItem("16:00pm"));
    $("#16").append(localStorage.getItem('16:00pm'));
}); 

var btnTen = $("#seventeen");
btnTen.on("click", function() {
    localStorage.setItem('17:00pm', $("#17").val());
    console.log(localStorage.getItem("17:00pm"));
    $("#17").append(localStorage.getItem('17:00pm'));
}); 

var btnTen = $("#eighteen");
btnTen.on("click", function() {
    localStorage.setItem('18:00pm', $("#18").val());
    console.log(localStorage.getItem("18:00pm"));
    $("#18").append(localStorage.getItem('18:00pm'));
}); 
};

//Function to add Class
var presentHour = parseInt(moment().format("H"));
console.log(presentHour);

changeColor()
function changeColor() {
$(".form-control").each(function () {
    var hourInput =   $(this).attr("id");
            console.log(hourInput)
            console.log(this)
            if (hourInput < presentHour) {
                console.log(1)
                $(this).addClass("past");
            }else if (hourInput == presentHour) {
                $(this).addClass("present");
                console.log(2)
            }else if (hourInput > presentHour) {
                $(this).addClass("future");
                console.log(3)
            }
});
};

//funcion to clear everithing
$("#clearDay").on("click", function () {
    localStorage.clear();
    $(".form-control").val("");
});

schedule();

});
     