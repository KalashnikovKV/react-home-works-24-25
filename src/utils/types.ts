export interface Product {
  id: number;
  img: string;
  meal: string;
  instructions: string;
  price: number;
  description?: string;
  quantity?: number;
  category?: string | null;
}

export interface CartItem extends Product {
  quantity: number;
}
