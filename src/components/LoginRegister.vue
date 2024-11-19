<template> 
  <div class="full-bg d-flex justify-content-center align-items-center">
    <div class="card p-4" style="max-width: 400px;">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="emailOrNumber">Email or Phone Number</label>
          <input type="text" id="emailOrNumber" class="form-control" v-model="emailOrNumber" placeholder="Enter email or phone number">
          <div v-if="errors.emailOrNumber" class="text-danger">{{ errors.emailOrNumber }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" v-model="password" placeholder="Enter password">
          <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
        </div>
        <div class="form-group text-right">
          <a href="#" class="text-primary">Forgot Password?</a>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: 'LoginPage',
data() {
  return {
    emailOrNumber: '',
    password: '',
    errors: {
      emailOrNumber: '',
      password: ''
    }
  };
},
methods: {
  validateEmailOrNumber(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    if (emailPattern.test(value) || phonePattern.test(value)) {
      return true;
    }
    return false;
  },
  handleSubmit() {
    this.errors.emailOrNumber = '';
    this.errors.password = '';

    if (!this.validateEmailOrNumber(this.emailOrNumber)) {
      this.errors.emailOrNumber = 'Invalid email or phone number';
    }
    if (!this.password) {
      this.errors.password = 'Password is required';
    }
    if (!this.errors.emailOrNumber && !this.errors.password) {
      alert('You have successfully logged in');
      this.$router.push('/bikes');
    }
  }
}
};
</script>

<style scoped>
/* Full background */
.full-bg {
background-color: #d0f0c0;
width: 100vw;
height: 100vh;
overflow: hidden;
}

.card {
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-block {
width: 100%;
}

.text-primary:hover {
text-decoration: underline;
}

.text-danger {
font-size: 0.875em;
margin-top: 0.5em;
}
</style>
