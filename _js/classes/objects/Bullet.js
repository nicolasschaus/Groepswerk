export default class Bullet extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'bullet', frame);
    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);
  }

  update() {
  	this.rotation = this.game.physics.arcade.moveToPointer(this, 1000, this.game.input.activePointer, 500);
  }
}
