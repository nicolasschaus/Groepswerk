import Soldier from '../objects/Soldier';
import Zombie from '../objects/Zombie';
import Bullet from '../objects/Bullet';




export default class Play extends Phaser.State {
  create() {
    this.score = 0;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.background = this.game.add.sprite(0, 0, 'background');
    this.wooden = this.game.add.sprite(0, this.game.height - 125, 'wooden');


    this.soldier = new Soldier(this.game, this.game.width/2, this.game.height/2);
    this.game.add.existing(this.soldier);

    this.zombie = new Zombie(this.game, 100, 100);
    this.game.add.existing(this.zombie);

    this.bullet = new Bullet(this.game,this.game.width/2, this.game.height/2);
    this.game.add.existing(this.bullet);

    this.livesTitleText = this.game.add.bitmapText(this.game.width/2 - 30, this.game.height - 100, 'flappyfont',"waves", 24);
    this.livesTitleText = this.game.add.bitmapText(this.game.width/2 - 2, this.game.height - 70, 'flappyfont',this.score.toString(), 24);
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
