var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bunny', 'assets/sprites/bunny.png');
}

function create() {

    var rt = this.add.renderTexture(400, 300, 800, 600);

    var bunny = this.make.sprite({ key: 'bunny', add: false });

    rt.draw(bunny.texture, bunny.frame, 0, 0);
}
