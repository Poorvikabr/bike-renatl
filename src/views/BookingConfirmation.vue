<template>
    <b-container>
      <h2>Booking Confirmation</h2>
      <p>Thank you, {{ booking.name }}!</p>
      <p>Your bike: {{ booking.bike }}</p>
      <p>Date: {{ booking.date }}</p>
      <p>We’ve sent a confirmation email to: {{ booking.email }}</p>
    </b-container>
  </template>
  
  <script>
  export default {
    props: {
      booking: Object,
    },
  };
  </script>
  