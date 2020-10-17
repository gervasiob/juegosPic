class Pizarra extends Phaser.Scene {
    
    constructor() {
        super('Pizarra'); 
    }

    init(){

    }
    preload() {
        console.log('Pizarra');
        this.load.setPath('./assets/');
            


        this.load.image('cubix', 'cubix.png');
        
        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        
        //this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo_gamma');
        this.pizarron = this.add.image(300,300,'pizarron').setTintFill(0xffffff);
        this.puntero = this.add.image(300,300,'cubix').setScale(0.2,0.2);
        const eventos = Phaser.Input.Events;
        
        // this.input.on(eventos.POINTER_MOVE,(eventos) =>{ 
        //     if(eventos.isDown){
        //         this.puntero = this.add.image(eventos.worldX,eventos.worldY,'cubix').setScale(0.2,0.2)
           
        //     }
        // })
        this.input.on(eventos.POINTER_MOVE, (eventos)=>{    
            
        if (eventos.worldX > 100) {
            
            if (eventos.worldY >100) {
                  if(eventos.isDown){
                this.puntero = this.add.image(eventos.worldX,eventos.worldY,'cubix').setScale(0.2,0.2)
           
            }
            }
        }
        })

        const kCodes = Phaser.Input.Keyboard.KeyCodes;
        this.cursor = this.input.keyboard.createCursorKeys(); //crea un cursor con muchas teclas
        const keyboard = Phaser.Input.Keyboard;
            console.log(this.cursor);
        this.teclaA = this.input.keyboard.addKey(kCodes.A);
        
        this.teclaA.on('down', ()=>{
            console.log('Tecla A');
        })
        this.physics.add.collider(this.cubix,this.evil_cubix, () => {
            //console.log('Ha colisionado');
            this.cubix.setVelocity(0);
            this.cubix.body.setAcceleration(0); //deja de acelerar
        }); //quienes colisionan

        this.cursor.up.on('down',()=> {
            this.evil_cubix.body.setVelocity(-400);
        })

        //definir los limites
        //cambiar de color
        //borrar
        
        
}
}
export default Pizarra;