$().ready(function () {
    //可任意选择你想延迟加载的目标元素，例如直接使用样式名lazy作为选择条件
    $("images").lazyload({
        placeholder: "images/a1.jpg", //占位图
        effect: "fadeIn", // 加载效果
        threshold: 200, // 提前加载
        event: 'click',  // trigger
        container: $("#js_article"),  //指定容器
        failurelimit: 5 // 发生混乱时的hack手段
    })
});

window.onload = function () {
    wx = new Array(2);
    wx[0] = "mwq2219";
    wx[1] = "lsxlove9";
    wx[2] = "gyukh11547";
    wx[3] = "ppppiss9";

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
    document.getElementById(spanclick).addEventListener()
};

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
    alert(meg, "添加微信", function () {
        window.location.href = "weixin://";
    });
    //统计复制
    _czc.push(["_trackEvent", "广告", "复制微信", "复制", 120]);
    var h = $(window).height();
    var w = $(window).width();
    $('body').append("<div id='copySuccess' style='position:absolute;z-index:9999;top:" + ((h / 2) - 14) + "px;left:" + ((w / 2) - 40) + "px;color:#FFFFFF;text-align: 		center; border-radius: 3px;background:#333333;width:80px;line-height: 27px;height:27px;font-size:13px'>复制成功</div>")
    setTimeout(function () {
        $('#copySuccess').remove();
    }, 1500);
}
