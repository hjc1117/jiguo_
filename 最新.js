/**
 @Author : 深之木下
 @File : tiyan.js
 @Time : 2021/5/22 14:34
 @Software: WebStorm
 **/

$(function () {
    // 体验报告
    axios.get('http://1.15.132.9:3000/report/new')
        .then(function (res) {
            let tmpText = doT.template(document.getElementById('li_tmpl').innerText);
            if (res.status === 200) {
                document.getElementById('list').innerHTML =  tmpText(res.data);
            }
        })
    $('#zui_xin')[0].style.borderBottom = '2px solid #ff3c3c'
})
