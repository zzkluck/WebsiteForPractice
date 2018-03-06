window.onload = function () {
    document.getElementById("btn").onclick = joke;
    document.getElementById("flightTypeSelector").onchange = calculate;
    document.getElementById("airplaneTypeSelector").onchange = calculate;
    document.getElementById("zoom").onchange = calculate;
    document.getElementById("height").onchange = calculate;
    document.getElementById("dif").onchange = calculate;
    document.getElementById("slope").onchange = calculate;
}

function calculate() {
    var flightTypeSelector = document.getElementById("flightTypeSelector");
    var airplaneTypeSelector = document.getElementById("airplaneTypeSelector");

    var flightType = parseInt(flightTypeSelector.options[flightTypeSelector.selectedIndex].value);
    var airplaneType = parseInt(airplaneTypeSelector.options[airplaneTypeSelector.selectedIndex].value);
    var zoom = parseFloat(document.getElementById("zoom").value);
    var height = parseFloat(document.getElementById("height").value);
    var dif = parseFloat(document.getElementById("dif").value);
    var slope = parseFloat(document.getElementById("slope").value);

    if (airplaneType != -1 && flightType != -1) {
        var ias = velocitys[airplaneType][flightType] * zoom;
        var k = KFactor(height, dif);
        var tas = ias * k;
        var rate = turningRate(tas, slope);
        var radius = turningRadius(tas, slope);

        document.getElementById("iasR").innerHTML = ias.toFixed(2);
        document.getElementById("kR").innerHTML = k.toFixed(2);
        document.getElementById("tasR").innerHTML = tas.toFixed(2);
        document.getElementById("rateR").innerHTML = rate.toFixed(2);
        document.getElementById("radiusR").innerHTML = radius.toFixed(2);
    }

}
