class KeypressListener {

    constructor(key, callback) {
        let keySafe = true;
        this.keydownFunction = function(event) {
            if(event.code === key) {
                if(keySafe) {
                    keySafe = false;
                    callback();
                }
            }
        };
        this.keyupFunction = function(event) {
            if(event.code === key) {
                keySafe = true;
            }
        }

        document.addEventListener("keydown", this.keydownFunction);
        document.addEventListener("keyup", this.keyupFunction);
    }

    unbind() {
        document.removeEventListener("keydown", this.keydownFunction);
        document.removeEventListener("keyup", this.keyupFunction);
    }
}