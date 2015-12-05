import Soldier from '../objects/Soldier';

export default class Zombie extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'zombie', frame);
    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);

    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
  }

  update() {
  	this.game.physics.arcade.velocityFromRotation(this.soldier, 50, this.body.velocity);
  }
}
