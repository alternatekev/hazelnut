import {ReactNode} from 'react'

/**
 * Use renderable for render props.
 * A renderable can be either a function that returns a ReactNode/Element,
 * or the ReactNode / Element itself
 */
// tslint:disable-next-line:no-any
export type Renderable<T = any> = ((...a: T[]) => ReactNode | Element) | ReactNode | Element
