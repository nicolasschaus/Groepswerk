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
    this.background = this.game.add.sprite(this.game.width/2, this.game.height/2, 'fog');
    this.background.anchor.setTo(0.5, 0.5);
    this.car = this.game.add.sprite(this.game.width/2, this.game.height/2, 'car');
    this.car.anchor.setTo(0.5, 0.5);

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
    this.overheated = false;

    //zombies weergeven
    this.zombies = this.game.add.group();
      this.zombie = new Zombie(this.game, this.game.world.randomX, this.game.world.randomX);
      this.zombie.animations.add('run');
      this.zombie.animations.play('run', 10, true);
      this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.spawnZombie, this);
      this.game.time.events.loop(Phaser.Timer.SECOND * 25, this.spawnSpecialZombie, this);

    //player weergeven
    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
    this.game.add.existing(this.soldier);

    //score weergeven
    this.skull = this.game.add.sprite(50, this.game.height - 50, 'skull');
    this.skull.anchor.setTo(0.5, 0.5);
    this.tekst = this.game.add.bitmapText(75, this.game.height - 42, 'gamefont', "x", 18);
    this.scoreText = this.game.add.bitmapText(92, this.game.height - 50, 'gamefont',this.score.toString(), 28);

/*    this.gun = this.game.add.sprite(100, this.game.height - 50, 'gun');
    this.gun.anchor.setTo(0.5, 0.5);
    this.bar = this.game.add.sprite(50, this.game.height - 125, 'bar');
    this.bar.anchor.setTo(0.5, 0.5);
    this.cropCounter = 100;*/
  }

  update() {
    this.soldier.rotation = this.game.physics.arcade.angleToPointer(this.soldier);

/*    this.cropCounter -= 0.2;

    if(this.cropCounter <= 100) {
      this.cropCounter = 100;
    }

    this.cropRect = new Phaser.Rectangle(50, this.cropCounter, 0, this.bar.height);
    this.bar.crop(this.cropRect);

    console.log(this.cropCounter);
    this.bar.updateCrop();*/

    if (this.game.input.activePointer.isDown) {
      this.fire();
    }

    //collision detection
    this.game.physics.arcade.overlap(this.bullets, this.zombies, this.collisionHandler, null, this);
    this.game.physics.arcade.overlap(this.soldier, this.zombies, this.collisionHandlerDeath, null, this);
  }

  fire () {
    if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
      this.fireSound.play();
      this.nextFire = this.game.time.now + this.fireRate;
      let bullet = this.bullets.getFirstDead();
      bullet.reset(this.soldier.x - 8, this.soldier.y - 8);
      this.game.physics.arcade.moveToPointer(bullet, 750); 
      //this.cropCounter += 5; 
    }
  }

  //zombies spawnen
  spawnZombie() {
    let randomX = Math.random(-300)*2000;
    let randomY = Math.random(-300)*1000;

    if(randomX >= 0 && randomX < 750){
      randomX -= (this.game.width/2);
    }else if(randomX >= 750 && randomX <= 1500){
      randomX += (this.game.width/2);
    }

    if(randomY >= 0 && randomY < 400){
      randomY -= (this.game.height/2);
    }else if(randomY >= 400 && randomY <= 800){
      randomY += (this.game.height/2);
    }

    let xPos = randomX;
    let yPos = randomY;

    let zombie = new Zombie(this.game, xPos, yPos);
    this.zombies.add(zombie);

    this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);
  }

  //speciale zombies spawnen
  spawnSpecialZombie() {
    this.spawnZombieSound.play();
    let randomX = Math.random(-300)*2000;
    let randomY = Math.random(-300)*1000;

    if(randomX >= 0 && randomX < 750){
      randomX -= (this.game.width/2);
    }else if(randomX >= 750 && randomX <= 1500){
      randomX += (this.game.width/2);
    }

    if(randomY >= 0 && randomY < 400){
      randomY -= (this.game.height/2);
    }else if(randomY >= 400 && randomY <= 800){
      randomY += (this.game.height/2);
    }

    let xPos = randomX;
    let yPos = randomY;

    let zombie = new SpecialZombie(this.game, xPos, yPos);
    this.zombies.add(zombie);

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

    }

    this.timer = this.game.time.events.loop(Phaser.Timer.SECOND * 15, this.endIt, this);
  }

  endIt() {
    this.backgroundSound.destroy();
    this.game.state.start('Scoreboard');
  }
}
