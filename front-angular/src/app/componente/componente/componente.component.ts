import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {

  constructor(private servicio:ServicioService) { }
  texto:any
  ngOnInit(): void {
    this.servicio.getData().subscribe(res=>{
      this.texto = res.message
    })
  }

}
