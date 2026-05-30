const prompt = require(`prompt-sync`)();


//Ejercicio 1 - Libro
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;
 
  this.prestar = function () {
    if (!this.prestado) {
      console.log(`el libro ${this.titulo} esta disponible, te lo prestamo`);
      this.prestado = true;
    } else {
      console.log(`el libro ${this.titulo} no esta disponible`);
    }
  };
}
 
let libro1 = new Libro("aleluya", "diosito");
libro1.prestar();
libro1.prestar();
 
let libro2 = new Libro("aleluya2", "diosito2");
libro2.prestar();
libro2.prestar();

// Ejercicio 2 - Lista de Compras

function ListaCompras() {
    this.productos = [];
    this.agregar = function() {
        for (let i = 1; i <= 3; i++) {
            this.productos.push(prompt(`Digite el nombre del producto a agregar: `));
        }
    }
    this.mostrar = function() {
        for (let i = 0; i <= this.productos.length; i++) {
            console.log(i+1 + ". " + this.productos[i]);
        }
    }
}

let compra = new ListaCompras();
compra.agregar();
compra.mostrar();


// Ejercicio 3 - Reproductor de música 
function Reproductor() {
    this.estado = "detenido";
    this.play = function() {
        if (this.estado == "pausado" || this.estado == "detenido") {
            console.log("Reproduciendo música.");
            this.estado = "reproduciendo";
        }
        else if (this.estado == "reproduciendo")
            console.log("La música se está reproduciendo.");
            
    }
    this.pausar = function() {
        if (this.estado == "reproduciendo") {
            console.log("Se ha pausado la música.");
            this.estado = "pausado";
        }
        else if (this.estado == "pausado")
            console.log("no hay reproducciones en la lista de canciones.");    
    }
    this.detener = function() {
        this.estado = "detenido"
        console.log("La música se ha detenido.");  
    }
}

let ipod = new Reproductor();
let mp3 = new Reproductor();
ipod.estado("reproduciendo");
ipod.estado("pausado");


// Ejercicio 4 - Carrito
function Carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function () {
        this.productos.push(prompt("Agregue el nombre del prodcuto: "));
        this.total += parseInt(prompt("ingrese el precio del producto: "));
    };
        this.calcularDescuento = function () {
        if (this.total > 100) {
            this.total = this.total - this.total * 0.1;
            console.log(`el valor con un descuento de 10% es ${this.total}`);

        } else if (this.total > 50 && this.total <= 100) {
            this.total = this.total - this.total * 0.05;
            console.log(`el valor con un descuento de 5% es ${this.total}`);

        } else {
            console.log(`Sin descuento el valor es: ${this.total}`);
        }
    };
}

let compra = new Carrito()
compra.agregarProducto()
compra.calcularDescuento()