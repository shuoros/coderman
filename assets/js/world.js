class World {

    static TILE = 16;

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.context = this.canvas.getContext("2d");
    }

    init() {
        const map = new ImageLoader().load(
            "assets/graphic/map/demo.png",
            () => { this.context.drawImage(map, 0, 0); }
        );

        const hero = new Sprite({
                x: 1,
                y: 4,
                name: "coderman"
        });
        setTimeout(() => {
            hero.render(this.context);
        }, 200);
        console.log("Hello from the world!", this);
    }
}
