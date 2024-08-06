function reverse(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        x = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = x
    }

    console.log(arr)
}

reverse([5, 4, 3, 2, 1])



function rotate(arr, offset) {
    for (i = 0; i < offset; i++) {
        temp = arr[0]
        for(j=0 ; j<arr.length-1;j++){
            arr[j] = arr[j+1]
            console.log(arr)
        }
        console.log(arr[j])
        arr[j] = temp
    }
    console.log(arr)
}

rotate([5, 4, 3, 2, 1], 2)
rotate([6,5, 4, 3, 2, 1], 2)
rotate([7,6,5, 4, 3, 2, 1], 2)
rotate([8,7,6,5, 4, 3, 2, 1], 2)
rotate([9,8,7,6 ,5, 4, 3, 2, 1], 2)


function filter_range(arr, max, min) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max || arr[i] < min) {
            for (j = i; j < arr.length - 1; j++) {
                if (arr.length - 1 != 0) {
                    temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
                else {
                    arr.pop()
                }
            }
            arr.pop()
            i = -1;
        }
    }
    console.log(arr)
}



filter_range(arr = [7, 8, 6, 5], max = 3,5)

filter_range([2, 1, 5, 4, 9, 3, 6, 7], 5,3)

filter_range([2, 1, 5, 4, 9, 3, 6, 7], 4,2)


function arrConcat(arr1 , arr2){
    for (i=0 ; i<arr2.length; i++){
        arr1.push(arr2[i])
    }console.log(arr1,arr2)
}
arrConcat(['a' , 'b'],[1,2])


