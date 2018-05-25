var PocketDachshund = PocketDachshund || {};
 
PocketDachshund.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
 
PocketDachshund.game.state.add('Boot', PocketDachshund.Boot);
//uncomment these as we create them through the tutorial
//PocketDachshund.game.state.add('Preload', PocketDachshund.Preload);
//PocketDachshund.game.state.add('MainMenu', PocketDachshund.MainMenu);
//PocketDachshund.game.state.add('Game', PocketDachshund.Game);
 
PocketDachshund.game.state.start('Boot');