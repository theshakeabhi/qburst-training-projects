function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t/1000)%60);
    var minutes = Math.floor((t/1000/60)%60);
    var hours = Math.floor((t/ (1000 * 60 * 60))%24);
    var days = Math.floor(t/ (1000 * 60 * 60 *24));
    return {
        'total'  : t,
        'days'   : days,
        'hours'  : hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock (id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan= clock.querySelector('.hours');
    var minutesSpan= clock.querySelector('.minutes');
    var secondsSpan= clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining (endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval (timeinterval);
        }

    }

    updateClock ();
    var timeinterval = setInterval(updateClock, 1000);
}

/*
var D = prompt("For the counter please enter number of days", "maximum x");
alert(D);
var H = prompt("Please enter num of hours");
alert(H);
var M = prompt("Please enter num of minutes");
alert(M);
var S = prompt("Please enter num of seconds");
alert(S);
*/

var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
// only works if the hours, minutes and second are 24, 60, and 60.

initializeClock('clockdiv', deadline);

//TIME ZONE
var hU, mU, dU;

function utc(hU, mU, dU, mo, y, s)
{   
    var hU, mU, dU; 
    var hUTC = hU - 5;
    var mUTC = mU - 30;
    var dUTC = dU;
    if (hUTC <= 0){
        hUTC = 24 + hUTC;
        dUTC -= 1;         
    }
    if (mUTC <= 0) {
        mUTC = mUTC + 60;
        hUTC -= 1;    
    }
    document.getElementById('utc').innerHTML =
    dUTC + "-" + mo + "-" + y + "   " + hUTC + ":" + mUTC + ":" + s + " " + "UTC" ;

}

function startTime() {
    var today = new Date();
    var d = today.getDate();
    var mo = today.getMonth();
    var y = today.getUTCFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('ist').innerHTML =
    d + "-" + mo + "-" + y + "   " + h + ":" + m + ":" + s + " " + "IST" ;
    var t = setTimeout(startTime, 500);
    utc(h,m,d,mo,y,s);
}



function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}