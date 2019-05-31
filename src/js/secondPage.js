const heroes = [
  {
    name: 'redskull',
    attack: 15,
    defence: 8,
    url: './images/hero/redskull/user-redskull',
    standURL: '.gif',
    walkURL: '_walk.gif',
    runURL: '_run.gif',
    attackURL: '_attack.gif',
    blockURL: '_block.gif',
    hitURL: '_hit.gif',
    dieURL: '_die.gif',
  },
  {
    name: 'colossus',
    attack: 13,
    defence: 10,
    url: './images/hero/colossus/user-colossus',
    standURL: '.gif',
    walkURL: '_walk.gif',
    runURL: '_run.gif',
    attackURL: '_attack.gif',
    blockURL: '_block.gif',
    hitURL: '_hit.gif',
    dieURL: '_die.gif',
  },
  {
    name: 'mystique',
    attack: 10,
    defence: 13,
    url: './images/hero/mystique/user-mystique',
    standURL: '.gif',
    walkURL: '_walk.gif',
    runURL: '_run.gif',
    attackURL: '_attack.gif',
    blockURL: '_block.gif',
    hitURL: '_hit.gif',
    dieURL: '_die.gif',
  },
  {
    name: 'starlord',
    attack: 9,
    defence: 14,
    url: './images/hero/starlord/user-starlord',
    standURL: '.gif',
    walkURL: '_walk.gif',
    runURL: '_run.gif',
    attackURL: '_attack.gif',
    blockURL: '_block.gif',
    hitURL: '_block.gif',
    dieURL: '_die.gif',
  },
];

const fields = [{
    name: 'boat',
    url: './images/arena/boat.gif',
  },
  {
    name: 'light',
    url: './images/arena/light.gif',
  },
  {
    name: 'main',
    url: './images/arena/main.gif',
  },
  {
    name: 'train',
    url: './images/arena/train.gif',
  },
  {
    name: 'waterfall',
    url: './images/arena/waterfall.gif',
  },
  {
    name: 'wind',
    url: './images/arena/wind.gif',
  },
];

class BuildHeroes {
  constructor(heroes) {
    (this.wrapper = document.querySelector('.fighters-section')),
    (this.heroes = heroes),
    this.build();
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
    (this.wrapper = document.querySelector('.fields-section')),
    (this.fields = fields),
    this.build();
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
    (this.wrapper = wrapper), (this.name = radioName), this.buildBtn();
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
    (this.block = document.querySelector('.fightPage__container')),
    this.btn = btn,
    this.hero_name = document.querySelector('.hero__name');
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
    const radioHero = document.querySelector(
      'input[name="hero-radio"]:checked',
    );

    if (radioHero !== null) {
      const img = radioHero.nextSibling;
      const imgSrc = img.getAttribute('src');
      const imgName = img.getAttribute('alt');

      if (imgSrc !== './images/dice.png') {
        globalObj.user.obj = heroes.find(hero => hero.name == imgName);
        globalObj.user.attack = globalObj.user.obj.attack;
        globalObj.user.defence = globalObj.user.obj.defence;
        console.log(globalObj);
        botname.textContent = globalObj.computer.name;
        // console.log(globalObj[0]);
      } else {
        this.randomHero();
      }
    }
  }

  getField() {
    const radioField = document.querySelector(
      'input[name="field-radio"]:checked',
    );

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
    (this.secondWrapper = document.querySelector('.secondPageWrapp')),
    (this.thirdWrapper = document.querySelector('.thirdPageWrapp')),
    (this.btn = document.querySelector('.secondPage__submit')),
    (this.gifPage = document.querySelector('.gifPage')),
    this.listener();
  }

  change() {
    if (
      document.querySelector('input[name="hero-radio"]:checked') !== null &&
      document.querySelector('input[name="field-radio"]:checked')
    ) {
      this.secondWrapper.classList.add('hide');
      this.gifPage.classList.remove('hide');
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
    (this.fighterSection = document.querySelector('.fighters-section')),
    (this.fieldSection = document.querySelector('.fields-section')),
    this.listeners();
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

class ReturnInfoCard {
  constructor() {
    (this.labelsWrapper = document.querySelector('.fighters-section')),
    (this.hero_name = document.querySelector('.hero__name')),
    (this.hero_url = document.querySelector('.hero__img')),
    (this.hero_attack = document.querySelector('.hero__attack')),
    (this.hero_Defence = document.querySelector('.hero__defence')),
    (this.obj = null);

    this.listeners();
  }

  listeners() {
    const $this = this;
    this.labelsWrapper.addEventListener('click', this.returnObj.bind($this));
  }

  returnObj(e) {
    if ( e.target.nodeName === 'IMG' && e.target.classList.contains('random-img') ) {
      this.showRandom();
    } else if ( e.target.nodeName === 'INPUT' && e.target.nextSibling.classList.contains('random-img') ) {
      this.showRandom();
    } else if (e.target.nodeName === 'IMG') {
      let imgAlt = e.target.getAttribute('alt');
      const obj = heroes.find(hero => hero.name === imgAlt);
      this.obj = obj;
      this.show();

    } else if (e.target.nodeName === 'INPUT' ) {
      let imgAlt = e.target.nextSibling.getAttribute('alt');
      const obj = heroes.find(hero => hero.name === imgAlt);
      this.obj = obj;
      this.show();
    }
  }

  showRandom () {
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
}

new BuildHeroes(heroes);
new BuildFields(fields);
new BuildRandomBtn(document.querySelector('.fighters-section'), 'hero');
new BuildRandomBtn(document.querySelector('.fields-section'), 'field');
new SubmitAction(document.querySelector('.secondPage__submit'));
new ClickSound();
new ChangePageToFightPage();
new ReturnInfoCard();