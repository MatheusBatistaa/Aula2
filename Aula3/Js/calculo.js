alert ("Bem-vindo");

function calcular () {

    let preco = document.getElementById("preco");
    let forma_pagamento = document.getElementById("forma_pagamento")
    let valor_pagar = document.getElementById ("valor_pagar")

    /*Se a forma de pagamento for pix o desconto sobre o preço do produto 
    será de 10%. 
    Caso  seja dinheiro, então o desconsto será de 5%. 
    Sendo em cartão, terá um acrescimo de 5% ao preço.
    Não sendo selecionado nenhuma das opçoes, apresentar uma mensagem ao usuario.
    */

    let resultado = 0; 

    if(forma_pagamento.value == "pix") {

        resultado = preco.value * 0.9
    }
    else if (forma_pagamento.value == "dinheiro") {
       
        resultado = preco.value *0.95
    }

    else if (forma_pagamento.value == "cartao") {

        resultado= preco.value * 1.05
    }

    else {

        alert("Selecione uma forma de pagamento para calcular");
    }

    valor_pagar.value = "R$ " + resultado

    alert ("Obrigado pela compra!!")


}

