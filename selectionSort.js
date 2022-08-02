function selectionSort(arr) {
    let smallest = { index: null, value: null };
    for (i = 0; i < arr.length; i++) {
        smallest.index = i;
        smallest.value = arr[i];
        for (j = i; j < arr.length - 1; j++) {
            if (smallest.value > arr[j + 1]) {
                smallest.index = j + 1;
                smallest.value = arr[j + 1];
            }
        }

        if (smallest.index != i) {
            let temp = arr[i];
            arr[i] = smallest.value;
            arr[smallest.index] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([1, 50, 2, 10, 8, 1, 3, 5]));