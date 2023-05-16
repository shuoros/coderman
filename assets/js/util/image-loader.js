class ImageLoader {

    load(src, onload) {
        const image = new Image();
        image.src = src;
        image.onload = onload;
        return image;
    }
}
