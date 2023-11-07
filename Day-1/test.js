// function reverseNumber(num){

//     let ans = num.toString().split('').reverse().join('')
//     console.log("+++ ans",parseInt(ans))


// }

function reverseNumber(num){

    let reverseNum = 0 
    while(num != 0){
        let rem = num%10
        reverseNum = reverseNum*10 + rem
        num = Math.floor(num/10)
        
    }
   return  reverseNum


}


let result  = reverseNumber(32243)
console.log(result)