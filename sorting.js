function bubbleSort(arr) {
    let outerLoopLength = arr.length - 1;
    let innerLoopLength = outerLoopLength;
    for (i = 0; i < outerLoopLength; i++) {
        for (j = 0; j < innerLoopLength; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
        innerLoopLength--;
    }
    return arr;
}

console.log(bubbleSort([5, 3, 9, 10, 0, 2, 1, 202, 100]));

function countingSort(arr, lower, upper) {
    let tempArr = new Array(upper + 1).fill(0);
    for (i = 0; i < arr.length; i++) {
        tempArr[arr[i]]++;
    }
    let newArr = [];
    for (j = 0; j < tempArr.length; j++) {
        if (tempArr[j] > 0) {
            for (k = 0; k < tempArr[j]; k++) {
                newArr.push(j);
            }
        }
    }

    return newArr;
}

console.log(countingSort([3, 5, 3, 3, 4, 4, 2, 2, 1, 1, 0], 0, 5));