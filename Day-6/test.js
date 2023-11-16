// Write a JavaScript program to compute the sum of the two given integers.
//  If the two values are the same, then return triple their sum.


function SumPair(A,B){

    if(A!=B){
        return (A+B)
    }else{
        return 3*(A+B)
    }

}

let a = SumPair(20,10)
let b = SumPair(20,20)
console.log("a:",a)
console.log("b:",b)