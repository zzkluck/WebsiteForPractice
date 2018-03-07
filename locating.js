window.onload = function () {
    document.getElementById("form").onsubmit = function(){return false;}
    document.getElementById("btn").onclick = joke;
    document.getElementById("navTypeSelector").onchange = calculate;
    document.getElementById("height").onchange=calculate;
}


function calculate() {
    var navTypeSelector = document.getElementById("navTypeSelector");
    var navType = parseInt(navTypeSelector.options[navTypeSelector.selectedIndex].value);

    var height = parseFloat(document.getElementById("height").value);

    if (navType != -1) {
        var argus = getNavShadowArgus(navType,height);

        document.getElementById("rR").innerHTML = argus["r"].toFixed(2);
        document.getElementById("x1R").innerHTML = argus["x1"].toFixed(2);
        document.getElementById("y1R").innerHTML = argus["y1"].toFixed(2);
        document.getElementById("x2R").innerHTML = argus["x2"].toFixed(2);
        document.getElementById("y2R").innerHTML = argus["y2"].toFixed(2);
    }

}
