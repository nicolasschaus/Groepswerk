export default class Preload extends Phaser.State {
  preload() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    //alles rond background and menu's
    this.load.image('background', 'assets/background.png');
    this.load.image('info-pallet', 'assets/info-pallet.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('title-mini', 'assets/title-mini.png');
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('scoreButton', 'assets/score-button.png');
    this.load.image('backButton', 'assets/back-button.png');

    //player en enemies objecten
    this.load.image('soldier', 'assets/soldier.png');
    this.load.spritesheet('zombie', 'assets/zombie.png', 61, 75, 1);

    //small objects
    this.load.image('heart', 'assets/heart.png');
    this.load.image('bullet', 'assets/bullet.png');

    //font
    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');
  }

  onLoadComplete() {
    this.game.state.start('Play');
  }
}
