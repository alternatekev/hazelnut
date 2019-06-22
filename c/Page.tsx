import {FC, ReactNode} from 'react'
import {Navbar} from '@blueprintjs/core'
import {css, t, prepareStyles} from '../s'

interface Props {
  title?: string
  children?: ReactNode
}

const styles = prepareStyles({
  Page: {
    paddingTop: 70,
    backgroundColor: '#999',
    height: '100vh',
    width: '100vw',
  },
  PageChildren: {
    ...t.ml2,
    ...t.mr2
  }
})

export const Page: FC<Props> = ({title, children}: Props) => 
  <section id="Page" css={css(styles.Page)}>
    <Navbar fixedToTop>
      <Navbar.Group>
        <Navbar.Heading><strong>Hazelnut</strong></Navbar.Heading>
        <Navbar.Divider />
        <Navbar.Heading>{title || 'Untitled'}</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
    <article css={css(styles.PageChildren)} id="PageChildren">
      {children}
    </article>
  </section>

