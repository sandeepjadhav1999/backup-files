const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        console.log('Timer starts now!');
        circle.setAttribute('stroke', 'lightgreen'); //(setting stroke to green when start)

        //(these first two lines are for pausing the timer and continuing the animation from that same point by putting in a condition in onStart)
        if (!parseFloat(circle.getAttribute('stroke-dashoffset')))
            duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete() {
        console.log('Timer is completed.');
        circle.setAttribute('stroke-dashoffset', 0); // code to alwasy set stroke-dashoffset to 0 after completion of the timer
        circle.setAttribute('stroke', 'lightgray'); //setting stroke to lightgray when completed
    },
});