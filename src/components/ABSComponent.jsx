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
  // const imags = ['umbilicus','epigastrium','llq','luq','suprapubic','ruq','rlq','all']
  const [active, setActive] = useState({})
  // const onReanderMainImg = () => {
  //  return imags.map(item => {
  //     return <img className={`question-img ${(active?.behavior === item || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={item} alt={item} width={600} height={900} />
  //   })
  // }
  // const onReanderCaptionImg = () => {
  //   return imags.map(item => {
  //     return <img className={`question-img ${(active?.behavior === item && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={`${item}Cap`} alt={`${item}Cap`}  width={600} height={900} />
  //   })
  // }
  useEffect(() => {
      let currentBehavior = selectBehavior.find(item => item.name = TYPE)
      setActive(currentBehavior)
  },[selectBehavior])

  return (
        <div className="relative">
            <img src={defaultImg} alt="defaultImg" width={600} height={900} />
            <img className={`question-img ${(active?.behavior === 'umbilicus' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={umbilicus} alt="umbilicus" width={600} height={900} />
            <img className={`question-img ${(active?.behavior === 'epigastrium' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={epigastrium} alt="epigastrium" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'llq' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={llq} alt="llq" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'luq' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={luq} alt="luq" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'suprapubic' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={suprapubic} alt="suprapubic" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'ruq' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={ruq} alt="ruq" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'rlq' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={rlq} alt="rlq" width={600} height={900}/>
            <img className={`question-img ${active?.behavior === 'all' ? 'opacity-1' : 'opacity-0'}`} src={all} alt="allAbs" width={600} height={900}/>

            <img className={`question-img ${(active?.behavior === 'umbilicus' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={umbilicusCap} alt="umbilicusCap" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'epigastrium' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={epigastriumCap} alt="epigastriumCap" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'llq' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={llqCap} alt="llqCap" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'luq' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={luqCap} alt="luqCap" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'suprapubic' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={suprapubicCap} alt="suprapubicCap" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'ruq' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={ruqCap} alt="ruqCap" width={600} height={900}/>
            <img className={`question-img ${(active?.behavior === 'rlq' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={rlqCap} alt="rlqCap" />

            <div className='rlq-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'rlq'})}/>
            <div className='epigastrium-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'epigastrium'})}/>
            <div className='umbilicus-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'umbilicus'})}/>
            <div className='llq-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'llq'})}/>
            <div className='luq-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'luq'})}/>
            <div className='suprapubic-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'suprapubic'})}/>
            <div className='ruq-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'ruq'})}/>
            <div className='abs-all-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'all'})}/>
        </div>
  );
}
export default ABSComponent;
