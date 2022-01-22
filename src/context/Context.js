import { createContext } from 'react';
import cofnij_x from "../assets/cofnij_x.svg"
import zamknij_x from "../assets/zamknij_x.svg"
import technologia_ikona_ from "../assets/technologia_ikona_.svg"
import kultura_ikona from "../assets/kultura_ikona.svg"
import motoryzacja_ikona from "../assets/motoryzacja_ikona.svg"
import programowanie_ikona from "../assets/programowanie_ikona.svg"
import historia_ikona from "../assets/historia_ikona.svg"
import button_strzałka_plus from "../assets/button_strzałka_plus.svg"
import buttoncult_cliker_ikon from "../assets/buttoncult_cliker_ikon.png"
import buttonmoto_cliker_ikon from "../assets/buttonmoto_cliker_ikon.png"
import buttonhist_cliker_ikon from "../assets/buttonhist_cliker_ikon.png"
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
    linker2: button_strzałka_plus
});

export const CultPageProvider = ({ children }) => {
    const photo = kultura_ikona;
    const desc = "culture photo";
    const category = "KULTURA";
    const linkAdres = "/Standardquestionscult";
    const linkAdres1 = "/Codedraganddropcult";
    const linker2 = buttoncult_cliker_ikon;
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2
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
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2
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
    const linker2 = button_strzałka_plus;
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2
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
    return (
        <FirstPage.Provider
            value={{
                photo,
                desc,
                category,
                linkAdres,
                linkAdres1,
                linker2
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
    linker3: button_strzałka_plus
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
                linker3

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
                linker3
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
                linker3
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
                linker3
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}