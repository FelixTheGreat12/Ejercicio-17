export interface heroes{
    estado: number,
    msg: String,
    heroes:
    [
        {
            id?: number,
            nombre: number,
            poder: String,
            universo: String,
            debilidad: String,
            urlImagen: String
        }    
    ],   
    links:[
        {
            rel: String,
            href: String
        }
    ]
}