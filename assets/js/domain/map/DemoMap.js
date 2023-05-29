class DemoMap extends AbstractMap {
    
    constructor() {
        super({
            sprites: {
                coderman: new Coderman({
                    x: 5, 
                    y: 10,
                    direction: Direction.UP,
                    isControllable: true
                }),
                samurai: new Samurai({
                    x: 2, 
                    y: 8,
                    directoin: Direction.RIGHT,
                    behaviors: [
                        { status: Status.WALK, direction: Direction.RIGHT },
                        { status: Status.IDLE, direction: Direction.RIGHT, time: 1300 },
                        { status: Status.WALK, direction: Direction.UP },
                        { status: Status.WALK, direction: Direction.UP },
                        { status: Status.IDLE, direction: Direction.UP, time: 400 },
                        { status: Status.WALK, direction: Direction.LEFT },
                        { status: Status.IDLE, direction: Direction.LEFT, time: 1000},
                        { status: Status.WALK, direction: Direction.DOWN },
                        { status: Status.IDLE, direction: Direction.DOWN, time: 800 },
                        { status: Status.WALK, direction: Direction.DOWN },
                        { status: Status.IDLE, direction: Direction.RIGHT, time: 300 }
                    ]
                }),
                ninja: new Ninja({
                    x: 8, 
                    y: 8,
                    directoin: Direction.RIGHT,
                    behaviors: [
                        { status: Status.IDLE, direction: Direction.RIGHT, time: 1300 },
                        { status: Status.IDLE, direction: Direction.LEFT, time: 1300 }
                    ]
                })
            },
            lowerLayer: "demoLower.png",
            upperLayer: "demoUpper.png",
            walls: {
                [utils.asGridCoords(0, 3)] : true,
                [utils.asGridCoords(0, 4)] : true,
                [utils.asGridCoords(0, 5)] : true,
                [utils.asGridCoords(0, 6)] : true,
                [utils.asGridCoords(0, 7)] : true,
                [utils.asGridCoords(0, 8)] : true,
                [utils.asGridCoords(0, 9)] : true,
                [utils.asGridCoords(1, 3)] : true,
                [utils.asGridCoords(1, 10)] : true,
                [utils.asGridCoords(2, 3)] : true,
                [utils.asGridCoords(2, 10)] : true,
                [utils.asGridCoords(3, 3)] : true,
                [utils.asGridCoords(3, 10)] : true,
                [utils.asGridCoords(4, 3)] : true,
                [utils.asGridCoords(4, 10)] : true,
                [utils.asGridCoords(5, 3)] : true,
                [utils.asGridCoords(5, 11)] : true,
                [utils.asGridCoords(6, 3)] : true,
                [utils.asGridCoords(6, 4)] : true,
                [utils.asGridCoords(6, 10)] : true,
                [utils.asGridCoords(7, 6)] : true,
                [utils.asGridCoords(7, 7)] : true,
                [utils.asGridCoords(7, 10)] : true,
                [utils.asGridCoords(8, 3)] : true,
                [utils.asGridCoords(8, 4)] : true,
                [utils.asGridCoords(8, 6)] : true,
                [utils.asGridCoords(8, 7)] : true,
                [utils.asGridCoords(8, 10)] : true,
                [utils.asGridCoords(9, 3)] : true,
                [utils.asGridCoords(9, 10)] : true,
                [utils.asGridCoords(10, 3)] : true,
                [utils.asGridCoords(10, 10)] : true,
                [utils.asGridCoords(11, 9)] : true,
                [utils.asGridCoords(11, 8)] : true,
                [utils.asGridCoords(11, 7)] : true,
                [utils.asGridCoords(11, 6)] : true,
                [utils.asGridCoords(11, 5)] : true,
                [utils.asGridCoords(11, 4)] : true
            }
        });
    }
}