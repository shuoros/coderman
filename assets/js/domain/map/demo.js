class Demo extends Map {
    
    constructor() {
        super({
            sprites: {
                coderman: new Coderman(7, 3)
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png"
        });
    }
}