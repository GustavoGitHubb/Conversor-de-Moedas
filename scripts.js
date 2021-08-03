
let button = document.getElementById("button")
let select = document.getElementById("select-moedas")



async function convertermoedas() {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    let inputValorEmReais = Number(document.getElementById("input").value)

    let inputMoedas = document.getElementById("input-moedas")

    let textoReal = document.getElementById("texto-real")

    if (select.value === "$ Dólar Americano") {
        let ValorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let ValorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }


    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}


// essa funcao e responsavel por trocar a bandeira e o nome das moedas
function trocademoeda() {

    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "img/inglés.jpg"
    }
    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "img/euro.png"
    }

    convertermoedas()
}
button.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoeda)

