import { Link } from 'react-router-dom';
import React from "react";
import { FirstPage } from "../../context/Context";
import { useContext } from "react";

import Header1 from "../header1";
const Firstpage = () => {

	const width = window.innerWidth;
	const breakpoint = 1023;
	const { photo, desc, category, linkAdres, linkAdres1, clicker, categoryPage, categoryPageText, linker2 } = useContext(FirstPage);
	return (

		<div className={categoryPage}>

			<Header1 />
			<div  >
				<div >
					<p>WYBRANA KATEGORIA:</p>
				</div>
				<div >
					<div >
						<img src={photo} alt={desc} />
					</div>
					<div >
						<p>{category}</p>
					</div>
				</div>
			</div>
			<Link to={width < breakpoint ? linkAdres : linkAdres1} className={clicker} >
				<div>
					<p>Rozpocznij</p><img src={linker2} alt="button" />
				</div>
			</Link>

		</div>


	)
}
export default Firstpage;