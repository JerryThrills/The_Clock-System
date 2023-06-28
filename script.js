function updateClock() {
    const now = new Date();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hoursDegrees = ((hours / 24) * 360) + ((minutes / 60) * 15) + ((seconds / 60) * 0.25);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();
