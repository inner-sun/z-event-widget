import { createEffect, createResource, createSignal, onMount, type Component } from 'solid-js'
import styles from '~/views/recurrent-challenge/recurrent-challenge.module.scss'
import Layout from '~/components/layout/layout'
import { donationGoals } from '~/assets/data/donation-goals'
import { getZeventAmount } from '~/services/zevent-amount'
import ExplosionAnimation from '~/components/explosion-animation/explosion-animation'
import ChallengeProgress from '~/components/challenge-progress/challenge-progress'

const Challenge: Component = () => {
  const [liveAmount, { mutate: mutateAmount, refetch: refetchAmount }] = createResource(getZeventAmount('lasainte'))
  const [amount, setAmount] = createSignal(0)
  const [nextStep, setNextStep] = createSignal(0)
  const [animate, setAnimate] = createSignal(false)

  createEffect(() => {
    const currentAmount = amount()
    const newAmount = liveAmount.latest ?? 0
    const shouldUpdate = newAmount !== currentAmount
    if(shouldUpdate){
      setAmount(newAmount)
    }

    const newNextStep = Math.ceil(newAmount / 100) * 100
    const hasReachedNextStep = newNextStep !== nextStep()
    if(hasReachedNextStep){
      setNextStep(newNextStep)
      setAnimate(true)
    }
  })

  onMount(() => {
    setInterval(refetchAmount, 60000)

    window.addEventListener('click', (event) => {
      const currentAmount = amount()
      const newGoal = donationGoals.find(entry => entry.amount > currentAmount)
      if (newGoal) {
        mutateAmount(newGoal.amount)
      }
    })
  })

  return (
    <Layout style={styles.challenge}>
      <ChallengeProgress amount={amount()} nextStep={nextStep()} />
      <ExplosionAnimation animate={animate()} setAnimate={setAnimate} />
    </Layout>
  )
}

export default Challenge
