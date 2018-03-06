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

function tanAngle(angle) {
    return Math.tan(angle2radian(angle));
}
function sinAngle(angle) {
    return Math.sin(angle2radian(angle));
}
function cosAngle(angle) {
    return Math.cos(angle2radian(angle));
}
function turningRate(tas, slope) {
    return 180 * g / pi * tanAngle(slope) / tas;
}

function turningRadius(tas, slope) {
    return Math.pow(tas / 3.6, 2) / g / tanAngle(slope);
}

var errors = new Array(
    {"shadow":50,"enterError":5,"headingError":5},
    {"shadow":40,"enterError":15,"headingError":5}
)

function getNavShadowArgus(navType, height) {
    var navInfo = errors[navType];
    var radius = height * tanAngle(navInfo["shadow"]);
    var alpha2 = navInfo["enterError"];
    var x2 = radius * cosAngle(alpha2);
    var y2 = radius * sinAngle(alpha2);
    var alpha1 = 2 * navInfo["headingError"] + navInfo["enterError"];
    var x1 = radius * cosAngle(alpha1);
    var y1 = radius * sinAngle(alpha1);
    return {"r":radius,"x1":x1,"y1":y1,"x2":x2,"y2":y2};
}


var i = 0;
function joke() {
    i = i + 1;
    document.getElementById("joke").innerHTML = i;
}