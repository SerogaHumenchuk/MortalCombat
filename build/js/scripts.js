

class UserName {
  constructor() {
    this.name = document.querySelector('.name'), this.form = document.querySelector('.form'), this.listener();
  }

  setUserName() {
    globalObj.user.name = this.name.value.toString();
    console.log(globalObj);
  }

  listener() {
    const $this = this;
    this.form.addEventListener('submit', this.setUserName.bind($this));
  }

}

class ChangePageToSecondPage {
  constructor() {
    this.firstPageWrapp = document.querySelector('.firstPageWrapp'), this.secondPageWrapp = document.querySelector('.secondPageWrapp'), this.form = document.querySelector('.form'), this.listener();
  }

  change(e) {
    e.preventDefault();
    this.firstPageWrapp.classList.add('hide');
    this.secondPageWrapp.classList.remove('hide');
  }

  listener() {
    const $this = this;
    this.form.addEventListener('submit', this.change.bind($this));
  }

}

class StartMusic {
  constructor() {
    this.listener();
  }

  music() {
    playClickFighterPlay();
  }

  listener() {
    const $this = this;
    window.addEventListener('DOMContentLoaded', this.music.bind($this));
  }

}

new StartMusic();
new UserName();
new ChangePageToSecondPage();
let globalObj = {
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
    damage: null
  },
  computer: {
    obj: null,
    name: null,
    attack: null,
    defence: null,
    damage: null
  }
};
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

function playClickFighterKlickMouse() {
  const audio = document.getElementById('clickmouse');
  audio.play();
}
// функция вывода информации о раунде
const heroes = [{
  "name": "redskull",
  "attack": 15,
  "defence": 8,
  "url": "./images/hero/redskull/user-redscull",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_hit.gif",
  "dieURL": "_die.gif"
}, {
  "name": "colossus",
  "attack": 15,
  "defence": 8,
  "url": "./images/hero/colossus/user-colossus",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_hit.gif",
  "dieURL": "_die.gif"
}, {
  "name": "mystique",
  "attack": 15,
  "defence": 8,
  "url": "./images/hero/mystique/user-mystique",
  "runURL": "_run.gif",
  "attackURL": "_attack.gif",
  "blockURL": "_block.gif",
  "hitURL": "_hit.gif",
  "dieURL": "_die.gif"
}, {
  "name": "starlord",
  "attack": 15,
  "defence": 8,
  "url": "./images/hero/starlord/user-starlord",
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
      img.setAttribute('src', `${hero.url}${hero.runURL}`);
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
    this.btn = btn, this.events();
  }

  checkAction(e) {
    e.preventDefault();
    this.getHero();
    this.getField();
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

  change(e) {
    e.preventDefault();
    this.secondWrapper.classList.add('hide');
    this.thirdWrapper.classList.remove('hide');
    console.log('object');
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

//default action when time is over and user wasn't make a choose
class DefaultAction {
  constructor(xp, attack) {
    this.computerAttack = attack, this.userXP = xp, this.damage();
  }

  damage() {
    return this.userXP = this.userXP - this.computerAttack;
  }

} //user makes damage to computer


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
