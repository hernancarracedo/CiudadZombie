/* Aca podes encontrar al zombie caminante cuyo codigo esta completo. Podes
modificarlo para hacer que se comporte de la forma que mas te guste.
Este zombie recibe los mismos parametros que el objeto Enemigo. Podes consultar
el archivo Enemigo.js para entender que es cada uno. */

var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Caminantes */
ZombieCaminante.prototype = Object.create(Enemigo.prototype);
ZombieCaminante.prototype.constructor = ZombieCaminante;

ZombieCaminante.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  if (Math.random() < 0.5) {
    this.x -= this.velocidad;
    this.y -= this.velocidad;
  } else {
    //Sino, hace otro movimiento
    this.y += this.velocidad;
    this.x -= this.velocidad;
  }

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
    // todo el bloque que sigue hasta la proxima linea comentada tiene como objetivo
    // definir hacia que lado se dirige cada zombie y dependiendo de la direccion poner 
    // el sprite que le corresponda segun sea derecha o izquierda
    if (this.x < this.rangoMov.desdeX) {
      switch(this.sprite) {
        case "imagenes/zombie1.png":
        this.sprite = 'imagenes/zombie1_d.png';
        break;
        case "imagenes/zombie2.png":
        this.sprite = 'imagenes/zombie2_d.png';
        break;
        case "imagenes/zombie3.png":
        this.sprite = 'imagenes/zombie3_d.png';
        break;
        case "imagenes/zombie4.png":
        this.sprite = 'imagenes/zombie4_d.png';
        break;
      }
    } else {
      switch(this.sprite) {
        case "imagenes/zombie1_d.png":
        this.sprite = 'imagenes/zombie1.png';
        break;
        case "imagenes/zombie2_d.png":
        this.sprite = 'imagenes/zombie2.png';
        break;
        case "imagenes/zombie3_d.png":
        this.sprite = 'imagenes/zombie3.png';
        break;
        case "imagenes/zombie4_d.png":
        this.sprite = 'imagenes/zombie4.png';
        break;
      }	
    }
    // hasta acá el codigo que decide la imagen del zombie segun el sentido de su caminar.
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }
}