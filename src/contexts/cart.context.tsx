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
  decrementQuantity: Dispatch<SetStateAction<number>>;
  totalPrice: number;
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

const decrement = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemsInCart: 0,
  removeItemFromCart: () => {},
  decrementQuantity: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemsInCart(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cartItems, totalPrice]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove, removeItem?: boolean) => {
    setCartItems(removeCartItem(cartItems, productToRemove, removeItem));
  };

  const decrementQuantity = (item) => setCartItems(decrement(cartItems, item));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    itemsInCart,
    removeItemFromCart,
    decrementQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
