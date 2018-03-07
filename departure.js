window.onload = function () {
    document.getElementById("form").onsubmit = function () { return false; }
    document.getElementById("btn").onclick = joke;
    document.getElementById("airplaneTypeSelector").onchange = setIAS;
    document.getElementById("height").onchange = calculate;
    document.getElementById("dif").onchange = calculate;
    document.getElementById("slope").onchange = calculate;
    document.getElementById("delteAngle").onchange = calculate;
    document.getElementById("wind").onchange = calculate;
}

function setIAS() {
    var airplaneTypeSelector = document.getElementById("airplaneTypeSelector");
    var airplaneType = parseInt(airplaneTypeSelector.options[airplaneTypeSelector.selectedIndex].value);
    document.getElementById("ias").value = velocitys[airplaneType][5] * 1.1;
    calculate();
}
function calculate() {
    var ias = parseFloat(document.getElementById("ias").value);
    var height = parseFloat(document.getElementById("height").value);
    var dif = parseFloat(document.getElementById("dif").value);
    var k = KFactor(height, dif);
    var tas = ias * k;
    document.getElementById("kR").innerHTML = k.toFixed(2);
    document.getElementById("tasR").innerHTML = tas.toFixed(2);

    var slope = parseFloat(document.getElementById("slope").value);
    var wind = parseFloat(document.getElementById("wind").value);
    var delteAngle = parseFloat(document.getElementById("delteAngle").value);

    var rate = turningRate(tas, slope);
    var radius = turningRadius(tas, slope);
    var time = delteAngle / rate;
    var windShift = wind / 3.6 * time;
    document.getElementById("rateR").innerHTML = rate.toFixed(2);
    document.getElementById("radiusR").innerHTML = radius.toFixed(2);
    document.getElementById("windShiftR").innerHTML = windShift.toFixed(2);
}