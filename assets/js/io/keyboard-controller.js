class KeyboardController {

    constructor() {
        this.clipboard = [];
        this.map = {
            "ArrowUp": Direction.UP,
            "ArrowRight": Direction.RIGHT,
            "ArrowDown": Direction.DOWN,
            "ArrowLeft": Direction.LEFT,
            "KeyW": Direction.UP,
            "KeyD": Direction.RIGHT,
            "KeyS": Direction.DOWN,
            "KeyA": Direction.LEFT,
        }
    }

    init() {
        document.addEventListener("keydown", e =>{
            const key = this.map[e.code];
            if(key && this.clipboard.indexOf(key) === -1) {
                this.clipboard.unshift(key);
            }
        });
        document.addEventListener("keyup", e =>{
            const key = this.map[e.code];
            if(key && this.clipboard.indexOf(key) > -1) {
                this.clipboard.splice(key, 1);
            }
        });
    }

    get currentKey() {
        return this.clipboard[0];
    }
}