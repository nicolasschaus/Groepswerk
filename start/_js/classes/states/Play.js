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

    this.zombie = new Zombie(this.game, 100, 100);
    this.game.add.existing(this.zombie);

    this.wavesText = this.game.add.bitmapText(this.game.width/2 - 40, 25, 'flappyfont',"zombies slaugthered x", 16);
    this.wavesText.anchor.setTo(0.5,0.5);
    this.scoreText = this.game.add.bitmapText(this.game.width/2 + 90, 25, 'flappyfont',this.score.toString(), 24);
    this.scoreText.anchor.setTo(0.5,0.5);
  }
  update() {
    //this.game.physics.arcade.collide(this.bird, this.ground, this.groundHitHandler, null, this); - collision with zombies
  }
  zombieHitHandler() {
    this.deathSound.play();
    this.deathHandler();
  }
  deathHandler() {
    this.soldier.kill();

/*  this.scoreboard = new Scoreboard(this.game);
    this.game.add.existing(this.scoreboard); - komt nog
    this.scoreboard.show(this.score);*/
  }
}
