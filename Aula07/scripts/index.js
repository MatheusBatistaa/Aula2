// função anonima (não usa nome)

let somaDoisValores = function (x,y) {

    alert("Foi feita a soma de "+x+ "e" +y+ "igual" + (x+y) )
}

let raiz = function (valor){

    // 'ADFA A' + valor
    // "ADFA A" + valor
    // `ADFA A ${valor}`

    alert(`A raiz quadrada de ${valor} é ${Math.sqrt(valor)}`)
}

//calculo de potencia

let potencia = (base, exp) => {

    let rs = Math.pow(base,exp);
    alert(`O resultado é ${rs}`)
}