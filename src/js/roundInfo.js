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
  const fightAnim = new FightAnimation();
  fightAnim.runUser();
  fightAnim.runComputer();
  fightAnim.attackUser();
  fightAnim.attackComputer();
  // fightAnim.runBack();

  fight.healthUserLogic();
  fight.healthComputerLogic();


  heroLifeBar.changeHP( globalObj.lifeUser );
  enemyLifeBar.changeHP( globalObj.lifeComputer );

  console.log(output);
  let i = 0;
  if (!checkerr) {
     const byLatId = setInterval(function () {
      if (i < output.length) {
        document.querySelector('.output').append(output[i]);
        i++;
      }
    }, 40)
    checker = true;
    clearInterval(byLatId);
  }
  ADForm.reset();
};
ADForm.addEventListener('submit', fightFunc);
// punchBut.addEventListener('click', resetTimerBut);
