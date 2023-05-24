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
        this.frameRate = new FrameRate(60);
        this.frameRate.init();
        this.map = new DemoMap();
        this.loop();
    }

    loop() {
        if(this.frameRate.shouldRender()) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            const cameraPerson = this.map.sprites.coderman;
            
            Object.values(this.map.sprites).forEach(sprite => {
                sprite.update({
                    keyboard: this.keyboardController.currentKey,
                    map: this.map
                });
            });

            this.map.renderLowerLayer(this.context, cameraPerson);

            Object.values(this.map.sprites).forEach(sprite => {
                sprite.render(this.context, cameraPerson);
            });

            this.map.renderUpperLayer(this.context, cameraPerson);

            this.frameRate.calculate();
        }

        requestAnimationFrame(() => {
            this.loop();
        });    
    }
}
