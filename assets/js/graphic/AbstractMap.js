class AbstractMap {

    static PATH = "assets/graphic/map/";

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
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    removeWall(x, y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(currentX, currentY, direction) {
        this.removeWall(currentX, currentY);
        const {x, y} = utils.nextPosition(currentX, currentY, direction);
        this.addWall(currentX, currentY);
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