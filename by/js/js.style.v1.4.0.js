//JS.STYLE v1.4.0 | BY http://js.style/ 
w="width";h="height";c="color";m="margin";t="top";l="left";b="bottom";v="-";x="px";p="padding";o="#";r="right";k="";i="min-";a="max-";u="border";n=v+r;g=v+l;e=v+t;s=v+b;y="px solid";d="radius";var jsdom=new Array(["c_",c,o,k],["bg_","background",o,k],["w_",w,k,x],["h_",h,k,x],["mih_",i+h,k,x],["mxh_",a+h,k,x],["miw_",i+w,k,x],["mxw_",a+w,k,x],["m_",m,k,x],["p_",p,k,x],["pw_",w,k,"%"],["ph_",h,k,"%"],["mr_",m+n,k,x],["ml_",m+g,k,x],["mt_",m+e,k,x],["mb_",m+s,k,x],["pr_",p+n,k,x],["pl_",p+g,k,x],["pt_",p+e,k,x],["pb_",p+s,k,x],["lh_","line-"+h,k,x],["fs_","font-size",k,x],[b+"_",b,k,x],[r+"_",r,k,x],[t+"_",t,k,x],[l+"_",l,k,x],["b_",u,k,y],["bl_",u+g,k,y],["bt_",u+e,k,y],["bb_",u+s,k,y],["br_",u+n,k,y],["bc_",u+v+c,o,k],["btc_",u+e+v+c,o,k],["bbc_",u+g+v+c,o,k],["brc_",u+r+v+c,o,k],["blc_",u+x+v+c,o,k],["t_","text-align",k,k],["f_","float",k,k],["bs_",u+v+d,k,x]);jQuery(document).ready(function(){d=$(".jsc");i=0;r=1;while(i<d.length){dc=d.eq(i).attr("class");j=0;while(j<jsdom.length){var breg=new RegExp("\\s"+jsdom[j][0]+"[^\\s]+","g");c=dc.match(breg);if(c!==null){$.each(c,function(k,n){g=jstr(n);if(g.length==3){n="jsc-rand-"+r;d.eq(i).addClass(n);r++;$("."+n+" "+g[1]).css(jsdom[j][1],jsdom[j][2]+g[2]+jsdom[j][3])}if(g.length==4){n="jsc-rand-"+r;d.eq(i).addClass(n);r++;$("."+n+" "+g[1]+" "+g[2]).css(jsdom[j][1],jsdom[j][2]+g[3]+jsdom[j][3])}if(g.length==2){d.eq(i).css(jsdom[j][1],jsdom[j][2]+g[1]+jsdom[j][3])}})}j++}i++}});function jstr(s){reg=/ (.*)/;u=$.trim(reg.exec(s)[0]);strs=u.split("_");return strs}; 