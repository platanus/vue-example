<template>
  <div id="app">
    <img src="./assets/logo.png">
    <movie-search v-on:add-movie="addMovie"></movie-search>
    <movie-list :movies="movies"></movie-list>
  </div>
</template>

<script>
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'

export default {
  name: 'app',
  components: {
    MovieList,
    MovieSearch
  },
  methods: {
    addMovie (movie) {
      this.movies.push(movie)
    }
  },
  data () {
    return {
      movies: [
        {
          name: 'Star Wars: The Force Awakens',
          rating: 8.1,
          releaseDate: new Date(2015, 11, 17)
        }, {
          name: 'Arrival',
          rating: 8,
          releaseDate: new Date(2016, 9, 10)
        }, {
          name: 'Dr. Strange',
          rating: 7.6,
          releaseDate: new Date(2016, 10, 3)
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
