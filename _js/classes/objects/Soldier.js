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

    bullets = this.game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
/*    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);*/
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
    console.log("fire!");
    if (this.game.time.now > this.nextFire) {
        this.nextFire = this.game.time.now + this.fireRate;
        let bullet = bullets.getFirstDead();
        bullet.reset(this.x - 8, this.y - 8);
        this.game.physics.arcade.moveToPointer(bullet, 300);
    }
    console.log(bullets);
  }

  render() {
    this.game.debug.text('Active Bullets: ' + bullets.countLiving() + ' / ' + bullets.total, 32, 32);
    this.game.debug.spriteInfo(this, 32, 450);
  }
}
