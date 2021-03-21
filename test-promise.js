// Promise创建



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

var studentPromise = new Promise((resolve, reject) => {
    if(student.isGraduated) {
        resolve(student);
    } else {
        reject(Error("no graduated student"));
    }
})

fn();

studentPromise.then((student) => {
    console.log(student.name);
}).catch((e) => {
    console.log(e);
}).finally(() => {
    console.log("done");
})