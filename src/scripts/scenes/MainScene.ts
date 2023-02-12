import ImageButton from '../objects/ImageButton'
import GameBoard from   '../objects/GameBoard'
import Tower from       '../objects/Tower'

export default class MainScene extends Phaser.Scene {
  
  marine
  gameBoard
  nextButton
  settings
  heart
  creeps
  dollarSign
  blueTower

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add.image( 0, 0, 'Background').setScale(3,3);

    const cellSize                      = 40
    const gameWidth                     = 1280
    const gameHeight                    = 720
    const gameBoardX                    = 120
    const gameBoardY                    = 120
    const leftOffset                    = 300
    const topOffset                     = 80
    const rightOffset                   = 380
    const vertWidth                     = 20
    const vertHeight                    = 221
    const borderColor                   = 0x808080
    const horizWidth                    = 261
    const horizHeight                   = 20

    var r1 = this.add.rectangle(        leftOffset  + vertWidth/2,
                                        topOffset   + vertHeight/2,
                                        vertWidth,
                                        vertHeight,
                                        borderColor);

    var r2 = this.add.rectangle(        leftOffset  + vertWidth/2,
                                        rightOffset + vertHeight/2 - 1,
                                        vertWidth,
                                        vertHeight,
                                        borderColor);

    var r3 = this.add.rectangle(        leftOffset  + horizWidth/2,
                                        topOffset   + horizHeight/2,
                                        horizWidth,
                                        horizHeight,
                                        borderColor);

    var r4 = this.add.rectangle(        leftOffset  + rightOffset + horizWidth/2,
                                        topOffset   + horizHeight/2,
                                        horizWidth,
                                        horizHeight,
                                        borderColor);
  
    var r5 = this.add.rectangle(        leftOffset + cellSize*16 - vertWidth/2,
                                        topOffset  + vertHeight/2,
                                        vertWidth,
                                        vertHeight,
                                        borderColor);

    var r6 = this.add.rectangle(        leftOffset + cellSize*16 - vertWidth/2,
                                        rightOffset + vertHeight/2 - 1,
                                        vertWidth,
                                        vertHeight,
                                        borderColor);

    var r7 = this.add.rectangle(        leftOffset  + horizWidth/2,
                                        topOffset   + cellSize*13 - horizHeight/2,
                                        horizWidth,
                                        horizHeight,
                                        borderColor);

    var r8 = this.add.rectangle(        leftOffset  + rightOffset + horizWidth/2,
                                        topOffset   + cellSize*13 - horizHeight/2,
                                        horizWidth,
                                        horizHeight,
                                        borderColor);

    this.gameBoard = new GameBoard(this, {
      grid: {
          gridType: 'quadGrid',
            x: leftOffset + 2*vertWidth,
            y: gameBoardY,
            cellWidth: 40,
            cellHeight: 40,
            type: 0
        },
        width: 15,
        height: 12
    });

    this.creeps                         = this.physics.add.group();

    // this.dollarSign                     = this.add.image( 
    //                                     16*2, 9*4, 'DollarSign')
    //                                     .setScale(1/4, 1/4);

    // this.heart                          = this.add.image( 
    //                                     16*6, 9*4, 'Heart')

    // this.settings                       = this.add.image( 
    //                                     16*76, 9*4, 'Settings')
    //                                     .setScale(1/16, 1/16);

    // this.nextButton                     = new ImageButton( this, 
    //                                     64, 9*74, 'Next', "", 
    //                                     { x: 1/8, y:1/8 }, 
    //                                     () => this.startRound(this.creeps));

    // this.blueTower                      = new ImageButton( 
    //                                     this,
    //                                     16*76, 
    //                                     9*16, 
    //                                     'BlueTower',
    //                                     '',
    //                                     { x: 2, y:2 }, 
    //                                     () => this.dragTower());
    this.blueTower                      = new Tower( 
                                        this,
                                        16*76,
                                        9*16,
                                        'BlueTower')

    this.input.dragDistanceThreshold = 16;

    this.input.on('drag', function(pointer, gameObject, dragX, dragY){
      gameObject.x = dragX;
      gameObject.y = dragY;
    })
  }

  update() {

  }

  startRound(creeps) {
    console.log('start');
    creeps.createFromConfig({
      key: 'creep',
      repeat: 5,
      setXY: { x: 32, y: 32, stepX: 32 },
      setScale: {x: .5, y: .5}
    });
  }
}

// this.physics.add.collider(this.creeps, this.creeps);
// this.physics.add.collider(this.marines, this.creeps);
// this.physics.add.collider(this.borderGroup, this.creeps);
