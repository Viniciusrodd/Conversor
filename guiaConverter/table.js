
class Table{
    constructor(array){
        this.header = array[0];
        array.shift() //função de array que remove sempre primeiro elemento
        this.rows = array;
    }

    get rowCount(){ //Campo virtual, pra retornar linhas dinâmicamente
        return this.rows.length; //retornando cumprimento atual de linhas
    }

    get columnCount(){
        return this.header.length;
    }

}

module.exports = Table;