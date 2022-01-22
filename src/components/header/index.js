import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cofnij_x from "../../assets/cofnij_x.svg";
import zamknij_x from "../../assets/zamknij_x.svg";
import { QuestionsContext, QuizContext } from "../../context/Context";


const Header = () => {
  const { setScore } = useContext(QuizContext);
  const { linkCode } = useContext(QuestionsContext);

  const restartQuiz = () => {
    setScore(0)
  }
  return (
    <React.Fragment>

      <div >
        <div >
          <h1>QUIZ</h1>
        </div>
        <div >
          <div onClick={restartQuiz} >
            <Link to={linkCode}>
              <img src={cofnij_x} alt="cofnij" />
            </Link>
          </div>
          <div onClick={restartQuiz}>
            <Link to="/">
              <img src={zamknij_x} alt="zamknij" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
