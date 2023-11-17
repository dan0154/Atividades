var preco = "Valor não definido"
var litros

function defineValor(valor){
    preco = valor
}

function valorFinal() {
    litros = Number(document.getElementById("litros").value)
    let total = litros * preco
    if (litros === 0){
        total = "Valor não definido"
        litros = "Valor não definido"
    }
    document.getElementById("litros2").innerHTML = litros
    document.getElementById("totalAPagar").innerHTML = total
    document.getElementById("precoPorLitro").innerHTML = preco
    
}