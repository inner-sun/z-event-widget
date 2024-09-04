import { Component } from 'solid-js'
import '~/styles/reset.scss'
import '~/styles/fonts.scss'
import '~/styles/app.scss'
import { LayoutProps } from '~/components/layout/layout.interfaces'
import styles from '~/components/layout/layout.module.scss'

const Layout: Component<LayoutProps> = ({ children, style }) => {
  const cssClasses = [styles.layout, style].join(' ')

  return (
    <div class={cssClasses}>
      {children}
    </div>
  )
}

export default Layout
