function removeSpaces(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            result += string[i];
        }
    }
    console.log(result);
}

removeSpaces(" Pl ayTha tF u nkyM usi c ")

function getDigits(string){
    x = []
    for(i=0; i <string.length ; i++){
        if(isNaN(Number(string[i]))){
            console.log('False')
        }
        else{
            x.push(Number(string[i]))
        }
    }console.log(x)
}
getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0") 


function acronym(string) {
    string = string.split(' ')
    for (i = 0; i < string.length - 1; i++) {
        x = string[i][0]
        if (x != undefined ) {
            console.log(x.toUpperCase())
        }
    }
}
acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")


function countNonSpaces(string){
    x = string.split(' ')
    count = 0
    for(i = 0 ; i<string.length ; i++){
        arr = string[i]
        for(j=0; j < arr.length ; j++ ){
            if(arr[j] != ' '){
                count+=1
            }
        }
    }console.log(count)
}



countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !") 



function removeShorterStrings(strings , value){
    list = []
    for(i = 0 ; i<strings.length ; i++){
        arr = strings[i]
        if(arr.length >= value){
            list.push(arr)
        }
    }console.log(list)
}



removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)