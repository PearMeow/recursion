console.log("Hello");

function mergeSort(arr = []) {
    if (arr.length === 1) {
        return arr;
    }
    let firstHalf = arr.slice(0, arr.length / 2);
    let secondHalf = arr.slice(arr.length / 2, arr.length);
    let sortedFirst = mergeSort(firstHalf);
    let sortedSecond = mergeSort(secondHalf);
    let firstInd = 0;
    let secondInd = 0;
    let res = [];
    while (firstInd < sortedFirst.length || secondInd < sortedSecond.length) {
        if (firstInd >= sortedFirst.length) {
            res.push(sortedSecond[secondInd]);
            ++secondInd;
        } else if (secondInd >= sortedSecond.length) {
            res.push(sortedFirst[firstInd]);
            ++firstInd;
        } else {
            if (sortedFirst[firstInd] < sortedSecond[secondInd]) {
                res.push(sortedFirst[firstInd]);
                ++firstInd;
            } else {
                res.push(sortedSecond[secondInd]);
                ++secondInd;
            }
        }
    }
    return res;
}

function fib(n = 0, memo = []) {
    if (n < 0) {
        throw Error(
            "The fibonacci sequence is undefined for negative integers",
        );
    }
    if (memo[n] !== undefined) {
        return memo[n];
    } else if (n === 0) {
        memo[n] = 0;
        return memo[n];
    } else if (n === 1) {
        memo[n] = 1;
        return memo[n];
    }
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

for (let i = 0; i < 20; ++i) {
    console.log(fib(i));
}

console.log(mergeSort([3, 2, 1]));
