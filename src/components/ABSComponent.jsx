import { useEffect ,useState } from 'react'
import defaultImg from '../assets/images/default-abs.png'
import umbilicus from '../assets/images/highlights/umbilicus-highlight.png'
import epigastrium from '../assets/images/highlights/epigastrium-highlight.png'
import llq from '../assets/images/highlights/llq-highlight.png'
import luq from '../assets/images/highlights/luq-highlight.png'
import suprapubic from '../assets/images/highlights/suprapubic-highlight.png'
import ruq from '../assets/images/highlights/ruq-highlight.png'
import rlq from '../assets/images/highlights/rlq-highlight.png'
import all from '../assets/images/all-over-highlight.png'

import umbilicusCap from '../assets/images/captions/umbilicus-active.png'
import epigastriumCap from '../assets/images/captions/epigastrium-active.png'
import llqCap from '../assets/images/captions/llq-active.png'
import luqCap from '../assets/images/captions/luq-active.png'
import suprapubicCap from '../assets/images/captions/suprapubic-active.png'
import ruqCap from '../assets/images/captions/ruq-active.png'
import rlqCap from '../assets/images/captions/rlq-active.png'
function ABSComponent({selectBehavior,onSelectBehavior}) {
  const TYPE = 'abs'
  const [active, setActive] = useState({})

  useEffect(() => {
      let currentBehavior = selectBehavior.find(item => item.name = TYPE)
      setActive(currentBehavior)
      console.log()
  },[selectBehavior])

  return (
        <div className="relative">
            <img src={defaultImg} alt="defaultImg" width={600} height={900}/>
            <img className={"question-img"} src={umbilicus} alt="umbilicus" width={600} height={900} />
            <img className={"question-img"} src={epigastrium} alt="epigastrium" width={600} height={900}/>
            <img className={"question-img"} src={llq} alt="llq" width={600} height={900}/>
            <img className={"question-img"} src={luq} alt="luq" width={600} height={900}/>
            <img className={"question-img"} src={suprapubic} alt="suprapubic" width={600} height={900}/>
            <img className={"question-img"} src={ruq} alt="ruq" width={600} height={900}/>
            <img className={`question-img ${active?.behavior === 'rlq' ? 'opacity-1' : 'opacity-0'}`} src={rlq} alt="rlq" width={600} height={900}/>
            <img className={"question-img"} src={all} alt="allAbs" width={600} height={900}/>

            <img className={"question-img"} src={umbilicusCap} alt="umbilicusCap" width={600} height={900}/>
            <img className={"question-img"} src={epigastriumCap} alt="epigastriumCap" width={600} height={900}/>
            <img className={"question-img"} src={llqCap} alt="llqCap" width={600} height={900}/>
            <img className={"question-img"} src={luqCap} alt="luqCap" width={600} height={900}/>
            <img className={"question-img"} src={suprapubicCap} alt="suprapubicCap" width={600} height={900}/>
            <img className={"question-img"} src={ruqCap} alt="ruqCap" width={600} height={900}/>
            <img className={`question-img ${active?.behavior === 'rlq' ? 'opacity-1' : 'opacity-0'}`} src={rlqCap} alt="rlqCap" width={600} height={900} onClick={() => onSelectBehavior({type: TYPE , behavior:'rlq'})}/>
            {/* <div className='absolute top-0 left-0 bg-red-300 w-10 h-10 rounded cursor-pointer'></div> */}
        </div>
  );
}
export default ABSComponent;
