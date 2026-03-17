//64-20,48-15
const config = {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('bi1', 'image/bibun/bibun1.png');
}

function create() {

  const width = this.scale.width;
  const height = this.scale.height;
  
  let bi1 = this.add.image(0,0,'biB')
    .setOrigin(0)
    .setDisplaySize(width, height)
    .setAlpha(0);

  const back = this.add.rectangle(0,0,width,height,0xffffff)
    .setDisplaySize(width, height)
    .setOrigin(0.5);
}
