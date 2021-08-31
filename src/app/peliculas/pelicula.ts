export interface PeliculaoCreacionDTO{
    titulo:string;
    resumen:string;
    enCines:boolean;
    fechaLanzamiento:Date;
    trailer:string;
    poster:File;
}

export interface PeliculaDTO{
    titulo:string;
    resumen:string;
    enCines:boolean;
    fechaLanzamiento:Date;
    trailer:string;
    poster:string;
}