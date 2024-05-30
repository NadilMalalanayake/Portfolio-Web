import { motion} from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1,y:1}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Contact
      </motion.h2>
      <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:0.5}}
      className="contact-form">
        <form>
          <div className="name-container">
            <input type="text" name="firstname" placeholder="First Name"></input>
            <input type="text" name="lastname" placeholder="Last Name"></input>
          </div>
          <input type="text" name="email" placeholder="Email"></input>
          <textarea type="text" name="message" placeholder="Message" rows={3}></textarea>
          <button>SEND</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact