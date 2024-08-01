
const fs = require('fs')
const { json } = require('stream/consumers')

/*
fs.readFile("./texto.exemplo", {encoding: "utf-8"}, (error, data) =>{
    if(error){
        console.log(`As error has occurred ${error}`)
    }else{
        console.log(data)
    }
})

fs.writeFile('./texto.exemplo', 'Novo conteúdo do arquivo!', (error) =>{
    if(error){
        console.log('mano, deu erro em escrever documento')
    }else{
        console.log('mano, deu certin') 
    }
})
*/

function modificarUsuario(nome, curso, categoria){
    fs.readFile('./usuario.json', {encoding: 'utf-8'}, (error, data) =>{
        if(error){
            console.log('Bixo, deu erro')
        }else{
            var conteudo = data
            const novoConteudo = JSON.parse(conteudo)

            novoConteudo.nome = nome
            novoConteudo.curso = curso
            novoConteudo.categoria = categoria

            fs.writeFile('./usuario.json', JSON.stringify(novoConteudo), (error) =>{
                if(error){
                    console.log('deu erro aqui')
                }else{    
                    console.log(novoConteudo)                        
                }
            })
        }
    })
}

modificarUsuario("Vinin da baixada", "Skater", "Rua")