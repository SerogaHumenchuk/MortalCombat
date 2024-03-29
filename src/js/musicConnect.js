function playClickMusic() {
  const audio = document.getElementById('music_start');
  audio.play();
}

function playClickFightSound() {
  const audio = document.getElementById('fight-sound');
  audio.volume = 0.7;
  audio.play();
}

function stopClickFightSound() {
  const audio = document.getElementById('fight-sound');
  audio.pause();
	audio.currentTime = 0;
}

function playClickWinner() {
  const audio = document.getElementById('winner');
  audio.play();
}

function playClickLooser() {
  const audio = document.getElementById('looser');
  audio.play();
}

function playClickKick() {
  const audio = document.getElementById('kick');
  audio.play();
}

function playClickDraw() {
  const audio = document.getElementById('draw');
  audio.play();
}

function playClickFight() {
  const audio = document.getElementById('fight');
  audio.play();
}

function playClickPlayerWon() {
  const audio = document.getElementById('player-won');
  audio.play();
}

function playClickScreenSaver() {
  const audio = document.getElementById('screen-saver');
  audio.play();
}

function playClickFighterSelection() {
  const audio = document.getElementById('fighter-selection');
  audio.play();
}

function stopClickFighterSelection() {
  const audio = document.getElementById('fighter-selection');
	audio.pause();
	audio.currentTime = 0;
}

function playClickFighterPlay() {
  const audio = document.getElementById('play');
  audio.play();
}

function stopClickFighterPlay() {
  const audio = document.getElementById('play');
  audio.pause();
  audio.currentTime = 0;
}

function playClickFighterClickMouse() {
  const audio = document.getElementById('clickmouse');
  audio.play();
}
