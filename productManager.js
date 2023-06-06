class ProductManager {
    constructor() {
        this.products = [];
    }


    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products: []
        }

        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }

        this.products.push(product)
    }

    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex(product => product.id === idProduct);

        if (productIndex === -1) {
            console.log("Not Found");
            return;
        }

        const productAdd = this.products[productIndex].products.includes(idProduct)
        if (productAdd) {
            console.log("El producto se agrego correctamente")
            return;
        }
        this.products[productIndex].products.push(idProduct)
    }
};

const manejadorProductos = new ProductManager();
manejadorProductos.addProduct('Regla', 'transparente', 80, 'sin imagen', 'ab 154', 36)
manejadorProductos.addProduct('Lapiz', 'transparente', 100, 'sin imagen', 'ab 155', 40)
manejadorProductos.addProduct('Birome', 'transparente', 200, 'sin imagen', 'ab 156', 15)

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(3);
manejadorProductos.getProductById(2);

console.log(manejadorProductos.getProducts());