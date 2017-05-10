var plus = document.getElementsByClassName('plus');
var minus = document.getElementsByClassName('minus');
var time = document.getElementsByClassName('time');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var label = document.getElementById('label');
var session_count = 0;
var break_count = 0;
var active = true;


for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function (data) {

        if (this == plus[0]) {
            session_count += 1;
            time[0].textContent = session_count + ":00";
        } else if (this == plus[1]) {
            break_count += 1;
            time[1].textContent = break_count + ":00";
        }
    })
}

for (i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function (data) {
        if (session_count > 0 || break_count > 0) {
            if (this == minus[0]) {
                session_count -= 1;
                time[0].textContent = session_count + ":00";
            } else if (this == minus[1]) {
                break_count -= 1;
                time[1].textContent = break_count + ":00";
            }
        }

    })
}

//count down clock
// Set the date we're counting down to

var distance;
start.addEventListener('click', function () {
    active = true;
    var countDownDate = new Date().getTime(); //this comes with thefunction
    // Update the count down every 1 second
    var current = session_count;

    function countdown() {

        var now = new Date().getTime(); //this comes with the function
        // Find the distance between now an the count down date
        distance = countDownDate + current * 60000 - now; //times 60,000 since getTime returns time in miliseconds
        //    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h " +
            minutes + "m " + seconds + "s ";

        //make the stop button work
        if (active === false) {
            clearInterval(x); //the loop will stop when it sees this
            session_count = distance / 60000; //this will make sure the session count is current
        } else if (distance < 0) {
            console.log(distance);
            //                clearInterval(x);
            label.innerHTML = label.innerHTML == "BREAK" ? "WORK" : "BREAK";
            current = current == session_count ? break_count : session_count;
            countDownDate = new Date().getTime();

            countdown();
            //            x = setInterval(countdown, 1000);

        }
    }
    countdown();
    var x = setInterval(countdown, 1000);
    //this function IS a loop
});

stop.addEventListener('click', function () {
    active = false;
    //    time.innerHTML = "00:00:00";
});
