import React, { useEffect, useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Nav() {
	const [isScrolled, setScrolled] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 100) setScrolled(true);
			else setScrolled(false);
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={"nav "}>
			<div className={"nav-container " + (isScrolled ? "nav-black" : "")}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
					className="nf-logo"
				/>
				<ul className="list">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Series</a>
					</li>
					<li>
						<a href="#">Films</a>
					</li>
					<li>
						<a href="#">Latest</a>
					</li>
					<li>
						<a href="#">My List</a>
					</li>
					<li>
						<a href="#">Browse by language</a>
					</li>
				</ul>

				<div className="spacer"></div>
				<FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
				<FontAwesomeIcon icon={faBell} className="bell" />
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					className="avater"
				/>
			</div>
		</div>
	);
}

export default Nav;
