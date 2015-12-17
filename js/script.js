/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classesStatesPreload = __webpack_require__(1);

	var _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);

	var _classesStatesMenu = __webpack_require__(2);

	var _classesStatesMenu2 = _interopRequireDefault(_classesStatesMenu);

	var _classesStatesPlay = __webpack_require__(3);

	var _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);

	var _classesStatesScoreboard = __webpack_require__(7);

	var _classesStatesScoreboard2 = _interopRequireDefault(_classesStatesScoreboard);

	var game = undefined;
	var width = window.innerWidth;
	var height = window.innerHeight;

	var init = function init() {
	  game = new Phaser.Game(width, height, Phaser.AUTO);
	  game.state.add('Preload', _classesStatesPreload2['default'], false);
	  game.state.add('Menu', _classesStatesMenu2['default'], false);
	  game.state.add('Play', _classesStatesPlay2['default'], false);
	  game.state.add('Scoreboard', _classesStatesScoreboard2['default'], false);
	  game.state.start('Preload');
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preload = (function (_Phaser$State) {
	  _inherits(Preload, _Phaser$State);

	  function Preload() {
	    _classCallCheck(this, Preload);

	    _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Preload, [{
	    key: 'preload',
	    value: function preload() {
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
	      this.load.image('zombie', 'assets/zombie.png');
	      this.load.image('zombieSpecial', 'assets/zombieSpecial.png');

	      //small objects
	      this.load.image('bullet', 'assets/bullet.png');
	      this.load.image('skull', 'assets/skull.png');
	      this.load.image('blood', 'assets/blood.png');

	      //audio
	      this.load.audio('menuMusic', 'assets/audio/menu-music.wav');
	      this.load.audio('wind', 'assets/audio/wind.wav');
	      this.load.audio('shoot', 'assets/audio/shoot.wav');
	      this.load.audio('spawnZombie', 'assets/audio/spawnZombie.wav');
	      this.load.audio('death', 'assets/audio/death.wav');

	      //font
	      this.load.bitmapFont('gamefont', 'assets/fonts/gamefont/gamefont.png', 'assets/fonts/gamefont/gamefont.fnt');
	    }
	  }, {
	    key: 'onLoadComplete',
	    value: function onLoadComplete() {
	      this.game.state.start('Menu');
	    }
	  }]);

	  return Preload;
	})(Phaser.State);

	exports['default'] = Preload;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = (function (_Phaser$State) {
	  _inherits(Menu, _Phaser$State);

	  function Menu() {
	    _classCallCheck(this, Menu);

	    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Menu, [{
	    key: 'create',
	    value: function create() {
	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.backgroundMusic = this.game.add.audio('menuMusic');
	      this.backgroundMusic.play();
	      this.backgroundMusic.loop = true;

	      this.titleGroup = this.game.add.group();
	      this.title = this.game.add.image(this.game.width / 2, this.game.height / 2 - 210, 'title');
	      this.titleGroup.add(this.title);
	      this.titleGroup.y = 100;
	      this.title.anchor.setTo(0.5, 0.5);

	      this.startButton = this.game.add.button(this.game.width / 2 - 200, this.game.height / 2 + 200, 'startButton', this.startClick, this);
	      this.startButton.anchor.setTo(0.5, 0.5);
	      this.game.add.tween(this.startButton).to({ y: 550 }, 725, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

	      this.scoreButton = this.game.add.button(this.game.width / 2 + 125, this.game.height / 2 + 200, 'scoreButton', this.scoreClick, this);
	      this.scoreButton.anchor.setTo(0.5, 0.5);
	      this.game.add.tween(this.scoreButton).to({ y: 550 }, 725, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
	    }
	  }, {
	    key: 'startClick',
	    value: function startClick() {
	      this.game.state.start('Play');
	      this.backgroundMusic.destroy();
	    }
	  }, {
	    key: 'scoreClick',
	    value: function scoreClick() {
	      this.game.state.start('Scoreboard');
	      this.backgroundMusic.destroy();
	    }
	  }]);

	  return Menu;
	})(Phaser.State);

	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _objectsSoldier = __webpack_require__(4);

	var _objectsSoldier2 = _interopRequireDefault(_objectsSoldier);

	var _objectsZombie = __webpack_require__(5);

	var _objectsZombie2 = _interopRequireDefault(_objectsZombie);

	var _objectsSpecialZombie = __webpack_require__(6);

	var _objectsSpecialZombie2 = _interopRequireDefault(_objectsSpecialZombie);

	var Play = (function (_Phaser$State) {
	  _inherits(Play, _Phaser$State);

	  function Play() {
	    _classCallCheck(this, Play);

	    _get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Play, [{
	    key: 'create',
	    value: function create() {
	      this.score = 0;
	      this.zombies;
	      this.bullets;
	      this.fireRate = 100;
	      this.nextFire = 0;
	      this.speed = 100;
	      this.speedSpecial = 150;

	      this.game.physics.startSystem(Phaser.Physics.ARCADE);

	      //background weergeven
	      this.background = this.game.add.image(this.game.width / 2, this.game.height / 2, 'fog');
	      this.background.anchor.setTo(0.5, 0.5);
	      this.car = this.game.add.image(this.game.width / 2, this.game.height / 2, 'car');
	      this.car.anchor.setTo(0.5, 0.5);

	      //audio
	      this.backgroundSound = this.game.add.audio('wind');
	      this.backgroundSound.loop = true;
	      this.backgroundSound.volume = 0.8;
	      this.fireSound = this.game.add.audio('shoot');
	      this.spawnZombieSound = this.game.add.audio('spawnZombie');
	      this.dying = this.game.add.audio('death');

	      this.backgroundSound.play();

	      //bullets
	      this.bullets = this.game.add.group();
	      this.bullets.enableBody = true;
	      this.bullets.createMultiple(50, 'bullet');
	      this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
	      this.bullets.setAll('checkWorldBounds', true);
	      this.bullets.setAll('outOfBoundsKill', true);
	      this.overheated = false;

	      //zombies weergeven
	      this.zombies = this.game.add.group();
	      this.zombie = new _objectsZombie2['default'](this.game, this.game.world.randomX, this.game.world.randomX);
	      this.game.time.events.loop(Phaser.Timer.SECOND, this.spawnZombie, this);
	      this.game.time.events.loop(Phaser.Timer.SECOND * 20, this.spawnSpecialZombie, this);

	      //player weergeven
	      this.soldier = new _objectsSoldier2['default'](this.game, this.game.width / 2, this.game.height / 2);
	      this.game.add.existing(this.soldier);

	      //score weergeven
	      this.skull = this.game.add.sprite(50, this.game.height - 50, 'skull');
	      this.skull.anchor.setTo(0.5, 0.5);
	      this.tekst = this.game.add.bitmapText(75, this.game.height - 42, 'gamefont', "x", 18);
	      this.scoreText = this.game.add.bitmapText(92, this.game.height - 50, 'gamefont', this.score.toString(), 28);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.soldier.rotation = this.game.physics.arcade.angleToPointer(this.soldier);

	      if (this.game.input.activePointer.isDown) {
	        this.fire();
	      }

	      //collision detection
	      this.game.physics.arcade.overlap(this.bullets, this.zombies, this.collisionHandler, null, this);
	      this.game.physics.arcade.overlap(this.soldier, this.zombies, this.collisionHandlerDeath, null, this);
	    }
	  }, {
	    key: 'collisionHandler',
	    value: function collisionHandler(bullet, zombie) {
	      //wanneer een zombie sterft wordt ook de kogel vernietigt
	      bullet.kill();
	      zombie.kill();
	      /*    this.blood = this.game.add.sprite(zombie.x, zombie.y, 'blood');
	          this.blood.anchor.setTo(0.5, 0.5);
	          this.game.time.events.add(Phaser.Timer.SECOND, this.fade, this);*/

	      //score gaat omhoog
	      this.score++;
	      this.scoreText.text = this.score.toString();
	    }
	  }, {
	    key: 'fade',
	    value: function fade() {
	      this.game.add.tween(this.blood).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
	    }
	  }, {
	    key: 'collisionHandlerDeath',
	    value: function collisionHandlerDeath(soldier, zombie) {
	      this.dying.play();
	      soldier.kill();
	      zombie.kill();

	      if (this.soldier.kill()) {
	        //zombies stoppen met lopen wanneer speler dood is
	        this.game.world.removeAll();
	        this.spawnZombieSound.destroy();
	        this.fireSound.destroy();
	        this.background = this.game.add.image(this.game.width / 2, this.game.height / 2, 'fog');
	        this.background.anchor.setTo(0.5, 0.5);

	        console.log("score weergeven");

	        //score weergeven
	        /*      this.endText = this.game.add.bitmapText(this.game.width/2, this.game.height/2, 'gamefont', "CONGRATULATIONS!", 32);
	              this.endText.anchor.setTo(0.5, 0.5);
	        
	              this.endText2 = this.game.add.bitmapText(this.game.width/2, this.game.height/2 + 50, 'gamefont', "You have slain " + this.score.toString() + " zombies!", 32);
	              this.endText2.anchor.setTo(0.5, 0.5);*/
	      }

	      this.timer = this.game.time.events.loop(Phaser.Timer.SECOND, this.endIt, this);
	    }
	  }, {
	    key: 'fire',
	    value: function fire() {
	      if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
	        this.fireSound.play();
	        this.nextFire = this.game.time.now + this.fireRate;
	        var bullet = this.bullets.getFirstDead();
	        bullet.reset(this.soldier.x - 8, this.soldier.y - 8);
	        this.game.physics.arcade.moveToPointer(bullet, 750);
	      }
	    }

	    //zombies spawnen
	  }, {
	    key: 'spawnZombie',
	    value: function spawnZombie() {
	      this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);

	      var randomX = Math.random(-300) * 2000;
	      var randomY = Math.random(-300) * 1000;

	      if (randomX >= 0 && randomX < 750) {
	        randomX -= this.game.width / 2;
	      } else if (randomX >= 750 && randomX <= 1500) {
	        randomX += this.game.width / 2;
	      }

	      if (randomY >= 0 && randomY < 400) {
	        randomY -= this.game.height / 2;
	      } else if (randomY >= 400 && randomY <= 800) {
	        randomY += this.game.height / 2;
	      }

	      var xPos = randomX;
	      var yPos = randomY;

	      var zombie = new _objectsZombie2['default'](this.game, xPos, yPos, this.speed);
	      this.zombies.add(zombie);

	      this.speed += 2;
	    }

	    //speciale zombies spawnen
	  }, {
	    key: 'spawnSpecialZombie',
	    value: function spawnSpecialZombie() {
	      this.game.physics.enable(this.zombie, Phaser.Physics.ARCADE);

	      this.spawnZombieSound.play();

	      var randomX = Math.random(-300) * 2000;
	      var randomY = Math.random(-300) * 1000;

	      if (randomX >= 0 && randomX < 750) {
	        randomX -= this.game.width / 2;
	      } else if (randomX >= 750 && randomX <= 1500) {
	        randomX += this.game.width / 2;
	      }

	      if (randomY >= 0 && randomY < 400) {
	        randomY -= this.game.height / 2;
	      } else if (randomY >= 400 && randomY <= 800) {
	        randomY += this.game.height / 2;
	      }

	      var xPos = randomX;
	      var yPos = randomY;

	      var zombie = new _objectsSpecialZombie2['default'](this.game, xPos, yPos, this.speedSpecial);
	      this.zombies.add(zombie);

	      this.speedSpecial += 2;
	    }
	  }, {
	    key: 'endIt',
	    value: function endIt() {
	      this.backgroundSound.destroy();
	      this.game.state.start('Scoreboard');
	    }
	  }]);

	  return Play;
	})(Phaser.State);

	exports['default'] = Play;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Soldier = (function (_Phaser$Sprite) {
	  _inherits(Soldier, _Phaser$Sprite);

	  function Soldier(game, x, y, frame) {
	    _classCallCheck(this, Soldier);

	    _get(Object.getPrototypeOf(Soldier.prototype), 'constructor', this).call(this, game, x, y, 'soldier', frame);
	    this.anchor.setTo(0.5, 0.5);
	    game.physics.arcade.enableBody(this);
	  }

	  return Soldier;
	})(Phaser.Sprite);

	exports['default'] = Soldier;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Soldier = __webpack_require__(4);

	var _Soldier2 = _interopRequireDefault(_Soldier);

	var Zombie = (function (_Phaser$Sprite) {
	  _inherits(Zombie, _Phaser$Sprite);

	  function Zombie(game, x, y, speed) {
	    _classCallCheck(this, Zombie);

	    _get(Object.getPrototypeOf(Zombie.prototype), 'constructor', this).call(this, game, x, y, 'zombie', speed);
	    this.anchor.setTo(0.5, 0.5);
	    this.game.physics.arcade.enableBody(this);

	    this.speed = speed;

	    this.soldier = new _Soldier2['default'](this.game, this.game.width / 2, this.game.height / 2);
	  }

	  _createClass(Zombie, [{
	    key: 'update',
	    value: function update() {
	      this.rotation = this.game.physics.arcade.angleBetween(this, this.soldier);
	      this.game.physics.arcade.moveToObject(this, this.soldier, this.speed);
	    }
	  }]);

	  return Zombie;
	})(Phaser.Sprite);

	exports['default'] = Zombie;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Soldier = __webpack_require__(4);

	var _Soldier2 = _interopRequireDefault(_Soldier);

	var Zombie = (function (_Phaser$Sprite) {
	  _inherits(Zombie, _Phaser$Sprite);

	  function Zombie(game, x, y, speed) {
	    _classCallCheck(this, Zombie);

	    _get(Object.getPrototypeOf(Zombie.prototype), 'constructor', this).call(this, game, x, y, 'zombieSpecial', speed);
	    this.anchor.setTo(0.5, 0.5);
	    this.game.physics.arcade.enableBody(this);

	    this.speed = speed;

	    this.soldier = new _Soldier2['default'](this.game, this.game.width / 2, this.game.height / 2);
	  }

	  _createClass(Zombie, [{
	    key: 'update',
	    value: function update() {
	      this.rotation = this.game.physics.arcade.angleBetween(this, this.soldier);
	      this.game.physics.arcade.moveToObject(this, this.soldier, this.speed);
	    }
	  }]);

	  return Zombie;
	})(Phaser.Sprite);

	exports['default'] = Zombie;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Menu = __webpack_require__(2);

	var _Menu2 = _interopRequireDefault(_Menu);

	var Scoreboard = (function (_Phaser$State) {
	  _inherits(Scoreboard, _Phaser$State);

	  function Scoreboard() {
	    _classCallCheck(this, Scoreboard);

	    _get(Object.getPrototypeOf(Scoreboard.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Scoreboard, [{
	    key: 'create',
	    value: function create() {
	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.backgroundMusic = this.game.add.audio('menuMusic');
	      this.backgroundMusic.play();
	      this.backgroundMusic.loop = true;

	      this.titleGroup = this.game.add.group();
	      this.title = this.game.add.image(this.game.width / 2, 0, 'title-mini');
	      this.title.anchor.setTo(0.5, 0.5);
	      this.titleGroup.add(this.title);
	      this.titleGroup.y = 100;

	      this.backButton = this.game.add.button(100, this.game.height - 70, 'backButton', this.backClick, this);
	      this.backButton.anchor.setTo(0.5, 0.5);
	      this.game.add.tween(this.backButton).to({ y: this.game.height - 65 }, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

	      this.startButton = this.game.add.button(this.game.width - 100, this.game.height - 70, 'startButton', this.startClick, this);
	      this.startButton.anchor.setTo(0.5, 0.5);
	      this.game.add.tween(this.startButton).to({ y: this.game.height - 65 }, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
	    }
	  }, {
	    key: 'startClick',
	    value: function startClick() {
	      this.game.state.start('Play');
	      this.backgroundMusic.destroy();
	    }
	  }, {
	    key: 'backClick',
	    value: function backClick() {
	      this.game.state.start('Menu');
	      this.backgroundMusic.destroy();
	    }
	  }]);

	  return Scoreboard;
	})(Phaser.State);

	exports['default'] = Scoreboard;
	module.exports = exports['default'];

/***/ }
/******/ ]);