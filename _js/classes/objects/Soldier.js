import Bullet from '../objects/Bullet';

let cursors;

export default class Soldier extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'soldier', frame);
    this.anchor.setTo(0.5, 0.5);

    game.physics.arcade.enableBody(this);

    cursors = game.input.keyboard.createCursorKeys();

    this.body.collideWorldBounds = true;
  }

  update() {
    if(cursors.up.isUp || cursors.down.isUp || cursors.left.isUp || cursors.right.isUp) {
      this.body.velocity.setTo(0, 0);
    }
    if(cursors.up.isDown) {
      this.body.velocity.y -= 150;
    }else if(cursors.down.isDown) {
      this.body.velocity.y += 150;
    }
    if(cursors.left.isDown) {
      this.body.velocity.x -= 150;
    }else if(cursors.right.isDown) {
      this.body.velocity.x += 150;
    }

    if (this.game.input.activePointer.isDown)
    {
        this.fire();
    }

    this.rotation = this.game.physics.arcade.angleToPointer(this);

  }
  
  fire() {
    this.bullet = new Bullet(this.game, this.x, this.y);
    this.game.add.existing(this.bullet);
  }
}
