

const fs = require('fs')
const util = require('util')

/*
Inves de fazermos isso:

    class Reader{
        read(filePath){
            fs.readFile(filePath, 'utf-8', (error, data) =>{
                    if(error){
                        console.log(error)
                    }else{
                        console.log(`its works ${data}`)
                    }
                })
        }
    }

Criamos com promisify() uma 'função async' pra 'retornar' os dados do excel
Para na app.js colocar esses dados do excel em uma variável
e não apenas retornar um console.log dos dados
 */

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async read(filePath){
        try{
            return await this.reader(filePath, 'utf-8')
        }catch(error){
            return undefined
        }
    }
}

module.exports = Reader