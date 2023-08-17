import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react'

/* 
    Bounces an element in from the side wiht a small bounce effect as it settles
    make sure element is still in view port with initial x position. opacity will make up for this.
*/
export default function BounceInSide(props) {

    /* See default prop values at bottom of file */
    let { children, startX, startY, duration, viewThreshold } = props

    const [ ref, inView ] = useInView({
        threshold: viewThreshold
    })
    const controls = useAnimation()

    const isFirstRenderRef = useRef(true)
    const isAnimationInProgress = useRef(false)

    const move = async() => {
        if (inView) {   
            console.log("enter start")
            isAnimationInProgress.current = true
            controls.set({ x: startX, y: startY, opacity: 1})
            await controls.start({x: 0, opacity: 1,})
            isAnimationInProgress.current = false
            console.log("enter end")
        }
    }

    useEffect(() => {
        console.log("isInView: ", inView)
        console.log("isAnimation: ", isAnimationInProgress)
        if (isFirstRenderRef.current) {
            isFirstRenderRef.current = false
        } else {
            move()
        }
        
    }, [inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            transition={{
                duration: duration,
                ease: "easeInOut",
                type: "spring",
                bounce: 0.4,
            }}
            style={{
                zIndex: 1,
            }}
        >
            { children }
        </motion.div>
    )
}
BounceInSide.defaultProps = {
    startX: -500,
    duration: 2.0,
    viewThreshold: 0.6,
    startY: 0,
}