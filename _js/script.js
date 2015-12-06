import Preload from './classes/states/Preload';
import Menu from './classes/states/Menu';
import Play from './classes/states/Play';
import Scoreboard from './classes/states/Scoreboard';

let game;

const init = () => {
  game = new Phaser.Game(1050, 650, Phaser.AUTO);
  game.state.add('Preload', Preload, false);
  game.state.add('Menu', Menu, false);
  game.state.add('Play', Play, false);
  game.state.add('Scoreboard', Scoreboard, false);
  game.state.start('Preload');
};

init();
