import Lottie from "lottie-react"
import { useEffect, useMemo, useRef } from "react"

interface IProps {
  animationPath: any // Path to the Lottie animation JSON file
  width?: string // Optional width for the animation
}

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const lottieRef = useRef()

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width,
      },
      lottieRef: lottieRef,
    }
  }, [animationPath, width])

  useEffect(() => {
    return () => lottieRef.current.destroy()
  }, [])

  return <Lottie {...defaultOptions} />
}

export default AnimationLottie
