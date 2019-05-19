class UserName {
  constructor () {
    this.name = document.querySelector('.name'),
    this.form = document.querySelector('.form'),
    this.listener();
  }

  setUserName () {
    globalObj.user.name = (this.name.value).toString();
    console.log(globalObj);
  }

  listener () {
    const $this = this;
    this.form.addEventListener( 'submit', this.setUserName.bind($this) );
  }
}

class ChangePageToSecondPage {
  constructor () {
    this.firstPageWrapp = document.querySelector('.firstPageWrapp'),
    this.secondPageWrapp = document.querySelector('.secondPageWrapp'),
    this.form = document.querySelector('.form'),
    this.listener();
  }

  change (e) {
    e.preventDefault();
    this.firstPageWrapp.classList.add('hide');
    this.secondPageWrapp.classList.remove('hide');
  }

  listener () {
    const $this = this;
    this.form.addEventListener('submit', this.change.bind($this) );
  }
}

class StartMusic {
  constructor () {
    this.listener();
  }

  music () {
    playClickFighterPlay();
  }

  listener () { 
    const $this = this;
    window.addEventListener( 'DOMContentLoaded', this.music.bind($this) ); 
  }
}

new StartMusic();
new UserName();
new ChangePageToSecondPage();
