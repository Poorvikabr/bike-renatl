<template>
  <div>
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
            <button class="btn btn-success" to="/book/:id">Buy Now</button>
          </div>
        </div>
      </div>
    </b-container>

    <b-container fluid class="p-0">
      <div class="row mb-4">
        <div class="col-md-12">
          <!-- Green Box with Bike Name, Description, and Image -->
          <div class="green-box-display" style="background-color: #28a745; color: white; margin-top: 100px; padding: 40px 0;">
            <div class="row">
              <!-- Left Column with Bike Name and Green Box Info -->
              <div class="col-md-6">
                <h2 :style="{ color: 'black' }">{{ bikes[currentBikeIndex].name }}</h2>

                <!-- Green Box Info Section (Starting with -) -->
                <ul style="list-style-type: none; padding-left: 0;">
                  <li v-for="(info, index) in bikes[currentBikeIndex].greenBoxInfo.split('\n')" :key="index">
                    <h5>- {{ info.trim() }}</h5>
                  </li>
                </ul>

                <!-- Price and Buy Now Button -->
                <h4 class="text-warning">Price: ${{ bikes[currentBikeIndex].price }}</h4>
                <button class="btn btn-warning">Buy Now</button>
              </div>

              <!-- Right Column with Image -->
              <div class="col-md-6 d-flex">
                <img :src="bikes[currentBikeIndex].image" class="img-fluid fixed-img" alt="Bike Image" />
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="text-center mt-4">
            <button class="btn btn-success mx-2" @click="prevSlide">Previous</button>
            <button class="btn btn-success mx-2" @click="nextSlide">Next</button>
          </div>
        </div>
      </div>

      <!-- Add Accessory Button -->
      <div class="text-center mt-4">
        <b-button to="/Accessory" variant="primary">Accessory</b-button>
      </div>

      <!-- Add More Content or a Footer Section -->
      <footer class="text-center mt-5">
        <p>&copy; 2024 MotoDeal | All rights reserved</p>
      </footer>
    </b-container>
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
          price: 199,
          originalPrice: 2499.99,
          image: "https://www.yamaha-motor-india.com/theme/v3/image/r15m/color/gray.png",
        },
        {
          id: 2,
          name: "Aerion Carrbo Helmet",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
          price: 699,
          originalPrice: 1398,
          image: "https://purepng.com/public/uploads/large/purepng.com-ktm-690-dukemotorcyclemotorbikebikevehiclektm-981525163731e5vaf.png",
        },
        {
          id: 3,
          name: "Aerion Carrbo Helmet",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Perfect fit for comfort and safety\nLightweight\nExtra padding for protection",
          price: 499,
          originalPrice: 1398,
          image: "https://www.pngarts.com/files/8/Kawasaki-Bike-PNG-Transparent-Image.png",
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
          name: "GT 650",
          description: "Classic, 346cc Engine",
          greenBoxInfo: "Smooth ride\nTimeless design\nPerfect for long rides",
          price: 1999.99,
          originalPrice: 2299.99,
          image: "https://royalenfield.com.au/wp-content/uploads/2021/10/Mr-Clean-rear-view.png",
        },
        {
          id: 6,
          name: "Jawa Perak",
          description: "Modern design, 334cc Engine",
          greenBoxInfo: "Smooth performance\nGreat value for money\nPerfect for city commuting",
          price: 1499.99,
          originalPrice: 1799.99,
          image: "https://images.jawamotorcycles.com/medium/42-bobber/slide-03b-jasper-red-dual-tone.png?v=1",
        },
        {
          id: 7,
          name: "YAMAHA YZF R15",
          description: "Wheelbase: 1366 mm,",
          greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
          price: 199,
          originalPrice: 2499.99,
          image: "https://www.yamaha-motor-india.com/theme/v3/image/r15m/color/gray.png",
        },
        {
          id: 8,
          name: "Aerion Carrbo Helmet",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
          price: 699,
          originalPrice: 1398,
          image: "https://purepng.com/public/uploads/large/purepng.com-ktm-690-dukemotorcyclemotorbikebikevehiclektm-981525163731e5vaf.png",
        },
        {
          id: 9,
          name: "Aerion Carrbo Helmet",
          description: "Fashion, Twin Disc",
          greenBoxInfo: "Perfect fit for comfort and safety\nLightweight\nExtra padding for protection",
          price: 499,
          originalPrice: 1398,
          image: "https://www.pngarts.com/files/8/Kawasaki-Bike-PNG-Transparent-Image.png",
        },
        {
          id: 10,
          name: "Kawasaki Ninja H2",
          description: "Supercharged, 998cc Engine",
          greenBoxInfo: "Super-fast acceleration\nExcellent handling\nUnique design",
          price: 2999.99,
          originalPrice: 3599.99,
          image: "http://magazine.pamotos.com/wp-content/uploads/2015/07/Kawasaki-Ninja-H2.png",
        },
        {
          id: 11,
          name: "GT 650",
          description: "Classic, 346cc Engine",
          greenBoxInfo: "Smooth ride\nTimeless design\nPerfect for long rides",
          price: 1999.99,
          originalPrice: 2299.99,
          image: "https://royalenfield.com.au/wp-content/uploads/2021/10/Mr-Clean-rear-view.png",
        },
        {
          id: 12,
          name: "Jawa Perak",
          description: "Modern design, 334cc Engine",
          greenBoxInfo: "Smooth performance\nGreat value for money\nPerfect for city commuting",
          price: 1499.99,
          originalPrice: 1799.99,
          image: "https://images.jawamotorcycles.com/medium/42-bobber/slide-03b-jasper-red-dual-tone.png?v=1",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentBikeIndex = (this.currentBikeIndex + 1) % this.bikes.length;
    },
    prevSlide() {
      this.currentBikeIndex =
        (this.currentBikeIndex - 1 + this.bikes.length) % this.bikes.length;
    },
    showBikeDetails(bikeId) {
      const selectedBikeIndex = this.bikes.findIndex(bike => bike.id === bikeId);
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
  padding-top: 50px; /* Adjust the value as needed */
}
@keyframes boomerang {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px); /* Move to the right */
  }
  100% {
    transform: translateX(0); /* Move back to the original position */
  }
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
  max-width: 100%;
  height: auto;
}

.fixed-img {
  width: 600px; /* Fixed width */
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
