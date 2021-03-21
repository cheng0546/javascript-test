// Récursivité 递归
function binarySearchRecursion(numbers, number) {
    if (numbers.length === 0) {
        return false;
    }
    let start = 0;
    let end = numbers.length - 1;
    let mid = start + Math.floor((end - start) / 2);

    if (numbers[mid] === number) {
        return true;
    } else if (numbers[mid] < number) {
        return binarySearchRecursion(numbers.slice(mid + 1, numbers.length), number);
    } else {
        return binarySearchRecursion(numbers.slice(start, mid), number);
    }
}

// Itération 迭代
function binarySearchIteration(numbers, number) {
    if (numbers.length === 0) {
        return false;
    }
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (numbers[mid] === number) {
            return true;
        } else if (numbers[mid] < number) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}

const numbers = [0, 1, 1, 2, 3, 5, 5, 5, 7, 10, 12];
console.log("----------- Iteration -----------");
console.log(binarySearchIteration(numbers, 0));
console.log(binarySearchIteration(numbers, 4));
console.log("----------- Recursion -----------");
console.log(binarySearchRecursion(numbers, 0));
console.log(binarySearchRecursion(numbers, 4));
