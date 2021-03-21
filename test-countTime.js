var final = new Date("2020-12-12 23:59:59");

function showTime() {
    setTimeout(() => {
        var now = new Date();
        calculTime(now);
        showTime();
    }, 1000)
}

function calculTime(date) {
    var year = final.getFullYear() - date.getFullYear();
    var month = final.getMonth() - date.getMonth();
    var day = final.getDay() - date.getDay();
    var hour = final.getHours() - date.getHours();
    var minute = final.getMinutes() - date.getMinutes();
    var second = final.getSeconds() - date.getSeconds();
    console.log("剩余" + year + "年" + month + "月" + day + "日" + hour + "小时" + minute + "分" + second + "秒");
}

showTime();
