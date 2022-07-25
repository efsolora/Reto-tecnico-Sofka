//clase nave
export class Nave {
  nombre = "";
  pais = "";
  añoActividad = Number;
  tipo_nave = "";

  constructor(id, nombre, pais, añoActividad, tipo_nave) {
    this.id = id;
    this.nombre = nombre;
    this.pais = pais;
    this.añoActividad = añoActividad;
    this.tipo_nave = tipo_nave;
  }
}
