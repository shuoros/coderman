class AbstractMap {

    static PATH = "assets/graphic/map/";
    static X_CENTER = 10.5;
    static Y_CENTER = 6;

    constructor(config) {
        this.sprites = config.sprites;
        this.lowerLayer = utils.loadImage(
            AbstractMap.PATH + config.lowerLayer,
            ()=>{}
        );
        this.upperLayer = utils.loadImage(
            AbstractMap.PATH + config.upperLayer,
            ()=>{}
        );
        this.walls = config.walls || {};
        this.isCutScenePlaying = false;
    }

    async startCutScene(events) {
        this.isCutScenePlaying = true;

        for(let i = 0; i < events.length; i++) {
            const eventHandler = new EventHandler({
                event: events[i],
                map: this
            });
            await eventHandler.init();
        }

        this.isCutScenePlaying = false;

        Object.values(this.sprites).forEach(sprite => sprite.doBehavior(this));
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    block(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    unblock(x, y) {
        delete this.walls[`${x},${y}`];
    }

    moveBlock(currentX, currentY, direction) {
        this.unblock(currentX, currentY);
        const {x, y} = utils.nextPosition(currentX, currentY, direction);
        this.block(x, y);
    }

    renderLowerLayer(context, cameraPerson) {
        context.drawImage(
            this.lowerLayer,
            utils.positionInGrid(10.5) - cameraPerson.x,
            utils.positionInGrid(6) - cameraPerson.y);
    }

    renderUpperLayer(context, cameraPerson) {
        context.drawImage(this.upperLayer,
            utils.positionInGrid(10.5) - cameraPerson.x,
            utils.positionInGrid(6) - cameraPerson.y);
    }
}