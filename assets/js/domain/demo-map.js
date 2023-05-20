class DemoMap extends Map {

    constructor() {
        super({
            sprites: {
                coderman: new CoderManSprite(5, 6)
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png"
        });
    }
}
