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
    defencePart: null,
  },
  computer: {
    obj: null,
    name: null,
    attack: null,
    defence: null,
    attackPart: null,
    defencePart: null,
  },
};

const botname = document.querySelector('.bot_name');
const nickname = document.querySelector('.nick_name');

class DefaultStart {
  constructor() {
    this.wrapper = document.querySelector('.fightPage__container'),
      this.userHero = globalObj.user.obj,
      this.computerHero = globalObj.computer.obj,
      this.startPositionUser(),
      this.startPositionComputer();
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
};

class FightAnimation {
  constructor() {
    this.userHero = document.querySelector('img.user-hero'),
      this.computerHero = document.querySelector('img.computer-hero');
  }

  dieUser() {
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.dieURL}`);

    setTimeout( () => {
      this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.deadURL}`);
    }, 280 );
  }

  dieComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.dieURL}`);

    setTimeout( () => {
      this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.deadURL}`);
    }, 280 );
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

    setTimeout( () => {
      this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.standURL}`);
    }, 1000 );
  }
}