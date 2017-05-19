<template>
  <div>
    <input type="text" class="movie-search__input" v-model="movieName" placeholder="Buscar...">
    {{ searchPlaceholder }}
    <ul class="movie-search__list" v-if="movieResults.length > 0">
      <li v-for="movie in movieResults" class="movie-search__movie" @click="addMovie(movie)">
        <div class="movie-search__name">{{movie.title}}</div>
        <div class="movie-search__rating">{{movie.vote_average}}</div>
        <movie-rating :rating="movie.vote_average"></movie-rating>
      </li>
    </ul>
  </div>
</template>

<script>
import { searchMovie } from '../api/movies'
import * as _ from 'lodash'

export default {
  data () {
    return {
      movieName: '',
      movieResults: [],
      searchPlaceholder: undefined
    }
  },
  watch: {
    movieName (value) {
      if (value.length > 0) {
        this.searchPlaceholder = 'Buscando...'
        this.getResults(value)
      } else {
        this.movieResults = []
        this.searchPlaceholder = undefined
      }
    }
  },
  methods: {
    getResults: _.debounce(function (movieName) {
      searchMovie(movieName)
        .then(response => {
          this.searchPlaceholder = `Resultados: ${response.total_results}`
          this.movieResults = response.results
        })
    }, 500),
    addMovie (movie) {
      this.$emit('add-movie', {
        name: movie.title,
        rating: movie.vote_average,
        releaseDate: movie.release_date
      })
      this.movieResults = []
    }
  }
}
</script>

<style lang="scss">
  .movie-search {
    &__input {
      padding: 5px;
      border: 1px solid #ccc;
      width: 500px;
      height: 30px;
      margin-bottom: 30px;
      font-size: 16px;
    }

    &__list {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      text-align: left;
    }

    &__movie {
      border: 1px solid #ccc;
      padding: 20px;
      display: flex;

      &:hover {
        background: #ccc;
      }
    }

    &__rating, &__name {
      flex: 50% 1 1;
    }

    &__rating {
      text-align: right;
    }
  }
</style>

