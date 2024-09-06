import { createEffect, createResource, createSignal, onMount, type Component } from 'solid-js'
import styles from '~/views/donation-goals/donation-goals.module.scss'
import Layout from '~/components/layout/layout'
import GoalsList from '~/components/goals-list/goals-list'
import { donationGoals } from '~/assets/data/donation-goals'
import { getZeventAmount } from '~/services/zevent-amount'
import MochiAnimation from '~/components/mochi-animation/mochi-animation'

const DonationGoals: Component = () => {
  const [liveAmount, { mutate: mutateAmount, refetch: refetchAmount }] = createResource(getZeventAmount('lasainte'))
  const [amount, setAmount] = createSignal(0)
  const [animate, setAnimate] = createSignal(false)

  createEffect(() => {
    const currentAmount = amount()
    const newAmount = liveAmount.latest ?? 0
    const shouldUpdate = newAmount !== currentAmount
    if(shouldUpdate){
      setAmount(newAmount)
    }

    const lastReachedGoal = donationGoals.slice().reverse().find(entry => entry.amount <= currentAmount)
    const newReachedGoal = donationGoals.slice().reverse().find(entry => entry.amount <= newAmount)
    const hasReachedNewGoal = lastReachedGoal !== newReachedGoal
    if(hasReachedNewGoal){
      setAnimate(true)
    }
  })

  onMount(() => {
    setInterval(refetchAmount, 60000)

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
        mutateAmount(newGoal.amount)
      }
    })

    window.addEventListener('click', (event) => {
      const currentAmount = amount()
      const newGoal = donationGoals.find(entry => entry.amount > currentAmount)
      if (newGoal) {
        mutateAmount(newGoal.amount)
      }
    })
  })

  return (
    <Layout style={styles.donationGoals}>
      <GoalsList amount={amount()} />
      <MochiAnimation animate={animate()} setAnimate={setAnimate}  />
    </Layout>
  )
}

export default DonationGoals
