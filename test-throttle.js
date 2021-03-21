// 防抖可以使事件在限定时间内不被触发，节流类似阀门，在某个时间段内关闭，固定时间打开执行一次事件

// 借助setTimeout来做一个简单的实现，加上一个状态位valid来表示当前函数是否处于工作状态

function throttle(func, delay) {
    var valid = true; // 初始化valid为true，保证第一次执行函数时会执行到setTimeout
    return function () {
        if (!valid) {
            return false;
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false;
        setTimeout(() => {
            func();
            valid = true;
        }, delay);
    }
}
/* 请注意，节流函数并不止上面这种实现方案,
   例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。
   也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，
   如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样
    */


// 然后是旧代码 : 显示当前位置距顶端的距离
function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}

window.onscroll = throttle(showTop,1000) // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置