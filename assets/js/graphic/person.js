class Person extends Sprite {

    constructor(config) {
        super(config);
        this.isControllable = config.isControllable || false;
        this.movingProgressRemaining = World.TILE;
        this.directionUpdate = {
            "UP": ["y", -1],
            "RIGHT": ["x", 1],
            "DOWN": ["y", 1],
            "LEFT": ["x", -1]
        }
    }

    update(state) {
        this.updatePosition();

        if(this.isControllable && this.movingProgressRemaining === 0 && state.keyboard) {
            this.direction = state.keyboard;
            this.movingProgressRemaining = World.TILE;
        }
    }

    updatePosition() {
        if(this.movingProgressRemaining > 0) {
            const [property, toChange] = this.directionUpdate[this.direction];
            this[property] += toChange;
            this.movingProgressRemaining -=1;
        }
    }
}