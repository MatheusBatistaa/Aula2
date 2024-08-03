alert("Bem-vindo!!");


//Vamos criar as variaveis para saber a nota final do aluno

var nome = prompt("Digite o nome do aluno");
var nota1 = prompt("Digite a primeira nota do aluno");
var nota2 = prompt ("Digite a segunda nota do aluno");
var nota3 = prompt("Digite a terceira nota do aluno");
var nota4 = prompt("Digite a quarta nota do aluno")

// Converter as varaveis para valores numericos (float)

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)
nota4 = parseFloat(nota4)

var media = (nota1+nota2+nota3+nota4) /4

document.getElementsByTagName("h2")[0].innerHTML=nome

document.getElementsByTagName("p")[0].innerHTML= "Primeira nota:  " + nota1;
document.getElementsByTagName("p")[1].innerHTML="Segunda nota: " + nota2;
document.getElementsByTagName("p")[2].innerHTML="Terçeira nota: " + nota3;
document.getElementsByTagName("p")[3].innerHTML="Quarta nota:  " + nota4;
document.getElementsByTagName("p")[4].innerHTML="Media do aluno: " + media;

if (media >= 6){

    document.getElementsByTagName("p")[5].innerHTML="Aprovado!"

}

else{

    document.getElementsByTagName("p")[5].innerHTML="Reprovado"
}
