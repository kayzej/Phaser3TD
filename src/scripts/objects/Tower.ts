export default class Tower extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)

    scene.add.existing(this)
    this.setInteractive({ useHandCursor: true, 
                          draggable: true })
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.enterButtonRestState() )
      .on('pointerdown', () => this.enterButtonActiveState(scene, x, y, texture) )
      .on('pointerup', () => this.exitButtonActiveState(scene) )
      .on('dragstart', () => this.enterDragState(scene.pointer, scene.gameObject, scene) )
      .on('dragend', () => this.exitDragState(scene.pointer, scene.gameObject) )
      .on('drag', () => this.dragging(scene.pointer, scene.gameObject, scene.dragX, scene.dragY) )
  }

  enterButtonHoverState() {
  // this.setStyle({ fill: '#ff0'});
  }

  enterButtonRestState() {
  // this.setStyle({ fill: '#0f0'});
  }

  enterButtonActiveState(scene, x, y, texture) {
    new Tower(scene, x, y, texture)
  }

  exitButtonActiveState(scene) {
    this.destroy()
  }

  dragging(pointer, gameObject, dragX, dragY)
  {
    // this.towerImage.x = dragX;
    // this.towerImage.y = dragY;
  }

  enterDragState(pointer, gameObject, scene){
    // this.towerImage.destroy();
  }

  exitDragState(pointer, gameObject){
    // this.towerImage.destroy();
    this.destroy()
  }
}