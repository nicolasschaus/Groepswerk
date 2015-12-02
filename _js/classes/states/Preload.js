export default class Preload extends Phaser.State {
  preload() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.image('background', 'assets/background.png');
    this.load.image('info-pallet', 'assets/info-pallet.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('title-mini', 'assets/title-mini.png');
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('scoreButton', 'assets/score-button.png');
    this.load.image('backButton', 'assets/back-button.png');

    this.load.image('soldier', 'assets/soldier.png');
    this.load.spritesheet('zombie', 'assets/zombie.png', 61, 75, 1);
    this.load.image('bullet', 'assets/bullet.png');


    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');

    //this.load.audio('flap', 'assets/flap.wav');
  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Play');
  }
}
