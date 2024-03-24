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
addProduct("Producto 1", "Este es un producto de prueba", 19.99, "imagen.jpg", "P002", 50);
2. Ver todos los productos
Para ver todos los productos existentes en el sistema, utiliza la función getProducts. Esta función devuelve un arreglo con todos los productos.

Ejemplo:

javascript
getProducts();
3. Buscar un producto por su ID
Si deseas buscar un producto específico por su ID, utiliza la función getProductById. Esta función toma un argumento:

id: El ID del producto que deseas buscar.
Ejemplo:

javascript
getProductById(2);


Con este código, puedes agregar productos y buscarlos por su identificador (ID). Si intentas agregar un producto que ya existe, recibirás un mensaje en la consola indicando que el producto ya está en existencia. Del mismo modo, si intentas agregar un producto con algún valor faltante (como undefined), recibirás un mensaje en la consola que te indicará que todos los campos son obligatorios