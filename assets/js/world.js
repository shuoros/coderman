class World {

    static TILE = 16;

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.context = this.canvas.getContext("2d");
        this.map = null;
    }

    init() {
        this.map = new DemoMap().getMap();
        this.loop();
    }

    loop() {
        this.map.renderLowerLayer(this.context);

        Object.values(this.map.sprites).forEach(sprite => {
            sprite.render(this.context);
        });

        this.map.renderUpperLayer(this.context);
        requestAnimationFrame(() => {
            this.loop();
        });
    }
}
