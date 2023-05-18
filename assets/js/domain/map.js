class Map {

    static PATH = "assets/graphic/map/";

    constructor(config) {
        this.sprites = config.sprites;
        this.lowerLayer = new ImageLoader().load(
            Map.PATH + config.lowerLayer,
            ()=>{}
        );
        this.upperLayer = new ImageLoader().load(
            Map.PATH + config.upperLayer,
            ()=>{}
        );
    }

    renderLowerLayer(context) {
        context.drawImage(this.lowerLayer, 0, 0);
    }

    renderUpperLayer(context) {
        context.drawImage(this.upperLayer, 0, 0);
    }
}
