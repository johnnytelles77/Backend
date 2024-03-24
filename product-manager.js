console.log("-----------------")
console.log("Product Manager")
console.log("-----------------")




let  products = [] /// Array vacio esperando recibir productos


const addProduct = (title, description, price, thumbnail, code, stock) => {  /// Key Products
    const newProduct ={
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }
    if(Object.values(newProduct).includes(undefined)) { /// Verifica que todos los campos tengan un valor 
        console.log(" Todos los campos son obligatorios")  /// Si algun valor undefined te manada este mesnaje enn la consola
        return
    } 

    const productExist = products.find((product) => product.code === code)  /// Verificar si el producto ya existe en el array basado en el codigo
    if (productExist) {
        console.log(`El producto ${title} con el codigo ${code} ya esta en existencia`)
        return 
    }
    products.push(newProduct) /// agregar un nuevo producto al array 

}





const getProducts = () => {  /// Muestra los productos del array
    console.log(products)
    return products;
}





const getProductById = (id) => {
    const product = products.find( product => product.id === id) /// buscamos en producto en el array en base al Id
    if(!product) {
        console.log(`No se ha encontrado el producto con el id: ${id}`)  /// si no lo encuentra te da este mensaje en la consola
        return
    }
}



/// Agregando Productos al array

addProduct("Producto 5", "el quinto producto", 899, "http://www.google.com", "ADF126");
addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10);
addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10);
addProduct("Producto 3", "el tercer producto", 899, "http://www.google.com", "ADF124", 10);
addProduct("Producto 4", "el cuarto producto", 899, "http://www.google.com", "ADF125", 10);
addProduct("Producto 6", "el sexto producto", 900, "http://www.google.com", "ADF129", 10);

/* getProducts() */   /// llamando los productos que an sido agregados al array

getProductById(4)   /// llamando productos del array con el Id