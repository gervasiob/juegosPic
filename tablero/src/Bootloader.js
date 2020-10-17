class Bootloader extends Phaser.Scene {
    
    constructor() {
        super('Bootloader'); 
    }

    init(){

    }
    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('logo_gamma', 'logo_gamma.png');
        this.load.image('cubix', 'cubix.png');
        this.load.image('evilcubix', 'cubix_fondo.png');
        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        this.scene.launch('Camino');
        this.scene.launch('Pizarra');
        this.scene.launch('Turno');
        this.scene.launch('Tiempo');
        //this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo_gamma');
        this.cubix = this.physics.add.image(100,100,'cubix').setInteractive();
        this.cubix.body.setCollideWorldBounds(true);
        this.cubix.setBounce(0.2).setAlpha(0.5);
  
    }
}
export default Bootloader;