console.log("-----------------")
console.log("Product Manager")
console.log("-----------------")

const fs = require("fs")

let pathfile = "./data/products.json"  /// la ruta del json la ponemos en una variable 

class ProductManager {
    constructor() {
        this.products = [];
    }

   async addProduct(title, description, price, thumbnail, code, stock) {  // Key Products
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
        await fs.promises.writeFile(pathfile, JSON.stringify(this.products));
    }

    async getProducts() {  // Muestra los productos del array

        const productsJson = await fs.promises.readFile(pathfile, "utf8")
        const products = JSON.parse(productsJson) || [];
/*         console.log(products); */

        return products;
    }



    async getProductById(id) {  /// buscar los productos por id
        const products = await this.getProducts(); // Obtener los productos utilizando getProducts()
        const product = products.find(product => product.id === id); // Buscar el producto en los productos obtenidos
        if (!product) {
            console.log(`No se ha encontrado el producto con el ID: ${id}`);
            return;
        }
        console.log("Producto encontrado:", product);
        return product;
    }
    
    

    async updateProduct(id, dataProduct) {  /// actualizar los productos
        const products = await this.getProducts(); // Obtener la lista actualizada de productos
        const index = products.findIndex(product => product.id === id); // Encontrar el índice del producto con el ID proporcionado
        if (index === -1) {
            console.log(`No se encontró ningún producto con el ID: ${id}`);
            return;
        }
        products[index] = {
            ...products[index],
            ...dataProduct // Actualizar los datos del producto con los nuevos datos 
        };
        await fs.promises.writeFile(pathfile, JSON.stringify(products)); // Escribir los productos actualizados de nuevo en el archivo
    }
    
    async deleteProduct(id) {
        const products = await this.getProducts(); // Obtener la lista actualizada de productos
        const updatedProducts = products.filter(product => product.id !== id); // Filtrar los productos para eliminar el producto con el ID proporcionado
        await fs.promises.writeFile(pathfile, JSON.stringify(updatedProducts)); // Escribir la lista con los cambios actualizados
    }
    
}
    




// Ejemplo de uso
const manager = new ProductManager();
/* manager.addProduct("Producto 5", "el quinto producto", 899, "http://www.google.com", "ADF126", 10);
manager.addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10);
manager.addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10);
manager.addProduct("Producto 3", "el tercer producto", 899, "http://www.google.com", "ADF124", 10);
manager.addProduct("Producto 4", "el cuarto producto", 899, "http://www.google.com", "ADF125", 10);
manager.addProduct("Producto 6", "el sexto producto", 900, "http://www.google.com", "ADF129", 10);  */


/* manager.getProducts(); */
/* manager.getProductById(2); */

/* manager.updateProduct(3, {
    "title": "Producto 3",
    "description": "el tercer producto",
})
 */

/* manager.deleteProduct(1) */