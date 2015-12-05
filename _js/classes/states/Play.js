import Soldier from '../objects/Soldier';
import Zombie from '../objects/Zombie';
import SpecialZombie from '../objects/SpecialZombie';

export default class Play extends Phaser.State {
  create() {
    this.score = 0;
    this.zombies;    
    this.bullets;
    this.fireRate = 100;
    this.nextFire = 0;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //background weergeven
    this.background = this.game.add.sprite(0, 0, 'background');

    //bullets
    this.bullets = this.game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(50, 'bullet');
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);

    //zombies weergeven
    this.zombies = this.game.add.group();
      this.zombie = new Zombie(this.game, this.game.world.randomX, this.game.world.randomX);
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.spawnZombie, this);
    //this.game.time.events.loop(Phaser.Timer.SECOND * 20, this.spawnSpecialZombie, this);

    //player weergeven
    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
    this.game.add.existing(this.soldier);

    //tekst plaatsen
    this.wavesText = this.game.add.bitmapText(this.game.width/2 - 40, 25, 'gamefont',"ZOMBIES SLAUGHTERED x", 16);
    this.wavesText.anchor.setTo(0.5,0.5);
    this.scoreText = this.game.add.bitmapText(this.game.width/2 + 90, 25, 'gamefont',this.score.toString(), 24);
    this.scoreText.anchor.setTo(0.5,0.5);
  } 

  update() {
/*    this.rotation = this.game.physics.arcade.angleBetween(this.zombies, this.soldier);
    this.game.physics.arcade.moveToObject(this.zombie, this.soldier, 50); //verhoog speed naarmate game vordert*/

    this.soldier.rotation = this.game.physics.arcade.angleToPointer(this.soldier);

    if (this.game.input.activePointer.isDown)
    {
        this.fire();
    }
  }

  fire () {
    console.log('fire!');
    if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
    {
        this.nextFire = this.game.time.now + this.fireRate;

        let bullet = this.bullets.getFirstDead();

        bullet.reset(this.soldier.x - 8, this.soldier.y - 8);

        this.game.physics.arcade.moveToPointer(bullet, 300);
    }
  }

  //zombies spawnen
  spawnZombie() {
    console.log("spawned at");
    let randomX = Math.random(0)*1050;
    let randomY = Math.random(0)*650;

    let xPos = (randomX - 1050) - this.zombie.width;
    let yPos = (randomY - 650) - this.zombie.height;

    let zombie = new Zombie(this.game, xPos, yPos);
    this.zombies.add(zombie);

    console.log(xPos + ", " + yPos);

    this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);
  }

  //speciale zombies spawnen
/*  spawnSpecialZombie() {
    console.log("spawned special at");
    let randomX = Math.random(0)*1050;
    let randomY = Math.random(0)*650;

    let xPos = (randomX - 1050) - this.zombie.width;
    let yPos = (randomY - 650) - this.zombie.height;

    let zombie = new SpecialZombie(this.game, xPos, yPos);
    this.zombies.add(zombie);

    console.log(xPos + ", " + yPos);

    this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);
  }*/
}
