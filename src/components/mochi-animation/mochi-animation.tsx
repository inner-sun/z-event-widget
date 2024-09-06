import { Component, createEffect } from 'solid-js'
import { MochiAnimationProps } from '~/components/mochi-animation/mochi-animation.interfaces'
import styles from '~/components/mochi-animation/mochi-animation.module.scss'

const MochiAnimation: Component<MochiAnimationProps> = ({ animate, setAnimate }) => {
  const cssClasses = () => ({
    [styles.mochiAnimation]: true,
    [styles.animate]: animate
  })

  createEffect(() => {
    if(animate){
      setTimeout(() => {
        setAnimate(false)
      }, 5000)
    }
  })

  return (
    <img
      src='/src/assets/images/mochi-paysan.png'
      classList={cssClasses()}
    />
  )
}

export default MochiAnimation
