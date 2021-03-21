var num = -321;

function inverse(number) {
    var result = 0;
    var sign = number > 0 ? 1 : -1;

    var num = Math.abs(number);

    while (num !== 0) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return result * sign;
}

console.log(inverse(num));
