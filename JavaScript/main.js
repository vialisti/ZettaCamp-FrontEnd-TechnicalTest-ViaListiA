// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(arr.length / 2);

    return arr.length % 2 === 0
        ? (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2
        : sortedArr[middleIndex];
}

console.log(result(input));
