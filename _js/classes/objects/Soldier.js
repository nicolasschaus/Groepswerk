import Bullet from '../objects/Bullet';

let cursors;
let bullets;
let fireRate = 100;
let nextFire = 0;

export default class Soldier extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'soldier', frame);
    this.anchor.setTo(0.5, 0.5);

    game.physics.arcade.enableBody(this);

    cursors = game.input.keyboard.createCursorKeys();
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.bullet = new Bullet(this.game, this.x, this.y);
    this.game.add.existing(this.bullet);

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, this.bullet);
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
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

    if (this.game.input.activePointer.isDown) {
      this.fire();
    }

    this.rotation = this.game.physics.arcade.angleToPointer(this);
  }
  
  fire() {
    if (this.game.time.now > this.nextFire && bullets.countDead() > 0) {
        this.nextFire = this.game.time.now + fireRate;
        let bullet = bullets.getFirstDead();
        bullet.reset(this.x - 8, this.y - 8);
        this.game.physics.arcade.moveToPointer(bullet, 300);
    }
    console.log(this.bullet);
  }
}
