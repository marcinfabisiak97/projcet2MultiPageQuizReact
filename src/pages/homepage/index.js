import { Suspense } from "react";
import technologia_ikona_ from "../../assets/technologia_ikona_.svg"
import kultura_ikona from "../../assets/kultura_ikona.svg"
import motoryzacja_ikona from "../../assets/motoryzacja_ikona.svg"
import programowanie_ikona from "../../assets/programowanie_ikona.svg"
import historia_ikona from "../../assets/historia_ikona.svg"
import { Link } from 'react-router-dom';
import React from "react";

const Homepage = () => {

	const myLists = [
		{ text: 'TECHNOLOGIA', content: '/Firstpagetech', pic: technologia_ikona_ },
		{ text: 'KULTURA', content: '/Firstpagecult', pic: kultura_ikona },
		{ text: 'MOTORYZACJA', content: '/Firstpagemoto', pic: motoryzacja_ikona },
		{ text: 'PROGRAMOWANIE', content: '/Firstpagecode', pic: programowanie_ikona },
		{ text: 'HISTORIA', content: '/Firstpagehist', pic: historia_ikona },
	];

	const Category = myLists.map((el, index) => {
		return (
			<div className="fiveBricks__brick">
				<Link key={index} to={el.content} >
					<div className="brickImg" >
						<img src={el.pic} alt="category" />
					</div>
					<div className="brickText">
						<p>{el.text}</p>
					</div>
				</Link>
			</div>
		)
	})


	return (
		<div className="mainPage" >
			<h1>QUIZ</h1>
			<h2>10 PYTAŃ/5 KATEGORII</h2>
			<h3>WYBIERZ KATEGORIE</h3>
			<div className="fiveBricks" >
				{Category}
			</div>
		</div>
	)
}
export default Homepage;