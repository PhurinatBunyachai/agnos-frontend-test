import { useEffect } from 'react'
import ABSComponent from './ABSComponent'
import FingerComponent from './FingerComponent'
function QuestionComponent({currentQuestion,onSelectBehavior,selectBehavior}) {

    const onReanderQuestion = () => {
        switch (currentQuestion.name) {
            case 'abs':
                return <ABSComponent selectBehavior={selectBehavior} onSelectBehavior={onSelectBehavior}/>
            case 'finger':
                return <FingerComponent selectBehavior={selectBehavior} onSelectBehavior={onSelectBehavior}/>
            default:
                return;
        }
    }
    useEffect(() => {
        onReanderQuestion()
    })
    
  return (
    <div className="bg-white rounded-lg p-10 flex flex-col justify-center">
        <div className="text-3xl text-center">{currentQuestion.titel}</div>
        { onReanderQuestion() }
    </div>
  );
}
export default QuestionComponent;
