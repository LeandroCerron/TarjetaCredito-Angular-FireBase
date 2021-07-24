export class TarjetaCredito {
    id?: string;
    titular: string;
    numeroTarjeta: string;
    fechaExpiracion: string;
    cvv: number;
    fechaDeCreacion: Date;
    fechaActualizacion: Date;

    constructor(titular: string, numeroTarjeta: string, fechaExpiracion: string, cvv: number){
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv = cvv;
        this.fechaDeCreacion = new Date();
        this.fechaActualizacion = new Date();
    }
}