import { Component } from 'solid-js'
import { LayoutProps } from '~/components/layout/layout.interfaces'
import styles from '~/components/layout/layout.module.scss'

const Layout: Component<LayoutProps> = ({ children }) => {
  return (
    <div class={styles.layout}>
      {children}
    </div>
  )
}

export default Layout
