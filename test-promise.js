// Promise创建
function myPromise(constructor) {
    let self = this;
    self.status = "pending";
    self.value = undefined;
    self.reason = undefined;
    function resolve(value) {
        if (self.status === "pending") {
            self.value = value;
            self.status = "resolved";
        }
    }
    function reject(reason) {
        if (self.status === "pending") {
            self.reason = reason;
            self.status = "rejected";
        }
    }
    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

myPromise.prototype.then = function (onFulFilled, onRejected) {
    let self = this;
    switch (self.status) {
        case "resolved" :
            onFulFilled(self.value);
            break;
        case "rejected" :
            onRejected(self.reason);
            break;
        default :
    }
}

// Promise应用

var student = {
    name: "Cheng",
    age: 26,
    sex: "male",
    isGraduated: true
}

var fn = function() {
    setTimeout(() => {
        console.log("OK");
    }, 5000);
}

var studentPromise = new myPromise((resolve, reject) => {
    if(student.isGraduated) {
        resolve(student);
    } else {
        reject(Error("no graduated student"));
    }
})

fn();

studentPromise.then((student) => {
    console.log(student.name);
});