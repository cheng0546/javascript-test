// 在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms，然后：
//
// * 如果在1000ms内没有再次触发滚动事件，那么就执行函数
// * 如果在1000ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

function debounce (func, delay) {
    var timeout = null; // 闭包
    return function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        setTimeout(func, delay);
    }
}

// 然后是旧代码 : 显示当前位置距顶端的距离
function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}

window.onscroll = debounce(showTop,1000) // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置

// 防抖定义 : 对于短时间内连续触发的事件（上面的滚动事件），
// 防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次