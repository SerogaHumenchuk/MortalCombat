const MyLives = document.querySelector('.My__Lives');
const EnemyLives = document.querySelector('.Enemy__Lives');
const myLivesContainer = document.querySelector('.MyHealthy__Bar');
const EnemyLivesContainer = document.querySelector('.EnemyHealthy__Bar');
const winResultPage = document.querySelector('.winResultWrapp');
const loseResultPage = document.querySelector('.loseResultWapp');
const thirdPageWrapp = document.querySelector('.thirdPageWrapp');


class Livesbar {
  constructor(container, lifeAmount) {
    (this.container = container), (this.lifeAmount = lifeAmount);
  }
  changeColor() {
    if (this.lifeAmount >= 70 && this.lifeAmount <= 100) {
      this.container.style.backgroundColor = 'green';
    } else if (this.lifeAmount >= 30 && this.lifeAmount < 70) {
      this.container.style.backgroundColor = 'orange';
    } else if (this.lifeAmount < 30) {
      this.container.style.backgroundColor = 'red';
    }
  }
  changeWidth() {
    this.container.style.width = `${+this.lifeAmount}%`;
  }
  changeHP(life) {
    this.lifeAmount = life;
    this.changeColor();
    this.changeWidth();
    this.selectResultPage();
 
  }
  selectResultPage() {
    if(globalObj.lifeUser <= 0 ) {
      loseResultPage.classList.remove('hide')
      thirdPageWrapp.classList.add('hide')
    }else if (globalObj.lifeComputer <= 0 ) {
      winResultPage.classList.remove('hide')
      thirdPageWrapp.classList.add('hide')
    }
  }
}

const heroLifeBar = new Livesbar(MyLives, 100);
const enemyLifeBar = new Livesbar(EnemyLives, 100);