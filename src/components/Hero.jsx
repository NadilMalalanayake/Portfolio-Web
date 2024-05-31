import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic.jpg";
import { motion} from "framer-motion";

const container =   (delay) => ({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})


const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={container(0)}
                initial="hidden"
                animate="visible" 
                className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                    Nadil Malalanayake
                </motion.h1>
                <motion.span variants={container(0.5)}
                initial="hidden"
                animate="visible"  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Full Stack Developer
                </motion.span>
                <motion.p variants={container(1)}
                initial="hidden"
                animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>

                <motion.div 
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="border-b d-flex align-items-right justify-content-center rounded-lg"
                style={{ border: '1px solid black',background:'linear-gradient(to right, black, darkblue)', padding:'0.8rem', color:'white', marginBottom:'15px'}}>
                    <a className="btn btn-success" href="NadilMalalanayake_Cv Form.pdf" download="NM_CvForm.pdf" >CHECK RESUME</a>
                </motion.div>     
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                 className="rounded-2xl" src={profilePic} alt=""></motion.img>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Hero;

