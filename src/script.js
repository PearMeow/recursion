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

function fibs(n = 0) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    }
    let res = [0, 1];
    while (res.length !== n) {
        res.push(res[res.length - 1] + res[res.length - 2]);
    }
    return res;
}

function fibsRec(n = 0, memo = []) {
    if (n < 0) {
        throw Error(
            "The fibonacci sequence is undefined for negative integers",
        );
    }
    if (memo[n] !== undefined) {
        return memo;
    } else if (n === 0) {
        memo[n] = 0;
        return memo;
    } else if (n === 1) {
        memo[0] = 0;
        memo[n] = 1;
        return memo;
    }
    memo[n] = fibsRec(n - 1, memo)[n - 1] + fibsRec(n - 2, memo)[n - 2];
    return memo;
}

for (let i = 0; i < 20; ++i) {
    console.log(fibsRec(i));
    console.log(fibs(i));
}

console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
