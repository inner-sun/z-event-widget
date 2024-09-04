import { Component, createSignal, For, onMount } from 'solid-js'
import { donationGoals } from '~/assets/data/donation-goals'
import GoalEntry from '~/components/goal-entry/goal-entry'
import styles from '~/components/goals-list/goals-list.module.scss'

const GoalsList: Component = () => {
  const [raisedAmount, setRaisedAmount] = createSignal(4999)

  onMount(() => {
    window.addEventListener('keyup', (event) => {
      const currentAmount = raisedAmount()
      let newGoal = null
      if(event.key === 'ArrowDown'){
        newGoal = donationGoals.find(entry => entry.amount > currentAmount)
      }
      if(event.key === 'ArrowUp'){
        newGoal = donationGoals.slice().reverse().find(entry => entry.amount < currentAmount)
      }
      if(newGoal){
        setRaisedAmount(newGoal.amount)
      }
    })
  })

  return (
    <div class={styles.container}>
      <div class={styles.raisedAmount}>
        <div class={styles.label}>
          Cagnotte
        </div>
        <div class={styles.value}>
          {raisedAmount()} <span class={styles.currency}>€</span>
        </div>
      </div>

      <div class={styles.progressBar}>
        <div class={styles.progress} />
      </div>

      <main class={styles.goalsList}>
        <For each={donationGoals}>
          {entry => (
            <GoalEntry
              amount={entry.amount}
              label={entry.label}
              reached={raisedAmount() >= entry.amount}
            />
          )}
        </For>
      </main>
    </div>
  )
}

export default GoalsList
