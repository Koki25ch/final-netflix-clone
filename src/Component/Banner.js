import React, { useEffect, useState } from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "./axios";
import requests from "./Request";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchActionMovies);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	function paragrph(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}
	console.log(movie);
	const title = movie?.title;
	const description = movie?.overview;
	const image = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
	return (
		<div
			className="banner"
			style={{
				bacgroundSize: "cover",
				backgroundImage: 'url("' + image + '")',
				backgroundPosition: "center center",
			}}
		>
			{/* <img
				src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYop7UcoyFskSpspcF0OOYoge_aZYnCTsPiSSuvsi0tlWZTMj2Ksk2cvIGJBqZQPzlOdYeTK1WCzdLlmFelZumNUABzvTItp9za55LbYQOHGkLbencVvIRrRz6f_ptwymVVz8b2SF7hx3gwQ3ALt6taEvqIleaVPVJr2QgJ5b0rYMSFDmC-Jqg.png?r=619"
				className="nf-img"
			/> */}
			<h2>{movie?.title || movie?.name || movie?.original_name}</h2>
			<div className="banner-text">{paragrph(description, 150)}</div>
			<div className="banner-button">
				<button className="play">
					<FontAwesomeIcon icon={faPlay} className="icon-play" />
					Play
				</button>
				<button className="my-list">
					<FontAwesomeIcon icon={faCircleInfo} className="icon-info" />
					<div className="spacer"></div>
					My List
				</button>
			</div>
			<div className="banner--fadebottom" />
		</div>
	);
}

export default Banner;
