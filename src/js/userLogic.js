//default action when time is over and user wasn't make a choose
class DefaultAction {
  constructor (xp, attack) { 
    this.computerAttack = attack,
    this.userXP = xp, 
    this.damage();
  }

  damage () {return this.userXP = this.userXP - this.computerAttack};
}

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