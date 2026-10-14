const alunos = [
    { nome: "Maria", nota: 10 },
    { nome: "João", nota: 5 },
    { nome: "Ias", nota: 9 },
    { nome: "Carlos", nota: 9 }
];

const alunoEncontrado= alunos.find(aluno=>aluno.nota===7);
console.log(alunoEncontrado);
const alunocomC= alunos.find(C=>C.nome==='Carlos');
console.log(alunocomC);
if (alunoEncontrado){
    console.log( `Aluno encontrado: $(alunoEncontrado.nome)`)}
    else{
        console.log(' nenhum aluno encontrado')
    };
