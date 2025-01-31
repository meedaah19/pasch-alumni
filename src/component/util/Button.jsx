import { motion } from "framer-motion";

export default function Button({children, className}){
    return(
        <motion.button whileHover={{scale:1.1}} transition={{type: 'spring', stiffness:500}}  className={className}>
            {children}
        </motion.button>
    )
}