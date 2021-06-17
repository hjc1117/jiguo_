function sData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('xr').innerHTML);
                document.getElementById('on1').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
}
sData();

function s1Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('xr_1').innerHTML);
                document.getElementById('on2').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
}
s1Data();

function s2Data() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('xr_2').innerHTML);
                document.getElementById('on3').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
}
s2Data();




// report-change
function aData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('xr1').innerHTML);
                document.getElementById('report-change').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
}
aData();

function jData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('xr2').innerHTML);
                document.getElementById('sale-change').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
}
jData();

function zData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://192.168.31.219:3000/useing/master', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                var tmpText = doT.template(document.getElementById('xr3').innerHTML);
                document.getElementById('myDiv').innerHTML = tmpText(data); //这里的list是doT.json的list对象
            } else {
                console.log('sData请求失败');
            }
        }
    }
}
zData();

// time
function time() {
    var time_ = document.getElementsByClassName('time')[0];
    var date_ = new Date();
    var date_future = new Date(2021, 5, 1)
    var date_x = date_future - date_
    var day_ = Math.floor(date_x / 1000 / 60 / 60 / 24);
    var hour_ = Math.floor(date_x / 1000 / 60 / 60 % 24);
    var min_ = Math.floor(date_x / 1000 / 60 / 60 % 60);
    time_.innerHTML = '申请时间剩余' + day_ + '天' + hour_ + '时' + min_ + '分';
}
window.onload = function() {
    time()
}
setInterval(time, 10000)

$(function() {
    var shenqing = 126;
    $('.btn a').click(function() {
        if (shenqing >= 150) {
            alert('150台卖完了噢!');
            return;
        }
        shenqing++;
        $('.label span').eq(0).text(shenqing + '人申请');

    })

})