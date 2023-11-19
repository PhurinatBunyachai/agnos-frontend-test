import { useEffect , useState} from "react";

import QuestionComponent from "../components/QuestionComponent";
function Home() {
  const [allQuestion , setAllQuestion] = useState([
    {
      'name': 'abs',
      'titel': 'จุดไหนที่คุณปวดท้องมากที่สุด'
    },
    {
      'name': 'finger',
      'titel': 'จุดไหนที่คุณปวดนิ้วมากที่สุด'
    }
  ]);
  const [selectBehavior,setSelectBehavior] = useState([])
  const [currentQuestion , setCurrentQuestion] = useState({});
  const onNextQuestion = () =>{
    setCurrentQuestion(allQuestion[1])
  }
  const onSelectBehavior = ({type = '' , behavior = ''}) =>{
    setSelectBehavior([...selectBehavior, {type ,behavior}])
    console.log(selectBehavior)
  }
  useEffect(() => {
    setCurrentQuestion(allQuestion[0])
  },[selectBehavior])

  return (
    <div>
      <div className="main-container">
        <div className="question-container">
          <QuestionComponent 
            allQuestion={allQuestion}
            currentQuestion={currentQuestion}
            onSelectBehavior={onSelectBehavior}
            selectBehavior={selectBehavior}
          />
          <button type="button" className="btn btn-primary mx-1 mt-3" onClick={() => {onNextQuestion()}}>
              ต่อไป
          </button>
        </div>
      </div>  
    </div>
  );
}
export default Home;
