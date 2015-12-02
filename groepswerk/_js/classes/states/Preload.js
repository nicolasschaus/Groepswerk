export default class Preload extends Phaser.State {
  preload() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.image('background', 'assets/background.png');
    this.load.image('wooden', 'assets/wooden1.png');

    this.load.image('soldier', 'assets/soldier.png');

    this.load.image('bullet', 'assets/bullet.png');

    this.load.spritesheet('zombie', 'assets/zombie.png', 61, 75, 1);

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
