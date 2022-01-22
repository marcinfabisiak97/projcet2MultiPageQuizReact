import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cofnij_x from "../../assets/cofnij_x.svg";
import zamknij_x from "../../assets/zamknij_x.svg";
import { QuizContext } from "../../context/Context";
import q from "../../assets/q.png";
const Header1 = () => {
	const { setScore } = useContext(QuizContext);
	const restartQuiz = () => {
		setScore(0)
	}
	return (
		<React.Fragment>
			<div >
				<div >
					<img src={q} alt="letter Q" />
				</div>
				<div >
					<h1>QUIZ</h1>
				</div>
				<div >
					<div onClick={restartQuiz} >
						<Link to="/">
							<img src={cofnij_x} alt="cofnij" />
						</Link>
					</div>
					<div>
						<Link to="/">
							<img src={zamknij_x} alt="zamknij" />
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
};

export default Header1;