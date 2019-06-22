import { Component } from 'react'
import { Navbar, Colors, Divider, ButtonGroup, Button } from '@blueprintjs/core'
import ImageIcon from 'mdi-react/ImageIcon'
import MapIcon from 'mdi-react/MapIcon'
import VideoIcon from 'mdi-react/VideoIcon'

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
              {kind === Loaders.Image && <ImageIcon size={25} />}
              {kind === Loaders.Map && <MapIcon size={25} />}
              {kind === Loaders.Video && <VideoIcon size={25} />}
            </Navbar.Heading>
            <Navbar.Heading><strong>{kind}</strong></Navbar.Heading>
          </Navbar.Group> 
          <Navbar.Group align="right">
            {kind === Loaders.Video &&
              <ButtonGroup>
                <Button icon="fast-backward" />
                <Button icon="stop" />
                <Button icon="play" />
                <Button icon="fast-forward" />
              </ButtonGroup>
            }
            <Divider />
            <Button icon="import" />
          </Navbar.Group>
        </Navbar>

    )
  }
}