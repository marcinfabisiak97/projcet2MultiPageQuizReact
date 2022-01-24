import { Link } from 'react-router-dom';
import React from "react";
import { FirstPage } from "../../context/Context";
import { useContext } from "react";

import Headerfirstpage from "../headerFirstPage";
const Firstpage = () => {

	const width = window.innerWidth;
	const breakpoint = 1023;
	const { photo, desc, category, linkAdres, linkAdres1, clicker, linker2, firstPageWrraper, chooseCategory, linkButton } = useContext(FirstPage);
	return (

		<div className={firstPageWrraper}>

			<Headerfirstpage />
			<div className='chooseCat'>
				<div className={chooseCategory} >
					<p>WYBRANA KATEGORIA:</p>
				</div>
				<div className='imgnText' >
					<div className='imgnText__img' >
						<img src={photo} alt={desc} />
					</div>
					<div className='imgnText__line'></div>
					<div className='imgnText__text'>
						<p>{category}</p>
					</div>
				</div>
			</div>
			<Link to={width < breakpoint ? linkAdres : linkAdres1} className={clicker} className="link" >
				<div className={linkButton}>
					<p>Rozpocznij</p><img src={linker2} alt="button" />
				</div>
			</Link>

		</div>


	)
}
export default Firstpage;