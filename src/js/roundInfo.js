// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let atchecks = document.querySelectorAll('[name="attack"]');
let defchecks = document.querySelectorAll('[name="defense"]');
let nickname = document.querySelector('.nick_name');
let botname = document.querySelector('.bot_name');

nickname.textContent = globalObj.user.name;
botname.textContent = globalObj.computer.name;

function fightFunc(e) {
  e.preventDefault();

  new RandomPart();
  const fight = new FightLogic();
  const fightAnimation = new FightAnimation();

  
  fight.userAttackPart();
  fight.userDefencePart();

  fightAnimation.runUser();
  fightAnimation.runComputer();

  setTimeout(() => {
    fightAnimation.attackUser();
    fightAnimation.attackComputer();
  }, 1280);

  setTimeout(() => {
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

  fight.healthUserLogic();
  fight.healthComputerLogic();

  setTimeout(() => {
    globalObj.lifeUser >= 0 
    ? heroLifeBar.changeHP(globalObj.lifeUser)
    : heroLifeBar.changeHP(0);

    globalObj.lifeComputer >= 0
    ? enemyLifeBar.changeHP(globalObj.lifeComputer)
    : enemyLifeBar.changeHP(0);
  }, 1300);

  ADForm.reset();
}

ADForm.addEventListener('submit', fightFunc);
// punchBut.addEventListener('click', resetTimerBut);
//call resetTimer() when animation is ended