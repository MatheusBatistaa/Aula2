function infoFilme (dados){

    let saida = ""
    saida+=`<h2> ${dados.title}</h2>`
    saida+=`<p> ${dados.overview}</p>`
    saida+= `<p> Lançamento: ${dados.release_date}</p>`
    saida+= `<p>Média votos: ${dados.vote_average}</p>`



    document.getElementById("info").style.display = "flex"
    document.getElementById("poster").innerHTML =`<img src= https://image.tmdb.org/t/p/w500${dados.poster_path}>`
    document.getElementById("info").style.zIndex ="1000"// quando clica ele nao mostra mais a div da tela anteior   
    document.getElementById("detalhes").innerHTML = saida
}



function carregarFilmes () {

    // referencia para lista
    let lista = document.getElementById("lista")

    //busca de dados 
    fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&api_key=e8ee1b7136ab091a2fb872089bf3c840&page=1")
    //transforma a resposta do servidor
    .then((resposta) => resposta.json()) // resposta, pega e transforma em json para ficar organizados
    //Pega o que foi convertido e joga em dados
    .then((dados)=> {
         console.log(dados.results)

         // Mapeando os dados

         dados.results.map ((f, i) => {

            // Vamos criar um elemento do tipo div para cada filme mapeado, para ficar dentro de continer   

            let div_fm = document.createElement("div")

            //Criando o evento click para quando for clicar no filme
            div_fm.onclick = ()=>{
                infoFilme(f);
            }


            //add um atributo do tipo class para formatar 
            div_fm.setAttribute("class", "filme")
            
            // Criar um elemento do tipo imagem para a capa do filme 
            let img_capa = document.createElement("img")
            img_capa.src =`https://image.tmdb.org/t/p/w500${f.poster_path}` 
           
            
            let h2_titulo = document.createElement("h2")
            h2_titulo.innerHTML = f.title


            let p_lancamento = document.createElement ("p")
            p_lancamento.setAttribute("class", "lancamento")
            p_lancamento.innerHTML = f.release_date




            // Criar o elemento do tipo p para a media de votos 
            let p_votos = document.createElement("p")
            p_votos.setAttribute("class", "votos")
            p_votos.innerHTML= Math.round (f.vote_average*10)  + "%"
 

            //Add a imagem na div usando o comando appendchild
            div_fm.appendChild (img_capa)
            div_fm.appendChild (p_votos)
            div_fm.appendChild (h2_titulo)
            div_fm.appendChild (p_lancamento)

            //Add adiv na lista 

            lista.appendChild(div_fm)


           
         })

        }) // dos dados, vai imprimir.
    .catch (function (e) {console.log.error(e)})// Como fica sem ursar o =>
}

// agora vamos imprimir na tela com o map

// Quando clicar no X fechar dados 
// da tela de informções do filme 
// o painel com as informações deve fechar. Vamos usar o comando de css display none

document.getElementById("fechar").onclick=()=> {
    document.getElementById("info").style.display = "none"
}

