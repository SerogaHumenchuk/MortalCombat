const heroes = [
  {
    "name": "redskull",
    "attack": 15,
    "defence": 8,
    "url": "./images/hero/redskull/user-redscull",
    "runURL": "_run.gif",
    "attackURL": "_attack.gif",
    "blockURL": "_block.gif",
    "hitURL": "_hit.gif",
    "dieURL": "_die.gif"
  },
  {
    "name": "colossus",
    "attack": 15,
    "defence": 8,
    "url": "./images/hero/colossus/user-colossus",
    "runURL": "_run.gif",
    "attackURL": "_attack.gif",
    "blockURL": "_block.gif",
    "hitURL": "_hit.gif",
    "dieURL": "_die.gif"
  },
  {
    "name": "mystique",
    "attack": 15,
    "defence": 8,
    "url": "./images/hero/mystique/user-mystique",
    "runURL": "_run.gif",
    "attackURL": "_attack.gif",
    "blockURL": "_block.gif",
    "hitURL": "_hit.gif",
    "dieURL": "_die.gif"
  },
  {
    "name": "starlord",
    "attack": 15,
    "defence": 8,
    "url": "./images/hero/starlord/user-starlord",
    "runURL": "_run.gif",
    "attackURL": "_attack.gif",
    "blockURL": "_block.gif",
    "hitURL": "_block.gif",
    "dieURL": "_die.gif"
  }
];

const fields = [
  {
    "name": "boat",
    "url": "./images/arena/boat.gif"
  },
  {
    "name": "light",
    "url": "./images/arena/light.gif"
  },
  {
    "name": "main",
    "url": "./images/arena/main.gif"
  },
  {
    "name": "train",
    "url": "./images/arena/train.gif"
  },
  {
    "name": "waterfall",
    "url": "./images/arena/waterfall.gif"
  },
  {
    "name": "wind",
    "url": "./images/arena/wind.gif"
  }
];

class BuildHeroes {
  constructor (heroes) {
    this.wrapper = document.querySelector('.fighters-section'),
    this.heroes = heroes, 
    this.build();
  }

  build () {
    this.heroes.map( hero => {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      const img = document.createElement('img');

      label.classList.add('fighter');
      label.classList.add(`fighter__${hero.name}`)

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
  constructor (fields) {
    this.wrapper = document.querySelector('.fields-section'),
    this.fields = fields, 
    this.build();
  }

  build () {
    this.fields.map( field => {
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
  constructor (wrapper, radioName) {
    this.wrapper = wrapper, 
    this.name = radioName, 
    this.buildBtn();
  }

  buildBtn () {
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
  constructor (btn) {
    this.btn = btn,
    this.events();
  }

  checkAction (e) {
    e.preventDefault();
    this.getHero();
    this.getField();
  }

  getHero () {
    const radioHero = document.querySelector('input[name="hero-radio"]:checked');

    if (radioHero !== null) {
      const img = radioHero.nextSibling;
      const imgSrc = img.getAttribute('src');
      const imgName = img.getAttribute('alt');

      if (imgSrc !== './images/dice.png') {
        globalObj.user.obj = heroes.find( hero => hero.name == imgName);
        globalObj.user.attack = globalObj.user.obj.attack;
        globalObj.user.defence = globalObj.user.obj.defence;
        console.log(globalObj);
      } else { this.randomHero() }
    }
  }

  getField () {
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

  randomHero () {
    const num = Math.floor(Math.random() * heroes.length);
    globalObj.user.obj = heroes[num];
    globalObj.user.attack = heroes[num].attack;
    globalObj.user.defence = heroes[num].defence;
  }

  randomField () {
    const num = Math.floor(Math.random() * fields.length);
    globalObj.arena = fields[num].url;
  }

  events () {
    const $this = this;
    this.btn.addEventListener('click', this.checkAction.bind($this));
  }
}

class ClickSound {
  constructor () {
    this.fighterSection = document.querySelector('.fighters-section'),
    this.fieldSection = document.querySelector('.fields-section'), 
    this.listeners();
  }

  click (e) {
    if ( e.target.nodeName === 'INPUT' || e.target.nodeName === 'LABEL' ) {
      const audio = document.getElementById('clickmouse');
      audio.play();
    }
  }

  listeners () {
    const $this = this;
    this.fighterSection.addEventListener( 'click', this.click.bind($this) );
    this.fieldSection.addEventListener( 'click', this.click.bind($this) );
  }
}

new BuildHeroes( heroes );
new BuildFields( fields );
new BuildRandomBtn( document.querySelector('.fighters-section'), 'hero' );
new BuildRandomBtn( document.querySelector('.fields-section'), 'field' );
new SubmitAction( document.querySelector('.secondPage__submit') );
new ClickSound();