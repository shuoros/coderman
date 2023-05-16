class Animation {

    static PATH = "assets/graphic/character/";

    constructor(config) {
        this.sprite = config.sprite;
        this.status = config.status;
        this.character = new ImageLoader().load(
            Animation.PATH + this.sprite.name + "/" + this.status + ".png",
            () => { this.isCharacterLoaded = true; }
        );
    }

    render(context) {
        const x = this.sprite.x * World.TILE - Sprite.X_OFFSET;
        const y = this.sprite.y * World.TILE - Sprite.Y_OFFSET;

        this.isCharacterLoaded && context.drawImage(
            this.character,
            0, 0,
            32, 32,
            x, y,
            32, 32
        );
    }
}
