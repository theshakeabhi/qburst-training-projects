function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        //console.log(typeof('0' + t.hours));

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }

    }
    var timeinterval = setInterval(updateClock, 1000);
    updateClock();

}


let D = prompt("For the counter please enter number of days", "maximum x");
let H = prompt("Please enter num of hours");
let M = prompt("Please enter num of minutes");
let S = prompt("Please enter num of seconds");

D = parseInt(D);
H = parseInt(H);
M = parseInt(M);
S = parseInt(S);

let newDay;


//newDay = D + (H/24) + M/(60 * 24) + S/(60 * 60 * 24);
//var deadline = new Date(Date.parse(new Date()) + newDay * 24 * 60 * 60 * 1000);

// only works if the hours, minutes and second are 24, 60, and 60. (different logic, it's the days that aredepnde not the oother factors)


//logic in line 57 and 58 can be replaced by 
var deadline = new Date(Date.parse(new Date()) + (D * 24 * 60 * 60 * 1000) + (H * 60 * 60 * 1000) + (M * 60 * 1000) + (S * 1000));


initializeClock('clockdiv', deadline);

//TIME ZONE
var hU, mU, dU;

function utc(hU, mU, dU, mo, y, s) {
    var hU, mU, dU;
    var hUTC = hU - 5;
    var mUTC = mU - 30;
    var dUTC = dU;
    if (hUTC <= 0) {
        hUTC = 24 + hUTC;
        dUTC -= 1;
    }
    if (mUTC <= 0) {
        mUTC = mUTC + 60;
        hUTC -= 1;
    }
    mUTC = checkTime(mUTC);
    document.getElementById('utc').innerHTML =
        dUTC + "-" + mo + "-" + y + "   " + hUTC + ":" + mUTC + ":" + s + " " + "UTC";

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
        d + "-" + mo + "-" + y + "   " + h + ":" + m + ":" + s + " " + "IST";
    var t = setTimeout(startTime, 500);
    utc(h, m, d, mo, y, s);
}



function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}