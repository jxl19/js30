(() => {
    const
        secondHand = document.querySelector('.second-hand'),
        minuteHand = document.querySelector('.min-hand'),
        hourHand = document.querySelector('.hour-hand')
    //helper function to calc rotation of hands
    const calcDegrees = (time, max) => ((time / max) * 360) + 90;

    setInterval(() => {
        const now = new Date();
        const
            secondDegrees = calcDegrees(now.getSeconds(), 60),
            minuteDegrees = calcDegrees(now.getMinutes(), 60),
            hourDegrees = calcDegrees(now.getHours(), 12);
        //apply rotation to hands
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }, 1000);
})();
