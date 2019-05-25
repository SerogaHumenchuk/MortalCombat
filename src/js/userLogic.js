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
    this.computerDefencePart = this.obj.computer.defencePart,
    this.healthUserLogic();
    }

  healthUserLogic () {
    if ( this.userDefencePart !== this.computerAttackPart ) {
      this.userHealth -= this.computerAttack;
    } else if ( this.userDefencePart === this.computerAttackPart ) {
      const damage = this.userDefence - this.computerAttack;

      if (damage > 0) {
        this.userHealth -= damage;
        console.log(this.userHealth);
      }
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