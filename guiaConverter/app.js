
var Reader = require('./Reader')

var leitor = new Reader()

//Recebendo dados da função Read() graças ao promisify()
async function main(){
    var dados = await leitor.read('./users.CSV')
    console.log(dados)
}

main()
