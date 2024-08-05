
var Reader = require('./Reader')
var Processor = require('./processor')

var leitor = new Reader()

//Recebendo dados da função Read() graças ao promisify()
async function main(){
    var dados = await leitor.read('./users.CSV')

    var dadosProcessados = Processor.Process(dados)
}
main()