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
  }

  dieComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.dieURL}`);
  }

  runUser() {
    let left = 9;
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.runURL}`);

    const intervalUser = setInterval(() => this.userHero.style.left = `${left += 0.4}%`, 1000 / 60);

    setTimeout(() => clearInterval(intervalUser), 1280);
  }

  runComputer() {
    let right = 9;
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.runURL}`);

    const intervalComputer = setInterval(() => this.computerHero.style.right = `${right += 0.4}%`, 1000 / 60);

    setTimeout(() => clearInterval(intervalComputer), 1280);
  }

  attackUser() {
    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.attackURL}`);
  }

  attackComputer() {
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.attackURL}`);
  }

  runBackUser() {
    let left = parseFloat(this.userHero.style.left);

    this.userHero.setAttribute('src', `${globalObj.user.obj.url}${globalObj.user.obj.runURL}`);
    this.userHero.style.transform = 'scaleX(-1)';
    const runBackInterval = setInterval(() => {
      this.userHero.style.left = `${left -= 0.4}%`
    }, 1000 / 60);

    setTimeout(() => {
      clearInterval(runBackInterval);
      this.userHero.style.transform = 'scaleX(1)';
    }, 1280);
  }

  runBackComputer() {
    let right = parseFloat(this.computerHero.style.right);
    this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.runURL}`);
    this.computerHero.style.transform = 'scaleX(1)';
    const runBackInterval = setInterval(() => {
      this.computerHero.style.right = `${right -= 0.4}%`
    }, 1000 / 60);

    setTimeout(() => {
      clearInterval(runBackInterval);
      this.computerHero.style.transform = 'scaleX(-1)';
    }, 1280);
  }
}