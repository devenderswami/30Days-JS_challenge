// Write a JavaScript exercise to get the filename extension.


function getFileExension(file){
    let extension = file.split('.').pop()
    return extension

}

let result = getFileExension("Songs.mp3")
console.log(result)