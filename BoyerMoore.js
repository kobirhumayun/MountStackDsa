function BoyerMoore(arr) {
    let counter = 0;
    let candidate = null;

    for (i = 0; i < arr.length; i++) {
        if (counter == 0) {
            candidate = arr[i];
            counter++;
        } else {
            if (candidate == arr[i]) {
                counter++;
            } else {
                counter--;
            }
        }
    }
    counter = 0;
    for (j = 0; j < arr.length; j++) {
        if (arr[j] == candidate) counter++;

    }
    if (counter > arr.length / 2) {
        return candidate;
    } else {
        return -1;
    }

}

console.log(BoyerMoore([2, 2, 3, 3, 1, 2, 2]))