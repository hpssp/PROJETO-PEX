// Importando o banco de dados
import questions from "./Perguntas.js";

// Seletores do DOM
const $startGameButton = document.querySelector(".start-quiz");
const $questionsContainer = document.querySelector(".questions-container");
const $answerContainer = document.querySelector(".answer-container");
const $questionText = document.querySelector(".question");
const $nextQuestionButton = document.querySelector(".next-question");

// Variáveis de controle
let currentQuestionIndex = 0;
let totalCorrect = 0;

// Eventos
$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

// Função para iniciar o jogo
function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

// Função para exibir a próxima pergunta
function displayNextQuestion() {
  resetState();

  // Verifica se todas as perguntas foram respondidas
  if (currentQuestionIndex >= questions.length) {
    return finishGame();
  }

  // Exibe a pergunta atual
  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;

  // Cria os botões das respostas
  currentQuestion.answers.forEach((answer) => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.option;

    // Marca a resposta correta
    if (answer.correct) {
      newAnswer.dataset.correct = "true";
    }

    // Adiciona o evento de clique para selecionar a resposta
    newAnswer.addEventListener("click", selectAnswer);
    $answerContainer.appendChild(newAnswer);
  });
}

// Função para resetar o estado (remover respostas anteriores)
function resetState() {
  while ($answerContainer.firstChild) {
    $answerContainer.removeChild($answerContainer.firstChild);
  }
  $nextQuestionButton.classList.add("hide");
}

// Função para selecionar uma resposta e verificar se está correta
function selectAnswer(event) {
  const selectedButton = event.target;

  // Incrementa o total de respostas corretas se a resposta estiver correta
  if (selectedButton.dataset.correct === "true") {
    totalCorrect++;
  }

  // Desabilita todos os botões após a seleção e aplica estilos de destaque
  Array.from($answerContainer.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Estilo verde para resposta correta
    } else {
      button.classList.add("wrong"); // Estilo vermelho para resposta errada
    }
  });

  // Mostra o botão de próxima pergunta
  $nextQuestionButton.classList.remove("hide");

  // Avança para a próxima pergunta
  currentQuestionIndex++;
}
// Função para finalizar o jogo e mostrar o resultado final
function finishGame() {
  const totalQuestions = questions.length;
  const performance = Math.floor((totalCorrect / totalQuestions) * 100);

  let message = "";
  if (performance >= 90) {
    message = "Excelente! ";
  } else if (performance >= 70) {
    message = "Muito bom! ";
  } else if (performance >= 50) {
    message = "Bom! ";
  } else {
    message = "Pode melhorar! 💡";
  }

  // Esconde o título "Quiz Interativo"
  document.querySelector(".quiz-container h1").classList.add("hide");
  
  // Exibe o resultado final com um botão de "Finalizar"
  $questionsContainer.innerHTML = `
    <h2>Quiz Concluído!</h2>
    <p>Você acertou ${totalCorrect} de ${totalQuestions} questões.</p>
    <p>${message}</p>
    <button class="finish-btn">Finalizar</button>
  `;

  // Adiciona um evento para o botão "Finalizar" (opcional: pode fechar a página ou redirecionar)
  document.querySelector(".finish-btn").addEventListener("click", () => {
    alert("Obrigado por participar! 🚀");
    // Opcional: Fechar a aba ou redirecionar
    // window.close(); // Fecha a aba (nem sempre funciona devido a restrições de segurança)
    // window.location.href = "https://exemplo.com"; // Redireciona para outra página
  });
}