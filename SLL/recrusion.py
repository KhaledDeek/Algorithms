
import math

def rSigma(num):
    if num <= 0:
        return 0
    intNum = math.trunc(num)
    prevVal =intNum + rSigma(intNum - 1)
    print(prevVal)
    return prevVal
rSigma(-1)
rSigma(5)


def rFact(num):
    if num <= 0:
        return 1
    intNum = math.trunc(num)
    prevVal =intNum* rFact(intNum - 1)
    print(prevVal)
    return prevVal 

rFact(3)
rFact(6.5)


def rBinarySearch(arr,val):
    if len(arr) == 0:
        print(False)
        return False
    if arr[0] == val:
        print(True)
        return True
    return rBinarySearch(arr[1:], val)



rBinarySearch([1,3,5,6],4)



def rGCF(num1,num2):
    if num2 == num1 :
        return num1
    if num2 > num1 and num2%num1 == 0:
        print(num1)
        return num1
    if num2 < num1 and num1%num2 == 0:
        print(num2)
        return num2
    if num1 > num2 :
        return rGCF(num1-num2,num2)
    if num2 > num1 : 
        return rGCF(num1 , num2-num1)

rGCF(9 , 3)
rGCF(12 , 22)