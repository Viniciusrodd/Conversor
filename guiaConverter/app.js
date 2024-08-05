
var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./table');

var leitor = new Reader();

//Recebendo dados da função Read() graças ao promisify()
async function main(){
    var dados = await leitor.read('./users.CSV');
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
    console.log(usuarios)
    
}
main();