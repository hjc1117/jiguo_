function new_Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('new_Data').innerHTML);
                document.getElementById('myDiv').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
    var play_nav = document.getElementsByClassName('play-nav')[0]
    for (var i = 0; i < 3; i++) {
        play_nav.children[i].className = ''
    }
    play_nav.children[0].className = 'on'
}


function hot_Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('new_Data').innerHTML);
                document.getElementById('myDiv').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
    var play_nav = document.getElementsByClassName('play-nav')[0]
    for (var i = 0; i < 3; i++) {
        play_nav.children[i].className = ''
    }
    play_nav.children[1].className = 'on'
}
hot_Data()

function type_Data() {
    var play_nav = document.getElementsByClassName('play-nav')[0]
    for (var i = 0; i < 3; i++) {
        play_nav.children[i].className = ''
    }
    play_nav.children[1].className = 'on'

}