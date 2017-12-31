function calcArea(w, h, W, H) {
    let smallRectArea = w * h;
    let bigRectArea = W * H;
    let commonArea = Math.min(w, W) * Math.min(h, H);

    let sumArea = smallRectArea + bigRectArea - commonArea;

    console.log(sumArea);
}

calcArea(13, 2, 5, 8);
calcArea(2, 4, 5, 3);