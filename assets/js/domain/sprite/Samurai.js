class Samurai extends Person {

    constructor(config) {
        super({
            x: config.x,
            y: config.y,
            name: "samurai",
            direction: config.direction || Direction.DOWN,
            status: config.status || Status.IDLE,
            isControllable: config.isControllable || false,
            animations: {
                "IDLE-DOWN": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ]
            }
        });
    }
}
