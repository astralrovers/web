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

add_window_onload_event(displayAbbr);
add_window_onload_event(displayCites);


function displayAbbr() {
    let abbrs = document.getElementsByTagName("abbr");
    if (abbrs.length < 1) { return ; }
    let defs = new Object();
    for (let i = 0; i < abbrs.length; i++) {
        defs[abbrs[i].lastChild.nodeValue] = abbrs[i].getAttribute("title");
    }

    let dlist = document.createElement("dl");
    for (varible in defs) {
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(varible);
        dtitle.appendChild(dtitle_text);

        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(defs[varible]);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    let header = document.createElement("h2");
    let header_text = document.createTextNode("Abbr");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function displayCites() {
    let bq = document.getElementsByTagName("blockquote");
    for (let i = 0; i < bq.length; i++) {
        if (!bq[i].getAttribute("cite")) continue;
        let url = bq[i].getAttribute("cite");
        let quoteElms = bq[i].getElementsByTagName("*");
        if (quoteElms.length < 1) continue;
        let elem = quoteElms[quoteElms.length - 1];

        let link = document.createElement("a");
        link.style.color = "#bfa";
        let link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        let sup = document.createElement("sup");
        sup.appendChild(link);
        elem.appendChild(sup);
    }
}