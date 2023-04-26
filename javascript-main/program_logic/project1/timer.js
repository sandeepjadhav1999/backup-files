class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('click', this.clearInput); //added eventListener on click for clearing the input while timer ir running
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
        this.startButton.disabled = true; //added code to prevent speeding the timer on second click to play button
    };

    pause = () => {
        clearInterval(this.interval);
        this.startButton.disabled = false; //preventing the play to be clicked and speeding up the timer
        
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        }
        else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

    //this method is for clearing the input when you click on it even if the timer is running
    clearInput = () => {
        this.durationInput.value = '';
        this.pause();
        circle.setAttribute('stroke', 'lightblue'); //while setting the input stroke becomes light blue
    };

}