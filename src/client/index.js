
import { httpClient } from "./axios.interceptor";

function getProducts() {
    const products = httpClient.get("/api/products");
    return products;
}

export { getProducts };