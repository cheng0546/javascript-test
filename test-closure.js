function f1() {
    var a = 1;
    function f2() {
        console.log(a);
    }
    fn = function() {
        a += 1;
    }
    return f2;
}

var result = f1();

result();

fn();

result();
