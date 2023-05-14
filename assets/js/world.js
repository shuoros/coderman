class World {

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.context = this.canvas.getContext("2d");
    }

    init() {
        const map = new Image();
        map.onload = () => {
            this.context.drawImage(map, 0, 0);
        }
        map.src = "assets/graphic/map/demo.png";
        console.log("Hello from the world!", this);
    }
}