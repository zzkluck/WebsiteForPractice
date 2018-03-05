var velocitys = new Array(
    new Array(169, 280, 185, 185, 185, 205),
    new Array(223, 335, 240, 250, 240, 280),
    new Array(260, 445, 295, 335, 295, 445),
    new Array(306, 465, 345, 380, 345, 490),
    new Array(390, 465, 425, 445, 425, 510),
    new Array(-1, 220, 165, -1, 165, 165)
);

var g = 9.80665;
var pi = Math.PI;
function KFactor(height, dif) {
    return 171233.0 * Math.pow((288.0 + dif - 0.00649 * height), 0.5) / Math.pow((288 - 0.00649 * height), 2.628);
}

function ias2tas(ias, height, dif) {
    return ias * KFactor(height, dif);
}

function angle2radian(angle) {
    return angle * pi / 180.0;
}

function turningRate(tas, slope) {
    return 180 * g / pi * Math.tan(angle2radian(slope)) / tas;
}

function turningRadius(tas, slope) {
    return Math.pow(tas, 2) / g / Math.tan(angle2radian(slope));
}
