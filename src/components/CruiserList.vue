<template>
  <div class="full-bg">
    <b-container>
      <h2 class="text-center my-4 popular-bike-header">Latest Popular Bike</h2>
      <div class="text-center mb-4">
        <button class="btn btn-success">50% OFF</button>
      </div>
      <div class="row">
        <!-- Displaying all bikes -->
        <div class="col-md-3 mb-4" v-for="bike in bikes" :key="bike.id">
          <div class="card">
            <!-- Bike Image inside Card with click handler -->
            <img
              :src="bike.image"
              class="card-img-top"
              alt="Bike Image"
              @click="showBikeDetails(bike.id)"
            />
            <div class="card-body text-center">
              <span class="badge badge-success">50%</span>
              <h5 class="card-title">{{ bike.name }}</h5>
              <p class="card-text">{{ bike.description }}</p>
              <h4 class="text-success">Rs {{ bike.price }}</h4>
              <span class="text-muted">
                <del>Rs {{ bike.originalPrice }}</del>
              </span>
            </div>
            <b-button variant="primary" @click="goToBikeDetails(bike)">View</b-button>
          </div>
        </div>
      </div>

      <!-- Green Box to Show Selected Bike Details -->
      <div v-if="currentBikeIndex >= 0" class="green-box-display mt-4 p-4">
        <h3 class="text-success">{{ bikes[currentBikeIndex].name }}</h3>
        <p>{{ bikes[currentBikeIndex].greenBoxInfo }}</p>
      </div>
    </b-container>

    <footer class="text-center mt-5">
      <p>&copy; 2024 MotoDeal | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBikeIndex: -1, // Default to no bike selected
      bikes: [
        {
          id: 17,
          name: "Harley-Davidson",
          description: "Wheelbase: 1366 mm,",
          greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
          price: 1999,
          originalPrice: 2499.99,
          image: "https://shop.kesstech.de/media/5f/c3/f9/1678808122/0b755f184f9eb7376b0be990c1cf76a9_75325.png",
        },
        {
          id: 18,
          name: "Indian Chief Dark Horse",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
          price: 1699,
          originalPrice: 2398,
          image: "http://www.indianmotorcycle.com.tw/image/catalog/2023%20Lineup/2023/02_Cruiser/02_Chief%20Series/04_Chief%20Bobber%20Dark%20Horse/CGI/PNG/1.png",
        },
        {
          id: 19,
          name: "Triumph Rocket 3 GT 114",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Perfect fit for comfort and safety\nLightweight\nExtra padding for protection",
          price: 499,
          originalPrice: 1398,
          image: "https://cdn.dealerwebs.co.uk/uploads/images/triumph/2024/storm-gt/rocket-gt.png",
        },
        {
          id: 20,
          name: "Royal Enfield Super Meteor 650",
          description: "Supercharged, 998cc Engine",
          greenBoxInfo: "Super-fast acceleration\nExcellent handling\nUnique design",
          price: 2999.99,
          originalPrice: 3599.99,
          image: "https://royalenfield.com.au/wp-content/uploads/sites/2/2023/01/SM650-Range-720x520.png",
        },
        {
          id: 21,
          name: "Bajaj Avenger Cruise 220",
          description: "Classic, 346cc Engine",
          greenBoxInfo: "Smooth ride\nTimeless design\nPerfect for long rides",
          price: 1999.99,
          originalPrice: 2299.99,
          image: "https://www.carblogindia.com/wp-content/uploads/2016/05/2015-bajaj-avenger-cruise-220-gold-color-2.png",
        },
        {
          id: 22,
          name: "Honda H’ness CB350",
          description: "Modern design, 334cc Engine",
          greenBoxInfo: "Smooth performance\nGreat value for money\nPerfect for city commuting",
          price: 1499.99,
          originalPrice: 1799.99,
          image: "https://honda.com.np/wp-content/uploads/product-catalog/motorcycles/669x4961.png",
        },
        {
          id: 23,
          name: "Yamaha Bolt R-Spec",
          description: "Wheelbase: 1366 mm,",
          greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
          price: 199,
          originalPrice: 2499.99,
          image: "http://www.nadonsport.com/wp-content/uploads/2017/10/2019-Bolt-R-Spec-Matte-Silver_1.png",
        },
        {
          id: 24,
          name: "Suzuki Boulevard M109R",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
          price: 699,
          originalPrice: 1398,
          image: "http://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/vzr1800bz_m109rboss/2021/gallery/vzr1800bzm1_kel_d_alt_web.ashx?w=1280&hash=FA3AD5FD1373FF3E4CEE2FE72815663E",
        },
      ],
    };
  },
  methods: {
    goToBikeDetails(bike) {
      this.$router.push({ path: `/AllBikes/${bike.id}`, query: { bike: JSON.stringify(bike) } });
    },
    showBikeDetails(bikeId) {
      const selectedBikeIndex = this.bikes.findIndex((bike) => bike.id === bikeId);
      this.currentBikeIndex = selectedBikeIndex;

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
.popular-bike-header {
  padding-top: 50px;
}

.card {
  border: 1px solid #54e272;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
}

.full-bg {
  background-color: #d0f0c0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.green-box-display {
  background-color: #54e272;
  color: white;
  border-radius: 8px;
}
</style>
