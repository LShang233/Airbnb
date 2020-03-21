function appearCode() {
    var codes = document.getElementById("codes");
    codes.onclick = function () {
        document.getElementById("code").classList.toggle("hide");
    }
}

function appearMandL() {
    document.getElementById("moneyA").onclick = function () {
        appear("sectionmoney")
    }
    document.getElementById("dismoney").onclick = function () {
        appear("sectionmoney")
    }
    document.querySelector(".language").onclick = function () {
        appear("sectionlanguage")
    }
    document.getElementById("dislang").onclick = function () {
        appear("sectionlanguage")
    }
}

function appear(section) {
    document.body.classList.toggle("body");
    document.getElementById(section).classList.toggle("hide");
}

function changebackground() {
    titA.classList.toggle("hide");
    document.getElementById("titB").classList.toggle("hide");
    document.getElementById("header").classList.toggle("i1");
    document.getElementById("header").classList.toggle("i2");
}

function changebg() {
    document.getElementById("changepicA").onclick = function () {
        changebackground();
        document.getElementById("progA").style.width = "0px";
        document.getElementById("progB").style.width = "0px";
    }
    document.getElementById("changepicB").onclick = function () {
        changebackground();
        document.getElementById("progA").style.width = "0px";
        document.getElementById("progB").style.width = "0px";
    }
}

function moveprogress() {
    var prog = document.getElementById("progA");
    if (titA.className != "tit") {
        prog = document.getElementById("progB");
    }
    var x = parseInt(prog.style.width);
    if (x == 86) {
        x = 0;
        changebackground();
    }
    else {
        x++;
    }
    prog.style.width = x + "px";
    setTimeout("moveprogress()", 60);
}

function changelist(trans, fina) {
    var x = trans.style.transform.split("(");
    x = parseInt(x[1]);

    if (x == fina) return true;
    if (x > fina) {
        var dist = Math.ceil((x - fina) / 5);
        x -= dist;
    }
    else if (x < fina) {
        var dist = Math.ceil((fina - x) / 5);
        x += dist;
    }

    trans.style.transform = " translateX(" + x + "px)";
    setTimeout(function () { changelist(trans, fina) }, 30);
}

function listbutton(listright, listimages, listbg, listbut) {
    listright.onclick = function () {
        if (listright.classList.contains("listright")) {
            changelist(listbut, -136);
            listimages.setAttribute("src", "images/wonderfulleft.jpg")
            listbg.className = "listbgl";
        }
        else {
            changelist(listbut, 0);
            listimages.setAttribute("src", "images/wonderfulright.jpg")
            listbg.className = "listbgr";
        }
        this.classList.toggle("listleft");
        this.classList.toggle("listright");
    }
}

function allList() {
    /* 每个大buttom都有以下四个class的前提 */
    var listButtons = document.getElementsByClassName("listButtons");
    var listbgr = document.getElementsByClassName("listbgr");
    var list = document.getElementsByClassName("listright listr");
    var listimage = document.getElementsByClassName("listimage");
    for (var i = 0; i < listButtons.length; i++) {
        listbutton(list[i], listimage[i], listbgr[i], listButtons[i]);
    }
}

function wtgturn() {
    var wtgUl = document.getElementById("wtgUl");
    /* 按快了有bug */
    document.getElementById("wtgleft").onclick = function () {
        var xpos = wtgUl.style.transform.split("(");
        xpos = parseInt(xpos[1]) + 210;
        changelist(wtgUl, xpos);
        if (!xpos) {
            this.classList.add("hide");
        }
        document.getElementById("wtgright").classList.remove("hide");
    }
    document.getElementById("wtgright").onclick = function () {
        var xpos = wtgUl.style.transform.split("(");
        xpos = parseInt(xpos[1]) - 210;
        changelist(wtgUl, xpos);
        if (xpos == -420) {
            this.classList.add("hide");
        }
        document.getElementById("wtgleft").classList.remove("hide");
    }
}

function changehere() {
    document.getElementById("there").onclick = function () {
        this.setAttribute("style", "color: white; background-color: #00848A;");
        document.getElementById("here").setAttribute("style", "color: #484848; background-color: white;");
        var room = document.getElementById("hererooms").getElementsByClassName("room");
        for (var i = 0; i < room.length; i++) {
            room[i].querySelector(".roomImg").src = "images/img6.jpg";
            room[i].querySelector(".spanGreen").innerHTML = "整套公寓·2张床";
            room[i].querySelector(".roomP").innerHTML = "欢乐时光-33\近外滩\靠近地铁\超级市中心\东方明珠\外白渡桥";
            room[i].querySelector(".roomP2").innerHTML = "¥198";
            room[i].querySelector(".roomSpan2").innerHTML = "¥256";
            room[i].querySelector(".starSpan").innerHTML = "25·超赞房东";
        }
    }
    document.getElementById("here").onclick = function () {
        this.setAttribute("style", "color: white; background-color: #00848A;");
        document.getElementById("there").setAttribute("style", "color: #484848; background-color: white;");
        var room = document.getElementById("hererooms").getElementsByClassName("room");
        for (var i = 0; i < room.length; i++) {
            room[i].querySelector(".roomImg").src = "images/img1.jpg";
            room[i].querySelector(".spanGreen").innerHTML = "整套公寓·1张床";
            room[i].querySelector(".roomP").innerHTML = "【温煦】步行解放碑/洪崖洞3分钟/慵懒INS风楼下轻轨站/到八一好吃街3分钟/长江索道眺江一居";
            room[i].querySelector(".roomP2").innerHTML = "¥158";
            room[i].querySelector(".roomSpan2").innerHTML = "¥198";
            room[i].querySelector(".starSpan").innerHTML = "15·超赞房东";
        }
    }
}

changehere();
wtgturn();
allList();
moveprogress();
changebg();
appearCode();
appearMandL();