import Menu from './Menu';

export default class Scoreboard extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'backgroundMenu');
    this.backgroundMusic = this.game.add.audio('menuMusic');
    this.backgroundMusic.play();
    this.backgroundMusic.loop = true;

    this.titleGroup = this.game.add.group();
    this.title = this.game.add.image(this.game.width/2, 0,'title-mini');
    this.title.anchor.setTo(0.5, 0.5);
    this.titleGroup.add(this.title);
    this.titleGroup.y = 100;

    this.backButton = this.game.add.button(100, this.game.height - 70, 'backButton', this.backClick, this);
    this.backButton.anchor.setTo(0.5,0.5);
    this.game.add.tween(this.backButton).to({y:this.game.height - 65}, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

    this.startButton = this.game.add.button(this.game.width - 100 , this.game.height - 70, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
    this.game.add.tween(this.startButton).to({y:this.game.height - 65}, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  }

  startClick() {
    this.game.state.start('Play');
    this.backgroundMusic.destroy();
  }
  
  backClick() {
    this.game.state.start('Menu');
    this.backgroundMusic.destroy();
  }
}
