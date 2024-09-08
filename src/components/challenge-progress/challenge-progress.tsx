import { Component } from 'solid-js'
import { ChallengeProgressProps } from '~/components/challenge-progress/challenge-progress.interfaces'
import styles from '~/components/challenge-progress/challenge-progress.module.scss'

const ChallengeProgress: Component<ChallengeProgressProps> = ({ amount, nextStep }) => {
  return (
    <div class={styles.challengeProgress}>
      <div>amount:{amount}</div>
      <div>nextStep:{nextStep}</div>
    </div>
  )
}

export default ChallengeProgress
