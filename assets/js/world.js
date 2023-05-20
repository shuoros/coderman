class World {

    static TILE = 16;

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.context = this.canvas.getContext("2d");
        this.keyboardController = null;
        this.map = null;
    }

    init() {
        this.keyboardController = new KeyboardController();
        this.keyboardController.init();
        this.map = new Demo();
        this.loop();
    }

    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.map.renderLowerLayer(this.context);

        Object.values(this.map.sprites).forEach(sprite => {
            sprite.update({
                keyboard: this.keyboardController.currentKey
            });
            sprite.render(this.context);
        });

        this.map.renderUpperLayer(this.context);
        requestAnimationFrame(() => {
            this.loop();
        });    
    }
}
