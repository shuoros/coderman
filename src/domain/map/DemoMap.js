import { AbstractMap } from 'anahita'

export default class DemoMap extends AbstractMap {
    
    constructor() {
        super({
            lowerLayer: "image/map/demoLower.png",
            upperLayer: "image/map/demoUpper.png",
        });
    }
}