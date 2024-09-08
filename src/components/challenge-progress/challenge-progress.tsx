import { Component, createEffect } from 'solid-js'
import { ChallengeProgressProps } from '~/components/challenge-progress/challenge-progress.interfaces'
import styles from '~/components/challenge-progress/challenge-progress.module.scss'

const ChallengeProgress: Component<ChallengeProgressProps> = ({ amount, nextStep }) => {
  const progressPercentage = () => {
    const amountInHundreds = Math.floor(amount / 100) * 100
    const progress = amount - amountInHundreds
    console.log({
      amountInHundreds,
      progress
    })
    return `${Math.floor(progress)}%`
  }

  return (
    <div class={styles.challengeProgress}>
      <div class={styles.major}>
        Macron Explosion
      </div>
      <div class={styles.minor}>
        tous les <span class={styles.amount}>100€</span>
      </div>
      <div class={styles.progressPercentage}>
        {progressPercentage()}
      </div>
      <div class={styles.progressBar} style={{ width: progressPercentage() }} />
    </div>
  )
}

export default ChallengeProgress
