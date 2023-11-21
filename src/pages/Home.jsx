import { useEffect , useState} from "react";

import QuestionComponent from "../components/QuestionComponent";
function Home() {
  const [allQuestion , setAllQuestion] = useState([
    {
      'name': 'abs',
      'titel': 'จุดไหนที่คุณปวดท้องมากที่สุด',
      'order': 1
    },
    {
      'name': 'finger',
      'titel': 'จุดไหนที่คุณปวดนิ้วมากที่สุด',
      'order': 2
    },
    {
      'name': 'result',
      'titel': 'สรุปอาการ',
      'order': 3
    }
  ]);
  const [selectBehavior,setSelectBehavior] = useState([])
  const [currentQuestion , setCurrentQuestion] = useState({});
  const onNextQuestion = () =>{
    let indexQuestion = allQuestion.findIndex(item => item.name === currentQuestion.name)
    setCurrentQuestion(allQuestion[(++indexQuestion)])
  }
  const onBack = () =>{
    let indexQuestion = allQuestion.findIndex(item => item.name === currentQuestion.name)
    if(indexQuestion >=1){
      setCurrentQuestion(allQuestion[(--indexQuestion)])
    }
  }
  const onSubmitQuestion = () =>{
    alert('ส่งอาการเรียบร้อย')
    onResetQuestion()
  }
  const onResetQuestion = () =>{
    setCurrentQuestion(allQuestion[0])
    setSelectBehavior([])
  }
  const onSelectBehavior = ({type = '' , behavior = ''}) =>{
      const indexBehavior = selectBehavior.findIndex(item => item.type === type)
      if(indexBehavior >= 0){
        selectBehavior[indexBehavior] = {type , behavior }
        setSelectBehavior([...selectBehavior])
      }else{
        setSelectBehavior([...selectBehavior,{type, behavior}])
      }
  }
  useEffect(() => {
    const indexQuestion = allQuestion.findIndex(item => item.name === currentQuestion.name)
    if(indexQuestion >= 1){
      setCurrentQuestion(allQuestion[indexQuestion])
    }else{
      setCurrentQuestion(allQuestion[0])
    }
  },[selectBehavior])

  return (
    <div>
      <div className="main-container px-5">
        <div className="question-container">
          <QuestionComponent 
            allQuestion={allQuestion}
            currentQuestion={currentQuestion}
            onSelectBehavior={onSelectBehavior}
            selectBehavior={selectBehavior}
          />
          {currentQuestion.order === 3 && (
            <>
              <button type="button" className="btn btn-submit mx-1 mt-3" onClick={() => onSubmitQuestion()}>
                    ส่งผล
              </button>
            </>
          )}
          {currentQuestion.order !== 3 && (
            <button type="button" className="btn btn-primary mx-1 mt-3" onClick={() => onNextQuestion()}>
                ต่อไป
            </button>
          )}
          {(currentQuestion.order > 1)  
            && (
              <button type="button" className="btn btn-back mx-1 mt-3" onClick={() => onBack()}>
                  กลับ
              </button>
            )
          }
          
        </div>
      </div>  
    </div>
  );
}
export default Home;
