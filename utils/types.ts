export interface IProduct {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    // Add other necessary fields specific to a product
}

export interface ICartItem extends IProduct {
    quantity: number; // Additional field specific to a cart item
}


export interface IShoppingCartProps {
    cartItems: ICartItem[];
    removeFromCart: (productId: number) => void;
    closeCart: () => void;
}

export interface IShoppingCartState {
    isOpen: boolean;
}
