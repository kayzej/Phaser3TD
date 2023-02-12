export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    this.load.setBaseURL('./');
    this.load.image('creep',            '../assets/random/zergling.png');
    this.load.image('marine',           '../assets/random/tower_sized.png');
    this.load.image('path',             '../assets/random/path.png');
    this.load.image('button',           '../assets/random/start_button.png');
    this.load.image('base',             '../assets/random/command_center.png');
    this.load.image('Background',       '../assets/Background/background.jpg');

    this.load.image('border',           '../assets/Building/Building_12.png');

    this.load.image('Next',       '../assets/Icon/next.png');
    this.load.image('DollarSign',       '../assets/Icon/dollar-sign.png');
    this.load.image('Heart',            '../assets/Icon/heart.png');
    this.load.image('Settings',         '../assets/Icon/settings.png');
    this.load.image('Entrance',         '../assets/Icon/entrance.png');

    this.load.image('BlueTower',        '../assets/Tower/Blue/Move/Blue_Tower move_0.png');
    this.load.image('RedTower',         '../assets/Tower/Red/Move/Red_Tower move_0.png');
    this.load.image('GreenTower',       '../assets/Tower/Green/Move/green_Tower move_0.png');
    this.load.image('YellowTower',      '../assets/Tower/Yellow/Move/Yellow_Tower move_0.png');
    this.load.image('OrangeTower',      '../assets/Tower/Orange/Move/Orange_Tower move_0.png');

  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
