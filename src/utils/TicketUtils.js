// TicketUtils.js

// class TicketUtils {
//   static cart = [];

//   static storeCart(cart) {
//     sessionStorage.setItem("cart", JSON.stringify(cart));
//   }

//   static loadCart() {
//     return JSON.parse(sessionStorage.getItem("cart") || "[]");
//   }

//   static addToCart(ticket, price) {
//     const existingItem = this.cart.find((item) => item.id === ticket.id);
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       this.cart.push({ ...ticket, quantity: 1, price });
//     }
//     this.storeCart(this.cart);

//     console.log("Updated Cart:", this.cart);
//   }

//   static removeFromCart(ticketId) {
//     this.cart = this.cart.filter((item) => item.id !== ticketId);
//     console.log("Updated Cart:", this.cart);
//     this.storeCart(this.cart);
//   }

//   static getCartItems() {
//     return [...this.cart];
//   }

//   static checkoutCart() {
//     console.log("Checkout completed. Cart items:", this.cart);
//     this.cart = [];
//     this.storeCart(this.cart);
//   }
// }

// export default TicketUtils;
