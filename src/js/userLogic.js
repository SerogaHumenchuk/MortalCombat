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
  constructor () {}

  healthUserLogic () {
    if ( globalObj.user.defencePart !== globalObj.computer.attackPart ) {
      globalObj.lifeUser -= globalObj.computer.attack;
    } else if ( globalObj.user.defencePart === globalObj.computer.attackPart ) {
      const damage = globalObj.user.defence - globalObj.computer.attack;

      if (damage > 0) globalObj.lifeUser -= damage;
    }
  }

  healthComputerLogic () {
    if ( globalObj.computer.defencePart !== globalObj.user.attackPart ) {
      globalObj.lifeComputer -= globalObj.user.attack;
    } else if ( globalObj.user.defencePart === globalObj.computer.attackPart ) {
      const damage = globalObj.computer.defence - globalObj.user.attack;

      if (damage > 0) globalObj.lifeComputer -= damage;
    }
  }
}

//return alert when user wasn't make a choose
class ModalMakeChoose {
  constructor () {
    this.message = 'Make a choose!!!',
    this.alert();
  }

  alert () {alert(this.message)}
}