window.onload = function () {
    //doLoadCss();
    //setMusic();//设定背景音乐
    setContentHeight();//设定内容高度以适应不同显示器
    setContentPage();
    //setCodeProtector();
}

var blink_trigger = false;
var blink = setInterval("changeFontColor()", 1000);

function changeFontColor() {
    var t = document.getElementById("trigger");
    if (blink_trigger) {
        t.style.color = "#000";
        blink_trigger = false;
    }
    else {
        t.style.color = "#fff";
        blink_trigger = true;
    }
}

function setCodeProtector() {
    //屏蔽键盘事件
    document.onkeydown = function () {
        var e = window.event || arguments[0];
        //F12
        if (e.keyCode == 123) {
            return false;
            //Ctrl+Shift+I
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
            //Shift+F10
        } else if ((e.shiftKey) && (e.keyCode == 121)) {
            return false;
            //Ctrl+U
        } else if ((e.ctrlKey) && (e.keyCode == 85)) {
            return false;
        }
    };
    //屏蔽鼠标右键
    document.oncontextmenu = function () {
        return false;
    }
}

$(window).resize(function () {
    setContentHeight();
    setContentPage();
});

function setContentPage() {
    var content = document.getElementById("content");
    if (content) {
        var pages = content.children;
        var pageindex = content.getAttribute("data-pageindex");
        var width = content.offsetWidth;
        //重新设定page的位置
        for (i = 0; i < pages.length; i++) {
            var page = pages[i];
            page.style.left = (width * (i - pageindex) + (width * 0.4 / 2)).toString() + "px";//宽度为70%，使内容定位在页面中间需要加上width * 0.3 / 2
            page.style.height = content.style.height;
        }
    }
}

function setContentHeight() {
    var menu = document.getElementById("menubar");
    var copyright = document.getElementById("copyright");
    var h = 400;
    if (menu != null && copyright != null) {
        var top = menu.offsetTop + menu.offsetHeight;
        var bottom = copyright.offsetTop;
        h = bottom - top;
    }
    document.getElementById("content").setAttribute("style", "height:" + h + "px");//重设样式高度覆盖原有class属性
}

function doLoadCss() {
    //var screenwidth = document.body.clientWidth;
    //var screenheight = document.body.clientHeight;
    var screenwidth = window.screen.availWidth;
    var screenheight = window.screen.availHeight;
    var url = "";
    if (screenheight / screenwidth > 1)//高大于宽，则加载移动端css
    {

        url = "../Css_Moble/login.css";

    }
    else {
        url = "../Css/login.css";
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

function checkBGMusic() {
    var audio = document.getElementById("bgmusic");
    var img = document.getElementById("bgimg");
    if (audio) {
        if (audio.paused) {
            audio.play();
            img.setAttribute("src", "../Images/music.gif");
        }
        else {
            audio.pause();
            img.setAttribute("src", "../Images/music.jpg");
        }
    }
}

//function setMusic() {
//    var arr = ["../Music/MySoul.mp3", "../Music/樱花樱花想见你.mp3", "../Music/Somewhere.mp3"];
//    var myAudio = document.getElementById("bgmusic");
//    var name = document.getElementById("musicname");
//    myAudio.preload = true;
//    myAudio.controls = true;
//    myAudio.src = arr.pop();
//    name.innerHTML = getMusicName(myAudio.src.toString());
//    myAudio.addEventListener('ended', playEndedHandler, false);
//    myAudio.play();
//    myAudio.loop = false;//禁止循环，否则无法触发ended事件 
//    function playEndedHandler() {
//        myAudio.src = arr.pop();
//        myAudio.play();
//        name.innerHTML = getMusicName(myAudio.src.toString());
//        !arr.length && myAudio.removeEventListener('ended', playEndedHandler, false);//只有一个元素时解除绑定 
//    }
//}

//function getMusicName(path) {
//    var index = path.lastIndexOf('/');
//    var name = path.substring(index + 1, path.length);
//    return name;
//}

function btnClick(index) {
    var btn = document.getElementById("btn" + index);
    if (btn) {
        var btns = btn.parentNode.getElementsByTagName("div");
        for (i = 0; i < btns.length; i++) {
            btns[i].className = "menubtn";
        }
        btn.className = "menubtn_hover";
    }
    var content = document.getElementById("content");
    content.setAttribute("data-pageindex", index);
    setContentPage();
}