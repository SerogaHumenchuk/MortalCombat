const globalObj = {
  lifeUser: 100,
  lifeComputer: 100,
  round: 1,
  intervalTimer: null,
  arena: null,
  user: {
    obj: null,
    name: null,
    attack: null,
    defence: null,
    attackPart: null,
    defencePart: null
  },
  computer: {
    obj: null,
    name: null,
    attack: null,
    defence: null,
    attackPart: null,
    defencePart: null
  }
};

class DefaultStart {
  constructor() {
    this.wrapper = document.querySelector('.fightPage__container'), this.userHero = globalObj.user.obj, this.computerHero = globalObj.computer.obj, this.startPositionUser(), this.startPositionComputer();
  }

  startPositionUser() {
    const img = document.createElement('img');
    img.classList.add('user-hero');
    img.setAttribute('src', `${this.userHero.url}${this.userHero.standURL}`);
    this.wrapper.append(img);
  }

  startPositionComputer() {
    const img = document.createElement('img');
    img.classList.add('computer-hero');
    img.setAttribute('src', `${this.computerHero.url}${this.computerHero.standURL}`);
    this.wrapper.append(img);
  }

}

;
class ComputerRandomHero {
  constructor() {
    this.heroes = heroes, this.random();
  }

  random() {
    const num = Math.floor(Math.random() * this.heroes.length);
    globalObj.computer.obj = heroes[num];
    globalObj.computer.name = heroes[num].name;
    globalObj.computer.attack = heroes[num].attack;
    globalObj.computer.defence = heroes[num].defence;
  }

}
;

(() => {
  let name = document.querySelector('.name');
  let firstPageForm = document.querySelector('.firstPage__form');
  let firstPageWrapp = document.querySelector('.firstPageWrapp');
  let secondPageWrapp = document.querySelector('.secondPageWrapp');

  const changeFirstPageToSecondPage = function () {
    firstPageWrapp.classList.add('hide');
    secondPageWrapp.classList.remove('hide');
  };

  const onSubmit = function (e) {
    e.preventDefault();

    if (/^[A-Za-z0-9_-]{3,16}$/.test(name.value)) {
      globalObj.user.name = name.value;
      changeFirstPageToSecondPage();
      stopClickFighterPlay();
      playClickFighterSelection();
    } else {
      alert('Invalid username');
    }
  };

  firstPageForm.addEventListener('submit', onSubmit);
})();

class StartMusic {
  constructor() {
    this.secondPageWrapp = document.querySelector('.secondPageWrapp').classList.contains('hide'), this.btnStart = document.querySelector('.start'), this.listener();
  }

  musicFirstPage() {
    playClickFighterPlay();
  }

  listener() {
    const $this = this;
    window.addEventListener('DOMContentLoaded', this.musicFirstPage.bind($this));
  }

}

new StartMusic();

const MyLives = document.querySelector('.My__Lives');
const EnemyLives = document.querySelector('.Enemy__Lives');
const myLivesContainer = document.querySelector('.MyHealthy__Bar');
const EnemyLivesContainer = document.querySelector('.EnemyHealthy__Bar');

class Livesbar {
  constructor(container, lifeAmount) {
    this.container = container, this.lifeAmount = lifeAmount;
  }

  changeColor() {
    if (this.lifeAmount >= 70 && this.lifeAmount <= 100) {
      this.container.style.backgroundColor = 'green';
    } else if (this.lifeAmount >= 30 && this.lifeAmount < 70) {
      this.container.style.backgroundColor = 'orange';
    } else if (this.lifeAmount < 30) {
      this.container.style.backgroundColor = 'red';
    }
  }

  changeWidth() {
    this.container.style.width = `${+this.lifeAmount}%`;
  }

  changeHP(damage) {
    this.lifeAmount -= damage;
    this.changeColor();
    this.changeWidth();
  }

}

const heroLifeBar = new Livesbar(MyLives, 100);
const enemyLifeBar = new Livesbar(EnemyLives, 100);
heroLifeBar.changeHP(20);
enemyLifeBar.changeHP(80);
function playClickMusic() {
  const audio = document.getElementById('music_start');
  audio.play();
}

