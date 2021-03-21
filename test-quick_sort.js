function quickSort(numbers, start, end) {

    if (start > end) { return };

    let num = numbers[start];

    let left = start;
    let right = end;
    while (left !== right) {
        while (numbers[right] >= num && left < right) {
            right--;
        }
        while (numbers[left] <= num && left < right) {
            left++;
        }
        if (left < right) {
            [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
            // let tmp = numbers[right];
            // numbers[right] = numbers[left];
            // numbers[left] = tmp;
        }
    }
    [numbers[start], numbers[right]] = [numbers[right], numbers[start]];
    // numbers[start] = numbers[left];
    // numbers[left] = num;
    quickSort(numbers, start, left - 1);
    quickSort(numbers, left + 1, end);
}

const numbers = [25, 10, 44, 12, 4, 6, 14, 25, 62, 108, 32];
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
