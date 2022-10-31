import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactTypingEffect from 'react-typing-effect'


const Hommy = () => {
    return (
      <div className='py-1'>
      <div className='max-w-[1080px] mt-[-96px] w-full py-52 mx-auto text-center flex flex-col justify-center'>
    <ReactTypingEffect text={["For U","Mu Aor"]} speed={80} eraseDelay={100} className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 text-gray-700 my-8" />
    <Slide>
        <img  src="./image/1.jpg" className='object-cover h-auto mx-auto w-96'/>
        <img  src="./image/2.jpg" className='object-cover h-auto mx-auto w-96' />
    </Slide>
    </div>
    </div>
        )
}
export default Hommy