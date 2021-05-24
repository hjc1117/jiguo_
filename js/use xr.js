function all_Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('all_Data').innerHTML);
                document.getElementById('use_dl').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('allData请求失败');
            }
        }
    }
    var use_nav = document.getElementsByClassName('use-nav')[0]
    for (var i = 0; i < 4; i++) {
        use_nav.children[i].className = ''
    }
    use_nav.children[0].className = 'on'
}

all_Data()

function push_Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('push_Data').innerHTML);
                document.getElementById('use_dl').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('allData请求失败');
            }
        }
    }
    var use_nav = document.getElementsByClassName('use-nav')[0]
    for (var i = 0; i < 4; i++) {
        use_nav.children[i].className = ''
    }
    use_nav.children[1].className = 'on'
}

function use_Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('use_Data').innerHTML);
                document.getElementById('use_dl').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('allData请求失败');
            }
        }
    }
    var use_nav = document.getElementsByClassName('use-nav')[0]
    for (var i = 0; i < 4; i++) {
        use_nav.children[i].className = ''
    }
    use_nav.children[2].className = 'on'
}

function end_Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('end_Data').innerHTML);
                document.getElementById('use_dl').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('allData请求失败');
            }
        }
    }
    var use_nav = document.getElementsByClassName('use-nav')[0]
    for (var i = 0; i < 4; i++) {
        use_nav.children[i].className = ''
    }
    use_nav.children[3].className = 'on'
}