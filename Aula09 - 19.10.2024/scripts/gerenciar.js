//Referenciamento aos controles do formulario
const nome = document.getElementById("txtnome");
const email = document.getElementById("txtemail");
const telefone = document.getElementById("txttelefone");
const endereco = document.getElementById("txtendereco");
const idade = document.getElementById("txtidade");
let idcli = 0 //
// Fazer uma referencia ao botao salvar
const btnsalvar = document.getElementById("salvar")

const btnatualizar = document.getElementById("btnatualizar")

//referencia do botao caastrar cliente
const btncadastrar = document.getElementById("btncadastrar")
// Quando clicar no botão cadastrar cliente 
//o Botão atualizar do modal deve desaparecer
//Vamos aplicar um estilo css de display none


btncadastrar.onclick =()=> {
    btnatualizar.style.display="none"
    btnsalvar.style.display="block"
  }
  

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
    
    window.location.reload()
  }

const lista = document.getElementById("lista")
//Quando o documento carregar, deve montar a lista de clientes na tela. 
document.body.onload = ()=>{
    fetch("http://10.26.49.20:3000/listar")//Pedi para o servidor
    .then((resposta)=> resposta.json())//Servidor respondi e transformamos em JSON
    .then((rs)=>{

        let saida = ""

        rs.dados.map((cli)=>{ //cli de cliente 
            
            saida += `<div class="card col-3"> 
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
              <a href="#" class="btn btn-danger" onclick=apagar(${cli.idcliente}) >Delete</a>
              <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="atualizar(${cli.idcliente}, '${cli.nome}', '${cli.endereco}', '${cli.email}', '${cli.telefone}', ${cli.idade})">Atualizar</a>
            </div>
          </div>`
        })

        lista.innerHTML = saida

    })//Dados
    .catch((error)=> console.error(`Error na api -> ${error}`))
}

//criando função apagar pelo id
function apagar (id) {
  
  //confirmação se vai apagar
  if(confirm("Tem certeza que quer excluir?") ==1){
    fetch(`http://10.26.49.20:3000/apagar/${id}`,{
    method: "DELETE", 
    headers: {
      "accept": "application/json", 
      "content-type": "application/json"
    }
  }) //busca no servidor

  .then((resposta)=>resposta.json()) // então, pega a resposta e converte para Json
  .then((rs)=> {

    if(rs.msg == "Apagou") {
      alert(`O cliente de id: ${id} foi apagado com sucesso`)

      // fazer um reload na pagina para atualizar osdados 
      window.location.reload()
    }
    else {
      alert(`Não foi possivel apagar o cliente de id ${id}\n
      veja o erro abaixo:\n${rs.msg}`)
    }

  })

  //Tratamento de erro caso de algo de errado
  .catch((error) => console.error(`Erro ao carregar a api ${error}`))

  }
  else{
    return 
  }

  
} 

//Atualizar cadastro
function atualizar (id,nom,enderec,emai,tel,idad) {

  btnsalvar.style.display="none"
  btnatualizar.style.display="block"

  if(confirm("Tem certeza que quer Atualizar?") ==1){
  
    console.log(`${id}\n${nom}\n${enderec}\n${emai}\n${tel}\n${idad}`)
  nome.value = nom
  email.value = emai
  telefone.value = tel
  endereco.value = enderec
  idade.value = idad
  idcli = id

  }
  else {
    return
  }

  
} 

//Vamos aplicar a função de atualizar os dados aqui do formulario 
//ao botão atualizar do modal 
btnatualizar.onclick = () => {

  fetch (`http://10.26.49.20:3000/atualizar/${idcli}`,{
    method:"PUT",
    headers:{
      "accept":"application/json",
      "content-type": "application/json"
    },

    //servidor
    body:JSON.stringify({

      nome:nome.value,
      email:email.value,
      telefone:telefone.value,
      endereco:endereco.value,
      idade:idade.value

    })
  })
  .then((resposta) => resposta.json())
  .then((rs)=> {

    if(rs.msg == "Atualizado") {
      alert(`O cliente ${nome.value} foi atualizado com sucesso!!`)
      window.location.reload()
    }
    else(
      alert(`Não foi possivel atualizar ${nome.value} \n
      veja o que aconteceu: \n${rs.msg}`)
    )

  })
  .catch((er) => console.error(`Erro ao carregar a api ${er}`))

}
