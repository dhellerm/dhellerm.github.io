function createCountdown(timestamp, {
    days,
    hours,
    minutes,
    seconds,
    main
}) {
    const daysEl = document.querySelector(days);
    const hoursEl = document.querySelector(hours);
    const minutesEl = document.querySelector(minutes);
    const secondsEl = document.querySelector(seconds);
    const mainEl = document.querySelector(main);
    const interval = setInterval(() => updateCountdown(timestamp, {
        days: daysEl,
        hours: hoursEl,
        minutes: minutesEl,
        seconds: secondsEl,
        main: mainEl,
        interval
    }), 1000);
}

function updateCountdown(timestamp, {
    days,
    hours,
    minutes,
    seconds,
    main,
    interval
}) {
    const diff = timestamp - Date.now();
    if (diff <= 0) {
        main.innerText = "Now!";
        clearInterval(interval);
    }
    const daysN = Math.floor(diff / (1000 * 3600 * 24));
    const hoursN = Math.floor(diff / (1000 * 3600)) % 24;
    const minutesN = Math.floor(diff / (1000 * 60)) % 60;
    const secondsN = Math.floor(diff / 1000) % 60;

    days.innerText = daysN;
    hours.innerText = hoursN;
    minutes.innerText = minutesN;
    seconds.innerText = secondsN;
}

createCountdown(new Date(2021, 4, 8, 7).valueOf(), {
    days: "#cd-days",
    hours: "#cd-hours",
    minutes: "#cd-minutes",
    seconds: "#cd-seconds",
    main: "#cd-main"
});