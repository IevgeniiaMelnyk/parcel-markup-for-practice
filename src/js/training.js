
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}

const arr1 = [-4, -3, -1, 0, 1, 2, 4];
const arr2 = [-3, -2, -1, 0, 1, 2, 3];
const arr3 = [1, 2, 3, 4, 5, 8, 9];

// console.log(firstNonConsecutive(arr1))
// console.log(firstNonConsecutive(arr2))
// console.log(firstNonConsecutive(arr3))

function hero(bullets, dragons){
    let sum = bullets / 2;
    console.log(sum)
    if (sum >= dragons) {
        return true;
    } return false;
}
// console.log(hero(5,4))

const reverseSeq = n => {
    const arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};

// console.log(reverseSeq(5))