function playClickFightSound() {
  const audio = document.getElementById('fight-sound');
  audio.play();
}

function playClickWinner() {
  const audio = document.getElementById('winner');
  audio.play();
}

function playClickLooser() {
  const audio = document.getElementById('looser');
  audio.play();
}

function playClickKick() {
  const audio = document.getElementById('kick');
  audio.play();
}

function playClickDraw() {
  const audio = document.getElementById('draw');
  audio.play();
}

function playClickFight() {
  const audio = document.getElementById('fight');
  audio.play();
}

function playClickPlayerWon() {
  const audio = document.getElementById('player-won');
  audio.play();
}

function playClickScreenSaver() {
  const audio = document.getElementById('screen-saver');
  audio.play();
}

function playClickFighterSelection() {
  const audio = document.getElementById('fighter-selection');
  audio.play();
}

function playClickFighterPlay() {
  const audio = document.getElementById('play');
  audio.play();
}

function stopClickFighterPlay() {
  const audio = document.getElementById('play');
  audio.pause();
  audio.currentTime = 0;
}

function playClickFighterClickMouse() {
  const audio = document.getElementById('clickmouse');
  audio.play();
}
// функция вывода информации о раунде
const ADForm = document.querySelector('.attack-defense');
const punchBut = document.querySelector('.punch-button');
let attack;
let defense;
let output;
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

  if (attack === null || defense === null) {
    output = 'MAKE A CHOISE';
    console.log(output);
  } else {
    output = `The varname hit Bot in ${attack} and protect ${defense}`;
  }

  console.log(output);
  ADForm.reset();
}

