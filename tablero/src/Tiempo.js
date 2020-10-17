class Tiempo extends Phaser.Scene {
    
    constructor() {
        super('Tiempo'); 
    }

    init(){

    }
    preload() {
        console.log('Tiempo');
        this.load.setPath('./assets/');

        this.load.image('logo_gamma', 'logo_gamma.png');
        this.load.image('cubix', 'cubix.png');
        this.load.image('evilcubix', 'cubix_fondo.png');
        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        
        //al finalizar tiempo, suma o resta punto
        //pone todo en blanco
        //animación tiempo
    }
    update(time, delta){
        //cuanta el tiempo
    }
}
export default Tiempo;