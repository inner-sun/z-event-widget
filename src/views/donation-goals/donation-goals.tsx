import { createEffect, createResource, createSignal, onMount, type Component } from 'solid-js'
import styles from '~/views/donation-goals/donation-goals.module.scss'
import Layout from '~/components/layout/layout'
import GoalsList from '~/components/goals-list/goals-list'
import { donationGoals } from '~/assets/data/donation-goals'
import RaisedAmount from '~/components/raised-amount/raised-amount'
import { getZeventAmount } from '~/services/zevent-amount'

const DonationGoals: Component = () => {
  const [liveAmount, { refetch: refetchLiveAmount }] = createResource(getZeventAmount('lasainte'))
  const [amount, setAmount] = createSignal(0)

  createEffect(() => {
    const lastVersion = liveAmount.latest ?? 0
    const shouldUpdate = lastVersion > amount()
    if(shouldUpdate){
      setAmount(lastVersion)
    }
  })

  onMount(() => {
    setInterval(refetchLiveAmount, 5 * 60000)

    window.addEventListener('keyup', (event) => {
      const currentAmount = amount()
      let newGoal = null
      if (event.key === 'ArrowDown') {
        newGoal = donationGoals.find(entry => entry.amount > currentAmount)
      }
      if (event.key === 'ArrowUp') {
        newGoal = donationGoals.slice().reverse().find(entry => entry.amount < currentAmount)
      }
      if (newGoal) {
        setAmount(newGoal.amount)
      }
    })
  })

  return (
    <Layout style={styles.donationGoals}>
      <RaisedAmount amount={amount()} />
      <GoalsList amount={amount()} />
    </Layout>
  )
}

export default DonationGoals