;
ADForm.addEventListener('click', () => {
  // let checkat = document.querySelector('[name="attack"]:checked');
  // checkat.nextElementSibling.classList.add('chIcon');
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
const heroes = [{
  "name": "redskull",
  "attack": 15,
  "defence": 8,
  "url": "./images/hero/redskull/user-redskull",
  "standURL": ".gif",
  "walkURL": "_walk.gif",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_hit.gif",
  "dieURL": "_die.gif"
}, {
  "name": "colossus",
  "attack": 13,
  "defence": 10,
  "url": "./images/hero/colossus/user-colossus",
  "standURL": ".gif",
  "walkURL": "_walk.gif",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_hit.gif",
  "dieURL": "_die.gif"
}, {
  "name": "mystique",
  "attack": 10,
  "defence": 13,
  "url": "./images/hero/mystique/user-mystique",
  "standURL": ".gif",
  "walkURL": "_walk.gif",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_hit.gif",
  "dieURL": "_die.gif"
}, {
  "name": "starlord",
  "attack": 9,
  "defence": 14,
  "url": "./images/hero/starlord/user-starlord",
  "standURL": ".gif",
  "walkURL": "_walk.gif",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_block.gif",
  "dieURL": "_die.gif"
}];
const fields = [{
  "name": "boat",
  "url": "./images/arena/boat.gif"
}, {
  "name": "light",
  "url": "./images/arena/light.gif"
}, {
  "name": "main",
  "url": "./images/arena/main.gif"
}, {
  "name": "train",
  "url": "./images/arena/train.gif"
}, {
  "name": "waterfall",
  "url": "./images/arena/waterfall.gif"
}, {
  "name": "wind",
  "url": "./images/arena/wind.gif"
}];

class BuildHeroes {
  constructor(heroes) {
    this.wrapper = document.querySelector('.fighters-section'), this.heroes = heroes, this.build();
  }

  build() {
    this.heroes.map(hero => {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      const img = document.createElement('img');
      label.classList.add('fighter');
      label.classList.add(`fighter__${hero.name}`);
      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', 'hero-radio');
      img.classList.add('hero');
      img.setAttribute('src', `${hero.url}${hero.walkURL}`);
      img.setAttribute('alt', hero.name);
      label.append(radio, img);
      this.wrapper.appendChild(label);
    });
  }

}

class BuildFields {
  constructor(fields) {
    this.wrapper = document.querySelector('.fields-section'), this.fields = fields, this.build();
  }

  build() {
    this.fields.map(field => {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      label.classList.add('field');
      label.classList.add(`field__${field.name}`);
      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', 'field-radio');
      label.append(radio);
      this.wrapper.appendChild(label);
    });
  }

}

class BuildRandomBtn {
  constructor(wrapper, radioName) {
    this.wrapper = wrapper, this.name = radioName, this.buildBtn();
  }

  buildBtn() {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    const img = document.createElement('img');
    label.classList.add('random-btn');
    img.classList.add('random-img');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', `${this.name}-radio`);
    img.setAttribute('src', './images/dice.png');
    label.append(radio, img);
    this.wrapper.appendChild(label);
  }

}

class SubmitAction {
  constructor(btn) {
    this.block = document.querySelector('.fightPage__container'), this.btn = btn, this.events();
  }

  checkAction(e) {
    e.preventDefault();
    this.getHero();
    this.getField();
    this.changeBackground();
    new ComputerRandomHero();
    new DefaultStart();
  }

  changeBackground() {
    this.block.style.backgroundImage = `url(${globalObj.arena})`;
  }

  getHero() {
    const radioHero = document.querySelector('input[name="hero-radio"]:checked');

    if (radioHero !== null) {
      const img = radioHero.nextSibling;
      const imgSrc = img.getAttribute('src');
      const imgName = img.getAttribute('alt');

      if (imgSrc !== './images/dice.png') {
        globalObj.user.obj = heroes.find(hero => hero.name == imgName);
        globalObj.user.attack = globalObj.user.obj.attack;
        globalObj.user.defence = globalObj.user.obj.defence;
        console.log(globalObj);
      } else {
        this.randomHero();
      }
    }
  }

  getField() {
    const radioField = document.querySelector('input[name="field-radio"]:checked');

    if (radioField !== null) {
      const img = radioField.nextSibling;

      if (img === null) {
        const fieldName = radioField.parentElement.className.slice(13);
        globalObj.arena = `./images/arena/${fieldName}.gif`;
      } else {
        this.randomField();
      }
    }
  }

  randomHero() {
    const num = Math.floor(Math.random() * heroes.length);
    globalObj.user.obj = heroes[num];
    globalObj.user.attack = heroes[num].attack;
    globalObj.user.defence = heroes[num].defence;
  }

  randomField() {
    const num = Math.floor(Math.random() * fields.length);
    globalObj.arena = fields[num].url;
  }

  events() {
    const $this = this;
    this.btn.addEventListener('click', this.checkAction.bind($this));
  }

}

class ChangePageToFightPage {
  constructor() {
    this.secondWrapper = document.querySelector('.secondPageWrapp'), this.thirdWrapper = document.querySelector('.thirdPageWrapp'), this.btn = document.querySelector('.secondPage__submit'), this.listener();
  }

  change() {
    if (document.querySelector('input[name="hero-radio"]:checked') !== null && document.querySelector('input[name="field-radio"]:checked')) {
      this.secondWrapper.classList.add('hide');
      this.thirdWrapper.classList.remove('hide');
    } else {
      alert('Choose your fighter and field!');
    }
  }

  listener() {
    const $this = this;
    this.btn.addEventListener('click', this.change.bind($this));
  }

}

class ClickSound {
  constructor() {
    this.fighterSection = document.querySelector('.fighters-section'), this.fieldSection = document.querySelector('.fields-section'), this.listeners();
  }

  click(e) {
    if (e.target.nodeName === 'INPUT' || e.target.nodeName === 'LABEL') {
      const audio = document.getElementById('clickmouse');
      audio.play();
    }
  }

  listeners() {
    const $this = this;
    this.fighterSection.addEventListener('click', this.click.bind($this));
    this.fieldSection.addEventListener('click', this.click.bind($this));
  }

}

new BuildHeroes(heroes);
new BuildFields(fields);
new BuildRandomBtn(document.querySelector('.fighters-section'), 'hero');
new BuildRandomBtn(document.querySelector('.fields-section'), 'field');
new SubmitAction(document.querySelector('.secondPage__submit'));
new ClickSound();
new ChangePageToFightPage();
// (function(){
let progressBar = document.querySelector('.e-c-progress'); // let indicator = document.getElementById('e-indicator');

let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;
progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
  const offset = -length - length * value / timePercent;
  progressBar.style.strokeDashoffset = -offset;
  pointer.style.transform = `rotate(-${360 * value / timePercent}deg)`;
} //circle ends


let displayOutput = document.querySelector('.display-remain-time');
const setterBtns = document.querySelectorAll('button[data-setter]');
let intervalTimer;
let timeLeft;
let wholeTime = 10; // manage this to set the whole time

let isPaused = false;
let isStarted = false;
update(wholeTime, wholeTime); //refreshes progress bar

displayTimeLeft(wholeTime);

function changeWholeTime(seconds) {
  if (wholeTime + seconds > 0) {
    wholeTime += seconds;
    update(wholeTime, wholeTime);
  }
}

function timer(seconds) {
  //counts time, takes seconds
  let remainTime = Date.now() + seconds * 1000;
  displayTimeLeft(seconds);
  intervalTimer = setInterval(function () {
    timeLeft = Math.round((remainTime - Date.now()) / 1000);

    if (timeLeft < 0) {
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function (btn) {
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      displayTimeLeft(wholeTime);
      return;
    }

    displayTimeLeft(timeLeft);
  }, 1000);
}

function displayTimeLeft(timeLeft) {
  //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

function resetTimer() {
  if (isStarted === false) {
    timeLeft = 10;
    remainTime = 10;
    timer(wholeTime);
    isStarted = true;
    setterBtns.forEach(function (btn) {
      btn.disabled = true;
      btn.style.opacity = 0.5;
    });
  } else if (isPaused) {
    timeLeft = 10;
    remainTime = 10;
    timer(timeLeft);
    isPaused = isPaused ? false : true;
  } else {
    timeLeft = 10;
    remainTime = 10;
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true;
  }
}

function resetTimerBut() {
  if (attack !== null && defense !== null) {
    if (isStarted === false) {
      timeLeft = 10;
      remainTime = 10;
      timer(wholeTime);
      isStarted = true;
      setterBtns.forEach(function (btn) {
        btn.disabled = true;
        btn.style.opacity = 0.5;
      });
    } else if (isPaused) {
      timeLeft = 10;
      remainTime = 10;
      timer(timeLeft);
      isPaused = isPaused ? false : true;
    } else {
      timeLeft = 10;
      remainTime = 10;
      clearInterval(intervalTimer);
      isPaused = isPaused ? false : true;
    }
  }
}
class FightLogic {
  constructor() {
    this.obj = globalObj, this.userAttack = this.obj.user.attack, this.userDefence = this.obj.user.defence, this.userHealth = this.obj.lifeUser, this.userAttackPart = this.obj.user.attackPart, this.userDefencePart = this.obj.user.defencePart, this.computerAttack = this.obj.computer.attack, this.computerDefence = this.obj.computer.defence, this.computerHealth = this.obj.lifeComputer, this.computerAttackPart = this.obj.computer.attackPart, this.computerDefencePart = this.obj.computer.defencePart, this.healthUserLogic();
  }

  healthUserLogic() {
    if (this.userDefencePart !== this.computerAttackPart) {
      this.userHealth -= this.computerAttack;
    } else if (this.userDefencePart === this.computerAttackPart) {
      const damage = this.userDefence - this.computerAttack;

      if (damage > 0) {
        this.userHealth -= damage;
        console.log(this.userHealth);
      }
    }
  }

}

new FightLogic(); //user makes damage to computer

class userHit {
  constructor(xp, attack) {
    this.attack = attack, this.computerXP = xp, this.damage();
  }

  damage() {
    return this.computerXP = this.computerXP - this.attack;
  }

} //return alert when user wasn't make a choose


class ModalMakeChoose {
  constructor() {
    this.message = 'Make a choose!!!', this.alert();
  }

  alert() {
    alert(this.message);
  }

}
