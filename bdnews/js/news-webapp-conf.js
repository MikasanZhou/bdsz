// 热点新闻换量配置
var TUIGUANG = {
    showflag: true,
    title: '强效加速，一键清理，手机快如新机',
    url: 'https://mshoujiweishi.baidu.com/station_platform/templatefile/bdxw/'
}

try {
    var nowTime = new Date().getTime();
    var startTime = 1579219200000; // 2020年01月17日08：00：00
    var endTime = 1581177600000; // 2020年02月08日24：00：00
    if (nowTime > startTime && nowTime < endTime) {
        document.getElementsByTagName('html')[0].className = 'festival'
    }

    function loadjscssfile(filename, filetype) {

        if (filetype == "js") {
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype == "css") {

            var fileref = document.createElement('link');
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        } else if (filetype == 'meta') {
            if (location.protocol == 'http:') {
                var oMeta = document.createElement('meta');
                oMeta.name = 'baidu_union_verify';
                oMeta.content = 'c06c0cb3fdfe79722bc814edc74f301e';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
            }
        }
        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }

    }

    loadjscssfile("//news-bos.cdn.bcebos.com/mvideo/news-webapp-conf-css.css?" + new Date().getTime(), "css");

} catch (e) {
    console.log(e);
}