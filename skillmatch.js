const candidato = {
  nome: "João Silva",
  idade: 30,
  area: "Desenvolvimento Back-End",
  habilidades: ["JavaScript", "React", "Node.js"],
  experienciaMeses: 5,
};

const vaga = [
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

// classe de vagas e candidato para criar objetos a partir das classes, e a função avaliarCandidato para calcular o percentual de requisitos atendidos pelo candidato em relação à vaga. O resultado é exibido no console.
class vagas {
  constructor(cargo, salario, requisitos, modalidade, id = null) {
    this.id = id;
    this.cargo = cargo;
    this.salario = salario;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
  }
}
//classe de vagas e candidato para criar objetos a partir das classes, e a função avaliarCandidato para calcular o percentual de requisitos atendidos pelo candidato em relação à vaga. O resultado é exibido no console.
class candidato {
  constructor(nome, idade, area, habilidades, experienciaMeses) {
    this.nome = nome;
    this.idade = idade;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
  }
}

function avaliarCandidato(candidato, vaga) {
  const requisitosAtendidos = vaga.requisitos.filter((requisito) =>
    candidato.habilidades.includes(requisito),
  ).length;
  const totalRequisitos = vaga.requisitos.length;
  const percentualAtendimento = (requisitosAtendidos / totalRequisitos) * 100;
  return percentualAtendimento;
}

new candidato(
  "João Silva",
  30,
  "Desenvolvimento Back-End",
  ["JavaScript", "React", "Node.js"],
  5,
);

const resultado = avaliarCandidato(candidato, vaga[0]);
console.log(
  `O candidato atende ${resultado.toFixed(2)}% dos requisitos da vaga.`,
);
