<template>
    <div>
      <h1>My Cart</h1>
      <ul v-if="cart.length > 0">
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - Rs {{ item.price }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <p v-else>Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['cart', 'removeProductFromCart'], // Inject cart state and remove method
    methods: {
      removeFromCart(index) {
        this.removeProductFromCart(index); // Call the method to remove the product
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  