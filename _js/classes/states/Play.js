import Soldier from '../objects/Soldier';
import Zombie from '../objects/Zombie';

export default class Play extends Phaser.State {
  create() {
    this.score = 0;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.background = this.game.add.sprite(0, 0, 'background');
    this.wooden = this.game.add.sprite(0, this.game.height - 148, 'info-pallet');

    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
    this.game.add.existing(this.soldier);



    this.wavesText = this.game.add.bitmapText(this.game.width/2 - 40, 25, 'flappyfont',"ZOMBIES SLAUGHTERED x", 16);
    this.wavesText.anchor.setTo(0.5,0.5);
    this.scoreText = this.game.add.bitmapText(this.game.width/2 + 90, 25, 'flappyfont',this.score.toString(), 24);
    this.scoreText.anchor.setTo(0.5,0.5);

    this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 20, this.spawnZombie, this);
  }
  
  update() {
    //collision detection
  }

  spawnZombie() {
    this.zombie = new Zombie(this.game, this.game.world.randomX, this.game.world.randomX);
    this.game.add.existing(this.zombie);

    this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);
    this.zombie.body.collideWorldBounds = true;
  }
}
