let arr = [1,0,2,3,2,0,0,4,5,1];

let expected = [1,2,3,2,4,5,1,0,0,0]

let i = 0;
let j = 1;
console.log('Starting to move zeroes to the end...', arr.join(' '))
while (i < arr.length) {
    // console.log({i, j, ai: arr[i], aj: arr[j], arr: arr.join(' ') })
    if (j >= arr.length) {
        arr[i] = 0;
        i++;
    } else if (arr[i] == 0 && arr[j] != 0) {
        // console.log('swapped')
        arr[i] = arr[j];
        arr[j] = 0;
        i++;
        j++;
    } else if (arr[i] == 0 && arr[j] == 0) {
        // console.log('j++')
        j++
    } else {
        i++;
        j++;
    }
}
console.log('Done.')
console.log(arr.join(' '))
