import React, {FC, Children} from 'react'
const {count, map, toArray} = Children

import {Renderable} from '../t'
import {t, css, prepareStyles} from '../s'

const styles = prepareStyles({
  VerticalLayout: {
    ...t.flex,
    ...t.flex_column,
    ...t.justify_between,
    height: '100%',
    width: ['-webkit-fill-available', '-moz-available']
  },
  isWide: {
    flexGrow: 2
  },
  isBlock: {
    height: 'auto'
  },
  isSingle: {
    ...t.justify_center,
    ...t.items_center
  },
  isAlignedCenter: {
    ...t.flex,
    ...t.items_center,
    ...t.justify_center
  }
})

interface VLProps {
  alignCenter?: boolean
  children: Renderable
  block?: boolean
}

export const VerticalLayout: FC<VLProps> = ({alignCenter, children, block}: VLProps) => {
  const flatChildren = toArray(children).filter(o => o)
  const num = count(flatChildren)
  const layoutStyles = [
    styles.VerticalLayout,
    num === 1 && styles.isSingle,
    block && styles.isBlock,
  ]

  return (
    <div css={css(layoutStyles)}>
      {map(flatChildren, (child, index) => {
        const childStyles = [
          num === 3 && index === 1 && styles.isWide,
          num === 2 && index === 0 && styles.isWide,
          num === 3 && index === 1 && alignCenter && styles.isAlignedCenter,
          num === 2 && index === 0 && alignCenter && styles.isAlignedCenter,
        ]
      
        return child !== null ?
        (
          <div css={css(childStyles)}>
            {child}
          </div> 
        ) : null
      } 
      )}
    </div>
  )
} 
