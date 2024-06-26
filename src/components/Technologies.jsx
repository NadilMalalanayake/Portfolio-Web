import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { DiJsBadge } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { motion} from "framer-motion";

const iconVarients = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
        
    },
    
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1, y:1}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVarients(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandPython className="text-7xl text-blue-300" />
            </motion.div>
            <motion.div variants={iconVarients(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJsBadge className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-400" />
            </motion.div>
            <motion.div variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className="text-7xl text-blue-400" />
            </motion.div>
        </div>
        </div>

  );
}

export default Technologies