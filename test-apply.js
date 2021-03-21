function person(a, b, c, d) {
    console.log(this.name);
    console.log(a, b, c, d);
}

var student = {
    name: "Cheng"
}

Function.prototype.newApply = function (obj, arr) {
    var obj = obj || student;
    obj.p = this;
    var newArgs = [];
    for (var i = 0; i < arr.length; i++) {
        newArgs.push("arr[" + i + "]");
    }
    let result = eval("obj.p(" + newArgs + ")");
    // obj.p(newArgs);
    // let result = obj.p(...args);
    delete obj.p;
    return result;
}

person.newApply(student, ["A", "B", "C", "D"]);