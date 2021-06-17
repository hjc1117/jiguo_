function showData() {
    // 1、获取数据
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://1.15.132.9:3000/report/new', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {

                // 2.找到数据
                var data = JSON.parse(ajax_.responseText);

                /* dot_5.调用方式  找到模板 把数据传进去*/
                // var tmpText = doT.template(模板);
                // tmpText(数据源);

                var tmpText = doT.template(document.getElementById('templ').innerText);
                document.getElementsByClassName('position')[0].innerHTML = tmpText(data);

            } else {
                console.log('请求失败');
            }
        }
    }
}