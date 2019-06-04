import {css, CSSObject, SerializedStyles} from '@emotion/core'

import {t} from './Tachyons'
import {prepareStyles, inverseTachyonsUnit} from './StyleUtils'

export type ExtraStyles = SerializedStyles | undefined | SerializedStyles[] | (SerializedStyles | undefined)[]
export {css, t, prepareStyles, inverseTachyonsUnit, CSSObject}
