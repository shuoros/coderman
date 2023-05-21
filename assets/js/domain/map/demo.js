class Demo extends Map {
    
    constructor() {
        super({
            sprites: {
                dude: new Coderman(7, 3)
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png"
        });
    }
}