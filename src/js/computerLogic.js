class ComputerRandomHero {
  constructor () {
    this.heroes = heroes,
    this.random();
  }

  random () {
    const num = Math.floor(Math.random() * this.heroes.length);
    globalObj.computer.obj = heroes[num];
    globalObj.computer.name = heroes[num].name;
    globalObj.computer.attack = heroes[num].attack;
    globalObj.computer.defence = heroes[num].defence;
  }
}