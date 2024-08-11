let timehour;
let timeminute;
let timesecond;
let timemillisecond;
let timecount = 0;
let eventtimer;

$(document).ready(function(){
    $(".startbutton").click(function(){
        document.querySelector(".startbutton").disabled = true;
        document.querySelector(".stopbutton").disabled = false;
        document.querySelector(".resetbutton").disabled = false;

        eventtimer = setInterval(function(){
            timecount++;
            timemillisecond = timecount % 100;
            timesecond = (Math.trunc(timecount / 100)) % 60;
            timeminute = (Math.trunc(timecount / 100 / 60)) % 60;
            timehour = Math.trunc(timecount / 100 / 60 / 60);

            $(".time_millisecond").text(padNumber(timemillisecond));
            $(".time_seconds").text(padNumber(timesecond));
            $(".time_minutes").text(padNumber(timeminute));
            $(".time_hours").text(padNumber(timehour));

        },10);
    });
    $(".stopbutton").click(function(){
        document.querySelector(".startbutton").disabled = false;
        document.querySelector(".stopbutton").disabled = true;
        document.querySelector(".resetbutton").disabled = false;

        clearInterval(eventtimer);
    });

    $(".resetbutton").click(function(){
        document.querySelector(".startbutton").disabled = false;
        document.querySelector(".stopbutton").disabled = true;
        document.querySelector(".resetbutton").disabled = true;

        clearInterval(eventtimer);
        timehour = 0;
        timeminute = 0;
        timesecond = 0;
        timemillisecond = 0;
        $(".time_hours,.time_minutes,.time_seconds,.time_millisecond").text("00");
    });
});

function padNumber(number){
    return number.toString().padStart(2,"0");
}