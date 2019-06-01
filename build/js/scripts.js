const globalObj = {
  lifeUser: 100,
  lifeComputer: 100,
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
const botname = document.querySelector('.bot_name');
const nickname = document.querySelector('.nick_name');

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

class FightAnimation {
  constructor() {
    this.userHero = document.querySelector('img.user-hero'), this.computerHero = document.querySelector('img.computer-hero');
  }

  dieUser() {
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.dieURL}`);
    setTimeout(() => {
      this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.deadURL}`);
    }, 280);
  }

  dieComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.dieURL}`);
    setTimeout(() => {
      this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.deadURL}`);
    }, 280);
  }

  runUser() {
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.runURL}`);
    this.userHero.style.transform = 'translateX(200%)';
  }

  runComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.runURL}`);
    this.computerHero.style.transform = 'scaleX(-1) translateX(200%)';
  }

  attackUser() {
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.attackURL}`);
    playClickKick();
  }

  attackComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.attackURL}`);
  }

  runBackUser() {
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.run_backURL}`);
    this.userHero.style.transform = 'translateX(0%)';
    setTimeout(() => {
      this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.standURL}`);
    }, 1000);
  }

  runBackComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.run_backURL}`);
    this.computerHero.style.transform = 'scaleX(-1) translateX(0%)';
    setTimeout(() => {
      this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.standURL}`);
    }, 1000);
  }

}
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
    botname.textContent = globalObj.computer.name;
  }

}
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

    if (/^[А-Яа-яA-Za-z0-9_ -]{3,16}$/.test(name.value)) {
      globalObj.user.name = name.value;
      nickname.textContent = name.value;
      changeFirstPageToSecondPage();
      stopClickFighterPlay();
      playClickFighterSelection();
    } else {
      alert('Invalid username');
    }
  };

  firstPageForm.addEventListener('submit', onSubmit);
  const fullscreen = document.querySelector('.fullscreen');
  const fullscreenSvg = document.querySelector('.fullscreen__svg');

  open = elem => {
    if (document.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (document.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (document.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  close = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  fullscreen.addEventListener('click', () => {
    fullscreen.classList.toggle('clicked');

    if (fullscreen.classList.contains('clicked')) {
      open(document.documentElement);
      fullscreenSvg.setAttribute('src', './images/fullscreen-decrease.svg');
    } else {
      close();
      fullscreenSvg.setAttribute('src', './images/fullscreen-increase.svg');
    }
  });
})();

class StartMusic {
  constructor() {
    this.btnStart = document.querySelector('.start'), this.listener();
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
function resetGif() {
  setTimeout(function () {
    document.querySelector('.thirdPageWrapp').classList.remove('hide');
    document.querySelector('.gifPage').classList.add('hide');
    playClickFightSound();
    setTimeout(() => {
      playClickFight();
    }, 1500);
    resetTimer();
  }, 3000);
}

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

  changeHP(life) {
    this.lifeAmount = life;
    this.changeColor();
    this.changeWidth();
  }

}

const heroLifeBar = new Livesbar(MyLives, 100);
const enemyLifeBar = new Livesbar(EnemyLives, 100);

function PageChange() {
  if (heroLifeBar.lifeAmount <= 0 || enemyLifeBar.lifeAmount <= 0) {
    if (enemyLifeBar.lifeAmount <= 0) {
      document.querySelector('.windowResultPage__container').style.backgroundImage = 'url("./images/won.gif")';
    } else if (heroLifeBar.lifeAmount <= 0) {
      document.querySelector('.windowResultPage__container').style.backgroundImage = 'url(./images/lost.gif)';
    }

    document.querySelector('.windowResultPage__container').classList.remove('hide');
    document.querySelector('.fightPage_wrapper').classList.add('hide');
  }
}
function playClickMusic() {
  const audio = document.getElementById('music_start');
  audio.play();
}

function playClickFightSound() {
  const audio = document.getElementById('fight-sound');
  audio.volume = 0.7;
  audio.play();
}

function stopClickFightSound() {
  const audio = document.getElementById('fight-sound');
  audio.pause();
  audio.currentTime = 0;
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

function stopClickFighterSelection() {
  const audio = document.getElementById('fighter-selection');
  audio.pause();
  audio.currentTime = 0;
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
let attack, defense;

function fightFunc(e) {
  e.preventDefault();
  let attack = document.querySelector('input[name="attack"]:checked');
  let defense = document.querySelector('input[name="defense"]:checked');

  function funcIf() {
    if (attack !== null && defense !== null) {
      resetTimer();
      setTimeout(PageChange, 3000);
      document.querySelector('.makeACh').textContent = '';
      setTimeout(function () {
        resetTimer();
      }, 3000);
      const fight = new FightLogic();
      const fightAnimation = new FightAnimation();
      fightAnimation.runUser();
      fightAnimation.runComputer();
      new RandomPart();
      setTimeout(() => {
        fightAnimation.attackUser();
        fightAnimation.attackComputer();
      }, 1280);
      setTimeout(() => {
        globalObj.lifeUser <= 0 ? fightAnimation.dieUser() : fightAnimation.runBackUser();
        globalObj.lifeComputer <= 0 ? fightAnimation.dieComputer() : fightAnimation.runBackComputer();
      }, 1840);
      fight.healthUserLogic();
      fight.healthComputerLogic();
      setTimeout(() => {
        globalObj.lifeUser >= 0 ? heroLifeBar.changeHP(globalObj.lifeUser) : heroLifeBar.changeHP(0);
        globalObj.lifeComputer >= 0 ? enemyLifeBar.changeHP(globalObj.lifeComputer) : enemyLifeBar.changeHP(0);
      }, 1300); // resetTimer();

      ADForm.reset();
    } else {
      document.querySelector('.makeACh').textContent = 'MAKE A CHOISE!!!';
    }
  }

  if (globalObj.lifeUser > 0 && globalObj.lifeComputer > 0) {
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
    document.querySelector('.makeACh').textContent = 'MAKE A CHOISE!!!';
    resetTimer();
  }
}, 1000);
ADForm.addEventListener('submit', fightFunc); // punchBut.addEventListener('click', resetTimerBut);
//call resetTimer() when animation is ended
const heroes = [{
  name: 'redskull',
  attack: 15,
  defence: 8,
  url: './images/hero/redskull/user-redskull',
  standURL: '.gif',
  walkURL: '_walk.gif',
  runURL: '_run.gif',
  run_backURL: '_run-back.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitURL: '_hit.gif',
  dieURL: '_die.gif',
  deadURL: '_dead.png'
}, {
  name: 'colossus',
  attack: 13,
  defence: 10,
  url: './images/hero/colossus/user-colossus',
  standURL: '.gif',
  walkURL: '_walk.gif',
  runURL: '_run.gif',
  run_backURL: '_run-back.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitURL: '_hit.gif',
  dieURL: '_die.gif',
  deadURL: '_dead.png'
}, {
  name: 'mystique',
  attack: 10,
  defence: 13,
  url: './images/hero/mystique/user-mystique',
  standURL: '.gif',
  walkURL: '_walk.gif',
  runURL: '_run.gif',
  run_backURL: '_run-back.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitURL: '_hit.gif',
  dieURL: '_die.gif',
  deadURL: '_dead.png'
}, {
  name: 'starlord',
  attack: 9,
  defence: 14,
  url: './images/hero/starlord/user-starlord',
  standURL: '.gif',
  walkURL: '_walk.gif',
  runURL: '_run.gif',
  run_backURL: '_run-back.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitURL: '_block.gif',
  dieURL: '_die.gif',
  deadURL: '_dead.png'
}];
const fields = [{
  name: 'boat',
  url: './images/arena/boat.gif'
}, {
  name: 'light',
  url: './images/arena/light.gif'
}, {
  name: 'main',
  url: './images/arena/main.gif'
}, {
  name: 'train',
  url: './images/arena/train.gif'
}, {
  name: 'waterfall',
  url: './images/arena/waterfall.gif'
}, {
  name: 'wind',
  url: './images/arena/wind.gif'
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
    this.block = document.querySelector('.fightPage__container'), this.btn = btn, this.hero_name = document.querySelector('.hero__name');
    this.hero_url = document.querySelector('.hero__img');
    this.hero_attack = document.querySelector('.hero__attack');
    this.hero_Defence = document.querySelector('.hero__defence');
    this.events();
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
        nickname.textContent = globalObj.user.name;
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
    this.hero_name.textContent = 'Random hero';
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
    this.secondWrapper = document.querySelector('.secondPageWrapp'), this.thirdWrapper = document.querySelector('.thirdPageWrapp'), this.btn = document.querySelector('.secondPage__submit'), this.gifPage = document.querySelector('.gifPage'), this.listener();
  }

  change() {
    if (document.querySelector('input[name="hero-radio"]:checked') !== null && document.querySelector('input[name="field-radio"]:checked')) {
      this.secondWrapper.classList.add('hide');
      this.gifPage.classList.remove('hide');
      stopClickFighterSelection();
    } else {
      alert('Choose your fighter and field!');
    }
  }

  listener() {
    const $this = this;
    this.btn.addEventListener('click', this.change.bind($this));
    this.btn.addEventListener('click', resetGif);
    this.btn.addEventListener('click', resetGif);
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
      changeColorByClick();
      changeColorFieldsByClick();
    }
  }

  listeners() {
    const $this = this;
    this.fighterSection.addEventListener('click', this.click.bind($this));
    this.fieldSection.addEventListener('click', this.click.bind($this));
  }

}

class ReturnInfoCard {
  constructor() {
    this.labelsWrapper = document.querySelector('.fighters-section'), this.hero_name = document.querySelector('.hero__name'), this.hero_url = document.querySelector('.hero__img'), this.hero_attack = document.querySelector('.hero__attack'), this.hero_Defence = document.querySelector('.hero__defence'), this.obj = null;
    this.listeners();
  }

  listeners() {
    const $this = this;
    this.labelsWrapper.addEventListener('click', this.returnObj.bind($this));
  }

  returnObj(e) {
    if (e.target.nodeName === 'IMG' && e.target.classList.contains('random-img')) {
      this.showRandom();
    } else if (e.target.nodeName === 'INPUT' && e.target.nextSibling.classList.contains('random-img')) {
      this.showRandom();
    } else if (e.target.nodeName === 'IMG') {
      let imgAlt = e.target.getAttribute('alt');
      const obj = heroes.find(hero => hero.name === imgAlt);
      this.obj = obj;
      this.show();
    } else if (e.target.nodeName === 'INPUT') {
      let imgAlt = e.target.nextSibling.getAttribute('alt');
      const obj = heroes.find(hero => hero.name === imgAlt);
      this.obj = obj;
      this.show();
    }
  }

  showRandom() {
    this.hero_name.textContent = 'RANDOM HERO';
    this.hero_url.setAttribute('src', '');
    this.hero_attack.textContent = '';
    this.hero_Defence.textContent = '';
  }

  show() {
    if (this.obj) {
      this.hero_name.textContent = this.obj.name;
      this.hero_url.setAttribute('src', `${this.obj.url}_run.gif`);
      this.hero_attack.textContent = 'Attack: ' + this.obj.attack;
      this.hero_Defence.textContent = 'Defence: ' + this.obj.defence;
    }
  }

} // class Hover {
//   constructor () {
//     this.chosenInput = document.querySelector('input[name="hero-radio"]:checked');
//   }
//   hover () {
//     this.
//   }
// }


new BuildHeroes(heroes);
new BuildFields(fields);
new BuildRandomBtn(document.querySelector('.fighters-section'), 'hero');
new BuildRandomBtn(document.querySelector('.fields-section'), 'field');
new SubmitAction(document.querySelector('.secondPage__submit'));
new ClickSound();
new ChangePageToFightPage();
new ReturnInfoCard(); // переробити ці 2 функції в одну

function changeColorByClick() {
  const allFighters = Array.from(document.querySelectorAll('.fighter'));
  allFighters.map(el => {
    if (el.firstElementChild == document.querySelector('input[name="hero-radio"]:checked')) {
      el.style.border = '5px solid green';
    } else {
      el.style.border = '5px solid red';
    }
  });
}

changeColorByClick();

function changeColorFieldsByClick() {
  const allFields = Array.from(document.querySelectorAll('.field'));
  allFields.map(el => {
    if (el.firstElementChild == document.querySelector('input[name="field-radio"]:checked')) {
      el.style.border = '5px solid green';
    } else {
      el.style.border = '5px solid red';
    }
  });
}

changeColorFieldsByClick();
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
class RandomPart {
  constructor() {
    this.parts = ['head', 'body', 'legs'], this.random();
  }

  random() {
    const randomAttack = Math.floor(Math.random() * this.parts.length);
    const randomDefence = Math.floor(Math.random() * this.parts.length);
    globalObj.computer.attackPart = this.parts[randomAttack];
    globalObj.computer.defencePart = this.parts[randomDefence];
  }

}

class FightLogic {
  constructor() {
    this.attackRadio = document.querySelector('input[name="attack"]:checked'), this.defenceRadio = document.querySelector('input[name="defense"]:checked');
  }

  userAttackPart() {
    globalObj.user.attackPart = this.attackRadio.getAttribute('value');
  }

  userDefencePart() {
    globalObj.user.defencePart = this.defenceRadio.getAttribute('value');
  }

  healthUserLogic() {
    this.userAttackPart();
    this.userDefencePart();

    if (globalObj.user.defencePart !== globalObj.computer.attackPart) {
      globalObj.lifeUser -= globalObj.computer.attack;
    } else if (globalObj.user.defencePart === globalObj.computer.attackPart) {
      const damage = globalObj.user.defence - globalObj.computer.attack;
      if (damage > 0) globalObj.lifeUser -= damage;
    }
  }

  healthComputerLogic() {
    if (globalObj.computer.defencePart !== globalObj.user.attackPart) {
      globalObj.lifeComputer -= globalObj.user.attack;
    } else if (globalObj.user.defencePart === globalObj.computer.attackPart) {
      const damage = globalObj.computer.defence - globalObj.user.attack;
      if (damage > 0) globalObj.lifeComputer -= damage;
    }
  }

}
const restartB = document.querySelector('.toFirst');
restartB.addEventListener('click', function () {
  location.reload();
});