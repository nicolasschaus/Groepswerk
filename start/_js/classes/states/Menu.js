import Zombie from '../objects/Zombie';

export default class Menu extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background');

    this.zombie = new Zombie(this.game, 50, 50);
    this.game.add.existing(this.zombie);

    this.titleGroup = this.game.add.group();
    this.title = this.game.add.image(this.game.width/2, this.game.height/2 - 210,'title');
    this.titleGroup.add(this.title);
    this.titleGroup.y = 100;
    this.title.anchor.setTo(0.5, 0.5);

    this.startButton = this.game.add.button(this.game.width/2 - 200, 500, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
    this.game.add.tween(this.startButton).to({y:505}, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

    this.scoreButton = this.game.add.button(this.game.width/2 + 125, 500, 'scoreButton', this.scoreClick, this);
    this.scoreButton.anchor.setTo(0.5,0.5);
    this.game.add.tween(this.scoreButton).to({y:505}, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  }
  update() {
    //this.zombie.walk;
  }
  startClick() {
    this.game.state.start('Play');
  }
  scoreClick() {
    this.game.state.start('Scoreboard');
  }
}
