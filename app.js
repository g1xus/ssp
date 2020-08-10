function game() {
  let playBtn = document.querySelector(".play"),
    intro = document.querySelector(".intro"),
    match = document.querySelector(".match"),
    quitGame = document.querySelector(".quit"),
    rock = document.querySelector(".rock"),
    scissors = document.querySelector(".scissors"),
    paper = document.querySelector(".paper"),
    winner = document.querySelector(".winner"),
    playerHand = document.querySelector(".player-hand"),
    computerHand = document.querySelector(".computer-hand"),
    playerScoreCount = document.querySelector(".player-score-count"),
    computerScoreCount = document.querySelector(".computer-score-count"),
    gameButton = document.querySelectorAll(".button");

  function introFadeOut() {
    intro.classList.add("fadeOut");
    match.classList.add("fadeIn");
    intro.classList.remove("fadeIn");
    match.classList.remove("fadeOut");
  }
  function matchFadeOut() {
    intro.classList.remove("fadeOut");
    match.classList.remove("fadeIn");
    match.classList.add("fadeOut");
    intro.classList.add("fadeIn");
  }
  
  let playerScore = 0;
  let computerScore = 0;

  playBtn.addEventListener("click", function () {
    introFadeOut();
  });
  quitGame.addEventListener("click", function () {
    matchFadeOut();
    playerScore = 0;
    computerScore = 0;
    playerScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
    winner.textContent = 'Выбери вариант';
    playerHand.src = `./assets/Камень.png`;
    computerHand.src = `./assets/Камень.png`;
  });

  let optionsArr = [rock, scissors, paper];

  let computerChoise = Math.floor(Math.random() * optionsArr.length);

  function battle(option) {
    option.addEventListener("click", function () {
      let playerChoise = option;
      playerHand.classList.add("player-hand-shake");
      computerHand.classList.add("computer-hand-shake");
      setTimeout(battleProcces, 2000)

      function battleProcces() {
        playerHand.src = `./assets/${option.innerHTML}.png`;
        computerHand.src = `./assets/${optionsArr[computerChoise].innerHTML}.png`;
        if (playerChoise == optionsArr[computerChoise]) {
          winner.textContent = "Ничья";
        } else if (
          playerChoise == rock &&
          optionsArr[computerChoise] == scissors
        ) {
          winner.textContent = "Вы победили";
          playerScoreCount.textContent = playerScore += 1;
        } else if (
          playerChoise == scissors &&
          optionsArr[computerChoise] == paper
        ) {
          winner.textContent = "Вы победили";
          playerScoreCount.textContent = playerScore += 1;
        } else if (
          playerChoise == paper &&
          optionsArr[computerChoise] == rock
        ) {
          winner.textContent = "Вы победили";
          playerScoreCount.textContent = playerScore += 1;
        } else if (
          playerChoise == rock &&
          optionsArr[computerChoise] == paper
        ) {
          winner.textContent = "Вы проиграли";
          computerScoreCount.textContent = computerScore += 1;
        } else if (
          playerChoise == paper &&
          optionsArr[computerChoise] == scissors
        ) {
          winner.textContent = "Вы проиграли";
          computerScoreCount.textContent = computerScore += 1;
        } else if (
          playerChoise == scissors &&
          optionsArr[computerChoise] == rock
        ) {
          winner.textContent = "Вы проиграли";
          computerScoreCount.textContent = computerScore += 1;
        }
        computerChoise = Math.floor(Math.random() * optionsArr.length);
        playerHand.classList.remove("player-hand-shake");
        computerHand.classList.remove("computer-hand-shake");
        if(computerScore > 2) {
          winner.textContent = "Компьютер победил";
          gameButton.setAttribute('disabled')
        } else if(playerScore > 2) {
          winner.textContent = "Человек победил";
          gameButton.setAttribute('disabled')
        }
      }
      playerHand.src = `./assets/Камень.png`;
      computerHand.src = `./assets/Камень.png`;
    });
  }
  battle(rock);
  battle(paper);
  battle(scissors);
}
game();
