/**
 * 快速排序
 * @param {Array} arr
 */
function quickSort(arr) {
    var len = arr.length;
    if (len <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(len / 2);
    var pivot = arr[pivotIndex];
    var left  = [];
    var right = [];
    for (var i = 0; i < len; i++) {
        if (i !== pivotIndex) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    return (quickSort(left)).concat(pivot, quickSort(right));
}

var arr = [5, 100, 6, 3, -12];
console.log(quickSort(arr));
console.log(arr);
