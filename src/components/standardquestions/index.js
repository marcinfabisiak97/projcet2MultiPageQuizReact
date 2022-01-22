import { QuizContext } from "../../context/Context";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { QuestionsContext } from "../../context/Context";
import { useContext } from "react";
import Header from "../header";
import q from "../../assets/q.png";
import { useHistory } from 'react-router-dom';
import { FirstPage } from "../../context/Context"
const Standardquestions = () => {
    const { linkAdres1 } = useContext(FirstPage);
    const width = window.innerWidth;
    const breakpoint = 1023;
    const { score, setScore } = useContext(QuizContext);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (width > breakpoint) {
            history.push(linkAdres1);
        }
    }, [width])
    const {
        dataCode1,
        wrapperWhole,
        questionPrompt,
        questionAnswers,
        questionNext,
        correctPhoto,
        linkCodeEndDragnDrop,
        dndNumberQuestion,
        dndNumberQuestionWynik,
        dndNumberQuestionNumber
    } = useContext(QuestionsContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const nextQuestion = () => {
        setShow(false);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        if (dataCode1[currQuestion].answer === localStorage.getItem('answer')) {
            setScore(score + 1);
        }
        localStorage.clear();
        setCurrQuestion(currQuestion + 1);


    }
    const finishQuiz = () => {
        if (dataCode1[currQuestion].answer === localStorage.getItem('answer')) {
            localStorage.clear();
            setScore(score + 1);

        }
        setShow(false);
        setShow1(false);
        setShow2(false);
        setShow3(false);

    }

    const checkQuest = () => {
        setShow(true);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        if (dataCode1[currQuestion].answer === dataCode1[currQuestion].optionA) {
            setOptionChosen(dataCode1[currQuestion].optionA)
            localStorage.setItem('answer', dataCode1[currQuestion].optionA);

        } else {
            localStorage.clear();
        }
    }
    const checkQuest1 = () => {
        setShow(false);
        setShow1(true);
        setShow2(false);
        setShow3(false);
        if (dataCode1[currQuestion].answer === dataCode1[currQuestion].optionB) {

            setOptionChosen(dataCode1[currQuestion].optionB)
            localStorage.setItem('answer', dataCode1[currQuestion].optionB);

        } else {
            localStorage.clear();
        }

    }
    const checkQuest2 = () => {
        setShow(false);
        setShow1(false);
        setShow2(true);
        setShow3(false);
        if (dataCode1[currQuestion].answer === dataCode1[currQuestion].optionC) {

            setOptionChosen(dataCode1[currQuestion].optionC)
            localStorage.setItem('answer', dataCode1[currQuestion].optionC);


        } else {
            localStorage.clear()
        }
    }
    const checkQuest3 = () => {
        setShow(false);
        setShow1(false);
        setShow2(false);
        setShow3(true);
        if (dataCode1[currQuestion].answer === dataCode1[currQuestion].optionD) {

            setOptionChosen(dataCode1[currQuestion].optionD)
            localStorage.setItem('answer', dataCode1[currQuestion].optionD);

        } else {
            localStorage.clear();
        }
    }



    return (
        <div >
            <div >
                <img src={q} alt="letter Q" />
            </div>
            <div >
                <Header />
            </div>

            <div >
                <div >
                    <p>SELECT THE CORRECT ANSWER</p>
                </div>
                <div >
                    <p>{dataCode1[currQuestion].number}/10</p>
                </div>
            </div>
            <div >
                <h3>{dataCode1[currQuestion].prompt}</h3>
            </div>
            <div >
                <button onClick={checkQuest}>{dataCode1[currQuestion].optionA}
                    {
                        show ? <img src={correctPhoto} alt="poprawna_odpowiedź" /> : null


                    }
                </button>


                <button onClick={checkQuest1}>{dataCode1[currQuestion].optionB}
                    {
                        show1 ? <img src={correctPhoto} alt="poprawna_odpowiedź" /> : null
                    }
                </button>

                <button onClick={checkQuest2}>{dataCode1[currQuestion].optionC}
                    {
                        show2 ? <img src={correctPhoto} alt="poprawna_odpowiedź" /> : null
                    }

                </button>

                <button onClick={checkQuest3}>{dataCode1[currQuestion].optionD}
                    {
                        show3 ? <img src={correctPhoto} alt="poprawna_odpowiedź" /> : null
                    }
                </button>

            </div>
            <div >
                {currQuestion === dataCode1.length - 1 ? (
                    <Link to={linkCodeEndDragnDrop}><button onClick={finishQuiz}>Finish</button></Link>
                ) : (
                    <button onClick={nextQuestion}>Next Question</button>
                )}
            </div>
        </div>
    )
}
export default Standardquestions;