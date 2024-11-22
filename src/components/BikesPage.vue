<template>
  <div class="popular-bike-section bg-light-green">
    <b-container>
      <h2 class="text-center my-4 popular-bike-header">Latest Popular Bike</h2>
      <div class="text-center mb-4">
        <button class="btn btn-success">50% OFF</button>
      </div>
      <div class="row">
        <!-- Displaying all 6 bikes -->
        <div class="col-md-3 mb-4" v-for="bike in bikes" :key="bike.id">
          <div class="card">
            <!-- Bike Image inside Card with click handler -->
            <img :src="bike.image" class="card-img-top" alt="Bike Image" @click="showBikeDetails(bike.id)" />
            <div class="card-body text-center">
              <span class="badge badge-success">50%</span>
              <h5 class="card-title">{{ bike.name }}</h5>
              <p class="card-text">{{ bike.description }}</p>
              <h4 class="text-success">
                Rs {{ bike.price }}
              </h4>
              <span class="text-muted"><del>Rs{{ bike.originalPrice }}</del></span>
            </div>
            <b-button variant="primary" @click="goToBikeDetails(bike)">View</b-button>
          </div>
        </div>
      </div>
    </b-container>

    <!-- Footer Section -->
    <footer class="text-center mt-5">
      <p>&copy; 2024 MotoDeal | All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBikeIndex: 0,
      bikes: [
        {
          id: 1,
          name: "YAMAHA YZF R15",
          description: "Wheelbase: 1366 mm,",
          greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
          price: 1999,
          originalPrice: 3499.99,
          image: "https://www.yamaha-motor-india.com/theme/v3/image/r15m/color/gray.png",
          fuel: "120kmph"
        },
        {
          id: 2,
          name: "ducati 959 panigale",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
          price: 1699,
          originalPrice: 2378,
          image: "https://purepng.com/public/uploads/large/purepng.com-ducati-959-panigalemotorcyclemotorbikebikevehicleducati-9815251698118mbjd.png",
        },
        {
          id: 3,
          name: "BMW 1000 RR",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Perfect fit for comfort and safety\nLightweight\nExtra padding for protection",
          price: 1499,
          originalPrice: 2398,
          image: "https://purepng.com/public/uploads/large/purepng.com-bmw-s1000rrmotorcyclemotorbikebikevehiclebmw-981525168271p3d04.png",
        },
        {
    id: 4,
    name: "Kawasaki Ninja H2",
    description: "Supercharged, 998cc Engine",
    greenBoxInfo: "Super-fast acceleration\nExcellent handling\nUnique design",
    price: 2999.99,
    originalPrice: 3599.99,
    image: "http://magazine.pamotos.com/wp-content/uploads/2015/07/Kawasaki-Ninja-H2.png",
  },
  {
    id: 5,
    name: "suzuki Hayabusa",
    description: "Engine: 1340cc, Inline-4",
    greenBoxInfo: "Smooth ride\nTimeless design\nPerfect for long rides",
    price: 1999.99,
    originalPrice: 2299.99,
    image: "https://paultan.org/image/2018/12/2019-Suzuki-GSX1300R-Hayabusa-1-1200x842.png",
  },
  {
    id: 6,
    name: "Honda CBR1000RR-R",
    description: "Modern design, 334cc Engine",
    greenBoxInfo: "Smooth performance\nGreat value for money\nPerfect for city commuting",
    price: 1499.99,
    originalPrice: 1799.99,
    image: "https://i.pinimg.com/originals/02/98/fb/0298fba198fbb295c8137000fde38a7c.png",
  },
  {
    id: 7,
    name: "MV Agusta F4 RC",
    description: "Wheelbase: 1366 mm,",
    greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
    price: 1999,
    originalPrice: 2499.99,
    image: "https://assets-global.website-files.com/5d8a4999eaa8abe6956c8ae5/5e08ff63ed2a27235f760568_DRA%20RC.png",
  },
  {
    id: 8,
    name: "KTM 8C",
    description: "Fashion, Twin Disc",
    greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
    price: 1699,
    originalPrice: 2398,
    image: "https://purepng.com/public/uploads/large/purepng.com-ktm-690-dukemotorcyclemotorbikebikevehiclektm-981525163731e5vaf.png",
  }
        // Additional bikes...
      ],
    };
  },
  methods: {
    goToBikeDetails(bike) {
      this.$router.push({ path: `/AllBikes/${bike.id}`, query: { bike: JSON.stringify(bike) } });
    },
    showBikeDetails(bikeId) {
      const selectedBikeIndex = this.bikes.findIndex(bike => bike.id === bikeId);
      this.currentBikeIndex = selectedBikeIndex;
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
  border-radius: 10px; /* Optional for rounded corners */
}
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

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
}

.text-center {
  text-align: center;
}
</style>
