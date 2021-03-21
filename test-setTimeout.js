function interval(func, second) {
    function inside() {
        printTime();
        setTimeout(inside, second);
    }
    setTimeout(inside, second)
}


function printTime() {
    console.log(new Date().toLocaleString());
}


// function interval() {
//     setInterval(() => {
//         console.log(new Date().toLocaleString());
//     }, 1000);
// }

interval(printTime, 1000);