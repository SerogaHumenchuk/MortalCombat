class RandomPart {
  constructor () {
    this.parts = ['head', 'body', 'legs'],
    this.random();
  }

  random () {
    const randomAttack = Math.floor(Math.random() * this.parts.length);
    const randomDefence = Math.floor(Math.random() * this.parts.length);

    globalObj.computer.attackPart = this.parts[randomAttack];
    globalObj.computer.defencePart = this.parts[randomDefence];
  }
}

class FightLogic {
  constructor () {
    this.obj = globalObj,
    this.userAttack = this.obj.user.attack,
    this.userDefence = this.obj.user.defence,
    this.userHealth = this.obj.lifeUser,
    this.userAttackPart = this.obj.user.attackPart,
    this.userDefencePart = this.obj.user.defencePart,
    this.computerAttack = this.obj.computer.attack,
    this.computerDefence = this.obj.computer.defence,
    this.computerHealth = this.obj.lifeComputer,
    this.computerAttackPart = this.obj.computer.attackPart,
    this.computerDefencePart = this.obj.computer.defencePart;
  }

  healthUserLogic () {
    if ( this.userDefencePart !== this.computerAttackPart ) {
      this.userHealth -= this.computerAttack;
    } else if ( this.userDefencePart === this.computerAttackPart ) {
      const damage = this.userDefence - this.computerAttack;

      if (damage > 0) this.userHealth -= damage;
    }
  }

  healthUserLogic () {
    if ( this.computerDefencePart !== this.userAttackPart ) {
      this.computerHealth -= this.userAttack;
    } else if ( this.userDefencePart === this.computerAttackPart ) {
      const damage = this.computerDefence - this.userAttack;

      if (damage > 0) this.userHealth -= damage;
    }
  }
}

new FightLogic();
//user makes damage to computer
class userHit {
  constructor (xp, attack) { 
    this.attack = attack,
    this.computerXP = xp, 
    this.damage();
  }

  damage () {return this.computerXP = this.computerXP - this.attack};
}

//return alert when user wasn't make a choose
class ModalMakeChoose {
  constructor () {
    this.message = 'Make a choose!!!',
    this.alert();
  }

  alert () {alert(this.message)}
}