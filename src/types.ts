export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  category?: string;
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
