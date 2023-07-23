
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
    const zylker = getDataFromLocalStorage("zylker");
    return zylker?.products || [];
}

const getProduct = (id) => { 
    const zylker = getDataFromLocalStorage("zylker");
    return Array.isArray(zylker?.products) ? zylker?.products.find((product) => product.id === id) : null;
}

const addProduct = (product) => { 
    const zylker = getDataFromLocalStorage("zylker");
    let products = Array.isArray(zylker?.products) ? [...zylker?.products, product] : [product];
    setDataToLocalStorage("zylker", { products });
}

const removeProduct = (id) => { 
    const zylker = getDataFromLocalStorage("zylker");
    const products = zylker?.products.filter((product) => product.id !== id);
    setDataToLocalStorage("zylker", { products });
}

export { getProducts, getProduct, addProduct, removeProduct, getDataFromLocalStorage, setDataToLocalStorage };