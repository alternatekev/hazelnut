import React, {SFC} from 'react'
import {Layouts} from '../t'
import {Col} from 'react-grid-system'

interface LayoutItemProps {
  kind?: Layouts
  disableResponsive: boolean
  totalLayoutItems: number
  hasWide: boolean
  hasMiddleWide: boolean
  hasReallyWide: boolean
}

const columns = {
  left: {
    1: {columns: 12},
    2: {columns: 7},
    3: {columns: 6}
  },
  right: {
    1: {columns: 12},
    2: {columns: 7},
    3: {columns: 6}
  },
  midLeft: {
    1: {columns: 12},
    2: {columns: 8},
    3: {columns: 8}
  },
  midRight: {
    1: {columns: 12},
    2: {columns: 8},
    3: {columns: 8}
  },
  wideLeft: {
    1: {columns: 12},
    2: {columns: 9},
    3: {columns: 6}
  },
  wideRight: {
    2: {columns: 9},
    3: {columns: 6}
  },
  equal: {
    1: {columns: 12},
    2: {columns: 6},
    3: {columns: 4}
  }
}

function getColumns(props) {
  if (props.kind && columns[props.kind][props.totalLayoutItems]) {
    return columns[props.kind][props.totalLayoutItems].columns
  } else {
    let leftoverColumns

    if (props.hasReallyWide) {
      leftoverColumns = 3
    } else {
      leftoverColumns = 4
    }

    if (props.hasWide) {
      if (props.totalLayoutItems === 3) {
        leftoverColumns = 3
      } else {
        leftoverColumns = 5
      }
    }

    if (props.hasMiddleWide) {
      if (props.totalLayoutItems === 3) {
        leftoverColumns = 2
      } else {
        leftoverColumns = 4
      }
    }

    return leftoverColumns
  }
}

export const LayoutItem: SFC<Partial<LayoutItemProps>> = props => {

  if (props.totalLayoutItems == null) throw new Error('Props: totalLayoutItems must be a number and cannot be null or undefined.')
  const calculatedColumns = getColumns(props)

  const responsiveColumnProps = props.disableResponsive
    ? {
      xl: calculatedColumns,
      lg: calculatedColumns,
      md: calculatedColumns,
      sm: calculatedColumns,
      xs: calculatedColumns
    }
    : {
        xl: calculatedColumns,
        lg: calculatedColumns,
        md: calculatedColumns,
      }

  return (
    <Col {...responsiveColumnProps}>
      {props.children}
    </Col>
  )
}
