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

class FightAnimation{
  constructor () {
    this.userHero = document.querySelector('img.user-hero'), 
    this.computerHero = document.querySelector('img.computer-hero');
  }

  runUser () {
    let left = 9;
    this.userHero.setAttribute ( 'src', `${globalObj.user.obj.url}${globalObj.user.obj.runURL}` );

    const intervalUser = setInterval( () => this.userHero.style.left = `${left += 0.4}%`, 1000/60 );

    setTimeout( () => clearInterval(intervalUser), 1188 );
  }

  runComputer () {
    let right = 9;
    this.computerHero.setAttribute ( 'src', `${globalObj.computer.obj.url}${globalObj.computer.obj.runURL}` );

    const intervalComputer = setInterval( () => this.computerHero.style.right = `${right += 0.4}%`, 1000/60 );

    setTimeout( () => clearInterval(intervalComputer), 1188 );
  }

  attackUser () {
    setTimeout( () => this.userHero.setAttribute( 'src', `${globalObj.user.obj.url}${globalObj.user.obj.attackURL}`), 1188 );
  }

  attackComputer () {
    setTimeout( () => this.computerHero.setAttribute('src', `${globalObj.computer.obj.url}${globalObj.computer.obj.attackURL}`), 1188 );
  }

  runBack () {
    
  }
}