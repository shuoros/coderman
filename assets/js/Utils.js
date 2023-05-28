const utils = {

    positionInGrid(number){
        return number * World.TILE;
    },

    loadImage(src, onload) {
        const image = new Image();
        image.src = src;
        image.onload = onload;
        return image;
    },

    asGridCoords(x, y) {
        return `${x*World.TILE},${y*World.TILE}`;
    },

    nextPosition(initX, initY, direction) {
        let x = initX; let y = initY;
        if(direction === Direction.UP) {
            y -= World.TILE;
        } else if(direction === Direction.RIGHT) {
            x += World.TILE;
        } else if(direction === Direction.DOWN) {
            y += World.TILE;
        } else if(direction === Direction.LEFT) {
            x -= World.TILE;
        }
        return {x,y};
    },

    emitEvent(name, detail) {
        const event = new CustomEvent(name, {
            detail
        });
        document.dispatchEvent(event);
    }
}