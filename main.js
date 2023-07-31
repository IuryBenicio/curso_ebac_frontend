function Pessoa (nome, idade, funcao, hierarquia, turno){
    this.nome = nome
    this.idade = idade

    var _funcao = funcao
    
    this.getFuncao = () => {
        return _funcao
    }

    this.setFuncao = (novaFuncao) => {
        if(typeof novaFuncao === "string"){
            return _funcao = novaFuncao
        }
    }

    var _hierarquia = hierarquia

    this.getHierarquia = () => {
        return _hierarquia
    }

    this.setHierarquia = (novaHierarquia) => {
        if(typeof novaHierarquia === Number){
            return _hierarquia = novaHierarquia
        }
    }


    var _turno = turno

    this.getTurno = () => {
        return _turno
    }

    this.setTurno = (novoTurno) => {
        if(typeof novoTurno === "string"){
            return _turno = novoTurno
        }
    }

}

function Funcionario(nome , funcao, idade, hierarquia, materia, turno, tempoDeEmpresa){
    Pessoa.call(this, nome, funcao, idade, hierarquia, turno)
    var _materia = materia

    this.getMateria = () => {
        return _materia
    }

    this.setMateria = (novaMateria) => {
        if(typeof novaFuncao === "string"){
            return _materia = novaMateria
        }
    }

    var _tempoDeEmpresa = tempoDeEmpresa

    this.getTempoDeEmpresa = () => {
        return _tempoDeEmpresa
    }

    this.setTempoDeEmpresa = (novaTempoDeEmpresa) => {
        if(typeof novaFuncao === Number){
            return _tempoDeEmpresa = novaTempoDeEmpresa
        }
    }
}

function Aluno(nome , funcao, idade, hierarquia, turma, turno){
    Pessoa.call(this, nome, funcao, idade, hierarquia, turno)
    var _turma = turma

    this.getTurma = () => {
        return turma
    }

    this.setTurma = (novaTurma) => {
        if(typeof novaTurma === "string"){
            return _turma = novaTurma
        }
    }
}

var Aluno1 = new Aluno("João", "aluno", 14, 5, "4c", "vespertino");
var Aluno2 = new Aluno("Carlos", "aluno", 15, 5, "5a", "matutino");

var funcionario1 = new Funcionario("Alex", "professor", 45, 3, "Matemática", "matutino", 10)
var funcionario2 = new Funcionario("Balibino", "diretor", 45, 1, "direção", "integral", 40)

console.log(JSON.stringify(Pessoa))