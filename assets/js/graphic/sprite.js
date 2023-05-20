class Sprite {

    static LENGTH = 32;
    static X_OFFSET = 8;
    static Y_OFFSET = 12;

    constructor(config) {
        this.x = utils.positionInGrid(config.x);
        this.y = utils.positionInGrid(config.y);
        this.name = config.name;
        this.direction = config.direction || Direction.DOWN;
        this.status = config.direction || Status.IDLE;
        this.animations = {
            "IDLE-UP": new Animation({
                sprite: this,
                status: "idle-up"
            }),
            "IDLE-RIGHT": new Animation({
                sprite: this,
                status: "idle-right"
            }),
            "IDLE-DOWN": new Animation({
                sprite: this,
                status: "idle-down"
            }),
            "IDLE-LEFT": new Animation({
                sprite: this,
                status: "idle-left"
            })
        };
    }

    update(state) {}

    render(context) {
        this.animations[this.status + "-" + this.direction].render(context);
    }
}