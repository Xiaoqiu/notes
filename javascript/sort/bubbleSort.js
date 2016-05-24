/**
 * 冒泡排序
 * @param {Array} arr
 */
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                var tmp = arr[j];
                arr[j]  = arr[i];
                arr[i]  = tmp;
            }
        }
    }
    return arr;
}

var arr = [1000, 890, -88, 47, 5, 100, 6, 6, 6, 63, -12, 56];
bubbleSort(arr);
console.log(arr);
