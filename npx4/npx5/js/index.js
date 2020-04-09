	
$(document).ready(function(){

	var myreg = /^1[3458]\d{9}$/; //手机格式验证
	var usename = /[\u4e00-\u9fa5]/;  //名字验证
	var num = "0";//次数
	var d = new Date();
	//存入cookie 键 值 时间天数
	function setCookie(cname,cvalue,exdays){
		
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname+"="+cvalue+"; "+expires;
	}

	//读取cookie
	function getCookie(cname){
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
		}
		return "";
	}
	function goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            
            $("input").blur(function(){
		  		$(".yd_foot").show();
			});
			$("input").focus(function(){
		  		$(".yd_foot").hide();
			});
        }
        else {
           
           
        }
    }
     goPAGE();
  
	
	$('.btn').click(function(){
		var tel = $(".tel").val();
		var name = $(".name").val();
		var sex = $("#s1 option:selected").text();
		var old = $(".old").val();
		var message = show();
		
		var num = getCookie(location.href);
		num++;
		btn(tel,name,num,sex,message);
		
	});
	// 获取多选值
	function show(){
	    var obj = document.getElementsByName("text");
	    var check_val = "";
	    for(k in obj){
	        if(obj[k].checked)
	        	check_val = check_val + "-" + obj[k].value ;
	            
	    }
	    return check_val;
	}
	function btn(tel,name,num,sex,message,old){
		console.log(tel,name,num);
		if(num > 2){
			alert("您已经提交了，请勿重复提交！");
		}else{

			if(!tel||!name){
				alert('手机号码，姓名不能为空');
			}else if(!myreg.exec(tel)){
				alert('请输入正确的手机号');
			}else if(!usename.exec(name)){
				alert('请输入中文姓名');
			}else{
				
				$.post("http://211.149.181.210:8080/count/addlinks",
					{
						url:location.href,
						name: name + "("+sex+")", //姓名
						link: tel, // 电话
						address:"-",
						calltime:"-",
						message: "症状" + message,
						referer:"-"
					},
					function(data,status) {
						console.log(data);
						if(data.stae=="200"){
							num = num++;
							
							setCookie(location.href,num,1);
							alert("领取成功，稍后医助会为你解答")
						} else {
							
							alert("提交失败，请重试！");
						}
				});		
				
			}
		}
		
	}
});
