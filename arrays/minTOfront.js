function minTOfront(arr){
    list = []
    x =arr[0]
    for(i=0 ; i<arr.length ; i++){
        if(arr[i] < x){
            x = arr[i]
        }
    }list.push(x)
    for (i = 0 ; i<arr.length; i++){
        if(arr[i] != x){
            list.push(arr[i])
        }
    }
    console.log(list)
}
minTOfront([4,2,1,3,5,7,6,5,9,8])