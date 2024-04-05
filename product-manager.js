console.log("-----------------")
console.log("Product Manager")
console.log("-----------------")



class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {  // Key Products
        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        if (Object.values(newProduct).includes(undefined)) {  // Verifica que todos los campos tengan un valor 
            console.log("Todos los campos son obligatorios");  // Si algún valor es undefined, se muestra este mensaje en la consola
            return;
        }

        const productExist = this.products.find(product => product.code === code);  // Verificar si el producto ya existe en el array basado en el código
        if (productExist) {
            console.log(`El producto ${title} con el código ${code} ya está en existencia`);
            return;
        }

        this.products.push(newProduct);  // agregar un nuevo producto al array 
    }

    getProducts() {  // Muestra los productos del array
        console.log(this.products);
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);  // buscamos en producto en el array en base al Id
        if (!product) {
            console.log(`No se ha encontrado el producto con el ID: ${id}`);  // si no lo encuentra, se muestra este mensaje en la consola
            return;
        }
        console.log(product);
        return product;
    }
}

// Ejemplo de uso
const manager = new ProductManager();
manager.addProduct("Producto 5", "el quinto producto", 899, "http://www.google.com", "ADF126", 10);
manager.addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10);
manager.addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10);
manager.addProduct("Producto 3", "el tercer producto", 899, "http://www.google.com", "ADF124", 10);
manager.addProduct("Producto 4", "el cuarto producto", 899, "http://www.google.com", "ADF125", 10);
manager.addProduct("Producto 6", "el sexto producto", 900, "http://www.google.com", "ADF129", 10);

// manager.getProducts();
manager.getProductById(4);
