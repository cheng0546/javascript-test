function person(...args) {
    if (args.length === 1) {
        console.log(this.name + " is " + args[0] + " years old");
    } else {
        console.log(this.name + " is " + args[0] + " years old, he is a " + args[1]);
    }
}

var student = {
    name: "Cheng"
}

// newCall() ES5:
Function.prototype.newCall = function(obj) {
    var obj = obj || student;
    obj.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('obj.fn(' + args + ')');
    delete obj.fn;
    return result;
}

// newCall() ES6:
// Function.prototype.newCall = function(obj, ...args) {
//     obj.fn = this;
//     var result = obj.fn(...args)
//     delete obj.fn;
//     return result;
// }

// newApply() ES5:
Function.prototype.newApply = function(obj, arr) {
    var obj = obj || student;
    obj.fn = this;
    var args = [];
    for (var i = 0; i < arr.length; i++) {
        args.push('arr[' + i + ']');
    }
    var result = eval('obj.fn(' + args + ')');
    delete obj.fn;
    return result;
}

// newApply() ES6:
// Function.prototype.newApply = function(obj, args) {
//     obj.fn = this;
//     var result = obj.fn(...args)
//     delete obj.fn;
//     return result;
// }

// newBind() ES5:
Function.prototype.newBind = function(obj) {
    var that = this;
    var arr1 = Array.prototype.slice.call(arguments, 1);
    return function() {
        var arr2 = Array.prototype.slice.call(arguments);
        var arr = arr1.concat(arr2);
        var result = that.apply(obj, arr);
        return result;
    }
}

// newBind() ES6:
// Function.prototype.newBind = function(obj, ...args) {
//     return (...arr) => {
//         this.call(obj, ...args.concat(arr));
//     }
// }


person.newCall(student, 26);
person.newApply(student, [26]);
person.newBind(student, 26)("student");