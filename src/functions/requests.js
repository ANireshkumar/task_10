const API_KEY = '91e34a07';

const requests = {
  movies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `./discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `./discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `./discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `./discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `./discover/movie?api_key=${API_KEY}&with_genres=99`,

};
export default requests;
