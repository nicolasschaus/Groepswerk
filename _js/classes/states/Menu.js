export default class Menu extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.backgroundMusic = this.game.add.audio('menuMusic');
    this.backgroundMusic.play();
    this.backgroundMusic.loop = true;

    this.titleGroup = this.game.add.group();
    this.title = this.game.add.image(this.game.width/2, this.game.height/2 - 210, 'title');
    this.titleGroup.add(this.title);
    this.titleGroup.y = 100;
    this.title.anchor.setTo(0.5, 0.5);

    this.startButton = this.game.add.button(this.game.width/2 - 200, this.game.height/2 + 200, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
    this.game.add.tween(this.startButton).to({y:550}, 725, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

    this.scoreButton = this.game.add.button(this.game.width/2 + 125, this.game.height/2 + 200, 'scoreButton', this.scoreClick, this);
    this.scoreButton.anchor.setTo(0.5,0.5);
    this.game.add.tween(this.scoreButton).to({y:550}, 725, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
    
  }

  startClick() {
    this.game.state.start('Play');
    this.backgroundMusic.destroy();
  }

  scoreClick() {
    this.game.state.start('Scoreboard');
    this.backgroundMusic.destroy();
  }
}
