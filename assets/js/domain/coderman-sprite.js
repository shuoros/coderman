class CoderManSprite {

    constructor(x, y) {
        this.sprite = new Sprite({
            x: x,
            y: y,
            name: "coderman"
        });
    }

    getSprite() {
        return this.sprite;
    }
}
