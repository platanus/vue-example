import MovieDB from 'moviedb'

const mdb = MovieDB('API_KEY')

export function searchMovie (name) {
  return new Promise((resolve, reject) => {
    mdb.searchMovie({ query: name }, (err, res) => {
      if (err !== null) return reject(err)
      resolve(res)
    })
  })
}
