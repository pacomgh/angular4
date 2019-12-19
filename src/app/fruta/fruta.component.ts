import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: 'fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = "Componente de fruta";
    public listado_fruta = "Naranja, manzana, pera, y sandia";

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any>;


    constructor(){
        this.nombre = "Francisco Guzman";
        this.edad=26;
        this.mayorDeEdad=true;
        this.trabajos=['carpintero', 44, 'fontanero'];
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(22);
        alert(this.nombre + " "+this.edad);
    }

    cambiarNombre(){
        this.nombre = "Pedro Perez";
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}