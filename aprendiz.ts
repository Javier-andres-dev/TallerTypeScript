export enum NivelEducativo{
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrao"
}

export class  Aprendiz {
    constructor(
        public nombre:string,
        public apellido:string,
        public avatar:string,
        public edad:number,
        public nivelEducativo :NivelEducativo) 
        {  

        }
}