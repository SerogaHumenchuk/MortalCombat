


let globalObj = {
  lifeUser: 100,
  lifeComputer: 100,
  round: 1,
  userName: null,
  intervalTimer: null,
  user: {
    atack: null,
    defence: null,
    damage: null
  },
  computer: {
    atack: null,
    defence: null,
    damage: null
  },
  userHero: null,
  compHero: null,
  arena: null,
  userCharacter: null,
  compCharacter: null
};


// функция вывода информации о раунде
const heroes = [{
  name: 'redskull',
  attack: 15,
  defence: 8,
  url: './images/hero/redskull/user-redscull',
  runURL: '_run.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitRL: '_hit.gif',
  dieURL: '_die.gif'
}, {
  name: 'colossus',
  attack: 15,
  defence: 8,
  url: './images/hero/colossus/user-colossus',
  runURL: '_run.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitRL: '_hit.gif',
  dieURL: '_die.gif'
}, {
  name: 'mystique',
  attack: 15,
  defence: 8,
  url: './images/hero/mystique/user-mystique',
  runURL: '_run.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitRL: '_hit.gif',
  dieURL: '_die.gif'
}, {
  name: 'starlord',
  attack: 15,
  defence: 8,
  url: './images/hero/starlord/user-starlord',
  runURL: '_run.gif',
  attackURL: '_attack.gif',
  blockURL: '_block.gif',
  hitRL: '_block.gif',
  dieURL: '_die.gif'
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
      img.setAttribute('src', `${hero.url}${hero.runURL}`);
      img.setAttribute('alt', `${hero.name} hero`);
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
    // this.heroes = heroesWrp,
    // this.fields = fieldsWrp,
    this.btn = btn, this.events();
  }

  checkAction(e) {
    e.preventDefault();
    this.getImgSrc();
  }

  getImgSrc() {
    const radioHero = document.querySelector('input[name="hero-radio"]:checked');
    console.log(radioHero);

    if (radioHero !== null) {
      const img = radioHero.nextSibling;
      const imgSrc = img.getAttribute('src');
      const imgRandom = img.classList;
      console.log(imgSrc);
    }
  }

  random() {
    console.log('object');
  }

  events() {
    const $this = this;
    this.btn.addEventListener('click', this.checkAction.bind($this));
  }

}

new BuildHeroes(heroes);
new BuildFields(fields);
new BuildRandomBtn(document.querySelector('.fighters-section'), 'hero');
new BuildRandomBtn(document.querySelector('.fields-section'), 'field');
new SubmitAction(document.querySelector('.secondPage__submit'));

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
