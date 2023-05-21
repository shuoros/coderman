class Map {

    static PATH = "assets/graphic/map/";

    constructor(config) {
        this.sprites = config.sprites;
        this.lowerLayer = utils.loadImage(
            Map.PATH + config.lowerLayer,
            ()=>{}
        );
        this.upperLayer = utils.loadImage(
            Map.PATH + config.upperLayer,
            ()=>{}
        );
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