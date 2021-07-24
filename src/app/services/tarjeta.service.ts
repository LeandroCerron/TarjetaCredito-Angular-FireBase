import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { TarjetaCredito } from '../models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private tarjeta$ = new Subject<TarjetaCredito>();

  constructor(private firestore: AngularFirestore) {
  }

  guardarTarjetaService(tarjeta: TarjetaCredito): Promise<any>{
    return this.firestore.collection('tarjetas').add(tarjeta);
  }

  obtenerTarjetas(): Observable<any>{
    return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaDeCreacion', 'asc')).snapshotChanges();
  }

  eliminarTarjeta(id: string): Promise<any>{
    return this.firestore.collection('tarjetas').doc(id).delete();
  }

  editarTarjeta(id: string, tarjeta: any): Promise<any>{
    return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  }

  addTarjetaEdit(tarjeta: TarjetaCredito){
    this.tarjeta$.next(tarjeta);
  }

  getTarjetaEdit(): Observable<TarjetaCredito>{
    return this.tarjeta$.asObservable();
  }
}
