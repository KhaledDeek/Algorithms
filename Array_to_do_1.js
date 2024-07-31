function push_front(arr, x) {
    temp = []
    temp.push(x)
    for (i = 0; i < arr.length; i++) {
        temp.push(arr[i])
    }
    console.log(temp)
}
push_front([5, 7, 2, 3], 8)


function pop_front(arr) {
    temp = []
    for (i = 1; i < arr.length; i++) {
        temp.push(arr[i])
    }
    console.log(temp)
}
pop_front([0, 5, 10, 15])

function insertAt(arr, z, x) {
    temp = []
    for (i = 0; i < z; i++) {
        temp.push(arr[i])
    }
    temp.push(x)
    for (i = z; i < arr.length; i++) {
        temp.push(arr[i])
    }
    console.log(temp)
}
insertAt([100, 200, 5], 2, 311)
insertAt([9, 33, 7], 1, 42)


function removeAt(arr, x) {
    temp = []
    for (i = 0; i <= x; i++) {
        temp.push(arr[i])
    }
    temp.pop()
    for (i = x + 1; i < arr.length; i++) {
        temp.push(arr[i])
    }
    console.log(temp)
}
removeAt([1000, 3, 204, 77], 1)
removeAt([8, 20, 55, 44, 98], 3)




function swap(arr) {
    if (arr.length % 2 == 0) {
        for (i = 0; i < arr.length; i += 2) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    } else {
        z = arr[arr.length - 1]
        arr.pop()
        for (i = 0; i < arr.length; i += 2) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        } arr.push(z)
    }console.log(arr)
}
swap([1, 2, 3, 4])
swap(["Brendan", true, 42, 5, 7, 8,6,'hi','hello','hi'])



function removeDupes(arr){
    x = []
    for(i=0 ; i<arr.length ; i++){
        if(arr[i] != arr[i+1]){
            x.push(arr[i])
        }
    }console.log(x)
}
removeDupes([-2,-2,3.14,5,5,10])