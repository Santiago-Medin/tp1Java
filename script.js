function solicitarNombre() {
    alert("Bienvenido a Skyy Phone")
    let nombre = prompt ("ingrese su nombre");
    while(nombre === ""){
        nombre = prompt ("ingrese su nombre");
    }
}

function mostrarProductos(){
    let producto;
    do{
    producto = parseInt(prompt("Que producto llevara? : \n1) Iphone Nuevo\n2) Iphone Usado \n3) Reparacion"))
    } while (producto != 1 && producto!=2 && producto!=3)
    switch(producto){
        case 1:
            return "Iphone Nuevo";
        case 2:
            return "Iphone Usado"
        case 3:
            return "Reparacion"        
    }
}

function validarPrecio(producto){
    if(producto==="Iphone Nuevo"){
        return 1200;
    }
    else if (producto==="Iphone Usado"){
        return 200;
    }
    else if(producto==="Reparacion"){
        return 100;
    }
}

function cobrar(nombre,precio){
    alert("Usted lleva el siguiente producto: "+nombre+"\nPrecio: $"+precio);
    let pago = parseInt(prompt("Con cuanto pagas?"))
    if(pago> precio){
        alert("Gracias ! su vuelto es $ " + (pago-precio))
    } else{
        alert("No te alcanza !")
    }
}


solicitarNombre();
let productoNombre = mostrarProductos();
let precioProducto = validarPrecio(productoNombre);
cobrar(productoNombre, precioProducto);