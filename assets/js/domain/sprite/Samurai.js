class Samurai extends Person {

    constructor(x, y) {
        super({
            x: x,
            y: y,
            name: "samurai",
            animations: {
                "IDLE-DOWN": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ]
            }
        });
    }
}
