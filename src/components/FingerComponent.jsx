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
  const [active, setActive] = useState({})

  useEffect(() => {
      let currentBehavior = selectBehavior.find(item => item.name = TYPE)
      setActive(currentBehavior)
  },[selectBehavior])
  return (
        <div className="relative">
            <img src={defaultImg} alt="defaultImg" width={600} height={900}/>
            <img className="question-img" src={dip} alt="dip" width={600} height={900} />
            <img className="question-img" src={mcp} alt="mcp" width={600} height={900} />
            <img className="question-img" src={pip} alt="pip" width={600} height={900} />
            <img className="question-img" src={pip} alt="pip" width={600} height={900} />

            <img className="question-img" src={dipCap} alt="dipCap" width={600} height={900}/>
            <img className="question-img" src={mcpCap} alt="mcpCap" width={600} height={900}/>
            <img className="question-img" src={pipCap} alt="pipCap" width={600} height={900}/>

            <img className="question-img" src={all} alt="allFinger" width={600} height={900}/>

            {/* <div className='absolute top-[630px] left-[250px] bg-red-300 w-[8rem] h-10 rounded cursor-pointer' onClick={() => onSelectBehavior({type: TYPE , behavior:'all'})}/> */}
        </div>
  );
}
export default FingerComponent;
