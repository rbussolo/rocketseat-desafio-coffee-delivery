export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  urlImage: string;
  details: string[]
}

export interface ShoppingCartItem {
  id: string;
  product: Product;
  amount: number;
}

export interface ShoppingCart {
  items: ShoppingCartItem[];
}

export const PaymentTypes = {
  credito: 'CREDITO',
  debito: 'DEBITO',
  dinheiro: 'DINHEIRO',
} as const;

export interface Order {
  address: {
    zip_code: string;
    street: string;
    complement?: string;
    street_number: string;
    neighborhood: string;
    city: string;
    state: string;
  },
  payment_type: keyof typeof PaymentTypes;
  items: ShoppingCartItem[];
  delivery_price: number;
  total_price: number;
}

interface ShoppingState {
  cart: ShoppingCartItem[];
  orders: Order[];
}

interface ActionAddItem {
  type: 'ADD_ITEM_ON_CART';
  payload: {
    item: ShoppingCartItem
  }
}

interface ActionRemoveItem {
  type: 'REMOVE_ITEM_ON_CART';
  payload: {
    id: string
  }
}

interface ActionPlusItem {
  type: 'PLUS_ITEM_ON_CART';
  payload: {
    id: string
  }
}

interface ActionMinusItem {
  type: 'MINUS_ITEM_ON_CART';
  payload: {
    id: string
  }
}

interface ActionNewOrder {
  type: 'CREATE_NEW_ORDER';
  payload: {
    order: Order
  }
}

export function shoppingReducer(state: ShoppingState, action: ActionAddItem | ActionRemoveItem | ActionPlusItem | ActionMinusItem | ActionNewOrder) {
  if (action.type === 'ADD_ITEM_ON_CART') {
    return {
      ...state,
      cart: [...state.cart, action.payload.item]
    }
  }

  if (action.type === 'REMOVE_ITEM_ON_CART') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id)
    }
  }

  if (action.type === 'PLUS_ITEM_ON_CART') {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        if (item.id !== action.payload.id) return item;

        return {
          ...item,
          amount: item.amount + 1
        }
      })
    }
  }

  if (action.type === 'MINUS_ITEM_ON_CART') {
    return {
      ...state,
      cart: state.cart.filter((item) => {
        if (item.id !== action.payload.id) return item;
        if (item.id === action.payload.id && item.amount === 1) return item;

        return {
          ...item,
          amount: item.amount - 1
        }
      })
    }
  }

  if (action.type === 'CREATE_NEW_ORDER') {
    return {
      ...state,
      cart: [],
      orders: [action.payload.order, ...state.orders]
    }
  } 

  return state;
}