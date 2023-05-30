class Ninja extends Person {

    constructor(config) {
        super({
            x: config.x,
            y: config.y,
            name: "ninja",
            direction: config.direction || Direction.DOWN,
            status: config.status || Status.IDLE,
            isControllable: config.isControllable || false,
            behaviors: config.behaviors,
            animations: {
                "IDLE-DOWN": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ],
                "WALK-DOWN": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ],
                "IDLE-LEFT": [
                    [0, 1], [1, 1], [2, 1], [3, 1]
                ],
                "WALK-LEFT": [
                    [0, 1], [1, 1], [2, 1], [3, 1]
                ],
                "IDLE-RIGHT": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ],
                "WALK-RIGHT": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ],
                "IDLE-UP": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ],
                "WALK-UP": [
                    [0, 0], [1, 0], [2, 0], [3, 0]
                ]
            }
        });
    }
}
