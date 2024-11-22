<template>
    <div class="accessory-details bg-light-green">
      <h1 class="text-center py-4">Accessory Details</h1>
      <b-row>
        <b-col md="6" class="my-5 text-center">
          <!-- Responsive and size-constrained image -->
          <b-img
            :src="accessory.image"
            :width="500"
            :height="400"
            alt="Accessory Image"
          />
          <h3 class="mt-3">{{ accessory.name }}</h3>
        </b-col>
        <b-col md="6" class="my-5">
          <b-card v-if="accessory.id" :title="accessory.name" img-alt="Accessory Image" img-top>
            <b-card-text><strong>Description:</strong> {{ accessory.description }}</b-card-text>
            <b-card-text><strong>Price:</strong> Rs {{ accessory.price }}</b-card-text>
            <b-button variant="primary" to="/purchase">Buy Now</b-button>
          </b-card>
        </b-col>
      </b-row>
  
      <footer class="text-center mt-5">
        <p>&copy; 2024 MotoDeal | All rights reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accessory: {},
      };
    },
    created() {
      if (this.$route.query && this.$route.query.accessory) {
        try {
          this.accessory = JSON.parse(this.$route.query.accessory);
        } catch (e) {
          console.error("Failed to parse accessory data:", e);
        }
      } else {
        console.error("No accessory data found in query parameters.");
      }
    },
  };
  </script>
  
  <style scoped>
  .bg-light-green {
    background-color: #d0f0c0;
    padding: 20px;
    border-radius: 10px; /* Optional for rounded corners */
  }
  </style>
  