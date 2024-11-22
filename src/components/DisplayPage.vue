<template>
  <div class="full-bg d-flex justify-content-center align-items-center">
    <b-container class="my-5">
      <h2 class="text-center my-4 heading">Choose to Buy!!</h2>
     
      <b-row>
        <b-col md="3" class="mb-4 d-flex">
          <b-card
            title="Superbike"
            img-src="https://i.pinimg.com/originals/28/cc/62/28cc62fe1cad10d279f7c470242161e6.png"
            img-alt="Superbike"
            img-top
            class="d-flex flex-column"
          >
            <b-card-text
              >High-performance bikes for thrill seekers.</b-card-text
            >
            <b-button variant="primary" to="/SuperBikes">View all</b-button>
          </b-card>
        </b-col>
        <b-col md="3" class="mb-4 d-flex">
          <b-card
            title="Scooter"
            img-src="https://www.pngall.com/wp-content/uploads/10/White-Scooter-PNG-File.png"
            img-alt="Scooter"
            img-top
            class="d-flex flex-column"
          >
            <b-card-text>Compact and efficient for city rides.</b-card-text>
            <b-button variant="primary" to="/Scooters">View all</b-button>
          </b-card>
        </b-col>
        <b-col md="3" class="mb-4 d-flex">
          <b-card
            
            img-src="https://th.bing.com/th?id=OIP.mnQ7iaebooaPAosmnik-dAHaGW&w=270&h=231&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            img-alt="Cruiser Bike"
            img-top
            class="d-flex flex-column"
          >
          <h4 class="mt-5">Cruiser Bike</h4>
            <b-card-text class="">Stylish and comfortable for long rides.</b-card-text>
            <b-button variant="primary" to="/Cruisers">View all</b-button>
          </b-card>
        </b-col>
        <b-col md="3" class="mb-4 d-flex">
          <b-card
            title="Accessory"
            img-src="https://www.tvsmotor.com/-/media/Images/tvs/Riding-Jacket-Neon-Line-1.jpg"
            img-alt="Accessory"
            img-top
            class="d-flex flex-column"
          >
            <b-card-text
              >Enhance your ride with quality accessories.</b-card-text
            >
            <b-button variant="primary" to="/Accessory">View all</b-button>
          </b-card>
        </b-col>
      </b-row>
      <footer class="text-center mt-5">
        <p>&copy; 2024 MotoDeal | All rights reserved</p>
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "BikeCards",
  methods: {
    goToBikePage(bikeType) {
      this.$router.push({ name: "BikePage", params: { type: bikeType } });
    },
    goToAccessoryPage() {
      this.$router.push({ name: "AccessoryPage" });
    },
  },
};
</script>
<style scoped>
/* Adjust all card images */
.b-card img {
  width: 100%; /* Ensure images fit the card's width */
  height: 150px; /* Set a fixed height for all images */
  object-fit: cover; /* Maintain aspect ratio without distortion */
}

.full-bg {
  background-color: #d0f0c0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

/* Equalize card height */
.b-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.d-flex {
  display: flex;
  flex-grow: 1;
  align-items: stretch;
}

/* Adjust Heading Style */
.heading {
  padding-top: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
</style>
