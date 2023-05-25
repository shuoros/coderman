class AbstractSprite {

    static PATH = "assets/graphic/character/";
    static LENGTH = 32;
    static X_OFFSET = 8;
    static Y_OFFSET = 12;

    constructor(config) {
        this.x = utils.positionInGrid(config.x);
        this.y = utils.positionInGrid(config.y);
        this.name = config.name;
        this.direction = config.direction || Direction.DOWN;
        this.status = config.direction || Status.IDLE;
        this.currentFrame = 0;
        this.frameProgressLimit = config.frameProgressLimit || 2;
        this.frameProgress = this.frameProgressLimit;
        this.spriteSheet = utils.loadImage(
            AbstractSprite.PATH + this.name + ".png",
            () => {
                this.isSpriteSheetLoaded = true;
                this.frames = this.spriteSheet.width / AbstractSprite.LENGTH; 
            }
        );
        this.animations = config.animations;
    }

    get frame() {
        return this.animations[this.status + "-" + this.direction][this.currentFrame];
    }

    update(state) {
        if(this.frameProgress > 0) {
            this.frameProgress--;
            return;
        }

        this.frameProgress = this.frameProgressLimit;
        this.currentFrame++;

        if(this.frame === undefined) {
            this.currentFrame = 0;
        }
    }

    render(context, cameraPerson) {
        const x = this.x - AbstractSprite.X_OFFSET + utils.positionInGrid(AbstractMap.X_CENTER) - cameraPerson.x;
        const y = this.y - AbstractSprite.Y_OFFSET + utils.positionInGrid(AbstractMap.Y_CENTER) - cameraPerson.y;
        
        const [frameX, frameY] = this.frame;

        this.isSpriteSheetLoaded && context.drawImage(
            this.spriteSheet,
            frameX * AbstractSprite.LENGTH, frameY * AbstractSprite.LENGTH,
            AbstractSprite.LENGTH, AbstractSprite.LENGTH,
            x, y,
            AbstractSprite.LENGTH, AbstractSprite.LENGTH
        );

        
    }
}