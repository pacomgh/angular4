//modelo empleado
//export se usa para poder importar la clase desde otro archivo ts
export class Empleado{
    /*
    public nombre:string;
    public edad:number;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }*/
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){}
}