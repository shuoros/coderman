class FrameRate {


    constructor(frequency) {
        this.period = 1000000000 / frequency;
    }

    init() {
        this.lastTimeCounter = this.now();
        this.lastTimeRender = this.now();
        this.frameCount = 0;
    }

    calculate() {
        let currentTime = this.now();
        this.frameCount++;
        if (currentTime - this.lastTimeCounter > 1000000000) {
            this.lastTimeCounter = currentTime;
            this.frameCount = 0;
        }
    }

    shouldRender() {
        let currentTime = this.now();
        if (currentTime - this.lastTimeRender > this.period) {
            this.lastTimeRender = currentTime;
            return true;
        }
        return false;
    }

    now() {
        return (window.performance.timeOrigin + window.performance.now()) * 1000000;
    }
}