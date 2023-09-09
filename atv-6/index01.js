// Saldo inicial da conta
let saldo = 1000;


const historicoTransacoes = [];

// Menu do Usuário
function exibirMenu() {
  console.log("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:");
  console.log("1. Depositar");
  console.log("2. Sacar");
  console.log("3. Ver Saldo");
  console.log("4. Ver Histórico de Transações");
  console.log("5. Sair");
  const escolha = prompt("Digite o número da opção desejada:");

  // Converter para um número inteiro
  return parseInt(escolha);
}

// Depositar

function depositar() {

  const valor = parseFloat(prompt("Digiteo valor que deseja depositar:"));
  if (!isNaN(valor) && valor > 0) {
    saldo += valor;
    historicoTransacoes.push({ tipo: "Depósito", valor, data: new Date() });
    console.log(`Depósito de $${valor.toFixed(2)} realizado com sucesso.`);
  } else {
    console.log("Valor do depósito foi inválido. Tente novamente.");
  }
}

// Sacar

function sacar() {
  const valor = parseFloat(prompt("Digite o valor a ser sacado:"));
  if (!isNaN(valor) && valor > 0 && saldo >= valor) {
    saldo -= valor;
    historicoTransacoes.push({ tipo: "Saque", valor, data: new Date() });
    console.log(`Saque de $${valor.toFixed(2)} realizado com sucesso.`);
  } else {
    console.log("Valor de saque inválido ou saldo insuficiente.");
  }
}

// Ver saldo
function verSaldo() {
  console.log(`Saldo atual: $${saldo.toFixed(2)}`);
}

//Histórico das Transações
function verHistoricoTransacoes() {
  console.log("Histórico de Transações:");
  for (const transacao of historicoTransacoes) {
    console.log(`${transacao.tipo}: $${transacao.valor.toFixed(2)} em ${transacao.data}`);
  }
}

// Laço de repetição principal
while (true) {
    
  const escolha = exibirMenu();

  switch (escolha) {
    case 1:
      depositar();
      break;
    case 2:
      sacar();
      break;
    case 3:
      verSaldo();
      break;
    case 4:
      verHistoricoTransacoes();
      break;
    case 5:
      console.log("Obrigado por usar nosso sistema. Adeus!");

    //fim do programa
    
      process.exit(0);
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}