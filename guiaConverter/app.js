
//IMPORTAÇÕES
var Reader = require('./Classes/Reader');
var Processor = require('./Classes/Processor');
var Table = require('./Classes/table');
var htmlParser = require('./Classes/htmlParser');
var Writer = require('./Classes/Writer');

//INSTÂNCIAS
var leitor = new Reader();
var escritor = new Writer();


//Recebendo dados da função Read() graças ao promisify()
async function main(){
    var dados = await leitor.read('./Views/users.CSV');
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
        console.log(`The table have these count of Lines: ${usuarios.rowCount}`)
        console.log(`The table have these count of Columns: ${usuarios.columnCount}`)

    var html = await htmlParser.Parse(usuarios);
        console.log(html);

    escritor.Write(`${Date.now()}.html`, html);

}
main();