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

class DefaultStart {
  constructor () {
    this.wrapper = document.querySelector('.fightPage__container'),
    this.userHero = globalObj.user.obj,
    this.computerHero = globalObj.computer.obj,
    this.startPositionUser(),
    this.startPositionComputer();
  }

  startPositionUser () {
    const img = document.createElement('img');
    img.classList.add('user-hero');
    img.setAttribute('src', `${this.userHero.url}${this.userHero.standURL}`);

    this.wrapper.append(img);
  }  

  startPositionComputer () {
    const img = document.createElement('img');
    img.classList.add('computer-hero');
    img.setAttribute('src', `${this.computerHero.url}${this.computerHero.standURL}`);

    this.wrapper.append(img);
  }
};
