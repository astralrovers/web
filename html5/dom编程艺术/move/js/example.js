function add_window_onload_event(func) {
    let old_func = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            old_func();
            func();
        };
    }
}

//add_window_onload_event(positonExample);
add_window_onload_event(prepareShow);

function moveElm(elmId, final_x, final_y, interval) {
    let elm = document.getElementById(elmId);
    if (elm.movent) { clearTimeout(elm.movent); }
    let xpos = parseInt(elm.style.left);
    let ypos = parseInt(elm.style.top);
    if (xpos == final_x && ypos == final_y) { return true; }
    if (xpos < final_x) { xpos += Math.ceil((final_x - xpos)/10); }
    if (xpos > final_x) { xpos -= Math.ceil((xpos -  final_x)/10); }
    if (ypos < final_y) { ypos += Math.ceil((final_y - ypos)/10); }
    if (ypos > final_y) { ypos -= Math.ceil((ypos -  final_y)/10); }

    elm.style.left = xpos + "px";
    elm.style.top = ypos + "px";
    let repeat = "moveElm('" + elmId + "'," + final_x + "," + final_y + "," + interval + ")";
    elm.movent = setTimeout(repeat, interval);
}

function positonExample() {
    let elm = document.getElementById("example");
    elm.style.position = "absolute";
    elm.style.left = "50px";
    elm.style.top = "100px";
    moveElm("example", 200, 200, 10);
}

function prepareShow() {
    let prev = document.getElementById("prev");
    prev.style.position = "relative";
    prev.style.left = "0px";
    prev.style.top = "0px";

    let links = document.getElementsByTagName("a");
    links[0].onmouseover = function () {
        moveElm("prev", -100, 0, 10);
    };
    links[1].onmouseover = function () {
        moveElm("prev", -200, 0, 10);
    };
    links[2].onmouseover = function () {
        moveElm("prev", -300, 0, 10);
    };
}