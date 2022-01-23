import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cofnij_x from "../../assets/cofnij_x.svg";
import zamknij_x from "../../assets/zamknij_x.svg";
import { QuizContext } from "../../context/Context";
import q from "../../assets/q.png";
const Headerfirstpage = () => {
	const { setScore } = useContext(QuizContext);
	const restartQuiz = () => {
		setScore(0)
	}
	return (
		<React.Fragment>
			<div className="header" >
				<div className="header__letter">
					<img src={q} alt="letter Q" />
				</div>
				<h1>QUIZ</h1>
				<div className="backAndEx">
					<div onClick={restartQuiz} className="backAndEx__back" >
						<Link to="/">
							<img src={cofnij_x} alt="cofnij" />
						</Link>
					</div>
					<div onClick={restartQuiz} className="backAndEx__ex">
						<Link to="/">
							<img src={zamknij_x} alt="zamknij" />
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
};

export default Headerfirstpage;