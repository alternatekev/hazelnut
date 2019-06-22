import { Component } from 'react'
import { Navbar, Colors, Divider, ButtonGroup, Button, Icon } from '@blueprintjs/core'

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
          <Navbar.Group align="left">
            <Navbar.Heading>
              {kind === Loaders.Image && <Icon icon="camera" iconSize={30} />}
              {kind === Loaders.Map && <Icon icon="map" iconSize={30} />}
              {kind === Loaders.Video && <Icon icon="video" iconSize={30} />}
            </Navbar.Heading>

          </Navbar.Group> 
          <Navbar.Group align="right">
          {kind === Loaders.Video &&
            <>
              <ButtonGroup>
                <Button icon="fast-backward" />
                <Button icon="stop" />
                <Button icon="play" />
                <Button icon="fast-forward" />
              </ButtonGroup>
              <Divider />
            </>
          }
          <Button icon="export" />
          </Navbar.Group>
        </Navbar>

    )
  }
}