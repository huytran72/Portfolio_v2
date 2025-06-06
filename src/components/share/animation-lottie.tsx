import Lottie, { LottieRefCurrentProps } from "lottie-react"
import { useEffect, useMemo, useRef } from "react"

interface IProps {
  animationPath: any // Path to the Lottie animation JSON file
  width?: string // Optional width for the animation
}

const AnimationLottie = ({ animationPath, width = "95%" }: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

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
    return () => {
      if (lottieRef && lottieRef.current) lottieRef?.current.destroy()
    }
  }, [])

  return <Lottie {...defaultOptions} />
}

export default AnimationLottie
