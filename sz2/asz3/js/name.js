var name = '广州花都区广北医疗门诊部';
var address = '医院地址：广州花都区站前路';
var banquan = '版权所有';
var tel = '18320082445';
var img='';
        if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                console.log(1);
                    // window.location.href="top.html";
                    $("#shouye").click(function(){
                    window.location.href="top.html";
                })
            }else{
                // window.location.href="你的电脑版地址";
                $("#shouye").click(function(){
                    window.location.href="shouye.html";
                })
                 img = "<div class='flash'><ul class='bxslider'><li><a href=''><images src='images/index.html\/top1.jpg'></a></li></ul></div>";
            }
