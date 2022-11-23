import { refs } from "./refs";

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    }

     init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
            if (this.isActive) {
                return;
            }
            const startTimer = Date.now();
            this.isActive = true;

            this.intervalId = setInterval(() => {
                const currentTime = Date.now();
                const deltaTime = currentTime - startTimer;
                const time = this.getTimeComponents(deltaTime);

                this.onTick(time);
                        
            }, 1000);
        }

    stop() {
            clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);

    }
    
    getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }
}

function updateClockFace({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};

export const timer = new Timer({
    onTick: updateClockFace,
});
    

