// Write a JavaScript program to check a pair of numbers and
//  return true if one of the numbers is 50 or if their sum is 50.



function pairCheck(A,B){

    if(A == 50 || B == 50 || (A+B)==50){
        return  true
    }else{
        return false
    }

}

let a = pairCheck(50,10)
let b = pairCheck(20,30)
console.log("a:",a)
console.log("b:",b)