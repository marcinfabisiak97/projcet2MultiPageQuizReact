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
    const { photo1, desc1, endClas, dataCode2, linkQuest, endCategory, linkCode, linker3, linkAdr } = useContext(QuestionsContext);
    const restartQuiz = () => {
        setScore(0)
        localStorage.clear()
    }
    const myLists = [

        { text: 'TECHNOLOGIA', content: '/Firstpagetech', pic: technologia_ikona_ },
        { text: 'KULTURA', content: '/Firstpagecult', pic: kultura_ikona },
        { text: 'MOTORYZACJA', content: '/Firstpagemoto', pic: motoryzacja_ikona },
        { text: 'PROGRAMOWANIE', content: '/Firstpagecode', pic: programowanie_ikona },
        { text: 'HISTORIA', content: '/Firstpagehist', pic: historia_ikona },
    ];

    const categoryShortcut = myLists.filter(el => el.text.slice() !== endCategory).map((el, index) => {
        return (
            <Link to={el.content}  >
                <div  >
                    <img src={el.pic} alt="category" />
                </div>
                <div >
                    <p>{el.text}</p>
                </div>
            </Link>
        )
    })

    return (
        <div className="endScreen">
            <div >
                <img src={q} alt="Q" />
            </div>
            <div >
                <div >
                    <h2>QUIZ</h2>
                </div>
                <div >

                    <div >
                        <img src={photo1} alt={desc1} />
                    </div>
                    <div >
                        <p>{endCategory}</p>
                    </div>
                </div>
                <div >
                    <div >
                        <p>TWÓJ WYNIK</p>
                    </div>
                    <div  >
                        <p> {score} / {Object.keys(dataCode2).length}</p>
                    </div>
                </div>
                <div >

                    <Link to={width < breakpoint ? linkAdr : linkQuest} >
                        <div onClick={restartQuiz}>
                            <p>POWTÓRZ QUIZ</p>
                            <img src={linker3} alt="button" />
                        </div>
                    </Link>

                </div>
            </div>


            <div >
                <div className="wrapper__BackandEx">
                    <div>
                        <Link to={linkCode}>
                            <img src={cofnij_x} alt="cofnij" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <img src={zamknij_x} alt="zamknij" />
                        </Link>
                    </div>
                </div>
                <div>
                    <p>WYBIERZ KATEGORIE</p>
                </div>
                <div  >
                    {categoryShortcut}
                </div>
            </div>
        </div>
    )
}
export default EndScreen;