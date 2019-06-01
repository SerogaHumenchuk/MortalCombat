(() => {
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
    if (/^[А-Яа-яA-Za-z0-9_ -]{3,16}$/.test(name.value)) {
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
  const fullscreenSvg = document.querySelector('.fullscreen__svg');

  open = elem => {
    if (document.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (document.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (document.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  close = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  fullscreen.addEventListener('click', () => {
    fullscreen.classList.toggle('clicked');

    if (fullscreen.classList.contains('clicked')) {
      open(document.documentElement);
      fullscreenSvg.setAttribute('src', './images/fullscreen-decrease.svg');
    } else {
      close();
      fullscreenSvg.setAttribute('src', './images/fullscreen-increase.svg');
    }
  });
})();

class StartMusic {
  constructor() {
    (this.btnStart = document.querySelector('.start')), this.listener();
  }

  musicFirstPage() {
    playClickFighterPlay();
  }

  listener() {
    const $this = this;
    window.addEventListener(
      'DOMContentLoaded',
      this.musicFirstPage.bind($this),
    );
  }
}

new StartMusic();
