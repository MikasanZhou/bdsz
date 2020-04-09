document.writeln("<style>");
document.writeln("#flow_wx { font-size: 0.8em; }");
document.writeln("#flow_wx #popup { width: 5.5em; height: 5em; background: transparent url('liao/wxtc.html') no-repeat scroll 0px 0px / 18em auto; position: fixed; right: 0.5em; bottom: 20%;z-index:99999;}");
document.writeln("#flow_wx #wx_copy { width: 20em; height: 12em; background: transparent url('liao/wxbg.html') no-repeat;background-size:100%;position: fixed; left: 50%; top:30%; margin-left: -9em; margin-top:2em; text-align: center; padding: 3em 0px 0px; box-sizing: border-box; overflow: hidden; display: none;z-index:99999;}");
document.writeln("#flow_wx #wx_copy span { font-size: 2.4em; color: rgb(255, 255, 255); background: rgb(208, 23, 23) none repeat scroll 0% 0%; padding: 0px 0.2em 0; }");
document.writeln("#flow_wx #wx_copy em { font-size: 1.3em; line-height: 1em; color: rgb(255, 255, 255); margin: 0.8em 0px; display: inline-block;float:none;border:none;}");
document.writeln("#flow_wx #wx_copy i { width: 1.5em; height: 1.5em; background: transparent url('liao/wxtc.html') no-repeat scroll -9.2em 0px / 22em auto; display: inline-block; vertical-align: middle; }");
document.writeln("#flow_wx #wx_copy b { font-size: 1.3em; color: rgb(255, 255, 255); margin-left: 0.5em; }");
document.writeln("#flow_wx #wx_copy p { position: absolute; right: .5em; top: .5em; width: 2em; height: 2em; }");
document.writeln("</style>");
document.writeln("<div id=\"flow_wx\">");
document.writeln("      <a id=\"popup\" href=\"javascript:popup()\"></a>");
document.writeln("      <div id=\"wx_copy\"> <span>"+ WeiXinID +"</span>");
document.writeln("     <br>");
document.writeln("        <em id=\"copy_num\">(打开微信，输入微信号添加好友)</em>");
document.writeln("        <b><i></i>现在加好友咨询湿疹导师</b>");
document.writeln("        <p id=\"close_wx\"></p>");
document.writeln("      </div>");
document.writeln("    </div>");



            function closeP() {
                var wx = document.getElementById("wechat");
                var wxb = document.getElementById("wechatBox");
                wx.style.display = "none";
                wxb.style.display = "none";
            }
            function popup() {
                var wx = document.getElementById("wechat");

                var wxb = document.getElementById("wechatBox");

                wx.style.display = "block";

                wxb.style.display = "block";

                addlog();
            }
var wx_icon = document.getElementById('wx_icon'),
		wx_copy = document.getElementById('wx_copy'),
		close_wx = document.getElementById('close_wx'),
		copy_num = document.getElementById('copy_num'),
		wx_num = document.getElementById('wx_num');
		wx_open = document.getElementById('wx_open');

		wx_open.onclick =function(){
			wx_copy.style.display = 'block';
		};
		wx_icon.onclick =function(){
			this.style.display = 'none';
			wx_copy.style.display = 'block';
		};
		
		close_wx.onclick = function(){
			wx_copy.style.display = 'none';
			wx_icon.style.display = 'block';
		};