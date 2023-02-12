export default class ImageButton extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame, scale, callback) {
    super(scene, x, y, texture, frame);
    
    scene.add.existing(this)
    this.setScale(scale.x, scale.y);
    
    this.setInteractive({ useHandCursor: true })
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.enterButtonRestState() )
      .on('pointerdown', () => this.enterButtonActiveState() )
      .on('pointerup', () => {
        this.enterButtonHoverState();
        callback(texture);
      });
  }

  enterButtonHoverState() {
    // this.setStyle({ fill: '#ff0'});
  }

  enterButtonRestState() {
    // this.setStyle({ fill: '#0f0'});
  }

  enterButtonActiveState() {
    // this.setStyle({ fill: '#0ff' });
  }
}