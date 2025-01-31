import { motion } from "framer-motion";

export default function Button({children, className, onClick}){
    return(
        <motion.button whileHover={{scale:1.1}} transition={{type: 'spring', stiffness:500}} onClick={onClick}  className={className}>
            {children}
        </motion.button>
    )
}