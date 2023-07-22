import  {
  addProduct,
  removeProduct,
  getProduct,
  getProducts
} from "@/utils/localstorage";
import { createContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      addProduct(action.payload);
      return { ...state, products: [...state.products, action.payload] };
    case "GET_PRODUCTS":
      return { ...state, products: getProducts() };
    case "REMOVE_PRODUCT":
      removeProduct(action.payload.id);
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: []
  });

  useEffect(() => { 
    dispatch({ type: "GET_PRODUCTS" });
  }, []);

  const addProductToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const removeProductFromCart = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };
  const value = {
    products: state.products,
    addProductToCart,
    removeProductFromCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartProvider, useCart };
