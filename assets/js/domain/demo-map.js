class DemoMap {

    constructor() {
        this.map = new Map({
            sprites: {
                coderman: new CoderManSprite(1, 4).getSprite()
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png"
        });
    }

    getMap() {
        return this.map;
    }
}
