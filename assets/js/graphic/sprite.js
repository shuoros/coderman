class Sprite {

    static X_OFFSET = 8;
    static Y_OFFSET = 10;

    constructor(config) {
        this.x = config.x;
        this.y = config.y;
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
