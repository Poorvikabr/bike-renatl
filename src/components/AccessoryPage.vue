<template>
  <div  class="popular-bike-section bg-light-green">
    <b-container>
      <h2 class="text-center my-4 popular-bike-header">
        Latest Popular Accessories
      </h2>
      <div class="text-center mb-4"></div>
      <div class="row">
        <!-- Displaying all accessories -->
        <div
          class="col-md-3 mb-4"
          v-for="accessory in accessories"
          :key="accessory.id"
        >
          <div class="card">
            <!-- Accessory Image inside Card with click handler -->
            <img
              :src="accessory.image"
              class="card-img-top"
              alt="Accessory Image"
              @click="showAccessoryDetails(accessory.id)"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ accessory.name }}</h5>
              <p class="card-text">{{ accessory.description }}</p>
              <h4 class="text-success">Rs {{ accessory.price }}</h4>
            </div>
            <b-button variant="primary" @click="goToBikeDetails(accessory)"
              >View</b-button
            >
          </div>
        </div>
      </div>
    </b-container>

    <!-- Add More Content or a Footer Section -->
    <footer class="text-center mt-5">
      <p>&copy; 2024 MotoDeal | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentAccessoryIndex: 0,
      accessories: [
        {
          id: 25,
          name: "Helmet ",
          description: "Lightweight, Stylish",
          greenBoxInfo:
            "Perfect for safety\nComfortable padding\nAerodynamic design",
          price: 999,
          image:
            "https://pluspng.com/img-png/motorcycle-helmet-png-image-moto-helmet-999.png",
        },
        {
          id: 26,
          name: "Gloves ",
          description: "Durable, Protective",
          greenBoxInfo: "Enhanced grip\nBreathable material\nAll-season use",
          price: 499,
          image: "https://www.studds.com/Adminpanel/uploads/SMG_6_GLOVES.png",
        },
        {
          id: 27,
          name: "Jacket ",
          description: "Comfortable, Durable",
          greenBoxInfo: "Weather-resistant\nGreat for long rides\nPerfect fit",
          price: 1499,
          image:
            "https://pierce-images.imgix.net/images/4/9/4/5/49451ebd95f9468b926011e6bc180da6_2_PIA-283526_0_10.png",
        },
        {
          id: 28,
          name: "Boots",
          description: "Heavy Duty, Protective",
          greenBoxInfo:
            "Reinforced toe\nWaterproof\nSuitable for extreme conditions",
          price: 1999,
          image:
            "https://www.pngarts.com/files/1/Motorcycle-Boots-PNG-Free-Download.png",
        },
        {
          id: 29,
          name: "WaterProof Bike cover",
          description: "Durable, Protective",
          greenBoxInfo: "Enhanced grip\nBreathable material\nAll-season use",
          price: 499,
          image:
            "https://mlhn5wracbgo.i.optimole.com/P3s23z4-JVsHBF5o/w:auto/h:auto/q:auto/https://www.bykeit.com/wp-content/uploads/2020/02/Paddock-2.png",
        },
        {
          id: 30,
          name: "saddlebags",
          description: "Comfortable, Durable",
          greenBoxInfo: "Weather-resistant\nGreat for long rides\nPerfect fit",
          price: 1499,
          image: "https://asset.lemansnet.com/edge/3/5/0/35010458.png",
        },
        {
          id: 31,
          name: " Mobile Mount with USB Charger",
          description: "Heavy Duty, Protective",
          greenBoxInfo:
            "Reinforced toe\nWaterproof\nSuitable for extreme conditions",
          price: 1999,
          image:
            "https://www.iottie.com/wp-content/uploads/2021/11/eot4_dash_main-image02.png",
        },
        {
          id: 32,
          name: "Tyre Pressure Monitoring System",
          description: "Durable, Protective",
          greenBoxInfo: "Enhanced grip\nBreathable material\nAll-season use",
          price: 499,
          image:
            "https://www.tymtix.com/static/img/desktop/tire-pressure-monitoring-system.png",
        },
      ],
    };
  },
  methods: {
    goToBikeDetails(accessory) {
  console.log("Passing accessory:", accessory); // Debugging
  this.$router.push({
    path: `/AllAccessory/${accessory.id}`,
    query: { accessory: JSON.stringify(accessory) },
  });


    },
    nextSlide() {
      this.currentAccessoryIndex =
        (this.currentAccessoryIndex + 1) % this.accessories.length;
    },
    prevSlide() {
      this.currentAccessoryIndex =
        (this.currentAccessoryIndex - 1 + this.accessories.length) %
        this.accessories.length;
    },
    showAccessoryDetails(accessoryId) {
      const selectedAccessoryIndex = this.accessories.findIndex(
        (accessory) => accessory.id === accessoryId
      );
      this.currentAccessoryIndex = selectedAccessoryIndex;

      // Optional: Scroll to the green box display
      this.$nextTick(() => {
        const greenBox = this.$el.querySelector(".green-box-display");
        if (greenBox) greenBox.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
};
</script>

<style scoped>
.bg-light-green {
  background-color: #d0f0c0;
  padding: 20px;
  border-radius: 10px;}
.popular-bike-header {
  padding-top: 50px; /* Adjust the value as needed */
}

.card {
  border: 1px solid #54e272;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.img-fluid {
  max-width: 400px;
  height: auto;
}

.fixed-img {
  width: 400px; /* Fixed width */
  height: 400px; /* Fixed height */
  animation: boomerang 2s ease-in-out infinite; /* Apply the boomerang animation */
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
}

/* Additional styles for smooth scrolling */
.green-box-display {
  transition: margin-top 0.3s ease-in-out;
}
</style>
