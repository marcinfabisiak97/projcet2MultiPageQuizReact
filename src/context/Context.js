import { createContext } from 'react';
import cofnij_x from "../assets/cofnij_x.svg"
import zamknij_x from "../assets/zamknij_x.svg"
import technologia_ikona_ from "../assets/technologia_ikona_.svg"
import kultura_ikona from "../assets/kultura_ikona.svg"
import motoryzacja_ikona from "../assets/motoryzacja_ikona.svg"
import programowanie_ikona from "../assets/programowanie_ikona.svg"
import historia_ikona from "../assets/historia_ikona.svg"
import button_strzałka_plus from "../assets/button strzałka/technologia strzałka.png"
import buttoncult_cliker_ikon from "../assets/button strzałka/kultura strzałka.png"
import buttonmoto_cliker_ikon from "../assets/button strzałka/moto strzałka.png"
import buttonhist_cliker_ikon from "../assets/button strzałka/hist strzałka.png"
import poprawna_odpowiedź from "../assets/poprawna_odpowiedź_.svg"
import { CodeQuestions } from '../context/QuestionsReactBank'
import { CultQuestions } from '../context/QuestionCultBank'
import { HistQuestions } from '../context/QuestionHistBank'
import { Questions } from '../context/QuestionBank'
import { TechQuestions } from '../context/QuestionTechBank'
import { columnsFromBackendCode } from '../context/columnsFromBackendCode';
import { columnsFromBackendCult } from '../context/columnsFromBackendCult';
import { columnsFromBackendHist } from '../context/columnsFromBackendHist';
import { columnsFromBackendMoto } from '../context/columnsFromBackendMoto';
import { columnsFromBackend } from '../context/columnsFromBackend';

export const QuizContext = createContext({
    scores: item => { }
})
export const DataContext = createContext({
    linker: cofnij_x,
    linker1: zamknij_x,
});
export const FirstPage = createContext({
    photo: programowanie_ikona,
    desc: "codding photo",
    category: "PROGRAMOWANIE",
    linkAdres: "/Standardquestionscode",
    linkAdres1: "/Codedraganddropcode",
    linker2: button_strzałka_plus,
    firstPageWrraper: 'firstPage codeBackGround',
    chooseCategory: 'chooseCat__chooseText codeChooseCat__chooseText',
    linkButton: 'link__btn techLink__btn',
});

