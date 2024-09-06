import { Component } from 'solid-js'
import { GoalEntryProps } from '~/components/goal-entry/goal-entry.interfaces'
import styles from '~/components/goal-entry/goal-entry.module.scss'

const GoalEntry: Component<GoalEntryProps> = ({ amount, label, reached }) => {
  const cssClasses = () => ({
    [styles.goalEntry]: true,
    [styles.reached]: reached
  })

  return (
    <div classList={cssClasses()}>
      <div class={styles.amount}>
        <div class={styles.value}>
          {amount} <span class={styles.currency}>€</span>
          <div class={styles.shineAnimation} />
        </div>
        <div class={[styles.shineAnimation, styles.delayed].join(' ')} />
      </div>
      <div class={styles.label}>
        {label}
      </div>
    </div>
  )
}

export default GoalEntry
