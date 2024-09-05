import { Component } from 'solid-js'
import { RaisedAmountProps } from '~/components/raised-amount/raised-amount.interfaces'
import styles from '~/components/raised-amount/raised-amount.module.scss'

const RaisedAmount: Component<RaisedAmountProps> = ({ raisedAmount }) => {
  return (
    <div class={styles.raisedAmount}>
      <div class={styles.label}>
        Cagnotte
      </div>
      <div class={styles.value}>
        {raisedAmount} <span class={styles.currency}>€</span>
      </div>
    </div>
  )
}

export default RaisedAmount
