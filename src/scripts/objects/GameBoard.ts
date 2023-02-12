import { Board, HexagonGrid, QuadGrid, Shape } from 'phaser3-rex-plugins/plugins/board-components.js';
import Tile from './Tile'
const Random = Phaser.Math.Between;
export default class GameBoard extends Board {
  constructor(scene, config) {
    super(scene, config);
    this
    .forEachTileXY(function (tileXY, board) {
        new Tile(board, tileXY);
        // var chess = new Shape(, tileXY.x, tileXY.y,0, Random(0,0xffffff),0.7);
    })
    .setInteractive()
    .on('tiledown', function (pointer, tileXY) {
        /* do stuff to Tile */
        console.log(tileXY.x);
    }, this);
  }
}