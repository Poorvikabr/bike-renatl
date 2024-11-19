<b-col lg="7" class="my-4 text-center mt-5">
  <h1 class="mb-3">Rent it Out to</h1>
  <h1 class="display-4 text-primary my-4">EXPLORE THE WORLD</h1>
  <h3 class="font-weight-bold my-4">
    India's favourite two-wheeler super app
  </h3>
  <h5 class="text-secondary mb-4">
    Your trusted platform for affordable and hassle-free bike rentals
  </h5>
  <b-button variant="primary" class="my-3" href="/rent">
    Rent Now
  </b-button>
</b-col>



<b-button variant="primary" class="my-3" href="/rent">
  Rent Now
</b-button>



<template>
  <div>
    <!-- <NavBar/> -->
    <!-- Banner Section -->
    <b-jumbotron
      header="Bike Rental Service"
      sub-header="Ride Your Dream"
      class="text-white gradient-bg"
    >
      <template>
        <h1 class="display-5">Discover Your Perfect Ride!</h1>
        <p class="lead">
          We offer a variety of bikes to suit all your riding needs. Choose from
          our categories below and start your adventure!
        </p>
        <b-button variant="light" href="#categories">Explore Now</b-button>
      </template>
    </b-jumbotron>

    <!-- Categories Section -->
    <div id="categories" class="container my-5">
      <h2 class="text-center mb-4">Our Categories</h2>
      <b-row>
        <b-col
          md="3"
          v-for="category in categories"
          :key="category.title"
          class="mb-4"
        >
          <b-card
            :title="category.title"
            :img-src="category.image"
            img-alt="Category Image"
            img-top
            class="text-center"
            style="height: 100%"
          >
            <b-card-text>
              {{ category.description }}
            </b-card-text>
            <b-button variant="primary" :href="category.link"
              >View {{ category.title }}</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </div>
    </div>
  </template>


