import { Component } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial1';
  nombre:string;
  dui:string;
  monto:number;
  producto = ["p1","p2", "p3", "p4", "p5"];;
  precio:number;
  descripcion:string;
  descuento:string;
  contador: number;
  registro=[];
  compra:any;
  regexLetras = new RegExp('^([^0-9]*)$');
  regexDUI = new RegExp('^[0-9]{8}-[0-9]{1}');

capturar ()
{
  this.descuento = "0%";
  this.contador = 0;
  this.monto = this.precio;
  /*this.registro.forEach(function (comp){
    if(comp.dui == this.dui)
    {
      this.contador +=1;
    }
  });*/

  //Validar que no esté vacío
  console.log(this.nombre);
  console.log(this.producto);
  if(this.isValid(this.nombre, "nombre") && this.isValid(this.dui, "DUI") && this.isValid(this.producto, "producto") && this.isValid(this.precio, "precio"))
  {
    for (let i = 0; i < this.registro.length; i++)
    {
      if (this.registro[i]['dui']==this.dui)
      {
        this.contador +=1;
      }
    }
    if (this.contador >= 2 && this.contador < 4 )
    {
      this.descuento = "5%";
      this.monto = this.precio - (this.precio*0.05);
    }
    if (this.contador >= 4 )
    {
      this.descuento = "10%";
      this.monto = this.precio - (this.precio*0.10);
    }

    this.compra={"nombre":this.nombre,"dui":this.dui, "producto":this.producto,"descripcion":this.descripcion,"precio":this.precio,"descuento":this.descuento,"monto":this.monto};
    this.registro.push(this.compra);
  }
}

isValid(param, type)
{
  if (type == "nombre")
  {
    if (param != "" && param != undefined && this.regexLetras.test(param) == true) return true;
    else
    {
      alert("Ingrese un nombre válido.")
      return false;
    } 
  }

  else if (type == "DUI")
  {
    if (param != "" && param != undefined && this.regexDUI.test(param) == true) return true;
    else
    {
      alert("Ingrese un DUI válido. Ejemplo: 12345678-9")
      return false;
    }
  }

  else if (type == "producto")
  {
    if (param != "" && param != undefined && param[0] == "p") return true;
    
    {
      alert("Seleccione un producto.")
      return false;
    }
  }

  else if (type == "precio")
  {
    if (param != "" && param != undefined && param > 0) return true;
    else
    {
      alert("Ingrese un precio válido.")
      return false;
    }
  }
}

}
