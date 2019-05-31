// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack, defense;
let nickname = document.querySelector('.nick_name');
let botname = document.querySelector('.bot_name');

nickname.textContent = globalObj.user.name;

function fightFunc(e) {
  e.preventDefault();

  let attack = document.querySelector('input[name="attack"]:checked');
  let defense = document.querySelector('input[name="defense"]:checked');

  if (attack !== null && defense !== null) {
    new RandomPart();
    const fight = new FightLogic();
    const fightAnimation = new FightAnimation();

    setTimeout(function () {
      resetTimer();
    }, 3000)

    fightAnimation.runUser();
    fightAnimation.runComputer();

    const timerAttack = setTimeout(() => {
      fightAnimation.attackUser();
      fightAnimation.attackComputer();
    }, 1280);

    const timerRunBack = setTimeout(() => {
      if (globalObj.lifeUser <= 0) {
        fightAnimation.dieUser();
      } else {
        fightAnimation.runBackUser();
      }

      if (globalObj.lifeComputer <= 0) {
        fightAnimation.dieComputer();
      } else {
        fightAnimation.runBackComputer();
      }
    }, 1840);
    // fightAnim.runBack();

    fight.healthUserLogic();
    fight.healthComputerLogic();

    setTimeout(() => {
      globalObj.lifeUser >= 0 ?
        heroLifeBar.changeHP(globalObj.lifeUser) :
        heroLifeBar.changeHP(0);

      globalObj.lifeComputer >= 0 ?
        enemyLifeBar.changeHP(globalObj.lifeComputer) :
        enemyLifeBar.changeHP(0);
    }, 1300);

    resetTimer();

    ADForm.reset();
  } else {
    document.querySelector('.makeACh').textContent = 'MAKE A CHOISE!!!'
  }
}

let nullChecker = setInterval(function () {
  if (timeLeft === 0) {
    resetTimer();
    document.querySelector('.makeACh').textContent = 'MAKE A CHOISE!!!'
    resetTimer();
  }
}, 1000)

ADForm.addEventListener('submit', fightFunc);
// punchBut.addEventListener('click', resetTimerBut);
//call resetTimer() when animation is ended