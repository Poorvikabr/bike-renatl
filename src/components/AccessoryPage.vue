<template>
    <div>
      <b-container>
        <h2 class="text-center my-4 popular-bike-header">Latest Popular Accessories</h2>
        <div class="text-center mb-4">
          
        </div>
        <div class="row">
          <!-- Displaying all accessories -->
          <div class="col-md-3 mb-4" v-for="accessory in accessories" :key="accessory.id">
            <div class="card">
              <!-- Accessory Image inside Card with click handler -->
              <img :src="accessory.image" class="card-img-top" alt="Accessory Image" @click="showAccessoryDetails(accessory.id)" />
              <div class="card-body text-center">
                
                <h5 class="card-title">{{ accessory.name }}</h5>
                <p class="card-text">{{ accessory.description }}</p>
                <h4 class="text-success">
                  Rs {{ accessory.price }}
                </h4>
              </div>
              <button class="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </b-container>
  
      <b-container fluid class="p-0">
        <div class="row mb-4">
          <div class="col-md-12">
            <!-- Green Box with Accessory Name, Description, and Image -->
            <div class="green-box-display" style="background-color: #28a745; color: white; margin-top: 100px; padding: 40px 0;">
              <div class="row">
                <!-- Left Column with Accessory Name and Green Box Info -->
                <div class="col-md-6">
                  <h2 :style="{ color: 'black' }">{{ accessories[currentAccessoryIndex].name }}</h2>
  
                  <!-- Green Box Info Section -->
                  <ul style="list-style-type: none; padding-left: 0;">
                    <li v-for="(info, index) in accessories[currentAccessoryIndex].greenBoxInfo.split('\n')" :key="index">
                      <h5>- {{ info.trim() }}</h5>
                    </li>
                  </ul>
  
                  <!-- Price and Buy Now Button -->
                  <h4 class="text-warning">Price: Rs {{ accessories[currentAccessoryIndex].price }}</h4>
                  <button class="btn btn-warning">Buy Now</button>
                </div>
  
                <!-- Right Column with Image -->
                <div class="col-md-6 d-flex">
                  <img :src="accessories[currentAccessoryIndex].image" class="img-fluid fixed-img" alt="Accessory Image" />
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
        currentAccessoryIndex: 0,
        accessories: [
          {
            id: 1,
            name: "Helmet ",
            description: "Lightweight, Stylish",
            greenBoxInfo: "Perfect for safety\nComfortable padding\nAerodynamic design",
            price: 999,
            image: "https://pluspng.com/img-png/motorcycle-helmet-png-image-moto-helmet-999.png",
          },
          {
            id: 2,
            name: "Gloves ",
            description: "Durable, Protective",
            greenBoxInfo: "Enhanced grip\nBreathable material\nAll-season use",
            price: 499,
            image: "https://www.studds.com/Adminpanel/uploads/SMG_6_GLOVES.png",
          },
          {
            id: 3,
            name: "Jacket ",
            description: "Comfortable, Durable",
            greenBoxInfo: "Weather-resistant\nGreat for long rides\nPerfect fit",
            price: 1499,
            image: "https://pierce-images.imgix.net/images/4/9/4/5/49451ebd95f9468b926011e6bc180da6_2_PIA-283526_0_10.png",
          },
          {
            id: 4,
            name: "Boots",
            description: "Heavy Duty, Protective",
            greenBoxInfo: "Reinforced toe\nWaterproof\nSuitable for extreme conditions",
            price: 1999,
            image: "https://www.pngarts.com/files/1/Motorcycle-Boots-PNG-Free-Download.png",
          },
          {
            id: 5,
            name: "Gloves ",
            description: "Durable, Protective",
            greenBoxInfo: "Enhanced grip\nBreathable material\nAll-season use",
            price: 499,
            image: "https://www.studds.com/Adminpanel/uploads/SMG_6_GLOVES.png",
          },
          {
            id: 6,
            name: "Jacket ",
            description: "Comfortable, Durable",
            greenBoxInfo: "Weather-resistant\nGreat for long rides\nPerfect fit",
            price: 1499,
            image: "https://pierce-images.imgix.net/images/4/9/4/5/49451ebd95f9468b926011e6bc180da6_2_PIA-283526_0_10.png",
          },
          {
            id: 7,
            name: "Boots",
            description: "Heavy Duty, Protective",
            greenBoxInfo: "Reinforced toe\nWaterproof\nSuitable for extreme conditions",
            price: 1999,
            image: "https://www.pngarts.com/files/1/Motorcycle-Boots-PNG-Free-Download.png",
          },
          {
            id: 8,
            name: "Gloves ",
            description: "Durable, Protective",
            greenBoxInfo: "Enhanced grip\nBreathable material\nAll-season use",
            price: 499,
            image: "https://www.studds.com/Adminpanel/uploads/SMG_6_GLOVES.png",
          },
          {
            id: 9,
            name: "Jacket ",
            description: "Comfortable, Durable",
            greenBoxInfo: "Weather-resistant\nGreat for long rides\nPerfect fit",
            price: 1499,
            image: "https://pierce-images.imgix.net/images/4/9/4/5/49451ebd95f9468b926011e6bc180da6_2_PIA-283526_0_10.png",
          },
          {
            id: 10,
            name: "Boots",
            description: "Heavy Duty, Protective",
            greenBoxInfo: "Reinforced toe\nWaterproof\nSuitable for extreme conditions",
            price: 1999,
            image: "https://www.pngarts.com/files/1/Motorcycle-Boots-PNG-Free-Download.png",
          },
          {
            id: 11,
            name: "Jacket ",
            description: "Comfortable, Durable",
            greenBoxInfo: "Weather-resistant\nGreat for long rides\nPerfect fit",
            price: 1499,
            image: "https://pierce-images.imgix.net/images/4/9/4/5/49451ebd95f9468b926011e6bc180da6_2_PIA-283526_0_10.png",
          },
          {
            id: 12,
            name: "Boots",
            description: "Heavy Duty, Protective",
            greenBoxInfo: "Reinforced toe\nWaterproof\nSuitable for extreme conditions",
            price: 1999,
            image: "https://www.pngarts.com/files/1/Motorcycle-Boots-PNG-Free-Download.png",
          },
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentAccessoryIndex = (this.currentAccessoryIndex + 1) % this.accessories.length;
      },
      prevSlide() {
        this.currentAccessoryIndex =
          (this.currentAccessoryIndex - 1 + this.accessories.length) % this.accessories.length;
      },
      showAccessoryDetails(accessoryId) {
        const selectedAccessoryIndex = this.accessories.findIndex(accessory => accessory.id === accessoryId);
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
  