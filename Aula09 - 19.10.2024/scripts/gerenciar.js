//Referenciamento aos controles do formulario
const nome = document.getElementById("txtnome");
const email = document.getElementById("txtemail");
const telefone = document.getElementById("txttelefone");
const endereco = document.getElementById("txtendereco");
const idade = document.getElementById("txtidade");
// Fazer uma referencia ao botao salvar
const btnsalvar = document.getElementById("salvar")

btnsalvar.onclick = () => {
    //buscar dados, para realizar o cadastro de um novo cliente, iremos 
    // usar o comando fetch(buscar) para loclizar uma url com o endpoint cadastrar.
    // Passar como parametro o método post e dados formulario para a api de cadasrar cliente
    fetch("http://10.26.49.20:3000/cadastrar", 
    {
        method:"POST",
        headers:{
            "accept":"application/json", 
            "content-type": "application/json"
        }, 

        body:JSON.stringify({

            nome:nome.value,
            email:email.value, 
            telefone:telefone.value, 
            endereco:endereco.value, 
            idade:idade.value

        })
    })

    .then((resposta)=> resposta.json())//respotar se dar certo
    .then((rs)=>alert(rs.msg))//mensagem quando der certo
    .cast((error)=> console.error(`Erro na api -> ${error}`)) // se nao der certo
}

const lista = document.getElementById("lista")
//Quando o documento carregar, deve montar a lista de clientes na tela. 
document.body.onload = ()=>{
    fetch("http://10.26.49.20:3000/listar")//Pedi para o servidor
    .then((resposta)=> resposta.json())//Servidor respondi e transformamos em JSON
    .then((rs)=>{

        let saida = ""

        rs.dados.map((cli)=>{ //cli de cliente 
            
            saida += `<div class="card" style="width: 18rem;">
            <img src="https://st4.depositphotos.com/3538103/40645/v/450/depositphotos_406455892-stock-illustration-user-icon-vector-people-icon.jpg" class="card-img-top tamanho " alt="...">
            <div class="card-body">
              <h5 class="card-title">${cli.nome}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">E-mail: ${cli.email}</li>
              <li class="list-group-item">Telefone: ${cli.telefone}</li>
              <li class="list-group-item">Endereço: ${cli.endereco}</li>
              <li class="list-group-item">Idade: ${cli.idade}</li>
              </ul>
            <div class="card-body">
              <a href="#" class="btn btn-danger">Delete</a>
              <a href="#" class="btn btn-info">Atualizar</a>
            </div>
          </div>`
        })

        lista.innerHTML = saida

    })//Dados
    .catch((error)=> console.error(`Error na api -> ${error}`))
}