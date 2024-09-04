import { Component, For } from 'solid-js'
import { donationGoals } from '~/assets/data/donation-goals'
import GoalEntry from '~/components/goal-entry/goal-entry'
import styles from '~/components/goals-list/goals-list.module.scss'

const GoalsList: Component = () => {
  return (
    <div class={styles.goalsList}>
      <For each={donationGoals}>
        {entry => (
          <GoalEntry
            amount={entry.amount}
            label={entry.label}
          />
        )}
      </For>
    </div>
  )
}

export default GoalsList
