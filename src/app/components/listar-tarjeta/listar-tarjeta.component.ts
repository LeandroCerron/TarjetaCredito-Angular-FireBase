import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {
  listTarjeta: TarjetaCredito[] = [];

  constructor(private _tarjetaService: TarjetaService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    this._tarjetaService.obtenerTarjetas().subscribe(data => {
      this.listTarjeta = [];

      data.forEach((element: any) => {
        this.listTarjeta.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      })
      
    })
  }

  eliminarTarjeta(id: any){
    this.toastr.clear();
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.success('Tarjeta eliminada de forma exitosa!', 'Tarjeta Eliminada');
    }, error => {
      console.log(error);
      this.toastr.error('Error al intentar eliminar la tarjeta!', 'Error');
    })
  }

  editarTarjeta(tarjeta: TarjetaCredito){
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }

}
