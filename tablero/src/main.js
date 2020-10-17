import Bootloader from './Bootloader.js';
import Camino from './Camino.js';
import Pizarra from './Pizarra.js';
import Turno from './Turno.js';
import Tiempo from './Tiempo.js';

const config = {
    title: "tablero",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 640,
        height: 780,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#ffffff",
    pixelArt: false,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [
        Bootloader,
        Camino,
        Pizarra,
        Turno,
        Tiempo,
    ]
};

new Phaser.Game(config);