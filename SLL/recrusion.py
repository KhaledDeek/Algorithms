
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


