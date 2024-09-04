import type { Component } from 'solid-js'
import styles from '~/views/donation-goals/donation-goals.module.scss'
import Layout from '~/components/layout/layout'
import GoalsList from '~/components/goals-list/goals-list'
import LogoZEvent from '~/assets/images/logo-zevent.svg'

const DonationGoals: Component = () => {
  return (
    <Layout style={styles.donationGoals}>
      <LogoZEvent class={styles.zeventLogo} />
      <h1 class={styles.title}>Donation<br/>Goals</h1>
      <GoalsList />
    </Layout>
  )
}

export default DonationGoals
