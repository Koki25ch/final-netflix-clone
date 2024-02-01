import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Request";
import Row from "./Row";

function HomeScreen() {
	return (
		<div className="homescreen">
			<Nav />
			<Banner />
			<Row
				Title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>

			<Row Title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
			<Row Title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
			<Row Title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
			<Row Title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
			<Row Title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default HomeScreen;
