<template>
  <div class="bike-details bg-light-green">
    <h1 class="text-center py-5">Bike Details</h1>
    <b-row>
      <b-col md="6" class="my-5 text-center">
        <b-img
          :src="bike.image"
          :width="500"
          :height="400"
          alt="Bike Image"
        />
        <h3 class="mt-3">{{ bike.name }}</h3>
      </b-col>
      <b-col md="6" class="my-5">
        <b-card v-if="bike" :title="bike.name" img-alt="Bike Image" img-top>
          <b-card-text><strong>Description:</strong> {{ bike.description }}</b-card-text>
          <b-card-text><strong>Additional Info:</strong> {{ bike.greenBoxInfo }}</b-card-text>
          <b-card-text><strong>Original Price:</strong> Rs {{ bike.originalPrice }}</b-card-text>
          <b-card-text><strong>Fuel Capacity:</strong> {{ bike.fuel }}</b-card-text>
          <b-button variant="primary" to="/confirmation">Buy Now</b-button>
        </b-card>
      </b-col>
    </b-row>

    <div v-if="accessory.id" class="text-center">
      <img :src="accessory.image" class="img-fluid" alt="Accessory Image" />
      <h1>{{ accessory.name }}</h1>
      <p>{{ accessory.description }}</p>
      <p class="text-success">Price: Rs {{ accessory.price }}</p>
    </div>

    <footer class="text-center mt-5">
      <p>&copy; 2024 MotoDeal | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bike: null,
      accessory: {},
    };
  },
  created() {
    if (this.$route.query.bike) {
      try {
        this.bike = JSON.parse(this.$route.query.bike);
      } catch (error) {
        console.error("Failed to parse bike data:", error);
      }
    } else {
      console.error("No bike data found in query parameters.");
    }
    if (this.$route.query.accessory) {
      try {
        this.accessory = JSON.parse(this.$route.query.accessory);
      } catch (error) {
        console.error("Failed to parse accessory data:", error);
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
.text-center {
  text-align: center;
}
.py-4 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
