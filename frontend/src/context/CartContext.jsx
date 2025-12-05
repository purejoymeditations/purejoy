import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "purejoy_cart";
const DEFAULT_MAX_QTY = 10;
const MAX_UNIQUE_ITEMS = 20;

const initialState = {
  items: [],
};

const clampQuantity = (quantity, maxQty) => {
  const upperBound =
    Number.isFinite(maxQty) && maxQty > 0 ? maxQty : DEFAULT_MAX_QTY;
  return Math.min(Math.max(quantity, 1), upperBound);
};

const formatProductForCart = (product) => {
  if (!product) return null;

  return {
    id: product._id || product.id,
    name: product.name,
    price: Number(product.price) || 0,
    category: product.category || "Products",
    image: product.cartImage || product.image || "",
    inStock: product.inStock !== false,
    maxQty: Number.isFinite(product.maxQty) ? product.maxQty : DEFAULT_MAX_QTY,
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload;
      const formattedProduct = formatProductForCart(product);
      if (
        !formattedProduct ||
        !formattedProduct.id ||
        !formattedProduct.inStock
      ) {
        return state;
      }

      const existingItem = state.items.find(
        (item) => item.id === formattedProduct.id
      );
      const desiredQty = existingItem
        ? existingItem.quantity + quantity
        : quantity;
      const nextQty = clampQuantity(desiredQty, formattedProduct.maxQty);

      const items = existingItem
        ? state.items.map((item) =>
            item.id === formattedProduct.id
              ? { ...item, quantity: nextQty }
              : item
          )
        : [...state.items, { ...formattedProduct, quantity: nextQty }];

      return { ...state, items };
    }

    case "UPDATE_QTY": {
      const { id, quantity } = action.payload;
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id !== id) return item;
            const nextQty = clampQuantity(quantity, item.maxQty);
            return { ...item, quantity: nextQty };
          })
          .filter((item) => item.quantity > 0),
      };
    }

    case "REMOVE_ITEM": {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id),
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

const getInitialState = () => {
  if (typeof window === "undefined") {
    return initialState;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialState;
    const parsed = JSON.parse(saved);
    if (!parsed || !Array.isArray(parsed.items)) return initialState;

    return {
      items: parsed.items.map((item) => ({
        ...item,
        quantity: clampQuantity(item.quantity || 1, item.maxQty),
      })),
    };
  } catch {
    return initialState;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    getInitialState
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => {
    const itemCount = state.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalPrice = state.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    return {
      items: state.items,
      itemCount,
      totalPrice,
      addItem: (product, quantity = 1) => {
        const formattedProduct = formatProductForCart(product);
        if (
          !formattedProduct ||
          !formattedProduct.id ||
          !formattedProduct.inStock
        ) {
          return { ok: false, reason: "unavailable" };
        }

        const existingItem = state.items.find(
          (item) => item.id === formattedProduct.id
        );

        if (!existingItem && state.items.length >= MAX_UNIQUE_ITEMS) {
          return { ok: false, reason: "max_unique_items" };
        }

        dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
        return { ok: true };
      },
      updateQty: (id, quantity) =>
        dispatch({ type: "UPDATE_QTY", payload: { id, quantity } }),
      removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } }),
      clearCart: () => dispatch({ type: "CLEAR_CART" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
