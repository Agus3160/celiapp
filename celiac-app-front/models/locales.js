let globald = 0

let opinionesList = JSON.parse(localStorage.getItem('opiniones')) || []

class LocalModel {
    constructor(nombre, descripcion, imagen) {
      this.id = globald++
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.likes = LocalModel.calcularEstrellas(this.id, opinionesList);
      this.opiniones = opinionesList;
    }

    static calcularEstrellas(id,lista){
        let suma = 0
        let count = 0
        lista.forEach(o => {
            if(id == o.idLocal){
                suma += o.estrellas
                count++
            } 
        })
        if(count > 0){
          return (suma/count).toFixed(2)
        }else{
          return 0
        }  
    }
}

export default LocalModel