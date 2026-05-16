// 1. Dados de teste (descomentados)
// const candidatoOriginal = {
//   nome: "João Silva",
//   idade: 30,
//   area: "Desenvolvimento Back-End",
//   habilidades: ["JavaScript", "React", "Node.js"],
//   experienciaMeses: 5,
// };

const candidatoOriginal = {
  nome: "nome",
  idade: "idade",
  area: "area",
  habilidades: "",
  experienciaMeses: "experienciaMeses",
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

class VagaFrontEnd extends Vaga {
  constructor(cargo, empresa, requisitos, salario, modalidade, nivel) {
    super(cargo, salario, requisitos, modalidade);
    this.empresa = empresa;
    this.nivel = nivel;
  }
  exibirNivel() {
    return `Nivel da vaga: ${this.nivel}`;
  }
}

// // 3. Função de avaliação (atualizada para mostrar os logs dentro dela)
// function avaliarCandidato(candidatoObjeto, vagaObjeto) {
//   // Encontra quais habilidades batem com os requisitos
//   const habilidadesCorrespondentes = vagaObjeto.requisitos.filter((requisito) =>
//     candidatoObjeto.habilidades.includes(requisito),
//   );

//   const requisitosAtendidos = habilidadesCorrespondentes.length;
//   const totalRequisitos = vagaObjeto.requisitos.length;
//   const percentualAtendimento = (requisitosAtendidos / totalRequisitos) * 100;

//   // EXIBE OS LOGS DENTRO DA FUNÇÃO (onde as variáveis existem)
//   const habilidadesCorrespondentes = vagaObjeto.requisitos.filter((requisito) =>
//   candidatoObjeto.habilidades.includes(requisito)
// );

// //   console.log(
// //     `Habilidades correspondentes: ${habilidadesCorrespondentes.join(", ")}`,
// //   );
//   console.log(`Requisitos atendidos: ${requisitosAtendidos}`);
//   console.log(`Total de requisitos: ${totalRequisitos}`);

//   console.log(`Habilidades atendidas: ${requisitosAtendidos} `);

// console.log(
//   `Habilidades não encontradas: ${totalRequisitos - requisitosAtendidos}`,
// );
// return percentualAtendimento;
// }

// // console.log(listaVagas[0]);
console.log("---------------------------------------");
console.log("Vagas disponíveis:");
console.log("---------------------------------------");
listaVagas.forEach((vaga) => {
  console.log(` EMPRESA: ${vaga.empresa}`);
  console.log(` CARGO:   ${vaga.cargo} (ID: ${vaga.id})`);
  console.log(` SALÁRIO: R$ ${vaga.salario.toLocaleString("pt-BR")},00`);
  console.log(` MODELO:  ${vaga.modalidade}`);
  console.log(` REQUISITOS ORIGINAIS: ${vaga.requisitos.join(", ")}`);
  console.log("---------------------------------------");
});

// 3. Função de avaliação (atualizada para mostrar os nomes das tecnologias)
function avaliarCandidato(candidatoObjeto, vagaObjeto) {
  // Encontra quais requisitos o candidato TEM (Atendidos)
  const habilidadesCorrespondentes = vagaObjeto.requisitos.filter((requisito) =>
    candidatoObjeto.habilidades.includes(requisito),
  );

  // Encontra quais requisitos o candidato NÃO TEM (Não encontrados)
  const habilidadesFaltantes = vagaObjeto.requisitos.filter(
    (requisito) => !candidatoObjeto.habilidades.includes(requisito),
  );

  // Cálculos matemáticos usando o .length das listas acima
  const requisitosAtendidos = habilidadesCorrespondentes.length;
  const totalRequisitos = vagaObjeto.requisitos.length;
  const percentualAtendimento = (requisitosAtendidos / totalRequisitos) * 100;

  // EXIBE OS LOGS MOSTRANDO OS TEXTOS SEPARADOS POR VÍRGULA
  console.log("---------------------------------------");
  console.log(
    `Habilidades correspondentes: ${habilidadesCorrespondentes.join(", ")} `,
  );

  // Agora sim o .join() está correto, pois estamos lidando com listas de textos!
  console.log(
    `Requisitos atendidos: ${habilidadesCorrespondentes.join(", ")} que corresponde ao total de ${requisitosAtendidos} requisitos atendidos.`,
  );
  console.log(
    `Total de requisitos da vaga: ${vagaObjeto.requisitos.join(", ")} (${totalRequisitos} requisitos no total).`,
  );
  console.log(
    `Habilidades atendidas: ${habilidadesCorrespondentes.join(", ")} (${requisitosAtendidos} requisitos atendidos).`,
  );
  console.log(
    `Habilidades não encontradas: ${habilidadesFaltantes.join(", ") || "Nenhuma!"}`,
  );
  console.log("---------------------------------------");
  console.log(
    `Recomendações de estudo: priorize estudar ${habilidadesFaltantes.join(", ") || "Nenhuma!"}, pois esta(s) é(são) a(s) habilidade(s) que você ainda não possui e que é(são) requisitada(s) para a vaga. Focar nela(s) pode aumentar suas chances de conseguir a vaga!`,
  );
  console.log("---------------------------------------");
  return percentualAtendimento;
}

// 4. Criação do objeto
const novoCandidato = new Candidato(
  "Carlos Pereira",
  36,
  "Desenvolvimento Front-End",
  ["HTML", "CSS", "JavaScript"],
  24,
);

console.log(`Candidato criado: ${novoCandidato.nome}, ${novoCandidato.idade} anos, área: ${novoCandidato.area}, habilidades: ${novoCandidato.habilidades.join(", ")}, experiência: ${novoCandidato.experienciaMeses} meses.`);

// 5. Execução (Comparando o candidato com todas as vagas do array 'listaVagas')
console.log("Comparando o candidato com todas as vagas disponíveis:");
const resultadosVagas = listaVagas.map((vaga, index) => {
  console.log("=======================================");
  console.log(`Vaga ${index + 1} de ${listaVagas.length}`);
  console.log(`Empresa: ${vaga.empresa}`);
  console.log(`Cargo: ${vaga.cargo}`);

  const resultadoVaga = avaliarCandidato(novoCandidato, vaga);
  console.log(`Resultado final: ${resultadoVaga.toFixed(2)}% dos requisitos atendidos para a vaga de ${vaga.cargo}.`);

  if (resultadoVaga >= 80) {
    console.log("Recomendação: O candidato é altamente recomendado para esta vaga.");
  } else if (resultadoVaga >= 50) {
    console.log("Recomendação: O candidato é recomendado para esta vaga, mas pode precisar de desenvolvimento em algumas áreas.");
  } else {
    console.log("Recomendação: O candidato não atende a maioria dos requisitos para esta vaga.");
  }

  return { vaga, resultadoVaga };
});

const melhorVaga = resultadosVagas.reduce((melhor, atual) => {
  return atual.resultadoVaga > melhor.resultadoVaga ? atual : melhor;
}, resultadosVagas[0]);

console.log("=======================================");
console.log(`Melhor correspondência: o candidato está mais próximo da vaga de ${melhorVaga.vaga.cargo} na empresa ${melhorVaga.vaga.empresa}, com ${melhorVaga.resultadoVaga.toFixed(2)}% dos requisitos atendidos.`);
