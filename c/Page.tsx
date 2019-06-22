import {FC, ReactNode} from 'react'
import {Navbar} from '@blueprintjs/core'

interface Props {
  title?: string
  children?: ReactNode
}

export const Page: FC<Props> = ({title, children}: Props) => 
  <section id="Page">
    <Navbar fixedToTop>
      <Navbar.Group>
        <Navbar.Heading><strong>Hazelnut</strong></Navbar.Heading>
        <Navbar.Divider />
        <Navbar.Heading>{title || 'Untitled'}</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
    {children}
  </section>

