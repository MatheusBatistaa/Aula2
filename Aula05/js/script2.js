function calculos(){

    let op = 0
    while (op != 9) {

    let n1 = prompt("Digite um numero")
    let n2 = prompt("Digite outro numero")    

    op = prompt("Digite: \n1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair")

    n1 = parseFloat (n1)
    n2 = parseFloat (n2)
    
    if (op == 1) {
        alert(n1+n2)
    }
    else if (op == 2){
        alert(n1-n2)
    }
    else if (op == 3){
        alert(n1*n2)
    }

    else if (op == 4){
        alert(n1/n2)
    }
    else {
        break;
    }


}
}