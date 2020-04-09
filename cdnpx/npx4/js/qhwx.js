function qhwx(){	
	var nowDate = new Date();
	var nowtime=nowDate.getHours();
	if(nowtime>=22 && nowtime < 24){//12小时制
		
		arr_wx=['vki58117','gf4415'];//设置微信
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];		
		return stxlwx;
	}else if(nowtime>=20 && nowtime<22){//12小时制
		
		arr_wx=['vki58117','gf4415'];//设置微信
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];			
		return stxlwx;
	}else if(nowtime>=15 && nowtime<20){//12小时制
		
		arr_wx=['vki58117','gf4415'];//设置微信
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];			
		return stxlwx;
	}else if(nowtime>=11 && nowtime<15){//12小时制
		
		arr_wx=['vki58117','vki58117'];//设置微信
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];			
		return stxlwx;
	}else if(nowtime>=6 && nowtime<11){//12小时制
		
		arr_wx=['vki58117','gf4415'];//设置微信
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];			
		return stxlwx;	
	}else if(nowtime>=0 && nowtime<6){//12小时制
		
		arr_wx=['vki58117','gf4415'];//设置微信
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];			
		return stxlwx;
		}	
}