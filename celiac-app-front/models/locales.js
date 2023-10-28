let globald = 0

class LocalModel {
    constructor(nombre, descripcion, imagen, likes, opiniones) {
      this.id = globald++
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.likes = likes;
      this.opiniones = opiniones;
    }
}

export default LocalModel