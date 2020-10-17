import db from "./share/share.js";

class Camino extends Phaser.Scene {
    
    constructor() {
        super('Camino'); 
    }

    init(){

    }
    preload() {
        console.log('Camino');
        this.load.on('complete', () => {
            console.log('Load complete');
        });
         this.load.setPath('./assets/');
        this.load.image('cuadro','cuadro.png');
    }

    create() {
        //this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo_gamma');
        this.evilcubix = this.physics.add.image(200,200,'evilcubix').setInteractive();
                console.log(this.evilcubix);

        this.evilcubix.body.setCollideWorldBounds(true);
    
        this.cuadro1 = this.add.image(500,700,'cuadro').setTintFill(0xE06666);
        this.cuadro2 = this.add.image(500,600,'cuadro').setTintFill(0xFFFF00);
        this.cuadro3 = this.add.image(500,500,'cuadro').setTintFill(0x00FF00);
        this.cuadro4 = this.add.image(500,400,'cuadro').setTintFill(0x0B5394);

        //diseñar todo el camino
        //mini base de datos de donde esta

    }
}
export default Camino;