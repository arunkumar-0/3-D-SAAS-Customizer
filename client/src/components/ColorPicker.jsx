import {SketchPicker} from 'react-color'
import {useSnapshot} from 'valtio'

import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
     <SketchPicker
     color={snap.color}
     disableAlpha
     presetColors={[
      '#E6FB04' , '#FF3300' , '#00FF66' , '#099FFF' , '#0033FF' , '#00FFFF' , '#FF0099' ,' #6E0DD0' , '#9D00FF' , '#F31559' , '#FF52A2' , '#000000'
     ]}
     onChange={(color) => state.color = color.hex}
     />
    </div>
  )
}

export default ColorPicker
