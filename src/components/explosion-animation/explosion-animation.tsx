import { Component, createEffect } from 'solid-js'
import { ExplosionAnimationProps } from '~/components/explosion-animation/explosion-animation.interfaces'
import styles from '~/components/explosion-animation/explosion-animation.module.scss'
import MacronExplosion from '~/assets/images/macron-explosion.png'

const ExplosionAnimation: Component<ExplosionAnimationProps> = ({ animate, setAnimate }) => {
  const cssClasses = () => ({
    [styles.explosionAnimation]: true,
    [styles.animate]: animate
  })

  createEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false)
      }, 5000)
    }
  })

  return (
    <img
      src={MacronExplosion}
      classList={cssClasses()}
    />
  )
}

export default ExplosionAnimation
