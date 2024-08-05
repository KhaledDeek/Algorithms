function compareNumbers(a, b) {
    return a - b;
}
function twoSum(arr, target) {
    left = 0
    right = arr.length - 1
    arr = arr.sort(compareNumbers)
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum == target) {
            console.log(arr)
            console.log([left, right])
            break;
        }
        else if (sum < target) {
            console.log('left is ' + left)
            left++
        }
        else {
            console.log('right is ' + right)
            right--
        }
    } return []
}



/*twoSum([2,11,7,15],9)*/
twoSum([2, 15, 7, 11 , 5,19], 9)
/*twoSum([3,2,4], 6)*/
/*twoSum([3,3])*/