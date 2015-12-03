import Soldier from '../objects/Soldier';

export default class Bullet extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'bullet', frame);
    this.anchor.setTo(0.5, 0.5);

    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
    this.game.physics.arcade.enableBody(this);
  }

  update() {
    this.rotation = this.game.physics.arcade.angleToPointer(this.soldier);
  	this.game.physics.arcade.velocityFromRotation(this.rotation, 1000, this.body.velocity);
  }
}
