
class Table{
    constructor(array){
        this.header = array[0];
        array.shift() //função de array que remove sempre primeiro elemento
        this.rows = array;
    }

}

module.exports = Table;