let arrayProducts = [];

const resetProducts = () => {
    arrayProducts = [];
};

const getProducts = () => {
    return arrayProducts;
};

const addProduct = (id, name, desc) => {
    if (arrayProducts.some(product => product.id === id)) {
        throw new Error("Product ID already exists.");
    }

    let item = { id, name, desc };
    arrayProducts.push(item);
};

const removeProduct = (id) => {
    arrayProducts = arrayProducts.filter(product => product.id !== id);
};

const getProduct = (id) => {
    return arrayProducts.find(product => product.id === id);
};

const updateProduct = (id, name, desc) => {
    let product = arrayProducts.find(product => product.id === id);
    if (product) {
        product.name = name;
        product.desc = desc;
    } else {
        throw new Error("Product not found");
    }
};

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};
