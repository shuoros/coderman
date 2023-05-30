class Coderman extends Person {

    constructor(config) {
        super({
            x: config.x,
            y: config.y,
            name: "coderman",
            direction: config.direction || Direction.DOWN,
            status: config.status || Status.IDLE,
            isControllable: config.isControllable || false,
            behaviors: config.behaviors,
            animations: {
                "IDLE-DOWN": [
                    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]
                ],
                "WALK-DOWN": [
                    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4]
                ],
                "IDLE-LEFT": [
                    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]
                ],
                "WALK-LEFT": [
                    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]
                ],
                "IDLE-RIGHT": [
                    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]
                ],
                "WALK-RIGHT": [
                    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6]
                ],
                "IDLE-UP": [
                    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]
                ],
                "WALK-UP": [
                    [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7]
                ]
            }
        });
    }
}
