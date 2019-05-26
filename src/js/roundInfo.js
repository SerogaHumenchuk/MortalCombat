// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack, defense, output;
let atchecks = document.querySelectorAll('[name="attack"]');
let defchecks = document.querySelectorAll('[name="defense"]');

function fightFunc(e) {
  e.preventDefault();

  atchecks.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.remove('chIcon');
      input.nextElementSibling.classList.add('atIcon');
    }
  });

  defchecks.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.remove('chIcon');
      input.nextElementSibling.classList.add('atIcon');
    }
  });

  let attack = document.querySelector('[name="attack"]:checked').value;
  let defense = document.querySelector('[name="defense"]:checked').value;

  globalObj.user.attackPart = attack;
  globalObj.user.defencePart = defense;

  if (attack === null || defense === null) {
    output = 'MAKE A CHOISE';
    console.log(output);
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

  ADForm.reset();
}
ADForm.addEventListener('click', () => {

  atchecks.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.add('chIcon');
      input.nextElementSibling.classList.remove('atIcon');
    } else {
      input.nextElementSibling.classList.remove('chIcon');
      input.nextElementSibling.classList.add('atIcon');
    }
  });

  defchecks.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.add('chIcon');
      input.nextElementSibling.classList.remove('atIcon');
    } else {
      input.nextElementSibling.classList.remove('chIcon');
      input.nextElementSibling.classList.add('atIcon');
    }
  });
});

ADForm.addEventListener('submit', fightFunc);
punchBut.addEventListener('click', resetTimerBut);
