class Animation {

    static PATH = "assets/graphic/character/";

    constructor(config) {
        this.sprite = config.sprite;
        this.status = config.status;
        this.frame = 0;
        this.character = utils.loadImage(
            Animation.PATH + this.sprite.name + "/" + this.status + ".png",
            () => {
                this.isCharacterLoaded = true;
                this.frames = this.character.width / Sprite.LENGTH; 
            }
        );
    }

    render(context) {
        const x = this.sprite.x - Sprite.X_OFFSET;
        const y = this.sprite.y - Sprite.Y_OFFSET;
        
        this.isCharacterLoaded && context.drawImage(
            this.character,
            this.frame * Sprite.LENGTH, 0,
            Sprite.LENGTH, Sprite.LENGTH,
            x, y,
            Sprite.LENGTH, Sprite.LENGTH
        );

        this.frame++;
        if(this.frame >= this.frames) {
            this.frame = 0;
        }
    }
}