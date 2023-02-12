import { Shape } from 'phaser3-rex-plugins/plugins/board-components.js';

export default class Tile extends Shape {
  constructor(board, tileXY) {
      var scene = board.scene;
      // Shape(board, tileX, tileY, tileZ, fillColor, fillAlpha, addToBoard)
      super(board, tileXY.x, tileXY.y, 0);
      scene.add.existing(this);
      this.setStrokeStyle(1, 0x000000, 0.5);
      this.setFillStyle(0x808080, 0.5);
  }
}
