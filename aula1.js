alert("top");


// Criamos var cor p/ guardar a cor
// que o usuario irá digitar. usamos, também o comando chamado prompt que abre uma caixa de msg p/ o usuario digitar a cor.
cor = prompt("Digite uma cor de fundo em inglês");

// A cor doigitda pelo o usuario, ficou na variável cor e será usada para alterar a cor de fundo do body do nosso documento.
document.body.style.backgroundColor = cor;