export default class ImageButton extends Phaser.GameObjects.Image {
  towerContainer
  x
  y
  texture
  towerImage
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.x = x
    this.y = y
    this.texture = texture
    scene.add.existing(this)
    
    this.setInteractive({ useHandCursor: true })
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.enterButtonRestState() )
      .on('pointerdown', () => this.enterButtonActiveState(x, y, texture, scene) )
      .on('pointerup', () => this.exitButtonActiveState(scene) )
      .on('dragstart', () => this.enterDragState(scene.pointer, scene.gameObject, scene) )
      .on('dragend', () => this.exitDragState(scene.pointer, scene.gameObject) )
      .on('drag', () => this.dragging(scene.pointer, scene.gameObject, scene.dragX, scene.dragY) )
    }
  
  dragging(pointer, gameObject, dragX, dragY)
  {
    this.towerImage.x = dragX;
    this.towerImage.y = dragY;
    console.log(dragX)
    console.log(dragY)
  }

  enterDragState(pointer, gameObject, scene){
    this.towerImage.destroy();
  }

  exitDragState(pointer, gameObject){
    this.towerImage.destroy();
  }

  enterButtonHoverState() {
    // this.setStyle({ fill: '#ff0'});
  }

  enterButtonRestState() {
    // this.setStyle({ fill: '#0f0'});
  }

  enterButtonActiveState(x, y, texture, scene) {
    // this.towerImage
    this.towerImage = scene.add.image( 
      x, 
      y, 
      // texture)
      'RedTower')
      .setScale(2,2)
      .setInteractive({ draggable: true });

    scene.input.setDraggable(this.towerImage);
    // this.towerContainer = scene.add.container(x, y, [ ]);
  }

  exitButtonActiveState(scene)
  {
    this.towerImage.destroy();
  }
}