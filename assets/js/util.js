const utils = {

    positionInGrid(number){
        return number * World.TILE;
    },

    loadImage(src, onload) {
        const image = new Image();
        image.src = src;
        image.onload = onload;
        return image;
    }
}