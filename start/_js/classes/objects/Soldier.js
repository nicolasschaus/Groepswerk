let cursors;
let bullets;
let fireRate;
let nextFire;

export default class Soldier extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'soldier', frame);
    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);

    this.bullets = bullets;
    this.fireRate = 1000;
    this.nextFire = 0;

    cursors = game.input.keyboard.createCursorKeys();

    //this.shootSound = this.game.add.audio('shoot');
  }
  create() {
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet', 0, false);
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);
  }
  update() {
    if(cursors.up.isUp || cursors.down.isUp || cursors.left.isUp || cursors.right.isUp) {
      this.body.velocity.setTo(0, 0);
    }
    if(cursors.up.isDown) {
      this.body.velocity.y -= 75;
    }else if(cursors.down.isDown) {
      this.body.velocity.y += 75;
    }
    if(cursors.left.isDown) {
      this.body.velocity.x -= 75;
    }else if(cursors.right.isDown) {
      this.body.velocity.x += 75;
    }
    if (this.game.input.activePointer.isDown) {
        fire();
    }

    //speedbooster die de velocity aanpast naar 150

    this.rotation = this.game.physics.arcade.angleToPointer(this);


/*    if (this.game.input.mousePointer.isDown)
    {
        this.game.physics.arcade.moveToPointer(this, 200);

        if (Phaser.Rectangle.contains(this.body, this.game.input.x, this.game.input.y))
        {
            this.body.velocity.setTo(0, 0);
        }
    }else {
        this.body.velocity.setTo(0, 0);
    }*/
  }
  fire() {
    if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
    {
        this.nextFire = this.game.time.now + fireRate;
        let bullet = this.bullets.getFirstExists(false);
        this.bullet.rotation = this.game.physics.arcade.moveToPointer(this.bullet, 1000, this.game.input.activePointer, 500);
    }

}
}
