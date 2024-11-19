<template>
  <div data-bs-spy="scroll" data-bs-target="#navmenu" data-bs-offset="70">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-green navbar-dark py-3 fixed-top">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#home" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
            <li class="nav-item">
              <a href="#services" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content Section -->
    <section class="landing-section">
      <div class="container text-center">
        <!-- Current Time -->
        <h1>Welcome to Our Bike Rental Service</h1>
        <div>
          <h2 id="current-time">{{ currentTime }}</h2>
        </div>

        <!-- Bike Image -->
        <div class="bike-image">
          <img
            src="https://example.com/bike.jpg" 
            alt="Bike"
            style="max-width: 100%; height: auto; width: 400px; margin-top: 20px;"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
    };
  },
  mounted() {
    // Update time every second
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>

<style scoped>
/* Styling for Navbar and Landing Section */
.navbar-green {
  background-color: #28a745;
}

.landing-section {
  background-color: #d0f0c0;
  height: 100vh;
  padding-top: 150px;
  text-align: center;
}

h1, h2 {
  color: #333;
}
</style>
