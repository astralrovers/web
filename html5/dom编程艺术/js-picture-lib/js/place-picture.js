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

add_window_onload_event(add_show_picture);

function add_show_picture() {
    if (!document.getElementsByTagName || !document.getElementById) { return false; }
    let gallery = document.getElementById('gallery');
    if (!gallery) return false;
    let a_list = gallery.getElementsByTagName('a');
    for (let i = 0; i < a_list.length; i++) {
        a_list[i].onclick = function() {
            return !show_pic(this);
        };
    }
}

function show_pic(which_pic){
    /*
     * 思路：
     * 获取连接的href路径，将img的路径改掉
     * */
    let source = which_pic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    let text = which_pic.getAttribute('title');
    let description = document.getElementById('description');
    //description.childNodes[0].nodeValue = text;
    description.firstChild.nodeValue = text;
    return true;
}
