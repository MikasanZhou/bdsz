var arr_wx = ['vki67117','vki67117'];
var wx_index = Math.floor((Math.random() * arr_wx.length));
var wx = arr_wx[wx_index];
var stxlwx = "<span id='bd_click' class='wx_click'>" + wx + "</span>";
var click_time = 0; //点击时复制的时间
var copy_num = 0; //复制次数
var check = 0; //管理员检测

second = 0;
data_id = "";

// 访问统计
//请求获取微信号
(function() {
	getData();
})();

// 页面导入微信号和二维码
function timeInterval(wx, wxImg, companyName) {
	setTimeout(function Internal() {
		if(wx){
			$('.wx_click').text(wx);
			var stxlwx = "<span id='bd_click' class='wx_click'>" + wx + "</span>";
		}
		if(companyName){
			$('.company_name').text(companyName);
			var company_name = companyName;
		}
		if(wxImg){
			$(".pc_img").attr("src", wxImg);
		}
	}, 100);
};

//解析返回数据中的微信号
//function analysisWeixin(data) {
//	companyName = data.obj.com.company;
//	wx = data.obj.res.content;
//	var wxImg = data.obj.res.imgdir;
//	timeInterval(wx, wxImg, companyName);
//	data_id = data.obj.vid;
//	timestamp = new Date().getTime();
//}

// 获取微信号 ，二维码图片,公司信息，并添加访问记录
//function getData() {
//	var xhr = $.ajax({
//		url: "http://211.149.181.210:8080/count/visitres",
//		//url: "http://211.149.181.210:8080/test/visitres",
//		//url: "http://cai.yidu666.com:8080/count/visitres",
//		type: "POST",
//		data: {
//			url: location.href,
//			ref: document.referrer
//		},
//		timeout: 3000,
//		dataType: "json",
//		success: function(data) {
//			//var msgJson = eval(data); dataType为json
//			analysisWeixin(data);
//		},
//		error: function() {
//			console.log("报错")
//			$.post("http://120.yidu666.com:8080/count/visitres", {
//					url: url,
//					ref: document.referrer
//				},
//				function(data, status) {
//					analysisWeixin(data);
//				});
//		},
//		complete: function(XMLHttpRequest, status) {
//			if(status == 'timeout') {
//				xhr.abort(); // 超时后中断请求
//				console.log("超时")
//				$.post("http://120.yidu666.com:8080/count/visitres", {
//						url: url,
//						ref: document.referrer
//					},
//					function(data, status) {
//						analysisWeixin(data);
//					});
//			}
//		}
//	});
//}

// 访问时长
var u = navigator.userAgent; //获取设备
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isiOS) {
	window.addEventListener("pagehide", function() {
		timeNow = (new Date().getTime() - timestamp) / 1000; //当前访问时间
		$.ajaxSettings.async = false;
		$.post("http://211.149.181.210:8080/count/updlength", {
				id: data_id,
				length: timeNow
			},
			function(data, status) {});
	});
} else {
	window.onbeforeunload = function() {
		timeNow = (new Date().getTime() - timestamp) / 1000; //当前访问时间
		$.ajaxSettings.async = false;
		$.post("http://211.149.181.210:8080/count/updlength", {
				id: data_id,
				length: timeNow
			},
			function(data, status) {});
	}
}

// 页面滑动距离
var su1 = 0;
var su2 = 0;
var timer = null; // 定时器
var Percentage_big = 0;
// scroll监听
document.onscroll = function() {
	clearTimeout(timer);
	su1 = getScrollTop();
	timer = setTimeout(isScrollEnd, 500);
}

function isScrollEnd() {
	su2 = getScrollTop();
	if(su2 === su1) {
		var HH = document.body.scrollHeight; //页面高度
		var SH = $(document).scrollTop(); // 页面滚动高度
		var Percentage = Math.round((SH / HH) * 100); //百分比
		if(Percentage >= Percentage_big) {
			Percentage_big = Percentage;
		}
		$.post("http://211.149.181.210:8080/count/updscroll", {
				id: data_id,
				scroll: Percentage_big
			},
			function(data, status) {});
	}
}

function getScrollTop() {
	return document.documentElement.scrollTop || document.body.scrollTop;
}

$(document).ready(function() {
	var d = new Date();
	//存入cookie 键 值 时间天数
	function setCookie(cname, cvalue, exdays) {
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	//读取cookie
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if(c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	//复制微信号
//	function copy_weixin() {
//		//当前时间
//		var now_time = Date.parse(new Date());
//		//查看cookie里面的copy_num
//		var copy_num_cookie = getCookie(location.href);
//		// 查看cookie里面的时间
//		click_time = getCookie("time");
//		//时间差
//		var time_differ = now_time - click_time;
//		//复制超出4次就不显示复制了
//		if(copy_num_cookie < 4) {
//			console.log("第" + copy_num + "次复制");
//			//存入次数
//			setCookie(location.href, copy_num, 1);
//			//存入时间
//			setCookie("time", now_time, 1);
//			var weixin = wx;
//			var url = document.referrer;
//			copy_num++;
//			// 点击时间时间差大于10s
//			if(time_differ >= 10000) {
//				var url = document.referrer;
//				$.post("http://211.149.181.210:8080/count/addcopy", {
//						referer: url,
//						url: location.href,
//						weixin: weixin,
//						vid: data_id
//					},
//					function(data, status) {});
//			}
//		}
//	}

	$.fn.longPress = function(fn) {　　
		var timeout = undefined;　　
		var $this = this;　　
		for(var i = 0; i < $this.length; i++) {　　
			$this[i].addEventListener('touchstart', function(event) {　　
				timeout = setTimeout(fn, 600);　　
			}, false);　　
			$this[i].addEventListener('touchend', function(event) {　　
				clearTimeout(timeout);　　
			}, false);　　
		}
	}

	//长按选中
	$(".wx_click").longPress(function() {
		copy_weixin();
	});

	$(".go_weixin").click(function() {
		//复制功能
		var clipboard = new Clipboard('.go_weixin');
		copy_weixin();
		location.href = "weixin://";
		alert("已经成功复制微信号，去微信添加好友！");

	});
	$(".go_weixin2").click(function() {
		copy_weixin();
		//复制功能
		var clipboard = new Clipboard('.go_weixin2');
	});
});