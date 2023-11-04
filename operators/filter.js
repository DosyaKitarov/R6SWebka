let opers = document.getElementsByClassName("operators");

function showAll() {
    for (let i = 0; i < opers.length; i++){
        opers[i].style.display = "unset";
    }
}

function filterWolfguard() {
    let wg = document.getElementsByClassName("wolfguard");
    for (let i = 0; i < opers.length; i++){
        for (let j = 0; j < wg.length; j++) {
            if (opers[i] == wg[j]) {
                opers[i].style.display = "unset";
                break;
            } else {
                opers[i].style.display = "none";
            }
        }
    }
}

function filterNighthaven() {
    let nh = document.getElementsByClassName("nighthaven");
    for (let i = 0; i < opers.length; i++){
        for (let j = 0; j < nh.length; j++) {
            if (opers[i] == nh[j]) {
                opers[i].style.display = "unset";
                break;
            } else {
                opers[i].style.display = "none";
            }
        }
    }
}

function filterViperstrike() {
    let vs = document.getElementsByClassName("viperstrike");
    for (let i = 0; i < opers.length; i++){
        for (let j = 0; j < vs.length; j++) {
            if (opers[i] == vs[j]) {
                opers[i].style.display = "unset";
                break;
            } else {
                opers[i].style.display = "none";
            }
        }
    }
}

function filterGhosteyes() {
    let ge = document.getElementsByClassName("ghosteyes");
    for (let i = 0; i < opers.length; i++){
        for (let j = 0; j < ge.length; j++) {
            if (opers[i] == ge[j]) {
                opers[i].style.display = "unset";
                break;
            } else {
                opers[i].style.display = "none";
            }
        }
    }
}

function filterRedhammer() {
    let rh = document.getElementsByClassName("redhammer");
    for (let i = 0; i < opers.length; i++){
        for (let j = 0; j < rh.length; j++) {
            if (opers[i] == rh[j]) {
                opers[i].style.display = "unset";
                break;
            } else {
                opers[i].style.display = "none";
            }
        }
    }
}