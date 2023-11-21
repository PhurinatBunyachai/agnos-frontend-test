import { useEffect ,useState } from 'react'
import defaultImg from '../assets/images/default-finger.png'
import dip from '../assets/images/highlights/dip-highlight.png'
import mcp from '../assets/images/highlights/mcp-highlight.png'
import pip from '../assets/images/highlights/pip-highlight.png'

import dipCap from '../assets/images/captions/dip-active.png'
import mcpCap from '../assets/images/captions/mcp-active.png'
import pipCap from '../assets/images/captions/pip-active.png'

import all from '../assets/images/others-highlight.png'
function FingerComponent({selectBehavior,onSelectBehavior}) {
  const TYPE = 'finger'
  const WIDTH = 500;
  const HEIGHT = 900;
  const [active, setActive] = useState({})

  useEffect(() => {
      let currentBehavior = selectBehavior.find(item => item.type === TYPE)
      if(currentBehavior){
        setActive(currentBehavior)
      }
  },[selectBehavior])
  return (
        <div className="relative">
            <img src={defaultImg} alt="defaultImg" width={WIDTH} height={HEIGHT}/>
            <img className={`question-img ${(active?.behavior === 'dip' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={dip} alt="dip" width={WIDTH} height={HEIGHT} />
            <img className={`question-img ${(active?.behavior === 'mcp' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={mcp} alt="mcp" width={WIDTH} height={HEIGHT} />
            <img className={`question-img ${(active?.behavior === 'pip' || active?.behavior === 'all') ? 'opacity-1' : 'opacity-0'}`} src={pip} alt="pip" width={WIDTH} height={HEIGHT} />

            <img className={`question-img ${(active?.behavior === 'dip' && active?.behavior !== 'all') ? 'opacity-1' : 'opacity-0'}`} src={dipCap} alt="dipCap" width={WIDTH} height={HEIGHT}/>
            <img className={`question-img ${(active?.behavior === 'mcp' && active?.behavior !==  'all') ? 'opacity-1' : 'opacity-0'}`} src={mcpCap} alt="mcpCap" width={WIDTH} height={HEIGHT}/>
            <img className={`question-img ${(active?.behavior === 'pip' && active?.behavior !==  'all') ? 'opacity-1' : 'opacity-0'}`} src={pipCap} alt="pipCap" width={WIDTH} height={HEIGHT}/>

            <img className={`question-img ${(active?.behavior ===  'all') ? 'opacity-1' : 'opacity-0'}`} src={all} alt="allFinger" width={WIDTH} height={HEIGHT}/>

            <div className='dip-1' onClick={() => onSelectBehavior({type: TYPE , behavior:'dip'})}/>
            <div className='dip-2' onClick={() => onSelectBehavior({type: TYPE , behavior:'dip'})}/>
            <div className='dip-3' onClick={() => onSelectBehavior({type: TYPE , behavior:'dip'})}/>
            <div className='dip-4' onClick={() => onSelectBehavior({type: TYPE , behavior:'dip'})}/>

            <div className='pip-1' onClick={() => onSelectBehavior({type: TYPE , behavior:'pip'})}/>
            <div className='pip-2' onClick={() => onSelectBehavior({type: TYPE , behavior:'pip'})}/>
            <div className='pip-3' onClick={() => onSelectBehavior({type: TYPE , behavior:'pip'})}/>
            <div className='pip-4' onClick={() => onSelectBehavior({type: TYPE , behavior:'pip'})}/>
            <div className='pip-5' onClick={() => onSelectBehavior({type: TYPE , behavior:'pip'})}/>

            <div className='mcp-1' onClick={() => onSelectBehavior({type: TYPE , behavior:'mcp'})}/>
            <div className='mcp-2' onClick={() => onSelectBehavior({type: TYPE , behavior:'mcp'})}/>
            <div className='mcp-3' onClick={() => onSelectBehavior({type: TYPE , behavior:'mcp'})}/>
            <div className='mcp-4' onClick={() => onSelectBehavior({type: TYPE , behavior:'mcp'})}/>
            <div className='mcp-5' onClick={() => onSelectBehavior({type: TYPE , behavior:'mcp'})}/>

            <div className='finger-all-area' onClick={() => onSelectBehavior({type: TYPE , behavior:'all'})}/>
        </div>
  );
}
export default FingerComponent;
