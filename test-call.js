function person(a, b, c, d) {
    console.log(this.name);
    console.log(a, b, c, d);
}

var student = {
    name: "Cheng"
}

Function.prototype.newCall = function (obj) {
    var obj = obj || student;
    obj.p = this;
    var newArgs = [];
    for (var i = 1; i < arguments.length; i++) {
        newArgs.push("arguments[" + i + "]");
    }
    let result = eval("obj.p(" + newArgs + ")");
    // obj.p(newArgs);
    // let result = obj.p(...args);
    delete obj.p;
    return result;
}

person.newCall(student, "A", "B", "C", "D");
// person.newCall(student);