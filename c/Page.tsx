import {FC, ReactNode} from 'react'
import {Navbar, Button, Colors} from '@blueprintjs/core'
import {css, t, prepareStyles} from '../s'

interface Props {
  title?: string
  children?: ReactNode
}

const styles = prepareStyles({
  Page: {
    paddingTop: 50,
    backgroundColor: Colors.LIGHT_GRAY3,
    height: '100vh',
    width: '100vw',
    ...t.overflow_y,
  },
  MainNavbar: {
    backgroundColor: Colors.DARK_GRAY1,
    color: Colors.WHITE,
    zIndex: 10
  },
  PageChildren: {
    ...t.flex,
    ...t.flex_column,
    zIndex: 1,
    ...t.relative,
  },
  Branding: {
    color: Colors.GRAY2,
    ...t.mr0,
    ...t.fw6
  },
  Divider: {
    borderColor: Colors.DARK_GRAY4
  },
  Title: {
    ...t.fw1
  }
})

export const Page: FC<Props> = ({title, children}: Props) => 
  <section id="Page" css={css(styles.Page)}>
    <Navbar fixedToTop css={css(styles.MainNavbar)}>
      <Navbar.Group align="left">
        <Navbar.Heading css={css(styles.Branding)}>Hazelnut</Navbar.Heading>
        <Navbar.Divider css={css(styles.Divider)} />
        <Navbar.Heading css={css(styles.Title)}>{title || 'Untitled'}</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align="right">
        <Button intent="primary" icon="record">Export Controller Video</Button>
      </Navbar.Group>
    </Navbar>
    <article css={css(styles.PageChildren)} id="PageChildren">
      {children}
    </article>
  </section>

