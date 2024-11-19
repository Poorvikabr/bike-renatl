import Vue from 'vue';
import Router from 'vue-router';
import BikeBooking from './views/BikeBooking.vue';
import BookingConfirmation from './views/BookingConfirmation.vue';
import LandingPage from './components/LandingPage.vue';
import BikeList from './components/BikesPage.vue';
import LoginRegister from './components/LoginRegister.vue';
import BlogPage from './components/BlogPage.vue';
import AccessoryPage from './components/AccessoryPage.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/bikes', name: 'BikeList', component: BikeList },
    { path: '/Accessory', name: 'AccessoryList', component: AccessoryPage },
    { path: '/blogs', name: 'BlogPage', component: BlogPage },
    { path: '/login', name: 'LoginRegister', component:LoginRegister},
    { path: '/book/:id', name: 'BikeBooking', component: BikeBooking, props: true },
    { path: '/confirmation', name: 'BookingConfirmation', component: BookingConfirmation, props: true },
  ],
});
