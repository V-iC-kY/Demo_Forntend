import { Injectable } from '@angular/core';

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() { }

  addToCart(product: CartItem) {
    const existingItem = this.cartItems.find((item) => item.productId === product.productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  // Remove item from the cart
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.productId !== productId);
  }

  // Get all cart items
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Clear all items in the cart
  clearCart() {
    this.cartItems = [];
  }

  // Calculate total price
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
}
