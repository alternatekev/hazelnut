import {SerializedStyles, ObjectInterpolation, css} from '@emotion/core'

export type ObjectStyles = ObjectInterpolation<undefined>

export function prepareStyles (styles: {[key: string]: ObjectStyles}) {
  return Object.keys(styles).reduce<{[key: string]: SerializedStyles}>((memo, key) => {
    return {...memo, [key]: css({...styles[key], label: key})}
  }, {})
}

export function inverseTachyonsUnit(tachyonsRule: ObjectStyles) {
  if (tachyonsRule) {
    const rule = Object.keys(tachyonsRule)[0]
    const editedTachyonsRule: ObjectStyles = {}
    editedTachyonsRule[rule] = `calc(-1 * ${tachyonsRule[rule]})`

    return editedTachyonsRule
  }
}