export const CultPageProvider = ({ children }) => {
    const photo = kultura_ikona;
    const desc = "culture photo";
    const category = "KULTURA";
    const linkAdres = "/Standardquestionscult";
    const linkAdres1 = "/Codedraganddropcult";
    const linker2 = buttoncult_cliker_ikon;
    const firstPageWrraper = 'firstPage cultBackGround';
    const chooseCategory = 'chooseCat__chooseText cultChooseCat__chooseText';
    const linkButton = 'link__btn cultLink__btn';
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2,
                firstPageWrraper,
                chooseCategory,
                linkButton
            }}
        >
            {children}
        </FirstPage.Provider>
    )
}
export const HistPageProvider = ({ children }) => {
    const photo = historia_ikona;
    const desc = "history picture";
    const category = "HISTORIA";
    const linkAdres = "/Standardquestionshist";
    const linkAdres1 = "/Codedraganddrophist";
    const linker2 = buttonhist_cliker_ikon;
    const firstPageWrraper = 'firstPage histBackGround';
    const chooseCategory = 'chooseCat__chooseText histChooseCat__chooseText';
    const linkButton = 'link__btn histLink__btn';
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2,
                firstPageWrraper,
                chooseCategory,
                linkButton
            }}
        >
            {children}
        </FirstPage.Provider>
    )
}
export const MotoPageProvider = ({ children }) => {
    const photo = motoryzacja_ikona;
    const desc = "moto ikon";
    const category = "MOTORYZACJA";
    const linkAdres = "/Standardquestionsmoto";
    const linkAdres1 = "/Codedraganddropmoto";
    const linker2 = buttonmoto_cliker_ikon;
    const firstPageWrraper = 'firstPage motoBackGround';
    const chooseCategory = 'chooseCat__chooseText motoChooseCat__chooseText';
    const linkButton = 'link__btn motoLink__btn';
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2,
                firstPageWrraper,
                chooseCategory,
                linkButton
            }}
        >
            {children}
        </FirstPage.Provider>
    )
}
export const TechPageProvider = ({ children }) => {
    const photo = technologia_ikona_;
    const desc = "tech ikon";
    const category = "TECHNOLOGIA";
    const linkAdres = "/Standardquestionstech";
    const linkAdres1 = "/Codedraganddroptech";
    const linker2 = button_strzałka_plus;
    const firstPageWrraper = 'firstPage techBackGround';
    const chooseCategory = 'chooseCat__chooseText techChooseCat__chooseText';
    const linkButton = 'link__btn techLink__btn';
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2,
                firstPageWrraper,
                chooseCategory,
                linkButton
            }}
        >
            {children}
        </FirstPage.Provider>
    )
}
export const QuestionsContext = createContext({
    photo1: programowanie_ikona,
    desc1: "codding photo",
    dataCode1: CodeQuestions,
    linkCode: "/Firstpagecode",
    linkCodeEnd: '/EndScreenCode',
    linkCodeEndDragnDrop: '/EndScreenDragandDropCode',
    correctPhoto: poprawna_odpowiedź,
    linkAdr: '/Standardquestionscode',
    dataCode2: columnsFromBackendCode,
    linkQuest: '/Codedraganddropcode',
    colorAlert: 'rgba(0,0,123)',
    endCategory: "PROGRAMOWANIE",
    linker3: button_strzałka_plus,
    dndwrapper: 'dndwrapper codeBackGround',
    textAndNumberText: 'textAndNumber__text codeChooseCat__chooseText',
    textAndNumberNumber: 'textAndNumber__number techLink__btn',
    dndBtn: 'wrapperbtn__btn techLink__btn',
    colBtn: 'leftColumn__dragable techLink__btn',
    colBtnRight: 'rightColumn__dragable techLink__btn',
    endScreen: 'endScreen codeBackGround',
    middleColumnScoreText: 'middleColumn__scoreText codeChooseCat__chooseText',
    middleColumnScoreNumber: 'middleColumn__scoreNumber techLink__btn',
    middleColumnBtnRestart: 'middleColumn__btnRestart techLink__btn',
    endscreenbrick: 'brick techLink__btn',
});
export const CultQuestionStandardProvider = ({ children }) => {
    const photo1 = kultura_ikona;
    const desc1 = "culture photo";
    const dataCode1 = CultQuestions;
    const linkCode = "/Firstpagecult";
    const linkCodeEnd = '/EndScreenCult';
    const linkCodeEndDragnDrop = '/EndScreenDragandDropCult';
    const correctPhoto = poprawna_odpowiedź;
    const linkAdr = '/Standardquestionscult';
    const dataCode2 = columnsFromBackendCult;
    const linkQuest = '/Codedraganddropcult';
    const colorAlert = 'rgba(104, 92, 136, 1)';
    const endCategory = "KULTURA";
    const linker3 = buttoncult_cliker_ikon;
    const dndwrapper = 'dndwrapper cultBackGround';
    const textAndNumberText = 'textAndNumber__text cultChooseCat__chooseText';
    const textAndNumberNumber = 'textAndNumber__number cultLink__btn';
    const dndBtn = 'wrapperbtn__btn cultLink__btn';
    const colBtn = 'leftColumn__dragable cultLink__btn';
    const colBtnRight = 'rightColumn__dragable cultLink__btn';
    const endScreen = 'endScreen cultBackGround';
    const middleColumnScoreText = 'middleColumn__scoreText cultChooseCat__chooseText';
    const middleColumnScoreNumber = 'middleColumn__scoreNumber cultLink__btn';
    const middleColumnBtnRestart = 'middleColumn__btnRestart cultLink__btn';
    const endscreenbrick = 'brick cultLink__btn';
    return (
        <QuestionsContext.Provider
            value={{
                photo1,
                desc1,
                dataCode1,
                linkCode,
                linkCodeEnd,
                linkCodeEndDragnDrop,
                correctPhoto,
                linkAdr,
                dataCode2,
                linkQuest,
                colorAlert,
                endCategory,
                linker3,
                dndwrapper,
                textAndNumberText,
                textAndNumberNumber,
                dndBtn,
                colBtn,
                colBtnRight,
                endScreen,
                middleColumnScoreText,
                middleColumnScoreNumber,
                middleColumnBtnRestart,
                endscreenbrick
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}
export const HistQuestionStandardProvider = ({ children }) => {
    const photo1 = historia_ikona;
    const desc1 = "history picture";
    const dataCode1 = HistQuestions;
    const linkCode = "/Firstpagehist";
    const linkCodeEnd = '/EndScreenHist';
    const linkCodeEndDragnDrop = '/EndScreenDragandDropHist';
    const correctPhoto = poprawna_odpowiedź;
    const linkAdr = '/Standardquestionshist';
    const dataCode2 = columnsFromBackendHist;
    const linkQuest = '/Codedraganddrophist';
    const colorAlert = 'rgba(63, 45, 28, 1)';
    const endCategory = "HISTORIA";
    const linker3 = buttonhist_cliker_ikon;
    const dndwrapper = 'dndwrapper histBackGround';
    const textAndNumberText = 'textAndNumber__text histChooseCat__chooseText';
    const textAndNumberNumber = 'textAndNumber__number histLink__btn';
    const dndBtn = 'wrapperbtn__btn histLink__btn';
    const colBtn = 'leftColumn__dragable histLink__btn';
    const colBtnRight = 'rightColumn__dragable histLink__btn';
    const endScreen = 'endScreen histBackGround';
    const middleColumnScoreText = 'middleColumn__scoreText histChooseCat__chooseText';
    const middleColumnScoreNumber = 'middleColumn__scoreNumber histLink__btn';
    const middleColumnBtnRestart = 'middleColumn__btnRestart histLink__btn';
    const endscreenbrick = 'brick histLink__btn';
    return (
        <QuestionsContext.Provider
            value={{
                photo1,
                desc1,
                dataCode1,
                linkCode,
                linkCodeEnd,
                linkCodeEndDragnDrop,
                correctPhoto,
                linkAdr,
                dataCode2,
                linkQuest,
                colorAlert,
                endCategory,
                linker3,
                dndwrapper,
                textAndNumberText,
                textAndNumberNumber,
                dndBtn,
                colBtn,
                colBtnRight,
                endScreen,
                middleColumnScoreText,
                middleColumnScoreNumber,
                middleColumnBtnRestart,
                endscreenbrick
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}
export const MotoQuestionStandardProvider = ({ children }) => {
    const photo1 = motoryzacja_ikona;
    const desc1 = "moto ikon";
    const dataCode1 = Questions;
    const linkCode = "/Firstpagemoto";
    const linkCodeEnd = '/EndScreen';
    const linkCodeEndDragnDrop = '/EndScreenDragandDropMoto';
    const correctPhoto = poprawna_odpowiedź;
    const linkAdr = '/Standardquestionsmoto';
    const dataCode2 = columnsFromBackendMoto;
    const linkQuest = '/Codedraganddropmoto';
    const colorAlert = 'rgba(0,0,123)';
    const endCategory = "MOTORYZACJA";
    const linker3 = buttonmoto_cliker_ikon;
    const dndwrapper = 'dndwrapper motoBackGround';
    const textAndNumberText = 'textAndNumber__text motoChooseCat__chooseText';
    const textAndNumberNumber = 'textAndNumber__number motoLink__btn';
    const dndBtn = 'wrapperbtn__btn motoLink__btn';
    const colBtn = 'leftColumn__dragable motoLink__btn';
    const colBtnRight = 'rightColumn__dragable motoLink__btn';
    const endScreen = 'endScreen motoBackGround';
    const middleColumnScoreText = 'middleColumn__scoreText motoChooseCat__chooseText';
    const middleColumnScoreNumber = 'middleColumn__scoreNumber motoLink__btn';
    const middleColumnBtnRestart = 'middleColumn__btnRestart motoLink__btn';
    const endscreenbrick = 'brick motoLink__btn';
    return (
        <QuestionsContext.Provider
            value={{
                photo1,
                desc1,
                dataCode1,
                linkCode,
                linkCodeEnd,
                linkCodeEndDragnDrop,
                correctPhoto,
                linkAdr,
                dataCode2,
                linkQuest,
                colorAlert,
                endCategory,
                linker3,
                dndwrapper,
                textAndNumberText,
                textAndNumberNumber,
                dndBtn,
                colBtn,
                colBtnRight,
                endScreen,
                middleColumnScoreText,
                middleColumnScoreNumber,
                middleColumnBtnRestart,
                endscreenbrick
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}
export const TechQuestionStandardProvider = ({ children }) => {
    const photo1 = technologia_ikona_;
    const desc1 = "tech ikon";
    const dataCode1 = TechQuestions;
    const linkCode = "/Firstpagetech";
    const linkCodeEnd = '/EndScreenTech';
    const linkCodeEndDragnDrop = '/EndScreenDragandDropTech';
    const correctPhoto = poprawna_odpowiedź;
    const linkAdr = '/Standardquestionstech';
    const dataCode2 = columnsFromBackend;
    const linkQuest = '/Codedraganddroptech';
    const colorAlert = 'rgba(0,0,123)';
    const endCategory = "TECHNOLOGIA";
    const linker3 = button_strzałka_plus;
    const dndwrapper = 'dndwrapper techBackGround';
    const textAndNumberText = 'textAndNumber__text techChooseCat__chooseText';
    const textAndNumberNumber = 'textAndNumber__number techLink__btn';
    const dndBtn = 'wrapperbtn__btn techLink__btn';
    const colBtn = 'leftColumn__dragable techLink__btn';
    const colBtnRight = 'rightColumn__dragable techLink__btn';
    const endScreen = 'endScreen techBackGround';
    const middleColumnScoreText = 'middleColumn__scoreText techChooseCat__chooseText';
    const middleColumnScoreNumber = 'middleColumn__scoreNumber techLink__btn';
    const middleColumnBtnRestart = 'middleColumn__btnRestart techLink__btn';
    const endscreenbrick = 'brick techLink__btn';
    return (
        <QuestionsContext.Provider
            value={{
                photo1,
                desc1,
                dataCode1,
                linkCode,
                linkCodeEnd,
                linkCodeEndDragnDrop,
                correctPhoto,
                linkAdr,
                dataCode2,
                linkQuest,
                colorAlert,
                endCategory,
                linker3,
                dndwrapper,
                textAndNumberText,
                textAndNumberNumber,
                dndBtn,
                colBtn,
                colBtnRight,
                endScreen,
                middleColumnScoreText,
                middleColumnScoreNumber,
                middleColumnBtnRestart,
                endscreenbrick
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}