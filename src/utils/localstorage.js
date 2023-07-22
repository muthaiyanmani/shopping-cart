
const getDataFromLocalStorage = (data) => {
    if (typeof window !== "undefined") {
        const serializedState = window.localStorage.getItem(data);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } else {
        throw new Error("window is undefined");
    }
};

const setDataToLocalStorage = (key,state) => { 
    if (typeof window !== "undefined") { 
        const serializedState = JSON.stringify(state);
        window.localStorage.setItem(key, serializedState);
    } else {
        throw new Error("window is undefined");
    }
}

const getProducts = () => { 
    const { products } = getDataFromLocalStorage("products") || { products: [] };
    return products;
}

const getProduct = (id) => { 
    const { products } = getDataFromLocalStorage("products");
    return products.find((product) => product.id === id);
}

const addProduct = (product) => { 
    const { products } = getDataFromLocalStorage("products") || { products: [] };
    products.push(product);
    setDataToLocalStorage("products", { products });
}

const removeProduct = (id) => { 
    const { products } = getDataFromLocalStorage("products");
    const updatedProducts = products.filter((product) => product.id !== id);
    setDataToLocalStorage("products", updatedProducts);
}

export { getProducts, getProduct, addProduct, removeProduct };