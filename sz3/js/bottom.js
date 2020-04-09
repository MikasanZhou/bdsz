    document.write('<style>');
	document.write('.btn-success { background: rgb(37, 157, 171);}');
	document.write('.btn {padding:0px; border-radius: 2px; border: 1px solid transparent; transition:0.4s cubic-bezier(0.175, 0.885, 0.32, 1); border-image: none; text-align: center; line-height: 1.5384; font-size: 13px; font-weight: 400; margin-bottom: 0px; vertical-align: middle; display: inline-block; white-space: nowrap; cursor: pointer; -ms-user-select: none; -webkit-transition: all .4s cubic-bezier(.175, .885, .32, 1); -o-transition: all .4s cubic-bezier(.175, .885, .32, 1); -webkit-user-select: none; -moz-user-select: none; user-select: none;}');
	document.write('.view{background:#fcfcfc; border-top: 1px #eee solid; width: 100%; position: fixed; left:0px; bottom: 0px; width: 100%; padding: 9px 0px; overflow: hidden}');
	document.write('.w320px{width: 640px; margin: 0 auto; overflow: hidden; display: block;}');
	document.write('</style>');
document.write('<div class="view">');
document.write('<section class="w320px">');
document.write('<img style="float: left; width: 40px; height: 40px;" width="40" height="40" src="images/wx.gif" tppabs="img/foot1.png" border="0">');
document.write('<div style="float: left; font-size: 13px; line-height: 18px; margin-left: 10px; color: #444">');
document.write('<span style="font-size: 12px;">老师微信: <span style="font-size: 14px;">');
document.write('<strong>');
document.write('<span class="wx_str" onclick="clickSpan()" style="color:#F00; font-weight:bold" ><script>document.write(Arr);</script></span>');
document.write('</strong>');
document.write('</span> 长按复制<br>立即添加获取湿疹治疗方法>>></span>');
document.write('</div>');
document.write('<div style="float:left; margin-left:7px" class="btn btn-success">');
document.write('<a href="weixin://" onClick="PIWI_SUBMIT.Weixin_Open()" style="color:#fff;padding: 7px 12px;line-height: 34px;">湿疹治疗咨询中&gt;</a>');
document.write('</div>');
document.write('</section>');
document.write('</div>');


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
        _czc.push(["_trackEvent", "广告", "复制微信", "复制", 1]);
        var h = $(window).height();
        var w = $(window).width();
        $('body').append("<div id='copySuccess' style='position:absolute;z-index:9999;top:" + ((h / 2) - 14) + "px;left:" + ((w / 2) - 40) + "px;color:#FFFFFF;text-align: 		center; border-radius: 3px;background:#333333;width:80px;line-height: 27px;height:27px;font-size:13px'>复制成功</div>")
        setTimeout(function () {
            $('#copySuccess').remove();
        }, 1500);
    }
