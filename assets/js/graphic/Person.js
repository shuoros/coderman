class Person extends AbstractSprite {

    static WALKING_COMPLETED_EVENT = "personWalkingComplete";
    static IDLE_COMPLETED_EVENT = "personIdleComplete";

    constructor(config) {
        super(config);
        this.isControllable = config.isControllable || false;
        this.isIdle = false;
        this.movingProgressRemaining = 0;
        this.directionUpdate = {
            "UP": ["y", -1],
            "RIGHT": ["x", 1],
            "DOWN": ["y", 1],
            "LEFT": ["x", -1]
        }
    }

    update(state) {
        super.update(state);
        if(this.movingProgressRemaining > 0) {
            this.updatePosition();
        }
        if(this.movingProgressRemaining === 0) {
            this.status = Status.IDLE;
        }
        if(!state.map.isCutScenePlaying && this.isControllable && this.movingProgressRemaining === 0 && state.keyboard) {
            this.startBehavior(state, {
                status: Status.WALK,
                direction: state.keyboard
            });
        }
    }

    updatePosition() {
        const [property, toChange] = this.directionUpdate[this.direction];
        this[property] += toChange;
        this.movingProgressRemaining -=1;
        if(this.movingProgressRemaining === 0) {
            utils.emitEvent(Person.WALKING_COMPLETED_EVENT, {
                whoId: this.id
            });
        }
    }

    startBehavior(state, behavior) {
        this.direction = behavior.direction;
        this.status = behavior.status;
        if(this.status === Status.WALK) {
            if(!state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                state.map.moveBlock(this.x, this.y, this.direction);
                this.movingProgressRemaining = World.TILE;
            } else {
                behavior.retry && setTimeout(() => {
                    this.startBehavior(state, behavior);
                }, 10);
            }
        }
        if(this.status === Status.IDLE) {
            this.isIdle = true;
            setTimeout(() => {
                utils.emitEvent(Person.IDLE_COMPLETED_EVENT, {
                    whoId: this.id
                });
                this.isIdle = false;
            }, behavior.time);
        }
    }
}