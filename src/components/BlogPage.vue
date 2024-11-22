<template>
  <div class="full-bg">
    <!-- Blog Section -->
    <div class="blog-list">
      <!-- Blog Posts -->
      <div v-for="post in posts" :key="post.id" class="blog-card">
        <div class="card">
          <img :src="post.image" class="card-img-top" alt="Blog image" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.summary }}</p>
            <p class="post-date">{{ post.date }}</p>
            <button @click="togglePostDetail(post.id)" class="btn btn-primary">
              {{ post.showDetail ? 'Hide' : 'Read More' }}
            </button>
            <div v-if="post.showDetail" class="post-content">
              <p>{{ post.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="reviews-section mt-5 reviews-offset">
      <h4>Customer Reviews</h4>
      <!-- 3 Random Reviews with Stars -->
      <div class="review" v-for="(review, index) in reviews" :key="index">
        <div class="review-user">
          <img :src="review.photo" alt="User Photo" class="review-photo" width="50" height="50" />
          <h5>{{ review.name }}</h5>
        </div>
        <div class="review-stars">
          <span v-for="n in review.stars" :key="n" class="star">★</span>
          <span v-for="n in (5 - review.stars)" :key="n + 5" class="star empty">★</span>
        </div>
        <p class="review-text">{{ review.text }}</p>
      </div>

      <!-- Write a Review Section -->
      <div class="write-review">
        <h5>Write a Review</h5>
        <textarea v-model="newReview.text" placeholder="Your review..." rows="3"></textarea>
        <div class="stars-input">
          <label>Rating:</label>
          <span v-for="n in 5" :key="n" @click="setRating(n)" class="star" :class="{ active: n <= newReview.stars }">★</span>
        </div>
        <button @click="submitReview" class="btn btn-primary">Submit Review</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Top Bike Rental Tips',
          summary: 'Learn the best tips for renting bikes and exploring the city.',
          content: 'When renting a bike, whether for a weekend getaway or an exciting city tour, ensuring a smooth and enjoyable experience is key. Here are some expert tips to make the most of your bike rental experience.',
          image: 'https://theridingcenter.com/wp-content/uploads/2015/01/bigstock-Biker-driving-a-motorcycle-rid-67968883.jpg',
          date: 'November 14, 2024',
          showDetail: false,
        },
        {
          id: 2,
          title: 'Must-Visit Destinations',
          summary: 'Check out these amazing biking destinations.',
          content: 'If you are a biking enthusiast, there is nothing like the thrill of exploring new places on two wheels. Whether you are looking for scenic mountain trails or coastal roads',
          image: 'https://www.caraccidenthelp.com/blog/wp-content/uploads/2023/11/view-person-riding-motorbike-outdoors.jpg',
          date: 'November 12, 2024',
          showDetail: false,
        },
        {
          id: 3,
          title: 'Safety Tips for Biking',
          summary: 'Stay safe on the road with these essential tips.',
          content: 'Biking is an exhilarating experience, but it is essential to prioritize safety to enjoy the ride to the fullest. Whether you are a beginner or an experienced rider, these safety tips will help ensure you stay protected on the road',
          image: 'https://tse2.mm.bing.net/th?id=OIP.XaIEkdlNY6qbK5ka15tyUQHaE8&pid=Api&P=0&h=180',
          date: 'November 10, 2024',
          showDetail: false,
        },
      ],
      reviews: [
        { name: 'John Doe', photo: 'https://randomuser.me/api/portraits/men/32.jpg', stars: 5, text: 'Amazing service! Highly recommend.' },
        { name: 'Jane Smith', photo: 'https://randomuser.me/api/portraits/women/33.jpg', stars: 4, text: 'Good bikes, but service can be improved.' },
        { name: 'Sam Wilson', photo: 'https://randomuser.me/api/portraits/men/34.jpg', stars: 3, text: 'Decent experience, but pricing is high.' }
      ],
      newReview: {
        text: '',
        stars: 0
      }
    };
  },
  methods: {
    togglePostDetail(id) {
      const post = this.posts.find(p => p.id === id);
      post.showDetail = !post.showDetail;
    },
    setRating(star) {
      this.newReview.stars = star;
    },
    submitReview() {
      if (this.newReview.text && this.newReview.stars > 0) {
        this.reviews.push({
          name: 'New User',
          photo: 'https://randomuser.me/api/portraits/men/35.jpg',
          stars: this.newReview.stars,
          text: this.newReview.text,
        });
        this.newReview.text = '';
        this.newReview.stars = 0;
      }
    }
  },
};
</script>

<style scoped>
.reviews-section {
  margin-top: 40px;
}

.reviews-offset {
  margin-left: 20px; 
}

.review {
  margin-bottom: 15px;
}

.review-user {
  display: flex;
  align-items: center;
}

.review-photo {
  border-radius: 50%;
  margin-right: 10px;
}

.full-bg { 
  background-color: #d0f0c0; 
  min-height: 100vh; 
  padding-top: 100px; 
}

.review-stars {
  color: #f5c518;
}

.star {
  font-size: 1.5em;
}

.star.empty {
  color: #ddd;
}

.write-review {
  margin-top: 20px;
}

.write-review textarea {
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1em;
}

.stars-input {
  margin-top: 10px;
}

.stars-input span {
  cursor: pointer;
  font-size: 1.5em;
}

.stars-input span.active {
  color: #f5c518;
}

.stars-input label {
  margin-right: 10px;
}

.blog-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.blog-card {
  width: 100%;
  max-width: 300px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-body {
  padding: 15px;
}

.post-date {
  color: #888;
  font-size: 0.9em;
}

.post-content {
  margin-top: 15px;
  font-size: 1.1em;
  line-height: 1.6em;
}
</style>
