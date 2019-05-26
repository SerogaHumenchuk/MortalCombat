// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack, defense, output;
let atchecks = document.querySelectorAll('[name="attack"]');
let defchecks = document.querySelectorAll('[name="defense"]');

function fightFunc(e) {
  e.preventDefault();
  let attack = document.querySelector('[name="attack"]:checked');
  let defense = document.querySelector('[name="defense"]:checked');
  if (attack == null || defense == null) {
    output = 'MAKE A CHOISE';
  } else {
    output = `You hit ${globalObj.computer.name} in ${attack.value} and protect your ${defense.value}`;
    resetTimer();
  }
  attack = null;
  defense = null;
  new RandomPart();
  new FightLogic();

  console.log(output);
  let i = 0;
     const byLatId = setInterval(function () {
      if (i < output.length) {
        document.querySelector('.output').append(output[i]);
        i++;
        console.log(i);
      }
    }, 40)
    clearInterval(byLatId);
  }
  ADForm.reset();
ADForm.addEventListener('submit', fightFunc);

function gifFunc(){
  
}
// punchBut.addEventListener('click', resetTimerBut);
//call resetTimer() when animation is ended
