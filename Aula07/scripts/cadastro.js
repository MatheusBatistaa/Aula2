let nome = document.getElementById("txtnome");
let email = document.getElementById("txtemail");
let telefone = document.getElementById("txttelefone");
let idade = document.getElementById ("txtidade");

//Ele prcisa ficar fora do let cadastro, se ele ficar dentro ele zera os dados que entra
let dados = []

let cadastro = () => {

    let cliente = {

        nome:nome.value,
        email:email.value,
        telefone:telefone.value,
        idade:idade.value
    }

    dados.push(cliente)
    listarClientes();

    console.log(dados);
}

let listarClientes = () => {


    //cabeçalho de dados
  let lista = document.getElementById("lista");
  lista.innerHTML = `
    
    <p> 
        <span>Nome</span>
        <span>E-mail</span>
        <span>Telefone</span>
        <span>Idade</span>
    </p>
  
  ` 

    //Saida dos dados 

    let mostra = "      ";

    dados.map((cli, ix) =>{

        mostra += `
    
        <p> 
            <span>${cli.nome}</span>
            <span>${cli.email}</span>
            <span>${cli.telefone}T</span>
            <span>${cli.idade}</span>
        </p>
      
      ` 
        
    })
    
    lista.innerHTML += mostra 
}

