<template>
    <b-container>
      <b-row>
        <b-col md="6">
          <b-card :title="bike.name" :img-src="bike.image" img-alt="Bike image" img-top>
            <b-card-text>
              <p>Price: ${{ bike.price }}/day</p>
              <p>Available: {{ bike.available ? 'Yes' : 'No' }}</p>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-form @submit.prevent="submitBooking">
            <b-form-group label="Your Name">
              <b-form-input v-model="booking.name" required></b-form-input>
            </b-form-group>
  
            <b-form-group label="Email">
              <b-form-input type="email" v-model="booking.email" required></b-form-input>
            </b-form-group>
  
            <b-form-group label="Booking Date">
              <b-form-datepicker v-model="booking.date" required></b-form-datepicker>
            </b-form-group>
  
            <b-button type="submit" variant="success">Confirm Booking</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    props: {
      bike: Object,
    },
    data() {
      return {
        booking: {
          name: '',
          email: '',
          date: null,
        },
      };
    },
    methods: {
      submitBooking() {
        const bookingData = {
          bike: this.bike.name,
          ...this.booking,
        };
        // Save booking data to localStorage
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(bookings));
  
        this.$router.push({ name: 'Confirmation', params: { booking: bookingData } });
      },
    },
  };
  </script>
  