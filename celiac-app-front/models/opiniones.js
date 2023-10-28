let globalIdOpinion = 0

class OpinionModel {
    constructor(idLocal, nombre, texto, estrellas) {
        this.id = globalIdOpinion++;
        this.idLocal = idLocal 
      this.nombre = nombre;
      this.texto = texto;
      this.estrellas = estrellas;
    }
}

export default OpinionModel