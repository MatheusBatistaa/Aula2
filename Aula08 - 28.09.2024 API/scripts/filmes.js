
function carregarFilmes () {

    // referencia para lista
    let lista = document.getElementById("lista")

    fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&api_key=e8ee1b7136ab091a2fb872089bf3c840&page=1")
    .then((resposta) => resposta.json()) // resposta, pega e transforma em json para ficar organizados
    .then((dados)=> {
         console.log(dados.results)

         // Mapeando os dados

         dados.results.map ((f, i) => {

            // Vamos criar um elemento do tipo div para cada filme mapeado 

            let div_fm = document.createElement("div")
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
            p_votos.innerHTML=f.vote_average
 

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

