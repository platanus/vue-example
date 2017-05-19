<template>
  <div class="movie-rating">
    <span v-for="star in stars">⭐️</span>
  </div>
</template>

<script>
export default {
  props: ['rating'],
  computed: {
    stars () {
      const stars = Math.round(this.rating)
      return new Array(stars)
    }
  }
}
</script>

