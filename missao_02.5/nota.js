
const alunos = [
    { nome: "maria", nota: 10 },
    { nome: "jao", nota: 5 },
    { nome: "ias", nota: 9 },
    { nome: "carlos", nota: 9 },

]


let media=0;
let soma=0;

for (let i = 0; i < alunos.length; i++) {
// MEDIA ALUNOS//
 
 soma+=alunos[i].nota;
    
    
   


    // SAIDAS DE TEXTO///
    let texto = document.querySelector("#texto");
    let resultado = document.querySelector("#resultado");
    let reprovado = document.querySelector("#reprovado");
    // FIM SAIDAS DE TEXTO
    texto.innerHTML += "nome: " + alunos[i].nome + " " + ",nota:" + alunos[i].nota + `<br>`;
    
    if (alunos[i].nota >= 7) {

        resultado.innerHTML += `O aluno ${alunos[i].nome} está aprovado <br>`;
    }
    else { reprovado.innerHTML += `O aluno ${alunos[i].nome} está reprovado <br>` }

   

}
media=soma/ alunos.length;
let mediaAlunos=document.querySelector("#mediaAlunos");
mediaAlunos.innerHTML=`A média da turma é: ${media.toFixed(2)}`;

