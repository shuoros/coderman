class Coderman extends Person {

    constructor(x, y) {
        super({
            x: x,
            y: y,
            name: "coderman",
            isControllable: true,
            animations: {
                "IDLE-DOWN": [
                    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]
                ],
                "IDLE-LEFT": [
                    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]
                ],
                "IDLE-RIGHT": [
                    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]
                ],
                "IDLE-UP": [
                    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]
                ],
            }
        });
    }
}
