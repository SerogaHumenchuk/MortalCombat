// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack, defense, output;
let atchecks = document.querySelectorAll('[name="attack"]');
let defchecks = document.querySelectorAll('[name="defense"]');
let checkerr = false;

function fightFunc(e) {
  e.preventDefault();
  let attack = document.querySelector('[name="attack"]:checked');
  let defense = document.querySelector('[name="defense"]:checked');
  if (attack == null || defense == null) {
    output = 'MAKE A CHOISE';
  } else {
    output = `You hit ${globalObj.computer.name} in ${attack} and protect your ${defense}`;
  }

  new RandomPart();
  const fight = new FightLogic();
  const fightAnimation = new FightAnimation();

  fightAnimation.runUser();
  fightAnimation.runComputer();

  const timerAttack = setTimeout( () => {
    fightAnimation.attackUser();
    fightAnimation.attackComputer();
  }, 1280);

  const timerRunBack = setTimeout( () => {
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

  setTimeout ( () => {
    heroLifeBar.changeHP( globalObj.lifeUser );
    enemyLifeBar.changeHP( globalObj.lifeComputer );
  }, 1300 );

  console.log(output);  
  ADForm.reset();
};
ADForm.addEventListener('submit', fightFunc);
// punchBut.addEventListener('click', resetTimerBut);
