import React, { useState, Suspense, useRef, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { QuestionsContext } from "../../context/Context";
import { QuizContext } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import RightColumn from "../rightcolumn";
import LeftColumn from "../leftcolumn";
import { useHistory } from 'react-router-dom';
import { FirstPage } from "../../context/Context"
import Headerfirstpage from "../headerFirstPage";
const Draganddropquest = () => {
  const {
    dataCode1,
    dataCode2,
    linkCodeEndDragnDrop,
    colorAlert,
    dropableClassLeft,
    dropableClassRight,
    dndwrapper,
    textAndNumberText,
    textAndNumberNumber,
    dndBtn,
    colBtn,
    colBtnRight
  } = useContext(QuestionsContext);
  const { linkAdres } = useContext(FirstPage);
  const [count, setCount] = useState(0);
  const [columns, setColumns] = useState(
    dataCode2[Object.keys(dataCode2)[count]]
  );
  const history = useHistory();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  })
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    if (window.innerWidth < 1023) {
      history.push(linkAdres);
    }
  })

  const usePreviousValue = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const Swal = require('sweetalert2')
  const { score, setScore } = useContext(QuizContext);
  const prevValue = usePreviousValue(score);

  const nextQuestion = () => {
    setColumns(dataCode2[Object.keys(dataCode2)[count + 1]]);
    setCount(count + 1);
    Swal.fire({
      icon: (score !== prevValue && score !== 0) ? 'success' : 'error',
      title: (score !== prevValue && score !== 0) ? 'Good answer' : 'Bad answer ',
      showConfirmButton: false,
      background: colorAlert,
      timer: 2000
    })
  };

  const onDragEnd = (result, columns, setColumns) => {

    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });

      if (destItems[0].content === destColumn.answer) {
        setScore(score + 1);
      } else {
        setScore(score);
      }

      if (destItems.length > 1) {
        const [gone] = destItems.splice(1, 1)
        sourceItems.splice(1, 0, gone)
      }

    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (

    <div className={dndwrapper}>
      <Headerfirstpage />
      <div className="textAndNumber">
        <p className={textAndNumberText}>DRAG & DROP THE RIGHT ANSWER</p>
        <p className={textAndNumberNumber}>{dataCode1[count].number} / {Object.keys(dataCode2).length}</p>
      </div>
      <div className="dnd" >
        <div className="dnd__question">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return column.name === "right answer" ? (
                <RightColumn key={columnId} {...{ columnId, column, score, setScore, colorAlert, colBtnRight }} />
              ) : (
                <LeftColumn key={columnId} {...{ columnId, column, score, setScore, colorAlert, colBtn }} />
              );;
            })}
          </DragDropContext>
        </div>
        <div className="wrapperbtn">
          {count === Object.keys(dataCode2).length - 1 ? (
            <Link to={linkCodeEndDragnDrop}>
              <button className={dndBtn}>Finish</button>
            </Link>
          ) : (
            <button className={dndBtn} onClick={() => { nextQuestion(); }}>Check</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Draganddropquest;