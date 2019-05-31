// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack, defense;


function fightFunc(e) {
  e.preventDefault();

  let attack = document.querySelector('input[name="attack"]:checked');
  let defense = document.querySelector('input[name="defense"]:checked');

  function funcIf() {
    if (attack !== null && defense !== null) {
      
      const fight = new FightLogic();
      const fightAnimation = new FightAnimation();
      
      fightAnimation.runUser();
      fightAnimation.runComputer();
      new RandomPart();

      setTimeout(() => {
        fightAnimation.attackUser();
        fightAnimation.attackComputer();
      }, 1280);

      setTimeout( () => {
        globalObj.lifeUser <= 0 
        ? fightAnimation.dieUser()
        : fightAnimation.runBackUser();

        globalObj.lifeComputer <= 0 
        ? fightAnimation.dieComputer()
        : fightAnimation.runBackComputer();

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

      // resetTimer();
      ADForm.reset();

    } else {
      document.querySelector('.makeACh').textContent = 'MAKE A CHOISE!!!';
    }
  }

  if ( globalObj.lifeUser > 0 && globalObj.lifeComputer > 0 ) {
    funcIf();
  } else if (globalObj.lifeUser > 0 && globalObj.lifeComputer <= 0) {
    alert('You\'re a winner!');
  } else if (globalObj.lifeComputer > 0 && globalObj.lifeUser <= 0) {
    alert('You\'re a looser!');
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
