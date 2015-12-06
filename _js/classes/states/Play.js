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

    //audio
    this.backgroundSound = this.game.add.audio('wind');
    this.backgroundSound.loop = true;
    this.backgroundSound.volume = 0.8;
    this.fireSound = this.game.add.audio('shoot');
    this.spawnZombieSound = this.game.add.audio('spawnZombie');
    this.dying = this.game.add.audio('death');

    this.backgroundSound.play();

    //bullets
    this.bullets = this.game.add.group();
    this.bullets.enableBody = true;
    this.bullets.createMultiple(50, 'bullet');
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);

    //zombies weergeven
    this.zombies = this.game.add.group();
      this.zombie = new Zombie(this.game, this.game.world.randomX, this.game.world.randomX);
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.spawnZombie, this);
    this.game.time.events.loop(Phaser.Timer.SECOND * 25, this.spawnSpecialZombie, this);

    //player weergeven
    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
    this.game.add.existing(this.soldier);

    //score weergeven
    this.scoreTekstje = this.game.add.bitmapText(this.game.width/2 - 100, 25, 'gamefont',"ZOMBIES SLAUGHTERED x", 16);
    this.scoreText = this.game.add.bitmapText(this.game.width/2 + 100, 20, 'gamefont',this.score.toString(), 24);
  } 

  update() {
    this.soldier.rotation = this.game.physics.arcade.angleToPointer(this.soldier);

    if (this.game.input.activePointer.isDown)
    {
      //als je 5 seconden lang schiet, raakt je wapen oververhit
      if(this.game.input.activePointer.duration <= 5000) {
        this.fire();
      }
    }

    //collision detection
    this.game.physics.arcade.overlap(this.bullets, this.zombies, this.collisionHandler, null, this);
    this.game.physics.arcade.overlap(this.soldier, this.zombies, this.collisionHandlerDeath, null, this);
  }

  fire () {
    if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
    {
        this.fireSound.play();
        this.nextFire = this.game.time.now + this.fireRate;
        let bullet = this.bullets.getFirstDead();
        bullet.reset(this.soldier.x - 8, this.soldier.y - 8);
        this.game.physics.arcade.moveToPointer(bullet, 750);
    }
  }

  //zombies spawnen
  spawnZombie() {
    //console.log("spawned at");
    let randomX = Math.random(0)*1050;
    let randomY = Math.random(0)*650;

    let xPos = (randomX + 1050) - this.zombie.width;
    let yPos = (randomY + 650) - this.zombie.height;

    let zombie = new Zombie(this.game, xPos, yPos);
    this.zombies.add(zombie);

    //console.log(xPos + ", " + yPos);

    this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);
  }

  //speciale zombies spawnen
  spawnSpecialZombie() {
    this.spawnZombieSound.play();
    //console.log("spawned special at");
    let randomX = Math.random(0)*1050;
    let randomY = Math.random(0)*650;

    let xPos = (randomX - 1050) - this.zombie.width;
    let yPos = (randomY - 650) - this.zombie.height;

    let zombie = new SpecialZombie(this.game, xPos, yPos);
    this.zombies.add(zombie);

    //console.log(xPos + ", " + yPos);

    this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);
  }

  collisionHandler (bullet, zombie) {
    //wanneer een zombie sterft wordt ook de kogel vernietigt
    bullet.kill();
    zombie.kill();

    //score gaat omhoog
    this.score ++;
    this.scoreText.text = this.score.toString();
  }

  collisionHandlerDeath (soldier, zombie) {
    this.dying.play();
    soldier.kill();
    zombie.kill();

    if(this.soldier.kill()) {
      //zombies stoppen met lopen wanneer speler dood is
      this.game.world.removeAll();
      this.spawnZombieSound.destroy();
      this.fireSound.destroy();
      this.background = this.game.add.sprite(0, 0, 'backgroundMenu');

      console.log("score weergeven");

      //score weergeven
/*      this.scoreTitle = this.game.add.bitmapText(this.game.width/2, this.game.height/2 - 50, 'gamefont', "CONGRATULATIONS !", 48);
      this.scoreTitle.anchor.setTo(0.5, 0.5);
      this.scoreText = this.game.add.bitmapText(this.game.width/2, this.game.height/2, 'gamefont', "YOU SLAUGHTERED " + this.score.toString() + " ZOMBIES !", 24);
      this.scoreText.anchor.setTo(0.5, 0.5);*/
    }

    this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.endIt, this);
  }

  endIt() {
    this.backgroundSound.destroy();
    this.game.state.start('Scoreboard');
  }
}
