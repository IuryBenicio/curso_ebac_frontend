class Aluno{
    constructor(nomeAluno, notaAluno){
        this.nomeAluno = nomeAluno
        this.notaAluno = notaAluno
    }
}

const jose = new Aluno('Jose', 8);
const elisa = new Aluno('Elisa', 5);
const luis = new Aluno('Luis', 6);
const julio = new Aluno('Julio', 9);
const regina = new Aluno('Regina', 2);

let alunos = [jose, elisa, luis, elisa, julio, regina];

const alunosAprovados = alunos.filter aluno => (aluno.notaAluno >= 6)

console.log(alunosAprovados)
