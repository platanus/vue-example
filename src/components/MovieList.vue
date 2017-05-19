<template>
  <ul class="movie-list">
    <li v-for="movie in movies" class="movie-list__movie">
      <div class="movie-list__name">{{movie.name}}</div>
      <div class="movie-list__rating">{{movie.rating}}</div>
      <movie-rating :rating="movie.rating"></movie-rating>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['movies']
}
</script>

<style lang="scss">
  .movie-list {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    text-align: left;

    &__movie {
      border: 1px solid #ccc;
      padding: 20px;
      display: flex;
    }

    &__rating, &__name {
      flex: 50% 1 1;
    }

    &__rating {
      text-align: right;
    }
  }
</style>
