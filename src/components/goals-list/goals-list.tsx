import { Component, For } from 'solid-js'
import { donationGoals } from '~/assets/data/donation-goals'
import GoalEntry from '~/components/goal-entry/goal-entry'
import { GoalsListProps } from '~/components/goals-list/goals-list.interfaces'
import styles from '~/components/goals-list/goals-list.module.scss'

const GoalsList: Component<GoalsListProps> = ({ raisedAmount }) => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Donation Goals</h1>

      <main class={styles.goalsList}>
        <For each={donationGoals}>
          {entry => (
            <GoalEntry
              amount={entry.amount}
              label={entry.label}
              reached={raisedAmount >= entry.amount}
            />
          )}
        </For>
      </main>
    </div>
  )
}

export default GoalsList
