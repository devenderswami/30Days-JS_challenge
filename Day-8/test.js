// Write a JavaScript function to get all possible subsets with a 
// fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]


function returnAllSubsets(A){
    let arr = []
    let n = A.length
    for(let i=0; i<=n-1 ; i++){
        // i+1 to avoid duplicates
        for(let j=i+1; j<=n-1 ; j++){
            arr.push([A[i],A[j]])
        }
        
    }
    return arr

}

let a = returnAllSubsets([1,2,3])
console.log("a:",a)

// function getSubsets(arr) {
//     let result = [];
  
//     function generateSubsets(current, start) {
//       result.push([...current]);
  
//       for (let i = start; i < arr.length; i++) {
//         current.push(arr[i]);
//         generateSubsets(current, i + 1);
//         current.pop();
//       }
//     }
  
//     generateSubsets([], 0);
//     return result;
//   }
  
//   // Sample usage:
//   const sampleArray = [1, 2, 3];
//   const subsets = getSubsets(sampleArray);
  
//   console.log(subsets);