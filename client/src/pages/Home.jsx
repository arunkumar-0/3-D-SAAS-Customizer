import {motion , AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import { CustomButton } from '../components';
import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
}
from '../config/motion'
const Home = () => {
  const snap = useSnapshot(state);
  return (
   
    <AnimatePresence>          
      {snap.intro && (
        <motion.section className='home'{...slideAnimation('left')}>
          <motion.header {... slideAnimation('down')}>
            <img
            src='./logo.png'
            alt='logo'
            className='h-40 w-40 object-contain'
            
            />
          </motion.header>
        <motion.div className='home-content'{...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              Smart <br className='xl:block hidden'/> Sartor...
            </h1>
          </motion.div>
          <motion.div
          {...headContentAnimation}
          className='flex flex-col gap-5'
          >
            <p
            className='max-w-md font-normal text-gray-600 text-base'
            >
              create your combination with 3-D customization <strong>
unleash your imagination</strong>{" "}and define your own style
            </p>
            <CustomButton
            type='filled'
            title='Customize it '
            handleClick={()=> state.intro = false}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            >

            </CustomButton>
          </motion.div>
        </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
