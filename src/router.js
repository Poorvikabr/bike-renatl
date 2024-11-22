import Vue from 'vue'; 
import Router from 'vue-router';
import BikeBooking from './views/BikeBooking.vue';
import BookingConfirmation from './views/BookingConfirmation.vue';
import LandingPage from './components/LandingPage.vue';

import LoginRegister from './components/LoginRegister.vue';
import BlogPage from './components/BlogPage.vue';
import AccessoryPage from './components/AccessoryPage.vue';
import DisplayPage from './components/DisplayPage.vue';
import BikesPage from './components/BikesPage.vue';
import ScooterList from './components/ScooterList.vue';
import CruiserList from './components/CruiserList.vue';
import BuyingPage from './components/buyingPage.vue';
import AllBikes from './components/AllBikes.vue';
import AllAccessories from './components/AllAccessories.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/Display', name: 'Display', component: DisplayPage },
    { path: '/Accessory', name: 'AccessoryList', component: AccessoryPage },
    {  path: '/AllAccessory/:id', name: 'AllAccessoryList', component: AllAccessories},
    { path: '/AllBikes/:id', name: 'AllList', component: AllBikes },
    { path: '/SuperBikes', name: 'SuperBikesList', component:BikesPage },
    { path: '/Scooters', name: 'ScooterList', component:ScooterList },
    { path: '/Cruisers', name: 'CrusierList', component:CruiserList },
    { path: '/Confirmation', name: 'Confirmation', component:BuyingPage },
    { path: '/blogs', name: 'BlogPage', component: BlogPage },
    { path: '/login', name: 'LoginRegister', component:LoginRegister},
    { path: '/book/:id', name: 'BikeBooking', component: BikeBooking, props: true },
    { path: '/confirmation', name: 'BookingConfirmation', component: BookingConfirmation, props: true },
  ],
});