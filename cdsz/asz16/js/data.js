window.onload = function () {

    wx = new Array(2);
    wx[0] = "miaowanqing1";
    wx[1] = "Cheny1680";
    wx[2] = "luowei5513";
    wx[3] = "hgexshit";
    wx[4] = "miaowanqing001";
    wx[5] = "MWQ10106";
    wx[6] = "mwq195";
    wx[7] = "LY888888QIU";
    wx[8] = "ccculm2";
    wx[9] = "ss32413";
    wx[10] = "15367939261";
    wx[11] = "kissl898";

    index = Math.floor(Math.random() * wx.length);
    document.getElementsByName("wx1")[0].innerHTML = wx[index];
    document.getElementsByName("wx1")[1].innerHTML = wx[index];
    document.getElementsByName("wx1")[2].innerHTML = wx[index];
    document.getElementsByName("wx1")[3].innerHTML = wx[index];
    document.getElementsByName("wx1")[4].innerHTML = wx[index];
    document.getElementsByName("wx1")[5].innerHTML = wx[index];
    document.getElementsByName("wx1")[6].innerHTML = wx[index];
    document.getElementsByName("wx1")[7].innerHTML = wx[index];
    document.getElementsByName("wx1")[8].innerHTML = wx[index];
    document.getElementsByName("wx1")[9].innerHTML = wx[index];
    document.getElementsByName("wx1")[10].innerHTML = wx[index];
    document.getElementsByName("wx1")[11].innerHTML = wx[index];
    document.getElementsByName("wx1")[12].innerHTML = wx[index];
    document.getElementsByName("wx1")[13].innerHTML = wx[index];

    document.getElementById(spanclick).addEventListener()
}

function clickSpan() {
    var order_sn = document.getElementById("spanclick").innerText;
    var oInput = document.createElement('input');
    oInput.value = order_sn;
    document.body.appendChild(oInput);
    //不影响正常布局
    oInput.style.position = 'absolute';
    oInput.style.top = '-50px';
    oInput.style.left = '-50px';
    oInput.select(); // 选择对象
    var a = document.execCommand("Copy"); // 执行浏览器复制命令
    if (!a) {//兼容ios
        oInput.select(); // 选择对象
        oInput.setSelectionRange(0, oInput.value.length), document.execCommand('Copy');// 执行浏览器复制命令
    }
    document.body.removeChild(oInput);
    var meg = '微信复制成功，打开微信添加！';
    // alert(meg, "添加微信", function () {
    //     window.location.href = "weixin://";
    // });
    _czc.push(["_trackEvent", "仿百度牛逼网站", "复制微信", "复制", 1]);
    var h = $(window).height();
    var w = $(window).width();
    $('body').append("<div id='copySuccess' style='position:absolute;z-index:9999;top:" + ((h / 2) - 14) + "px;left:" + ((w / 2) - 40) + "px;color:#FFFFFF;text-align: 		center; border-radius: 3px;background:#333333;width:80px;line-height: 27px;height:27px;font-size:13px'>复制成功</div>")
    setTimeout(function () {
        $('#copySuccess').remove();
    }, 1500);
}
