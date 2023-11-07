// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function convertUpperCase(arr){
    let A = arr.split(" ")
    let str = ''
    //let result = str.charAt(0).toUpperCase() 

     for(let i = 0 ; i< A.length; i++){
        
        A[i] = A[i].charAt(0).toUpperCase() + A[i].slice(1)
     }

     const str2 = A.join(" ");
    return str2


}


let result = convertUpperCase('the quick brown fox')

console.log(result)