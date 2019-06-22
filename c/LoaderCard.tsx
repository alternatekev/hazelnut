import { Component } from 'react'
import { Navbar, Colors, NavbarDivider, ButtonGroup, Button, Icon, Switch, Slider } from '@blueprintjs/core'

import {css, prepareStyles} from '../s'

const styles = prepareStyles({
  LoaderCard: {
    backgroundColor: Colors.LIGHT_GRAY1,
    color: Colors.DARK_GRAY5
  }
})

export enum Loaders {
  Image = 'Image',
  Map = 'Map',
  Video = 'Video'
}

export interface Props {
  kind: 'Image' | 'Map' | 'Video'
}

export class LoaderCard extends Component<Props> {
  render() {
    const {
      kind
    } = this.props

    return (
        <Navbar css={css(styles.LoaderCard)}>
          <Navbar.Group align="left" >

            {kind === Loaders.Image && <Icon icon="camera" iconSize={30} />}
            {kind === Loaders.Map && <Icon icon="map" iconSize={30} />}
            {kind === Loaders.Video && <Icon icon="video" iconSize={30} />}
            <NavbarDivider />
            <Button icon="document" />
            <NavbarDivider />
            <Slider labelStepSize={100} min={25} max={500} stepSize={1} value={100} />
            <NavbarDivider />
            {kind === Loaders.Video &&
              <>
                <ButtonGroup>
                  <Button icon="fast-backward" />
                  <Button icon="stop" />
                  <Button icon="play" />
                  <Button icon="fast-forward" />
                </ButtonGroup>
                <NavbarDivider />
              </>
            }
            
          </Navbar.Group>
          <Navbar.Group align="right">
            <Switch large />
          </Navbar.Group>
        </Navbar>

    )
  }
}