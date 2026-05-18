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

// Controle global de saída no console. Defina `true` para suprimir logs de listagem.

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
// Mostrar listagem de vagas (true = suprimir listagem inicial)
const SILENT = false;
// Controla se os detalhes por vaga devem ser impressos durante a avaliação
const PRINT_PER_VAGA = false;
if (!SILENT) {
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
}

// 3. Função de avaliação (atualizada para mostrar os nomes das tecnologias)
function avaliarCandidato(candidatoObjeto, vagaObjeto, exibirLogs = true) {
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

  // Classificação textual (RF04)
  let classificacao = "";
  if (percentualAtendimento >= 80) classificacao = "Alta compatibilidade";
  else if (percentualAtendimento >= 50) classificacao = "Média compatibilidade";
  else classificacao = "Baixa compatibilidade";

  // EXIBE OS LOGS MOSTRANDO OS TEXTOS SEPARADOS POR VÍRGULA (apenas se exibirLogs=true)
  if (exibirLogs) {
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
    console.log(`Classificação: ${classificacao}`);
    console.log("---------------------------------------");
    console.log(
      `Recomendações de estudo: priorize estudar ${habilidadesFaltantes.join(", ") || "Nenhuma!"}, pois esta(s) é(são) a(s) habilidade(s) que você ainda não possui e que é(são) requisitada(s) para a vaga. Focar nela(s) pode aumentar suas chances de conseguir a vaga!`,
    );
    console.log("---------------------------------------");
  }

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

console.log(
  `Candidato: ${novoCandidato.nome}, ${novoCandidato.idade} anos, área: ${novoCandidato.area}, habilidades: ${novoCandidato.habilidades.join(", ")}, experiência: ${novoCandidato.experienciaMeses} meses.`,
);

function aguardar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simula o carregamento das vagas (RF14)
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(listaVagas), 1000);
  });
}

async function executarAnalise(candidato) {
  // Carrega as vagas (simulação de requisição)
  const vagasCarregadas = await buscarVagasSimuladas();

  const numeroAnalise = contarAnalise();
  console.log(`Executando análise nº ${numeroAnalise} para ${candidato.nome}`);

  const _originalConsoleLog = console.log;
  if (SILENT) console.log = function () {};

  if (PRINT_PER_VAGA) console.log("Comparando o candidato com todas as vagas disponíveis:");

  const resultadosVagas = vagasCarregadas.map((vaga, index) => {
    if (PRINT_PER_VAGA) {
      console.log("=======================================");
      console.log(`Vaga ${index + 1} de ${vagasCarregadas.length}`);
      console.log(`Empresa: ${vaga.empresa}`);
      console.log(`Cargo: ${vaga.cargo}`);
    }

    const resultadoVaga = avaliarCandidato(candidato, vaga, false);
    return { vaga, resultadoVaga };
  });

  if (SILENT) console.log = _originalConsoleLog;

  const melhorVaga = resultadosVagas.reduce((melhor, atual) => {
    return atual.resultadoVaga > melhor.resultadoVaga ? atual : melhor;
  }, resultadosVagas[0]);

  console.log("=======================================");
  return melhorVaga;
}

function criarContadorDeAnalises() {
  let total = 0;
  return function () {
    total += 1;
    return total;
  };
}

const contarAnalise = criarContadorDeAnalises();



(async () => {
  console.log(`Iniciando análise de ${novoCandidato.nome} para as vagas disponíveis...`);
  const melhorVaga = await executarAnalise(novoCandidato);

  finalizarAnalise(novoCandidato.nome, (nome) => {
    console.log(
      `Notificação: análise de ${nome} concluída. Melhor vaga: ${melhorVaga.vaga.cargo} na empresa ${melhorVaga.vaga.empresa}, com ${melhorVaga.resultadoVaga.toFixed(2)}% dos requisitos atendidos.`,
    );
    // opcional: mostrar logs detalhados da melhor vaga
    avaliarCandidato(novoCandidato, melhorVaga.vaga, true);
    recomendacaoVaga(melhorVaga.vaga, melhorVaga.resultadoVaga);
  });
})();

function recomendacaoVaga(vaga, resultadoVaga) {
  if (resultadoVaga >= 80) {
    console.log(
      "Recomendação: Alta",
    );
  } else if (resultadoVaga >= 50) {
    console.log(
      "Recomendação: Média",
    );
  } else {
    console.log(
      "Recomendação: Baixa",
    );
  }
}

function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");
  callback(nomeCandidato);
}
;



// RF13 – Usar closure
// Criar uma função que mantenha um valor interno. Exemplo:
// function criarContadorDeAnalises() {
//  let total = 0;
//  return function () {
//  total++;
//  return total;
//  };
// }
// RF14 – Usar Promise e async/await
// Simular o carregamento das vagas como se os dados viessem de um servidor. Não é necessário usar API real.
// Exemplo:
// function buscarVagasSimuladas() {
//  return new Promise((resolve) => {
//  setTimeout(() => {
//  resolve(vagas);
//  }, 1000);
//  });
// }
// async function iniciarSistema() {
//  const vagasCarregadas = await buscarVagasSimuladas();
//  console.log("Vagas carregadas com sucesso!");
//  console.log(vagasCarregadas);}
