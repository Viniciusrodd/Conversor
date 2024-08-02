

const fs = require('fs')

class Reader{

    read(filePath){
        fs.readFile(filePath, 'utf-8', (error, data) =>{
            if(error){

            }else{

            }
        })
    }
}