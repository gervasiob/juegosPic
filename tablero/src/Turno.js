import db from "./share/share.js";

class Turno extends Phaser.Scene {
    
    constructor() {
        super('Turno'); 
    }

    init(){

    }
    preload() {
        console.log('Turno');
        this.load.setPath('./assets/');
        this.load.image('fuente','fuentes/fuente.png');
        this.load.json('fuente_json','fuentes/fuente.json');//carga en memoria el json

        this.load.image('dato', 'cero.png');
        
        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        
        const fuenteConfig = this.cache.json.get('fuente_json');
        this.dado =Phaser.Math.Between(1,6);
        console.log(this.dado);
      
        this.cache.bitmapFont.add('nombreFuente',Phaser.GameObjects.RetroFont.Parse(this,fuenteConfig));
        this.numero = this.add.bitmapText(50,50,'nombreFuente','NUMERO DEL DADO: ' + this.dado,30, 0).setTint(0x444444);
        
        this.carta = this.add.bitmapText(200,250,'nombreFuente','MENSAJE DE LA CARTA OBTENIDA',30, 0).setTint(0x444444);

        //habilita boton de tirar dados
        //animacion dados
        //sonido de dados
        //muestra resultado
        //obtener la carta

        //logica si acerto o no y mover el jugador 1 casillero
        //puntos
    }
}
export default Turno;