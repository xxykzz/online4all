class cart{
    
    constructor(){
        this.carrito = []
    }

    addNewProduct(producto){
        this.carrito.push(producto)
        alert('Se ha agregado el prodcuto al  carrito');
    }

    removeProduct(producto){
        this.carrito.pop(producto);
        alert('Se ha agregado el prodcuto al  carrito');
    }

    getTotalProducts(){
        console.log(this.carrito)
    }
}

