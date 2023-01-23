import { useContext } from "react";
import { QuizContext } from "../../context/Context";
import { QuestionsContext } from "../../context/Context";
import { Link } from 'react-router-dom';
import technologia_ikona_ from "../../assets/technologia_ikona_.svg"
import kultura_ikona from "../../assets/kultura_ikona.svg"
import motoryzacja_ikona from "../../assets/motoryzacja_ikona.svg"
import programowanie_ikona from "../../assets/programowanie_ikona.svg"
import historia_ikona from "../../assets/historia_ikona.svg"
import cofnij_x from "../../assets/cofnij_x.svg";
import zamknij_x from "../../assets/zamknij_x.svg";
import q from "../../assets/q.png";

const EndScreen = () => {
    const breakpoint = 1023;
    const width = window.innerWidth;
    const { score, setScore } = useContext(QuizContext);
    const { photo1, desc1, endClas, dataCode2, linkQuest, endCategory, linkCode, linker3, linkAdr, endScreen, middleColumnScoreText, middleColumnScoreNumber, middleColumnBtnRestart, endscreenbrick } = useContext(QuestionsContext);
    const restartQuiz = () => {
        setScore(0)
        localStorage.clear()
    }
    const myLists = [

        { text: 'TECHNOLOGIA', content: '/Firstpagetech', pic: technologia_ikona_ },
        { text: 'CULTURE', content: '/Firstpagecult', pic: kultura_ikona },
        { text: 'AUTOMOTIVE', content: '/Firstpagemoto', pic: motoryzacja_ikona },
        { text: 'PROGRAMMING', content: '/Firstpagecode', pic: programowanie_ikona },
        { text: 'HISTORY', content: '/Firstpagehist', pic: historia_ikona },
    ];

    const categoryShortcut = myLists.filter((el, index) => {

        return (el.text.slice() !== endCategory)
    }).map((el, index) => {
        return (
            <div key={index} className={endscreenbrick}>
                <Link to={el.content}  >
                    <div className="brick__image">
                        <img src={el.pic} alt="category" />
                    </div>
                    <div className="brick__text">
                        <p>{el.text}</p>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className={endScreen}>
            <div className="endScreen__letter" >
                <img src={q} alt="Q" />
            </div>
            <div className="middleColumn">
                <h2>QUIZ</h2>
                <div className="middleColumn__image">
                    <img src={photo1} alt={desc1} />
                </div>
                <div className="middleColumn__line"></div>
                <p>{endCategory}</p>
                <div className="middleColumn__score">
                    <p className={middleColumnScoreText}>YOUR RESULT</p>
                    <p className={middleColumnScoreNumber}> {score} / {Object.keys(dataCode2).length}</p>
                </div>
                <div className="middleColumn__btn">
                    <Link to={width < breakpoint ? linkAdr : linkQuest} >
                        <div className={middleColumnBtnRestart} onClick={restartQuiz}>
                            <p>REPEAT QUIZ</p>
                            <img src={linker3} alt="button" />
                        </div>
                    </Link>

                </div>
            </div>
            <div className="lastColumn" >
                <div className="lastColumn__backAndEx">
                    <div className="lastColumn__back">
                        <Link to={linkCode}>
                            <img src={cofnij_x} alt="cofnij" />
                        </Link>
                    </div>
                    <div className="lastColumn__ex">
                        <Link to="/">
                            <img src={zamknij_x} alt="zamknij" />
                        </Link>
                    </div>
                </div >
                <p className="lastColumn__chooseCat">SELECT CATEGORIES</p>
                <div className="lastColumn__brikcs">
                    {categoryShortcut}
                </div>
            </div>
        </div>
    )
}
export default EndScreen;