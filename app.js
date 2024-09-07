//cria as variáveis que serão utilizadas no jogo
const home = document.getElementById('home');
const board = document.getElementById('board');
const input = document.getElementById('input-name');
const selection = document.getElementById('selection');
const restart = document.getElementById('restart');
const one = document.getElementById('first-card');
const two = document.getElementById('second-card');
const three = document.getElementById('third-card');
const four = document.getElementById('fourth-card');
const five = document.getElementById('fifth-card');
const six = document.getElementById('sixth-card');
const seven = document.getElementById('seventh-card');
const eight = document.getElementById('eighth-card');
const nine = document.getElementById('ninth-card');
const ten = document.getElementById('tenth-card');
const keys = [0, 1 , 2, 3, 4];
const keysInfo = [0, 1 , 2, 3, 4];
const randomKeysImg = randomizeKeys(keys);
const randomKeysInfo = randomizeKeys(keysInfo);
var player = "";
var score = 0;
var elementA = "";
var elementB = "";

//faz a distribuição aleatória das cartas em suas rows
function randomizeKeys(keys) {
    return keys.sort(() => Math.random() - 0.5);
}

for (var j = 0; j < 5; j++) {
    const temp = `c${j + 1}`;
    window[temp] = randomKeysImg[j];
};

for (var j = 0; j < 5; j++) {
    const temp = `c${j + 6}`;
    window[temp] = randomKeysInfo[j];
};

//revela as cartas quando clicadas, de acordo com a distribuição aleatória anterior
function reveal(card) {
    if (card == one) {
        card.style.backgroundImage = `url(${cardsImg[c1].img})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsImg[c1].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsImg[c1].chave);
        }
    } else if (card == two) {
        card.style.backgroundImage = `url(${cardsImg[c2].img})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsImg[c2].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsImg[c2].chave);
        }
    } else if (card == three) {
        card.style.backgroundImage = `url(${cardsImg[c3].img})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsImg[c3].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsImg[c3].chave);
        }
    } else if (card == four) {
        card.style.backgroundImage = `url(${cardsImg[c4].img})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsImg[c4].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsImg[c4].chave);
        }
    } else if (card == five) {
        card.style.backgroundImage = `url(${cardsImg[c5].img})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsImg[c5].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsImg[c5].chave);
        }
    } else if (card == six) {
        card.style.backgroundImage = `url(${cardsInfo[c6].info})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsInfo[c6].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsInfo[c6].chave);
        }
    } else if (card == seven) {
        card.style.backgroundImage = `url(${cardsInfo[c7].info})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsInfo[c7].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsInfo[c7].chave);
        }
    } else if (card == eight) {
        card.style.backgroundImage = `url(${cardsInfo[c8].info})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsInfo[c8].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsInfo[c8].chave);
        }
    } else if (card == nine) {
        card.style.backgroundImage = `url(${cardsInfo[c9].info})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsInfo[c9].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsInfo[c9].chave);
        }
    } else if (card == ten) {
        card.style.backgroundImage = `url(${cardsInfo[c10].info})`;
        if (score == 0) {
            elementA = card;
            keyA = cardsInfo[c10].chave;
            score++;
        } else {
            checkScore(elementA, keyA, card, cardsInfo[c10].chave);
        }
    } 
};

//checa se a segunda carta selecionada corresponde com a primeira
function checkScore(elementA, keyA, elementB, keyB) {
    if (keyA == keyB && elementA != elementB) {
        elementA.setAttribute('onclick', '');
        elementB.setAttribute('onclick', '');
    }
    else {
        resetError(elementA, elementB);
    }
    score = 0;
}

//reseta as cartas caso a selecão das 2 cartas não seja correspondente
function resetError(elementA, elementB) {
    tremor(elementA, 1000, 3);
    tremor(elementB, 1000, 3);
    elementA.style.backgroundImage = 'url("assets/background-animal-deck.png")';
    elementB.style.backgroundImage = 'url("assets/background-animal-deck.png")';
}

//inicializa o jogo
function startGame() {
    home.style.display = 'none';
    board.style.display = 'flex';
    restart.style.display = 'block';
    player = input.value;
    selection.innerHTML = `<p>FunCard - <span style="font-size: 1.8rem; color: #deeb34;">Olá ${player}</span>, encontre as cartas, aprenda e diverta-se!</p>`

}

//faz as cartas tremerem quando não são correspondentes, para que o jogador perceba o erro
function tremor(elemento, duracao, intensidade) {
    const originalTransform = elemento.style.transform; // Salva o transform original
  
    let startTime = null;
  
    function passo(timestamp) {
      if (!startTime) startTime = timestamp;
      const progresso = (timestamp - startTime) / duracao;
  
      if (progresso < 1) {
        const deslocamentoX = intensidade * Math.sin(progresso * Math.PI * 8);
        const deslocamentoY = intensidade * Math.cos(progresso * Math.PI * 8);
  
        elemento.style.transform = `${originalTransform} translate(${deslocamentoX}px, ${deslocamentoY}px)`;
  
        requestAnimationFrame(passo);
      } else {
        elemento.style.transform = originalTransform; // Restaura o transform original
      }
    }
  
    requestAnimationFrame(passo);
  }