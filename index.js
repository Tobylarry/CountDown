let day = document.querySelector("#getd");
let dayb = document.querySelector("#getd2");
let hour = document.querySelector("#hour");
let hourb = document.querySelector("#hour2");
let min = document.querySelector("#mins");
let minb = document.querySelector("#mins2");
let sec = document.querySelector("#sec");
let secb = document.querySelector("#sec2");

var x = setInterval(count, 1000)

function count() {

    const deadline = new Date("september 31, 2021 15:37:25").getTime()

    let now = new Date().getTime()
    let countDown = deadline - now;
    let dy = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hr = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mn = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let sc = Math.floor((countDown % (1000 * 60)) / 1000);

    if (dy < 0) {
        clearInterval(x);
        document.getElementById("head").innerHTML = "EXPIRED";
    } else {

        day.innerHTML = dy
        dayb.innerHTML = dy
        hour.innerHTML = hr
        hourb.innerHTML = hr
        min.innerHTML = mn
        minb.innerHTML = mn
        sec.innerHTML = sc;
        secb.innerHTML = sc;
        let x = sec.value;

    }
}