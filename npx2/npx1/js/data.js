
function clickSpan() {
    var order_sn = document.getElementById("wechat1").innerText;
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
    // var meg = '微信复制成功，打开微信添加！';
    // alert(meg, "添加微信", function () {
    //     window.location.href = "weixin://";
    // });
    //统计复制
    _czc.push(["_trackEvent", "搜狗广告 ", "复制微信", "牛皮癣", 1]);
    var h = $(window).height();
    var w = $(window).width();
    $('body').append("<div id='copySuccess' style='position:absolute;z-index:9999;top:" + ((h / 2) - 14) + "px;left:" + ((w / 2) - 40) + "px;color:#FFFFFF;text-align: 		center; border-radius: 3px;background:#333333;width:80px;line-height: 27px;height:27px;font-size:13px'>复制成功</div>")
    setTimeout(function () {
        $('#copySuccess').remove();
    }, 1500);
    openWechat();
}
function openWechat() {
    PIWI_SUBMIT.Weixin_Open();
    _czc.push(["_trackEvent", "搜狗广告", "打开微信", "打开", 1]);
}
