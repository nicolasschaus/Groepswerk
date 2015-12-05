export default class Soldier extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'soldier', frame);
    this.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enableBody(this);
  }

  update() {
    this.rotation = this.game.physics.arcade.angleToPointer(this);
  }
}
