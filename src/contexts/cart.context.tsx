import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from 'react';
import { IProduct } from './products.context';

interface ICartItems extends IProduct {
  quantity: number;
}

interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems?: Array<ICartItems>;
  addItemToCart: Dispatch<SetStateAction<ICartItems[]>>;
  itemsInCart: number;
  removeItemFromCart: Dispatch<SetStateAction<ICartItems[]>>;
  clearItemFromCart: Dispatch<SetStateAction<ICartItems[]>>;
  cartTotal: number;
}

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove, removeItem) => {
  const exisitngCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (exisitngCartItem.quantity === 1 || removeItem) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } else if (exisitngCartItem) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

const clearCartItem = (cartItems, cartItem) => {
  return cartItems.filter((item) => item.id !== cartItem.id)
}

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemsInCart: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemsInCart(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove, removeItem?: boolean) => {
    setCartItems(removeCartItem(cartItems, productToRemove, removeItem));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    itemsInCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
