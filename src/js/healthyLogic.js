const MyLives = document.querySelector('.My__Lives');
const EnemyLives = document.querySelector('.Enemy__Lives');
const myLivesContainer = document.querySelector('.MyHealthy__Bar');
const EnemyLivesContainer = document.querySelector('.EnemyHealthy__Bar');

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
  changeHP(damage) {
    this.lifeAmount -= damage;
    this.changeColor();
    this.changeWidth();
  }
}

const heroLifeBar = new Livesbar(MyLives, 100);
const enemyLifeBar = new Livesbar(EnemyLives, 100);
heroLifeBar.changeHP(20);
enemyLifeBar.changeHP(80);
