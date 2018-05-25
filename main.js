var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'), Main = function () {};

Main.prototype = {

  preload: function () {
    game.load.image('bg',    'assets/images/splashbg');
    game.load.image('loading',  'assets/images/loading.png');
    game.load.image('brand',    'assets/images/logo.png');
    game.load.script('splash',  'states/Splash.js');
  },

  create: function () {
    game.state.add('splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');