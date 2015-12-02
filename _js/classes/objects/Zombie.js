export default class Zombie extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'zombie', frame);
    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);
  }

  update() {
  	//beweeg richting player
  }
}
