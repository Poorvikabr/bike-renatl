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
                <!-- <p class="card-text">{{ bike.description }}</p> -->
                <h4 class="text-success">
                  Rs {{ bike.price }}
                </h4>
                <span class="text-muted"><del>Rs{{ bike.originalPrice }}</del></span>
              </div>
              <b-button  variant="primary" @click="goToBikeDetails(bike)" >View</b-button>
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
        currentBikeIndex: 0,
        bikes: [
          {
            id: 9,
            name: "Vespa GTS 300",
            description: "Wheelbase: 1366 mm,",
            greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
            price: 499,
            originalPrice: 2499.99,
            image: "https://images.piaggio.com/vespa/vehicles/evgs000vte/evgs8znvte/evgs8znvte-02.png",
          },
          {
            id: 10,
            name: "Honda Activa 6G",
            description: "Fashion, Twin Disc",
            greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
            price: 699,
            originalPrice: 1398,
            image: "https://www.bgshonda.com/uploads/image/bgs/activa6g.png",
          },
          {
            id: 11,
            name: "Yamaha Aerox 155",
            description: "Fashion, Twin Disc",
            greenBoxInfo: "Perfect fit for comfort and safety\nLightweight\nExtra padding for protection",
            price: 599,
            originalPrice: 1398,
            image: "https://www.motoph.com/wp-content/uploads/2017/05/black.png",
          },
          {
            id: 12,
            name: "TVS Ntorq 125",
            description: "Supercharged, 998cc Engine",
            greenBoxInfo: "Super-fast acceleration\nExcellent handling\nUnique design",
            price: 669.99,
            originalPrice: 3599.99,
            image: "https://tvsperu.com/wp-content/uploads/2023/03/NTORQ-125-RE-min.png",
          },
          {
            id: 13,
            name: "Suzuki Access 125",
            description: "Classic, 346cc Engine",
            greenBoxInfo: "Smooth ride\nTimeless design\nPerfect for long rides",
            price: 999.99,
            originalPrice: 2299.99,
            image: "https://www.poddarsuzuki.com/wp-content/uploads/2022/10/2-2.png",
          },
          {
            id: 14,
            name: "Aprilia SR 160",
            description: "Modern design, 334cc Engine",
            greenBoxInfo: "Smooth performance\nGreat value for money\nPerfect for city commuting",
            price: 1499.99,
            originalPrice: 1799.99,
            image: "https://shop.apriliaindia.com/content/model/163705981161938ce360bcfsr-rst-160_449x485_1.png",
          },
          {
            id: 15,
            name: "Ather 450X Gen 3",
            description: "Wheelbase: 1366 mm,",
            greenBoxInfo: "This bike has a top speed of 150 km/h\nAdvanced suspension\nPerfect for racing",
            price: 899,
            originalPrice: 2499.99,
            image: "https://app.atherenergy.com/images/newscooter.png",
          },
          {
            id: 16,
            name: "Vespa Electrical",
            description: "Fashion, Twin Disc",
            greenBoxInfo: "Lightweight and durable\nPerfect for everyday use\nFashionable design",
            price: 699,
            originalPrice: 1398,
            image: "https://www.pngplay.com/wp-content/uploads/13/Vespa-PNG-Photo-Image.png",
          },
          
        ],
      };
    },
    methods: {
      goToBikeDetails(bike) {
      this.$router.push({ path: `/AllBikes/${bike.id}`, query: { bike: JSON.stringify(bike) } });
    },
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
  .bg-light-green {
  background-color: #d0f0c0;
  padding: 20px;
  border-radius: 10px;}
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
  