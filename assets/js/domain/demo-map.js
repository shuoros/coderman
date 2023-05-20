class DemoMap {

    constructor() {
        this.map = new Map({
            sprites: {
                coderman: new CoderManSprite(utils.positionInGrid(5), utils.positionInGrid(6)).getSprite()
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png"
        });
    }

    getMap() {
        return this.map;
    }
}
