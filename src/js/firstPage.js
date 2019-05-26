;(() => {
  let name = document.querySelector('.name');
  let firstPageForm = document.querySelector('.firstPage__form');
  let firstPageWrapp = document.querySelector('.firstPageWrapp');
  let secondPageWrapp = document.querySelector('.secondPageWrapp');

  const changeFirstPageToSecondPage = function() {
    firstPageWrapp.classList.add('hide');
    secondPageWrapp.classList.remove('hide');
  };

  const onSubmit = function(e) {
    e.preventDefault();
    if (/^[A-Za-z0-9_-]{3,16}$/.test(name.value)) {
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

  open = elem => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (document.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (document.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (document.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  close = elem => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  fullscreen.addEventListener( 'click', () => {
    fullscreen.classList.toggle('clicked');

    fullscreen.classList.contains('clicked') 
    ? open(document.documentElement)
    : close(document.documentElement);
  } );
})();

class StartMusic {
  constructor () {
    this.secondPageWrapp = document.querySelector('.secondPageWrapp').classList.contains('hide'), 
    this.btnStart = document.querySelector('.start'), 
    this.listener();
  }

  musicFirstPage () {
    playClickFighterPlay();
  }

  listener () { 
    const $this = this;
    window.addEventListener( 'DOMContentLoaded', this.musicFirstPage.bind($this) ); 
  }
}

new StartMusic();