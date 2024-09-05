import { createSignal, onMount, type Component } from 'solid-js'
import styles from '~/views/donation-goals/donation-goals.module.scss'
import Layout from '~/components/layout/layout'
import GoalsList from '~/components/goals-list/goals-list'
import { donationGoals } from '~/assets/data/donation-goals'
import RaisedAmount from '~/components/raised-amount/raised-amount'

const DonationGoals: Component = () => {
  const [raisedAmount, setRaisedAmount] = createSignal(4999)

  onMount(() => {
    window.addEventListener('keyup', (event) => {
      const currentAmount = raisedAmount()
      let newGoal = null
      if (event.key === 'ArrowDown') {
        newGoal = donationGoals.find(entry => entry.amount > currentAmount)
      }
      if (event.key === 'ArrowUp') {
        newGoal = donationGoals.slice().reverse().find(entry => entry.amount < currentAmount)
      }
      if (newGoal) {
        setRaisedAmount(newGoal.amount)
      }
    })
  })
  
  return (
    <Layout style={styles.donationGoals}>
      <RaisedAmount raisedAmount={raisedAmount()} />
      <GoalsList raisedAmount={raisedAmount()} />
    </Layout>
  )
}

export default DonationGoals
