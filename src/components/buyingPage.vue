<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4 py-4">Bike Rental Form</h2>
  
      <!-- Conditional Rendering: Show Form or Confirmation Message -->
      <b-card v-if="!isConfirmed">
        <b-form @submit.prevent="submitForm">
          <!-- Name Input -->
          <b-form-group label="Full Name" label-for="name-input" description="Enter your full name.">
            <b-form-input
              id="name-input"
              v-model="formData.name"
              placeholder="xyz"
              required
            ></b-form-input>
          </b-form-group>
  
          <!-- Email Input -->
          <b-form-group label="Email Address" label-for="email-input" description="We'll never share your email.">
            <b-form-input
              id="email-input"
              type="email"
              v-model="formData.email"
              placeholder="example@mail.com"
              required
            ></b-form-input>
          </b-form-group>
  
          <!-- Phone Number Input -->
          <b-form-group label="Phone Number" label-for="phone-input">
            <b-form-input
              id="phone-input"
              type="tel"
              v-model="formData.phone"
              placeholder="789456123"
              required
            ></b-form-input>
          </b-form-group>
  
          <!-- Bike Model Selection -->
          <b-form-group label="Select Bike Model" label-for="bike-model-select">
            <b-form-select
              id="bike-model-select"
              v-model="formData.bikeCategory"
              :options="bikeCategories"
              required
            ></b-form-select>
          </b-form-group>
  
          <!-- Dynamic Bike Models based on Category -->
          <b-form-group v-if="formData.bikeCategory" label="Select a Bike" label-for="bike-model">
            <b-form-select
              id="bike-model"
              v-model="formData.bikeModel"
              :options="filteredBikeModels"
              required
            ></b-form-select>
          </b-form-group>
  
          <!-- Rental Duration -->
          <b-form-group label="Rental Duration (in days)" label-for="rental-duration">
            <b-form-input
              id="rental-duration"
              type="number"
              v-model="formData.rentalDuration"
              placeholder="Enter number of days"
              required
            ></b-form-input>
          </b-form-group>
  
          <!-- Pickup Date -->
          <b-form-group label="Pickup Date" label-for="pickup-date">
            <b-form-datepicker
              id="pickup-date"
              v-model="formData.pickupDate"
              placeholder="Select a date"
              required
            ></b-form-datepicker>
          </b-form-group>
  
          <!-- Additional Message -->
          <b-form-group label="Additional Notes" label-for="notes">
            <b-form-textarea
              id="notes"
              v-model="formData.notes"
              placeholder="Any special requests or notes"
              rows="3"
            ></b-form-textarea>
          </b-form-group>
  
          <!-- Submit Button -->
          <b-button type="submit" variant="success" block>
            Submit
          </b-button>
        </b-form>
      </b-card>
  
      <!-- Booking Confirmation Message -->
      <b-card v-else class="text-center p-4">
        <h3 class="text-success mb-3">Booking Confirmed!</h3>
        <p>Thank you, {{ formData.name }}!</p>
        <p>You have successfully booked a <strong>{{ formData.bikeModel }}</strong> for {{ formData.rentalDuration }} day(s).</p>
        <p>Pickup Date: <strong>{{ formData.pickupDate }}</strong></p>
        <p>A confirmation email has been sent to <strong>{{ formData.email }}</strong>.</p>
        <b-button variant="primary" @click="resetForm">Book Another</b-button>
      </b-card>
    </div>
  </template>
  
  ---
  
  ### **Script Section**
  ```javascript
  <script>
export default {
  name: "BuyinPage",
  data() {
    return {
      // State to toggle between form and confirmation
      isConfirmed: false,
      // Form data
      formData: {
        name: "",
        email: "",
        phone: "",
        bikeCategory: "", // New field for selecting bike category
        bikeModel: "",
        rentalDuration: null,
        pickupDate: null,
        notes: "",
      },

      // Bike categories
      bikeCategories: [
        { value: null, text: "Select a bike category" },
        { value: "Superbike", text: "Superbike" },
        { value: "Scooter", text: "Scooter" },
        { value: "Cruiser", text: "Cruiser" },
        { value: "Accessories", text: "Accessories" },
      ],

      // Bike models for each category
      bikeModels: {
        Superbike: [
          { value: "Yamaha R1", text: "Yamaha R1" },
          { value: "Kawasaki Ninja", text: "Kawasaki Ninja" },
          { value: "Honda CBR1000", text: "Honda CBR1000" },
        ],
        Scooter: [
          { value: "Honda Activa", text: "Honda Activa" },
          { value: "TVS Jupiter", text: "TVS Jupiter" },
          { value: "Suzuki Access", text: "Suzuki Access" },
        ],
        Cruiser: [
          { value: "Harley Davidson", text: "Harley Davidson" },
          { value: "Royal Enfield", text: "Royal Enfield" },
          { value: "Bajaj Avenger", text: "Bajaj Avenger" },
        ],
      },
    };
  },
  computed: {
    // Dynamically filter bike models based on selected category
    filteredBikeModels() {
      return this.bikeModels[this.formData.bikeCategory] || [];
    },
  },
  methods: {
    submitForm() {
      // Check if all required fields are filled
      if (
        this.formData.name &&
        this.formData.email &&
        this.formData.phone &&
        this.formData.bikeCategory &&
        this.formData.bikeModel &&
        this.formData.rentalDuration &&
        this.formData.pickupDate
      ) {
        this.isConfirmed = true; // Show confirmation message
      } else {
        alert("Please fill out all required fields.");
      }
    },
    resetForm() {
      // Reset the form to allow another booking
      this.formData = {
        name: "",
        email: "",
        phone: "",
        bikeCategory: "",
        bikeModel: "",
        rentalDuration: null,
        pickupDate: null,
        notes: "",
      };
      this.isConfirmed = false; // Show form again
    },
  },
};
</script>
