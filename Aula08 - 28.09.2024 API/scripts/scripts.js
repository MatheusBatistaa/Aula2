
function primeira (valor){

    return new Promise ((resolver, reject)=> {

        if ( valor < 50) {
            resolver ("Deu tudo certo")
        }
        else {
            reject("Deu tudo errado")
        }
    })
}

let usar = primeira (10);
usar
    .then((rs)=> console.log(rs))//quando da certo, por conta do resolver
    .catch((er)=> console.error(er))//cai no erro, por cont do reject


//Função de buscas ? 
//É uma promessa q vai conseguir cumprir
