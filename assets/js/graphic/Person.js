class Person extends AbstractSprite {

    static WALKING_COMPLETED_EVENT = "personWalkingComplete";

    constructor(config) {
        super(config);
        this.isControllable = config.isControllable || false;
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
        if(this.isControllable && this.movingProgressRemaining === 0 && state.keyboard) {
            this.status = Status.WALK;
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
                whoId: super.id
            });
        }
    }

    startBehavior(state, behavior) {
        this.direction = behavior.direction;
        if(behavior.status === Status.WALK){
            if(!state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                state.map.moveBlock(this.x, this.y, this.direction);
                this.movingProgressRemaining = World.TILE;
            }
        }
    }
}