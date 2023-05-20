class Sprite {

    static LENGTH = 32;
    static X_OFFSET = 8;
    static Y_OFFSET = 12;

    constructor(config) {
        this.x = utils.positionInGrid(config.x);
        this.y = utils.positionInGrid(config.y);
        this.name = config.name;
        this.idle = new Animation({
                sprite: this,
                status: "idle"
        });
    }

    render(context) {
        this.idle.render(context);
    }
}