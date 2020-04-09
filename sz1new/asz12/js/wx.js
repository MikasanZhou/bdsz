// JavaScript Document
            var current = {};
            $(document).ready(function() {
                $.cookie.json = true;
                var c = $.cookie('wechat');
                console.info('c=>');
                console.info(c);
                if ($.cookie('wechat') != undefined) {
                    current = $.cookie('wechat');
                    Show()
                } else {
                    var data = [{"wechat": "13106682755"}];
                    var n = randomNum(0, data.length - 1);
                    current = data[n];
                    console.info(current);
                    $.cookie('wechat', current);
                    Show()
                }
            });
            function Show() {
                Shows('.weixinh');
				$("#qrcode images").attr("src","./images/"+current.wechat+".jpg")
            }
            function Shows(selecter) {
                $(selecter).html(GetHtml());
            }
            function GetHtml() {
                var html = '';
                html += '(微信：' + current.wechat + ' ←长按复制加微信) ';
                return html
            }
            function randomNum(minNum, maxNum) {
                switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * minNum + 1);
                    break;
                case 2:
                    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
                    break;
                default:
                    return 0;
                    break
                }
            }
