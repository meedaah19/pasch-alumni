import {motion} from "framer-motion";

export default function Activities({program, description}){
    return(
        <>
        <motion.div 
            initial={{scale:0}}
            animate={{scale:1}}
            whileHover={{scale:1.1}}
            className="bg-red-500 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{program}</h3>
              <p>{description}</p>
        </motion.div>
        </>
    )
}