// function horario (){

//     //vamos fazer a instância da class Date, onde iremos encontrar 
//     //as fnções de data e hora. 

//     let tempo = new Date()
    
//     let hora = tempo.getHours()
//     let minuto = tempo.getMinutes()
//     let segundo = tempo.getSeconds()

//     document.querySelector("#horario").innerHTML = `${hora}: ${minuto}: ${segundo}`
// }

//Vai chamar a função horario para ficar chamando cada segundo, assim o relogio funciona sem ficar atualizando manualmente
//window.setInterval(horario, 1000)


//MOVIMENTAÇÃO

// let p = 0

// function movimentaDiv() {

//     if(p>=900) {
//         p = 900
//     }

//     else {
//         p+=10
//     }

//     document.querySelector("#imagem").style.left = p + "px";
    

// }

// window.setInterval(movimentaDiv, 100)



//Carregar 

function apagarSombra () {

   // document.querySelector("#sombra").style.width = "0vw"
    document.querySelector("#sombra").style.opacity = " 0"
}

window.setTimeout(apagarSombra, 5000)