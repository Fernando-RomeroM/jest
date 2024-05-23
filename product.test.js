const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe("Add Product", () => {
    it("You should add a Product", () => {
        expect(() => addProduct(1, "nombre1", "desc1")).not.toThrow();

        addProduct(2, "nombre2", "desc2");
        expect(getProducts()).toEqual([
            { id: 1, name: "nombre1", desc: "desc1" },
            { id: 2, name: "nombre2", desc: "desc2" },
        ]);
    });

    test("Should fail when repeating an id", () => {
        addProduct(2, "nombre2", "desc2");
        expect(() => addProduct(2, "nombre3", "desc3")).toThrow("Product ID already exists.");
    });
});

describe("Eleminated Product", () => {
    it("Should delete Product", () => {
        addProduct(1, "nombre1", "desc1");
        addProduct(2, "nombre2", "desc2");
        removeProduct(1);
        expect(getProducts()).toEqual([
            { id: 2, name: "nombre2", desc: "desc2" },
        ]);
    });
});

describe("Add Product", () => {
    it("Should update Product", () => {
        addProduct(1, "nombre1", "desc1");
        updateProduct(1, "nombre1_modificado", "desc1_modificado");
        expect(getProduct(1)).toEqual({ id: 1, name: "nombre1_modificado", desc: "desc1_modificado" });
    });

    test("Should fail when product does not exist", () => {
        expect(() => updateProduct(1, "nombre1_modificado", "desc1_modificado")).toThrow("Product not found.");
    });
});
