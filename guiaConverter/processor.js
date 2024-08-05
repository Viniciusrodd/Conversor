
//.split para dividir uma string em um array de substrings, 
//com base em um delimitador especificado
// '\r\n' (final de linha no Windows)
// Para final de linha no Linux, seria apenas '\n'

class Processor{

    static Process(data){
        var dataVar =  data.split('\r\n'); 
        var rows = [];

        dataVar.forEach((row) =>{
            var rowSplit = row.split(',');
            rows.push(rowSplit);
        })

        return rows;
    }
}

module.exports = Processor;