class DemoMap extends AbstractMap {
    
    constructor() {
        super({
            sprites: {
                coderman: new Coderman(7, 3)
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png",
            walls: {
                [utils.asGridCoords(7, 6)] : true,
                [utils.asGridCoords(8, 6)] : true,
                [utils.asGridCoords(7, 7)] : true,
                [utils.asGridCoords(8, 7)] : true
            }
        });
    }
}