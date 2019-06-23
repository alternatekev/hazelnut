import { Component } from 'react'
import { Navbar, Divider, Colors, NavbarDivider, ButtonGroup, Button, Icon, Switch, Slider } from '@blueprintjs/core'

import {css, prepareStyles} from '../s'

export enum Loaders {
  Image = 'Image',
  Map = 'Map',
  Video = 'Video'
}

export interface Props {
  kind: 'Image' | 'Map' | 'Video'
}

interface State {
  enabled: boolean
}

export class LoaderCard extends Component<Props, State> {
  state: State = {
    enabled: false
  }

  render() {
    const {kind} = this.props
    const {enabled} = this.state

    const styles = prepareStyles({
      LoaderCard: {
        backgroundColor: enabled ? Colors.LIGHT_GRAY5 : Colors.LIGHT_GRAY1,
        color: enabled ? Colors.DARK_GRAY5 : Colors.GRAY4
      }
    })

    const icon = kind === Loaders.Image 
      ? <Icon icon="camera" iconSize={20} /> 
      : kind === Loaders.Map 
        ? <Icon icon="map" iconSize={20} /> 
        : kind === Loaders.Video 
          ? <Icon icon="video" iconSize={20} />
          : undefined

    return (
        <Navbar css={css(styles.LoaderCard)}>
          <Navbar.Group align="left" >
            <Button 
              minimal 
              large 
              icon={icon}
            >
              {kind}
            </Button>
            <NavbarDivider />
            <Switch large checked={enabled} onChange={this.toggleEnabled} />   
          </Navbar.Group>
          <Navbar.Group align="right">
            <Slider
              labelRenderer={false}
              labelStepSize={100}
              min={25}
              max={500}
              stepSize={1}
              value={100}
              disabled={!enabled}
            />
            {kind === Loaders.Video &&
              <>
                <NavbarDivider />
                <ButtonGroup>
                  <Button disabled={!enabled} icon="fast-backward" />
                  <Button disabled={!enabled} icon="stop" />
                  <Button disabled={!enabled} icon="play" />
                  <Button disabled={!enabled} icon="fast-forward" />
                </ButtonGroup>
              </>
            }
           
            
          </Navbar.Group>
        </Navbar>

    )
  }

  private toggleEnabled = () => {
    this.setState((prevState) => ({
      enabled: !prevState.enabled
    }))
  }
}