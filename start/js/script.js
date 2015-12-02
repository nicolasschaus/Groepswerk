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

	var _classesStatesScoreboard = __webpack_require__(6);

	var _classesStatesScoreboard2 = _interopRequireDefault(_classesStatesScoreboard);

	var _classesStatesPlay = __webpack_require__(3);

	var _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);

	var game = undefined;

	var init = function init() {
	  game = new Phaser.Game(1050, 650, Phaser.AUTO);
	  game.state.add('Preload', _classesStatesPreload2['default'], false);
	  game.state.add('Menu', _classesStatesMenu2['default'], false);
	  game.state.add('Scoreboard', _classesStatesScoreboard2['default'], false);
	  game.state.add('Play', _classesStatesPlay2['default'], false);
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
	  }, {
	    key: 'create',
	    value: function create() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'onLoadComplete',
	    value: function onLoadComplete() {
	      this.game.state.start('Play');
	    }
	  }]);

	  return Preload;
	})(Phaser.State);

	exports['default'] = Preload;
	module.exports = exports['default'];

/***/ },
/* 2 */
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

	var _objectsZombie = __webpack_require__(5);

	var _objectsZombie2 = _interopRequireDefault(_objectsZombie);

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

	      this.zombie = new _objectsZombie2['default'](this.game, 50, 50);
	      this.game.add.existing(this.zombie);

	      this.titleGroup = this.game.add.group();
	      this.title = this.game.add.image(this.game.width / 2, this.game.height / 2 - 210, 'title');
	      this.titleGroup.add(this.title);
	      this.titleGroup.y = 100;
	      this.title.anchor.setTo(0.5, 0.5);

	      this.startButton = this.game.add.button(this.game.width / 2 - 200, 500, 'startButton', this.startClick, this);
	      this.startButton.anchor.setTo(0.5, 0.5);
	      this.game.add.tween(this.startButton).to({ y: 505 }, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

	      this.scoreButton = this.game.add.button(this.game.width / 2 + 125, 500, 'scoreButton', this.scoreClick, this);
	      this.scoreButton.anchor.setTo(0.5, 0.5);
	      this.game.add.tween(this.scoreButton).to({ y: 505 }, 750, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      //this.zombie.walk;
	    }
	  }, {
	    key: 'startClick',
	    value: function startClick() {
	      this.game.state.start('Play');
	    }
	  }, {
	    key: 'scoreClick',
	    value: function scoreClick() {
	      this.game.state.start('Scoreboard');
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

	      this.game.physics.startSystem(Phaser.Physics.ARCADE);

	      this.background = this.game.add.sprite(0, 0, 'background');
	      this.wooden = this.game.add.sprite(0, this.game.height - 148, 'info-pallet');

	      this.soldier = new _objectsSoldier2['default'](this.game, this.game.width / 2, this.game.height / 2);
	      this.game.add.existing(this.soldier);

	      this.zombie = new _objectsZombie2['default'](this.game, 100, 100);
	      this.game.add.existing(this.zombie);

	      this.wavesText = this.game.add.bitmapText(this.game.width / 2 - 40, 25, 'flappyfont', "zombies slaugthered x", 16);
	      this.wavesText.anchor.setTo(0.5, 0.5);
	      this.scoreText = this.game.add.bitmapText(this.game.width / 2 + 90, 25, 'flappyfont', this.score.toString(), 24);
	      this.scoreText.anchor.setTo(0.5, 0.5);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      //this.game.physics.arcade.collide(this.bird, this.ground, this.groundHitHandler, null, this); - collision with zombies
	    }
	  }, {
	    key: 'zombieHitHandler',
	    value: function zombieHitHandler() {
	      this.deathSound.play();
	      this.deathHandler();
	    }
	  }, {
	    key: 'deathHandler',
	    value: function deathHandler() {
	      this.soldier.kill();

	      /*  this.scoreboard = new Scoreboard(this.game);
	          this.game.add.existing(this.scoreboard); - komt nog
	          this.scoreboard.show(this.score);*/
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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var cursors = undefined;
	var bullets = undefined;
	var fireRate = undefined;
	var nextFire = undefined;

	var Soldier = (function (_Phaser$Sprite) {
	  _inherits(Soldier, _Phaser$Sprite);

	  function Soldier(game, x, y, frame) {
	    _classCallCheck(this, Soldier);

	    _get(Object.getPrototypeOf(Soldier.prototype), 'constructor', this).call(this, game, x, y, 'soldier', frame);
	    this.anchor.setTo(0.5, 0.5);

	    this.game.physics.arcade.enableBody(this);

	    this.bullets = bullets;
	    this.fireRate = 1000;
	    this.nextFire = 0;

	    cursors = game.input.keyboard.createCursorKeys();

	    //this.shootSound = this.game.add.audio('shoot');
	  }

	  _createClass(Soldier, [{
	    key: 'create',
	    value: function create() {
	      bullets = game.add.group();
	      bullets.enableBody = true;
	      bullets.physicsBodyType = Phaser.Physics.ARCADE;
	      bullets.createMultiple(30, 'bullet', 0, false);
	      bullets.setAll('anchor.x', 0.5);
	      bullets.setAll('anchor.y', 0.5);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (cursors.up.isUp || cursors.down.isUp || cursors.left.isUp || cursors.right.isUp) {
	        this.body.velocity.setTo(0, 0);
	      }
	      if (cursors.up.isDown) {
	        this.body.velocity.y -= 75;
	      } else if (cursors.down.isDown) {
	        this.body.velocity.y += 75;
	      }
	      if (cursors.left.isDown) {
	        this.body.velocity.x -= 150;
	      } else if (cursors.right.isDown) {
	        this.body.velocity.x += 150;
	      }
	      if (this.game.input.activePointer.isDown) {
	        this.fire();
	      }

	      this.rotation = this.game.physics.arcade.angleToPointer(this);

	      /*    if (this.game.input.mousePointer.isDown)
	          {
	              this.game.physics.arcade.moveToPointer(this, 200);
	      
	              if (Phaser.Rectangle.contains(this.body, this.game.input.x, this.game.input.y))
	              {
	                  this.body.velocity.setTo(0, 0);
	              }
	          }else {
	              this.body.velocity.setTo(0, 0);
	          }*/
	    }
	  }, {
	    key: 'fire',
	    value: function fire() {
	      console.log("fire!");
	      /*    if (this.game.time.now > this.nextFire) {
	              this.nextFire = this.game.time.now + fireRate;
	              let bullet = this.bullets.getFirstExists(false);
	              this.bullet.rotation = this.game.physics.arcade.moveToPointer(this.bullet, 1000, this.game.input.activePointer, 500);
	          }*/
	    }
	  }]);

	  return Soldier;
	})(Phaser.Sprite);

	exports['default'] = Soldier;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Zombie = (function (_Phaser$Sprite) {
	  _inherits(Zombie, _Phaser$Sprite);

	  function Zombie(game, x, y, frame) {
	    _classCallCheck(this, Zombie);

	    _get(Object.getPrototypeOf(Zombie.prototype), 'constructor', this).call(this, game, x, y, 'zombie', frame);
	    this.anchor.setTo(0.5, 0.5);

	    this.game.physics.arcade.enableBody(this);
	  }

	  _createClass(Zombie, [{
	    key: 'update',
	    value: function update() {}
	  }]);

	  return Zombie;
	})(Phaser.Sprite);

	exports['default'] = Zombie;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	    }
	  }, {
	    key: 'backClick',
	    value: function backClick() {
	      this.game.state.start('Menu');
	    }
	  }]);

	  return Scoreboard;
	})(Phaser.State);

	exports['default'] = Scoreboard;
	module.exports = exports['default'];

/***/ }
/******/ ]);