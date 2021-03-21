function person(a, b, c, d, e) {
    console.log(this.name);
    console.log(a, b, c, d, e)
}

var student = {
    name: "Cheng"
}

// Function.prototype.newBind = function (obj) {
//     var that = this;
//     var arr = Array.prototype.slice.call(arguments, 1);
//     return function() {
//         var arr2 = Array.prototype.slice.call(arguments, 0);
//         var arr3 = arr.push.apply(arr, arr2);
//         console.log(arr3);
//         that.apply(obj, arr)
//     };
//
// }

Function.prototype.newBind = function (obj, ...args) {
    return (...arr) => {
        this.call(obj, ...args.concat(arr));
    };
}

person.newBind(student, "A", "B", "C", "D")("E");
// person.newCall(student);