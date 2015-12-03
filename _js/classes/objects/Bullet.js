export default class Bullet extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'bullet', frame);
    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);
  }

  update() {
  	this.body.velocity.x += 150;
  }
}
