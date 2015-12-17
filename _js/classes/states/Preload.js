export default class Preload extends Phaser.State {
  preload() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    //alles rond background and menu's
    this.load.image('background', 'assets/background.jpg');
    this.load.image('fog', 'assets/fog.png');
    this.load.image('car', 'assets/car.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('title-mini', 'assets/title-mini.png');
    this.load.image('startButton', 'assets/start-button.png');
    this.load.image('scoreButton', 'assets/score-button.png');
    this.load.image('backButton', 'assets/back-button.png');

    //player en enemies objecten
    this.load.image('soldier', 'assets/soldier.png');
    this.load.image('zombie', 'assets/zombie.png', 61, 75, 1);
    this.load.image('zombieSpecial', 'assets/zombieSpecial.png', 61, 75, 1);

    //small objects
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('skull', 'assets/skull.png');
    this.load.image('gun', 'assets/gun.png');
    this.load.image('bar', 'assets/bar.png');

    //audio
    this.load.audio('menuMusic', 'assets/audio/menu-music.wav');
    this.load.audio('wind', 'assets/audio/wind.wav');
    this.load.audio('shoot', 'assets/audio/shoot.wav');
    this.load.audio('spawnZombie', 'assets/audio/spawnZombie.wav');
    this.load.audio('reload', 'assets/audio/reload.wav');
    this.load.audio('death', 'assets/audio/death.wav');

    //font
    this.load.bitmapFont('gamefont', 'assets/fonts/gamefont/gamefont.png', 'assets/fonts/gamefont/gamefont.fnt');
  }

  onLoadComplete() {
    this.game.state.start('Play');
  }
}
