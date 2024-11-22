<template>
  <div id="app">
    
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="success"
      fixed="top"
      class="navbar-blue"
    >
      <!-- Left-Aligned Brand Logo and Name -->
      <b-navbar-brand
        href="#motodeal"
        class="d-flex align-items-center mr-auto"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1768/1768191.png"
          alt="Logo"
          style="width: 50px; height: auto; margin-right: 10px"
        />
        <span>Motodeal</span>
      </b-navbar-brand>

      <!-- Center-Aligned Navbar Links -->
      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/Display">Bikes/Accessories</b-nav-item>
          
          <b-nav-item :to="{path:'/', hash:'#about'}">About</b-nav-item>
          <b-nav-item to="/blogs">Blog</b-nav-item>
          
        </b-navbar-nav>
      </b-collapse>

      <!-- Right-Aligned Login/Register -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login">Login / Register</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>