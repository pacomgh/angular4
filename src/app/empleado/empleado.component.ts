import { Component } from '@angular/core';
//utilizar una clase externa
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'titulo del componente empleado';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;

    constructor(){
        this.empleado = new Empleado('David Lopez', 21, 'Cocinero', true);
        //definimos un array con distintos objetos dentro
        this.trabajadores = [
            new Empleado('Fernando Perez', 27,'Cocinero', true),
            new Empleado('Ana Martinez', 39, 'Administrativo', true),
            new Empleado('Alfredo Gaitan', 45, 'Gerente', true),
            new Empleado('Francisco Guzman', 21, 'Programador', false)
        ];
        this.trabajador_externo = true;
        this.color='green';
    }

    ngOnInit(){
        
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}