import Soldier from '../objects/Soldier';

export default class Zombie extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'zombie', frame);
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);

    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
  }

  update() {
    this.rotation = this.game.physics.arcade.angleBetween(this, this.soldier);
    this.game.physics.arcade.moveToObject(this, this.soldier, 75);
  }
}
