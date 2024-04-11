# Product Manager

Este es un sistema simple de administración de productos que te permite agregar productos, ver todos los productos existentes y buscar un producto por su ID.

## Instrucciones de uso

### 1. Agregar un producto

Para agregar un nuevo producto al sistema, utiliza la función `addProduct`. Esta función toma los siguientes argumentos:

- `title`: El título del producto.
- `description`: La descripción del producto.
- `price`: El precio del producto.
- `thumbnail`: La URL de la imagen en miniatura del producto.
- `code`: El código único del producto.
- `stock`: La cantidad en stock del producto.

Ejemplo:

```javascript
manager.addProduct("Producto 1", "Este es un producto de prueba", 19.99, "imagen.jpg", "P002", 50);


### 2. Ver todos los productos

Para ver todos los productos existentes en el sistema, utiliza la función getProducts. Esta función devuelve un arreglo con todos los productos.

Ejemplo:

javascript
manager.getProducts();


### 3. Buscar un producto por su ID
Si deseas buscar un producto específico por su ID, utiliza la función getProductById. Esta función toma un argumento:

id: El ID del producto que deseas buscar.
Ejemplo:

javascript
manager.getProductById(2);


- Con este código, puedes agregar productos y buscarlos por su identificador (ID). Si intentas agregar un producto que ya existe, recibirás un mensaje en la consola indicando que el producto ya está en existencia. Del mismo modo, si intentas agregar un producto con algún valor faltante (como undefined), recibirás un mensaje en la consola que te indicará que todos los campos son obligatorios


### 4. Actualizar un producto
Para actualizar un producto existente en el sistema, utiliza la función updateProduct. Esta función toma dos argumentos:

id: El ID del producto que deseas actualizar.
dataProduct: Un objeto que contiene los nuevos datos del producto que deseas actualizar, incluyendo los campos que deseas modificar.


Ejemplo:

javascript
manager.updateProduct(3, {
    "title": "Nuevo título del producto",
    "description": "Nueva descripción del producto",
    "price": 29.99,
    "thumbnail": "nueva-imagen.jpg",
    "code": "P003",
    "stock": 20
});



###5. Eliminar un producto
Para eliminar un producto del sistema por su ID, utiliza la función deleteProduct. Esta función toma un argumento:

id: El ID del producto que deseas eliminar.


Ejemplo:

javascript
manager.deleteProduct(1)


Hemos añadido nuevas funciones al programa, como updateProduct y deleteProduct, que mejoran su funcionalidad y lo convierten en un CRUD eficiente. Ahora, además de agregar productos, podemos actualizar y eliminar productos existentes, lo que proporciona una gestión completa de productos. Implementando la capacidad de modificar información en nuestro archivo JSON, lo que añade flexibilidad al sistema.