# Seminario MongoDB

## Se creó una API REST que simula un ecommerce, utilizando: 

## <strong> Nodejs + express + mongoDB </strong>

En conjunto con las tecnologías mercionadas, se utilizaron también:

**Mongoose:** Es una biblioteca de modelado de datos de objetos (ODM) para MongoDB y Node. js.

**Body-Parser:** Es un middleware que se encarga de parsear las solicitudes entrantes.

**DotEnv:** Es un módulo utilizado para guardar y cargar las configuraciones separado del código en un archivo .env

## Pasos a seguir para testear la API:

1. Descargar el proyecto.
2. Dentro del proyecto, iniciar con:
    >- npm start
3. Testear la API con un cliente, por ejemplo POSTMAN


### Se crearon dos colecciones, por un lado los productos (Products) y por otro las ventas (Sales). Para facilitar la creación de los esquemas, se utilizó mongoose

```js
const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    direction: String,
    totalPrice: Number,
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Products' 
    }]
});

module.exports = mongoose.model('Sales', saleSchema);
```

```js
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    stock: Number,
    price: Number
});

module.exports = mongoose.model('Products', productSchema);
});
```

### <ins>Pasos para probar el CRUD:</ins>

### <ins>**Products:**</ins>

> Obtener todos los productos (GET): http://localhost:8080/products

> Listar un producto nuevo (POST): http://localhost:8080/products

```js
Ejemplo para utilizar de Body
{
    "name": "Product1",
    "description": "Description1",
    "stock": 200,
    "price": 150
}
```

> Modificar un producto (PUT): http://localhost:8080/products/5fb1c8d4ed202f2b2c1a14ec
(ID ya existente en la DB)

```js
Ejemplo para utilizar de Body
{
    "name": "Product1Modified",
    "description": "Description1Modified",
    "stock": 300,
    "price": 130
}
```

> Eliminar un producto (DELETE): http://localhost:8080/products/5fb1c8d4ed202f2b2c1a14ec

### <ins>**Sales:**</ins>

> Obtener todas las ventas (GET): http://localhost:8080/sales

> Listar una nueva venta (POST): http://localhost:8080/sales 

```js
Ejemplo para utilizar de Body
{
    "direction": "Alem",
    "totalPrice": 150,
    "products": [
        "5fb1c8d4ed202f2b2c1a14ec"
    ]
}
```

### Bibliografía utilizada:

> https://www.youtube.com/watch?v=vjf774RKrLc
 
> https://mikenieva.com/backend-node-tienda-online-guitarras/

> https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7

