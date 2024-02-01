import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "c30d7933721914804d958690141264ce";
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&Language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
	fetchTopRated: `/movie/top_reated?api_key=${API_KEY}&languagge=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
