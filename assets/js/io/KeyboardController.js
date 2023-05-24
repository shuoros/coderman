class KeyboardController {

    constructor() {
        this.clipboard = null;
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
            if(key && this.clipboard == null) {
                this.clipboard = key;
            }
        });
        document.addEventListener("keyup", e =>{
            const key = this.map[e.code];
            if(key && this.clipboard == key) {
                this.clipboard = null;
            }
        });
    }

    get currentKey() {
        return this.clipboard;
    }
}