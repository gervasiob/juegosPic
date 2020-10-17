const db = {         //creo mi base de datos
    jugadorActual: 'cero',
    tipo: [    //array vacía del tablero
        [-1,-1,-1], //vacíos
        [-1,-1,-1],
        [-1,-1,-1],
    ],
    puntos: {
        equis: 0,
        cero: 0
    }
};


export default db;