function GetQueryString($name) {
    var $index = document.referrer.indexOf($name + "="), $e = '';
    if ($index > 1) {
        $e = document.referrer.substring($index + $name.length + 1);
        if (($index = $e.indexOf("&")) > 0) {
            $e = $e.substring(0, $index);

        }

    }

    return $e;

}

// 调用方法
var $wd = GetQueryString("wd");

if ($wd && $wd.length > 0) {
} else {
    $wd = GetQueryString("word")
}

if ($wd && $wd.length > 0) {

    $wd = decodeURIComponent($wd);

    $line = '关于【“' + $wd + '”】的问题,很荣幸为您解答疑问！';

} else {

    $line = ' 您好，请问有什么可以帮到您？';

}

$('#keyword').html($wd);
$('.ly-section1 .line:first .left div').html("<i></i>" + $line);
/*$(".ly-footer div:last a").on("click",function(){

    openZoosUrl('chatwin','&e=ly--'+($wd||'')+"-"+decodeURIComponent($(".ly-footer textarea").val()));

});*/

setTimeout(function () {
    $('.ly-section1 .line:first').fadeIn(100)
}, 300);

setTimeout(function () {
    $('.ly-section1 .line:nth-of-type(2)').fadeIn(200)
}, 2000);

setTimeout(function () {
    $('.ly-section1 .line:last').fadeIn(200)
}, 4000);

$(".ly-header nav a:eq(0)").on("click").on("click", function () {
    window.open('index.html');
    //openZoosUrl('chatwin','&e=ly--'+($wd||'')+"-"+decodeURIComponent($(".ly-footer textarea").val()));

})
$(".ly-header nav a:eq(1)").on("click").on("click", function () {
    window.open('index.html');
    //openZoosUrl('chatwin','&e=ly--'+($wd||'')+"-"+decodeURIComponent($(".ly-footer textarea").val()));

})


setTimeout(function () {
    $(".ly-section1 .line:last .left div images").addClass("ly-animation-bell").addClass("on");
}, 6000);


var clickNumber = 0;

function sendmess() {
    if (document.getElementById('keyword').value == '') {
        return false;
    }
   var wx= document.getElementById('spanclick').innerText;
    if (clickNumber == 0) {
        document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="right"> <images src="images/header2.jpg" width="40px"><div> <i></i> ' + document.getElementById('keyword').value + '</div></div><div class="ly-clear"></div></div>';
        setTimeout(function () {
            document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <images src="images/header.jpg" width="40px"><div> <i></i> 您好，请简单描述下您的症状！<br>收到请回复以下序列号:<br>1.湿疹<br>2.皮癣<br>3.全身皮癣<br>4.脸部湿疹<br>5.手足皮癣<br>6.皮肤湿疹!</div></div><div class="ly-clear"></div></div>';
            window.scrollTo(0, document.body.scrollHeight);
        }, 2000);

        document.getElementById('keyword').value = '';
    } else if (clickNumber == 1) {
        document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="right"> <images src="images/header2.jpg" width="40px"><div> <i></i> ' + document.getElementById('keyword').value + '</div></div><div class="ly-clear"></div></div>';
        setTimeout(function () {
            document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <images src="images//header.jpg" width="40px"><div> <i></i> 您好，由于目前咨询人数过多，建议您添加老师个人微信号：<span class="wx_str" style="color:#fff;background:#f00;padding:0 5px;">' + wx + '</span>（长按微信号复制添加），专业的老师将会亲自一对一回复您。 </div></div><div class="ly-clear"></div></div>';
            window.scrollTo(0, document.body.scrollHeight);
        }, 2000);

        document.getElementById('keyword').value = '';
    } else {
        document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="right"> <images src="images/header2.jpg" width="40px"><div> <i></i> ' + document.getElementById('keyword').value + '</div></div><div class="ly-clear"></div></div>';
        setTimeout(function () {
            document.getElementById('messbox').innerHTML = document.getElementById('messbox').innerHTML + '<div class="line"><div class="left"> <images src="images/header.jpg" width="40px"><div> <i></i> 优先处理！请加老师个人微信号：<span style="color:#fff;background:#f00;padding:0 5px;">' + wx + '</span>（长按微信号复制添加）。 </div></div><div class="ly-clear"></div></div>';
            window.scrollTo(0, document.body.scrollHeight);
        }, 2000);
        document.getElementById('keyword').value = '';
    }
    clickNumber++;
}

//document.writeln("<script language=\"javascript\" src=\"http://swt.lzhxyyh.com/liao/LsJS.aspx?siteid=MHE4620007&lng=cn&float=0\"></script>");
