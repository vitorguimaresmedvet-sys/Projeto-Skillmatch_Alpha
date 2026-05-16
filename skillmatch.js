
// 1. Dados de teste (descomentados)
const candidatoOriginal = {
  nome: "João Silva",
  idade: 30,
  area: "Desenvolvimento Back-End",
  habilidades: ["JavaScript", "React", "Node.js"],
  experienciaMeses: 5,
};

const listaVagas = [
  {
    id: 1,
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Back-End Júnior",
    requisitos: ["JavaScript", "Node.js", "SQL"],
    salario: 4800,
    modalidade: "Presencial",
  },
  {
    id: 2,
    empresa: "InovaTech",
    cargo: "Desenvolvedor Back-End Pleno",
    requisitos: ["JavaScript", "Node.js", "Docker", "React"],
    salario: 7000,
    modalidade: "Remoto",
  },
  {
    id: 3,
    empresa: "CodeMasters",
    cargo: "Desenvolvedor Back-End Sênior",
    requisitos: ["JavaScript", "Node.js", "Docker", "Kubernetes"],
    salario: 11000,
    modalidade: "Híbrido",
  },
];

// 2. Classes (Com iniciais maiúsculas para evitar conflito de escopo)
class Vaga {
  constructor(cargo, salario, requisitos, modalidade, id = null) {
    this.id = id;
    this.cargo = cargo;
    this.salario = salario;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
  }
}

class Candidato {
  constructor(nome, idade, area, habilidades, experienciaMeses) {
    this.nome = nome;
    this.idade = idade;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
  }
}

// 3. Função de avaliação
function avaliarCandidato(candidatoObjeto, vagaObjeto) {
  const requisitosAtendidos = vagaObjeto.requisitos.filter((requisito) =>
    candidatoObjeto.habilidades.includes(requisito)
  ).length;
  
  const totalRequisitos = vagaObjeto.requisitos.length;
  const percentualAtendimento = (requisitosAtendidos / totalRequisitos) * 100;
  return percentualAtendimento;
}

// 4. Criação do objeto usando a classe e armazenamento na variável 'novoCandidato'
const novoCandidato = new Candidato(
  "João Silva",
  30,
  "Desenvolvimento Back-End",
  ["JavaScript", "React", "Node.js"],
  5
);

// 5. Execução (Usando a primeira vaga do array 'listaVagas')
const resultado = avaliarCandidato(novoCandidato, listaVagas[0]);

console.log(
  `O candidato ${novoCandidato.nome} atende ${resultado.toFixed(2)}% dos requisitos da vaga de ${listaVagas[0].cargo}.`
);

if (resultado >= 80) {
  console.log("Recomendação: O candidato é altamente recomendado para esta vaga.");
} else if (resultado >= 50) {
  console.log("Recomendação: O candidato é recomendado para esta vaga, mas pode precisar de desenvolvimento em algumas áreas.");
} else {
  console.log("Recomendação: O candidato não atende a maioria dos requisitos para esta vaga.");
}
