<template>
  <div>
    <!-- Main Landing Section with Full-Width -->
    <b-container fluid class="d-flex landing-section">
  <b-row class="align-items-center">
    <b-col lg="7" class="my-4 text-center mt-5">
      <h1 class="mb-3">Get Ready to Roll! </h1>
      <h3 class="display-5 text-primary my-4">Discover Thrilling New Destinations with Our Premium Bike Rentals </h3>
      
      <h5 class="text-secondary mb-4">
        Ride with Confidence – Your Trusted Platform for Easy and Affordable Bike Rentals!
      </h5>
      <b-button variant="primary" class="my-3" href="/Display">
    Rent Now
  </b-button>
      
    </b-col>
    <b-col md="5" class="d-flex justify-content-center align-items-center mt-4">
      <img
        src="https://img.icarcdn.com/autospinn/body/000000244498_58a75be4_5683_4114_afe0_f4a1b2494960.png"
        alt="Bike"
        class="img-fluid boomerang-effect"
        style="max-width: 100%; height: auto; width: 2000px"
      />
    </b-col>
  </b-row>
</b-container>


    <!-- About Section -->
    <b-container fluid id="about" class="bg-success py-5">
      <b-row class="align-items-center">
        <b-col md="6">
          <h2 class="text-center">About Motodeal</h2>
          <p class="text-center">
            Welcome to Motodeal, your one-stop solution for all things related
            to bikes. We offer a wide range of high-quality bikes, accessories,
            and services tailored to meet the needs of every rider. Whether
            you're looking for the latest models, great deals, or expert advice,
            we're here to help you every step of the way.
          </p>
        </b-col>
        <b-col md="6">
          <!-- Embed Google Maps iframe for live location -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9958890095986!2d77.63960807194454!3d12.97211451487334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a77f100f77%3A0xc5ec8c9958653929!2sOntrack%20%7C%20Bike%20Rentals%20in%20Bangalore%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1731562064085!5m2!1sen!2sin"
            width="650"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col>
      </b-row>

      <!-- Contact Section Below About -->
      <b-row class="mt-5">
        <b-col md="6">
          <h3 class="text-center">Contact Us</h3>
          <p class="text-center">
            <strong>Address:</strong> 123 Bike Street,
            bengaluru,karnataka,India<br />
            <strong>Email:</strong> info@motodeal.com<br />
            <strong>Phone:</strong> 7975325021
          </p>
        </b-col>
      </b-row>
    </b-container>
    <footer class="text-center mt-5">
      <p>&copy; 2024 MotoDeal | All rights reserved</p>
    </footer>

    <!-- More Sections Below (Optional) -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 60,
      hours: 24,
      minutes: 58,
      seconds: 42,
    };
  },
  computed: {
    formattedTime() {
      return `${this.days} : ${this.hours} : ${this.minutes} : ${this.seconds}`;
    },
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
        if (this.minutes < 0) {
          this.minutes = 59;
          this.hours--;
          if (this.hours < 0) {
            this.hours = 23;
            this.days--;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.navbar-green {
  color: #b71053;
}

.navbar-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav .nav-link {
  color: white !important;
  font-size: 1.2rem;
}

.navbar-nav .nav-link:hover {
  color: #ffcc00;
}

.landing-section {
  background-color: #d0f0c0;
  height: 100vh;
  padding-top: 100px;
  text-align: center;
}

h1,
h2 {
  color: #333;
}

h1 {
  font-size: 4rem;
}

.time-box {
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.time-box h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.time-box h4 {
  font-size: 1.2rem;
  font-weight: normal;
}

.bike-image img {
  max-width: 100%;
  height: auto;
}

.boomerang-effect {
  animation: boomerang 1.5s ease-in-out infinite;
}

@keyframes boomerang {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}

/* About Section Styles */
.about-section {
  background: green;
  color: white;
}

.about-section h2 {
  font-size: 3rem;
}

.about-section p {
  font-size: 1.2rem;
}

.contact-section {
  background: #f1f1f1;
  color: #333;
  padding: 40px 0;
}

.contact-section h3 {
  font-size: 2rem;
}

.contact-section p {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.2rem;
  }

  .navbar-nav .nav-link {
    font-size: 1rem;
  }
}
</style>
