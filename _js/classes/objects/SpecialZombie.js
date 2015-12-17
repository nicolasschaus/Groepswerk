import Soldier from './Soldier';

export default class Zombie extends Phaser.Sprite {
  constructor(game, x, y, speed) {
    super(game, x, y, 'zombieSpecial', speed);
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);

    this.speed = speed;

    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
  }

  update() {
    this.rotation = this.game.physics.arcade.angleBetween(this, this.soldier);
    this.game.physics.arcade.moveToObject(this, this.soldier, this.speed);
  }
}
