import React, {Children, Component} from 'react'

import {Container, Row, setConfiguration, Col, Configuration} from 'react-grid-system'
import {css, prepareStyles, t, ExtraStyles} from '../s'

import {LayoutItem} from './LayoutItem'
import {Colors} from '@blueprintjs/core'
import {Layouts} from '../t'
import {SerializedStyles} from '@emotion/core'

interface Props {
  weighted?: boolean
  superWeighted?: boolean
  topWeighted?: boolean
  disableResponsive?: boolean
  miniTopWeighted?: boolean
  miniWeighted?: boolean
  padded?: boolean
  superTopWeighted?: boolean
  divider?: boolean
  topDivider?: boolean
  cardLayout?: boolean
  noGutter?: boolean
  extraStyles?: ExtraStyles
  kind?: Layouts
  alignment?: 'normal' | 'start' | 'center' | 'end'
}

export const LayoutConfig: Configuration = {
  gutterWidth: 20,
  defaultScreenClass: 'md',
  breakpoints: [460, 768, 1024, 1300]
}
export {Container, Row, Col, setConfiguration, Configuration}

const styles = prepareStyles({
  Layout: {
    transition: `all 100ms ease-in-out`
  },
  isWeighted: {
    ...t.mb4
  },
  isSuperWeighted: {
    ...t.mb5
  },
  isTopWeighted: {
    ...t.mt3
  },
  isMiniTopWeighted: {
    ...t.mt2
  },
  isMiniWeighted: {
    ...t.mb2
  },
  isTopSuperWeighted: {
    ...t.mt5
  },
  hasDivider: {
    ...t.pb5,
    borderBottom: `1px ${Colors.GRAY5} solid`
  },
  hasTopDivider: {
    ...t.pt5,
    borderTop: `1px ${Colors.GRAY5} solid`
  },
  isCardLayout: {
    marginBottom: 20
  },
  isPadded: {
    ...t.pl5,
    ...t.pr5
  },
  hasNoGutter: {
    marginLeft: -10,
    marginRight: -10
  }
})

const GridRow = css`
  margin-left: -20px !important;
  margin-right: -20px !important;
`

export class Layout extends Component<Props> {
  static defaultProps: Props = {
    kind: Layouts.Equal,
    alignment: 'normal',
    disableResponsive: false
  }

  constructor(props: Props) {
    super(props)
    setConfiguration(LayoutConfig)
  }

  renderChildrenWithLayout = () => {
    const {children, kind, disableResponsive} = this.props
    const length = Children.toArray(children).length

    return Children.map(children, (child, index) => {
      if (child !== null) {
        const isLeft = kind === Layouts.Left
        const isWideLeft = kind === Layouts.WideLeft
        const isMidLeft = kind === Layouts.MidLeft
        const isRight = kind === Layouts.Right
        const isWideRight = kind === Layouts.WideRight
        const isMidRight = kind === Layouts.MidRight
        const isEqual = kind === Layouts.Equal

        const isLeftLayout = index === 0 && (isLeft || isWideLeft || isMidLeft)
        const isRightLayout = index === length - 1 &&
          (isRight || isWideRight || isMidRight)

        const thisKind = (isLeftLayout || isRightLayout || isEqual)
          ? kind
          : undefined

        return (
          <LayoutItem
            totalLayoutItems={length}
            hasWide={isLeft || isRight}
            hasMiddleWide={kind === Layouts.MidLeft || kind === Layouts.MidRight}
            hasReallyWide={isWideLeft || kind === Layouts.WideRight}
            kind={thisKind}
            disableResponsive={disableResponsive}
            key={index}>
            {child}
          </LayoutItem>
        )
      }

    })
  }

  render() {
    const {
      children,
      weighted,
      superWeighted,
      topWeighted,
      miniWeighted,
      superTopWeighted,
      divider,
      topDivider,
      cardLayout,
      padded,
      miniTopWeighted,
      extraStyles,
      noGutter,
      alignment,
    } = this.props
    if (Children.toArray(children).length > 1) {

      return (
        <div css={css(
          styles.Layout,
          weighted && styles.isWeighted,
          superWeighted && styles.isSuperWeighted,
          topWeighted && styles.isTopWeighted,
          miniWeighted && styles.isMiniWeighted,
          superTopWeighted && styles.isTopSuperWeighted,
          divider && styles.hasDivider,
          topDivider && styles.hasTopDivider,
          cardLayout && styles.isCardLayout,
          padded && styles.isPadded,
          miniTopWeighted && styles.isMiniTopWeighted,
          extraStyles as SerializedStyles
        )}>
          <Container fluid>
            <Row
              nogutter={noGutter}
              css={css(GridRow, noGutter && styles.hasNoGutter)}
              align={alignment}>
              {this.renderChildrenWithLayout()}
            </Row>
          </Container>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}
