import Bullet from '../objects/Bullet';

export default class Soldier extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'soldier', frame);
    this.anchor.setTo(0.5, 0.5);

    game.physics.arcade.enableBody(this);
  }

  update() {
    if (this.game.input.activePointer.isDown)
    {
        this.fire();
    }

    this.rotation = this.game.physics.arcade.angleToPointer(this);

  }
  
  fire() {
    console.log("fire!");
    /*this.bullet = new Bullet(this.game, this.x, this.y);
    this.game.add.existing(this.bullet);*/
  }
}
