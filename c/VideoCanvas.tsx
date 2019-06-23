import {Component} from 'react'
import {t, css, prepareStyles} from '../s'
import {Colors} from '@blueprintjs/core'

interface Props {
  videoData?: any 
  imageData?: any
  mapData?: any
}

const styles = prepareStyles({
  VideoCanvasContainer: {
    ...t.pa3,
    ...t.ma0,
  },
  VideoCanvas: {
    ...t.br3,
    backgroundColor: Colors.DARK_GRAY5,
    height: ['100%', '-webkit-fill-available'],
    width: ['-webkit-fill-available', '-moz-available']    
  }
})

export class VideoCanvas extends Component<Props> {
  render() {
    return (
      <figure css={css(styles.VideoCanvasContainer)}>
        <canvas css={css(styles.VideoCanvas)} />
      </figure>
    )
  }
}