import {CSSObject} from '@emotion/css'

interface TachyonsStyles {
  [key: string]: CSSObject
}

export const t: TachyonsStyles = {
  aspect_ratio: {
    height: 0,
    position: 'relative'
  },
  aspect_ratio__16x9: {
    paddingBottom: '56.25%'
  },
  aspect_ratio__9x16: {
    paddingBottom: '177.77%'
  },
  aspect_ratio__4x3: {
    paddingBottom: '75%'
  },
  aspect_ratio__3x4: {
    paddingBottom: '133.33%'
  },
  aspect_ratio__6x4: {
    paddingBottom: '66.6%'
  },
  aspect_ratio__4x6: {
    paddingBottom: '150%'
  },
  aspect_ratio__8x5: {
    paddingBottom: '62.5%'
  },
  aspect_ratio__5x8: {
    paddingBottom: '160%'
  },
  aspect_ratio__7x5: {
    paddingBottom: '71.42%'
  },
  aspect_ratio__5x7: {
    paddingBottom: '140%'
  },
  aspect_ratio__1x1: {
    paddingBottom: '100%'
  },
  aspect_ratio__object: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
  },
  bg_center: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  bg_top: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'
  },
  bg_right: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
  },
  bg_bottom: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center'
  },
  bg_left: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left'
  },
  cover: {
    backgroundSize: 'cover'
  },
  contain: {
    backgroundSize: 'contain'
  },
  b__black: {
    borderColor: 'var(--black)'
  },
  b__near_black: {
    borderColor: 'var(--near-black)'
  },
  b__dark_gray: {
    borderColor: 'var(--dark-gray)'
  },
  b__mid_gray: {
    borderColor: 'var(--mid-gray)'
  },
  b__gray: {
    borderColor: 'var(--gray)'
  },
  b__silver: {
    borderColor: 'var(--silver)'
  },
  b__light_silver: {
    borderColor: 'var(--light-silver)'
  },
  b__light_gray: {
    borderColor: 'var(--light-gray)'
  },
  b__near_white: {
    borderColor: 'var(--near-white)'
  },
  b__white: {
    borderColor: 'var(--white)'
  },
  b__white_90: {
    borderColor: 'var(--white-90)'
  },
  b__white_80: {
    borderColor: 'var(--white-80)'
  },
  b__white_70: {
    borderColor: 'var(--white-70)'
  },
  b__white_60: {
    borderColor: 'var(--white-60)'
  },
  b__white_50: {
    borderColor: 'var(--white-50)'
  },
  b__white_40: {
    borderColor: 'var(--white-40)'
  },
  b__white_30: {
    borderColor: 'var(--white-30)'
  },
  b__white_20: {
    borderColor: 'var(--white-20)'
  },
  b__white_10: {
    borderColor: 'var(--white-10)'
  },
  b__white_05: {
    borderColor: 'var(--white-05)'
  },
  b__white_025: {
    borderColor: 'var(--white-025)'
  },
  b__white_0125: {
    borderColor: 'var(--white-0125)'
  },
  b__black_90: {
    borderColor: 'var(--black-90)'
  },
  b__black_80: {
    borderColor: 'var(--black-80)'
  },
  b__black_70: {
    borderColor: 'var(--black-70)'
  },
  b__black_60: {
    borderColor: 'var(--black-60)'
  },
  b__black_50: {
    borderColor: 'var(--black-50)'
  },
  b__black_40: {
    borderColor: 'var(--black-40)'
  },
  b__black_30: {
    borderColor: 'var(--black-30)'
  },
  b__black_20: {
    borderColor: 'var(--black-20)'
  },
  b__black_10: {
    borderColor: 'var(--black-10)'
  },
  b__black_05: {
    borderColor: 'var(--black-05)'
  },
  b__black_025: {
    borderColor: 'var(--black-025)'
  },
  b__black_0125: {
    borderColor: 'var(--black-0125)'
  },
  b__dark_red: {
    borderColor: 'var(--dark-red)'
  },
  b__red: {
    borderColor: 'var(--red)'
  },
  b__light_red: {
    borderColor: 'var(--light-red)'
  },
  b__orange: {
    borderColor: 'var(--orange)'
  },
  b__gold: {
    borderColor: 'var(--gold)'
  },
  b__yellow: {
    borderColor: 'var(--yellow)'
  },
  b__light_yellow: {
    borderColor: 'var(--light-yellow)'
  },
  b__purple: {
    borderColor: 'var(--purple)'
  },
  b__light_purple: {
    borderColor: 'var(--light-purple)'
  },
  b__dark_pink: {
    borderColor: 'var(--dark-pink)'
  },
  b__hot_pink: {
    borderColor: 'var(--hot-pink)'
  },
  b__pink: {
    borderColor: 'var(--pink)'
  },
  b__light_pink: {
    borderColor: 'var(--light-pink)'
  },
  b__dark_green: {
    borderColor: 'var(--dark-green)'
  },
  b__green: {
    borderColor: 'var(--green)'
  },
  b__light_green: {
    borderColor: 'var(--light-green)'
  },
  b__navy: {
    borderColor: 'var(--navy)'
  },
  b__dark_blue: {
    borderColor: 'var(--dark-blue)'
  },
  b__blue: {
    borderColor: 'var(--blue)'
  },
  b__light_blue: {
    borderColor: 'var(--light-blue)'
  },
  b__lightest_blue: {
    borderColor: 'var(--lightest-blue)'
  },
  b__washed_blue: {
    borderColor: 'var(--washed-blue)'
  },
  b__washed_green: {
    borderColor: 'var(--washed-green)'
  },
  b__washed_yellow: {
    borderColor: 'var(--washed-yellow)'
  },
  b__washed_red: {
    borderColor: 'var(--washed-red)'
  },
  b__transparent: {
    borderColor: 'var(--transparent)'
  },
  br0: {
    borderRadius: 0
  },
  br1: {
    borderRadius: '.125rem'
  },
  br2: {
    borderRadius: '.25rem'
  },
  br3: {
    borderRadius: '.5rem'
  },
  br4: {
    borderRadius: '1rem'
  },
  br_100: {
    borderRadius: '100%'
  },
  br_pill: {
    borderRadius: '9999px'
  },
  br__bottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  br__top: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  br__right: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  br__left: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  b__dotted: {
    borderStyle: 'dotted'
  },
  b__dashed: {
    borderStyle: 'dashed'
  },
  b__solid: {
    borderStyle: 'solid'
  },
  b__none: {
    borderStyle: 'none'
  },
  bw0: {
    borderWidth: 0
  },
  bw1: {
    borderWidth: '.125rem'
  },
  bw2: {
    borderWidth: '.25rem'
  },
  bw3: {
    borderWidth: '.5rem'
  },
  bw4: {
    borderWidth: '1rem'
  },
  bw5: {
    borderWidth: '2rem'
  },
  bt_0: {
    borderTopWidth: 0
  },
  br_0: {
    borderRightWidth: 0
  },
  bb_0: {
    borderBottomWidth: 0
  },
  bl_0: {
    borderLeftWidth: 0
  },
  ba: {
    borderStyle: 'solid',
    borderWidth: '1px'
  },
  bt: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px'
  },
  br: {
    borderRightStyle: 'solid',
    borderRightWidth: '1px'
  },
  bb: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px'
  },
  bl: {
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px'
  },
  bn: {
    borderStyle: 'none',
    borderWidth: 0
  },
  shadow_1: {
    boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )'
  },
  shadow_2: {
    boxShadow: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )'
  },
  shadow_3: {
    boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )'
  },
  shadow_4: {
    boxShadow: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )'
  },
  shadow_5: {
    boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
  },
  html: {
    boxSizing: 'border-box'
  },
  body: {
    boxSizing: 'border-box'
  },
  div: {
    boxSizing: 'border-box'
  },
  article: {
    boxSizing: 'border-box'
  },
  section: {
    boxSizing: 'border-box'
  },
  main: {
    boxSizing: 'border-box'
  },
  footer: {
    boxSizing: 'border-box'
  },
  header: {
    boxSizing: 'border-box'
  },
  form: {
    boxSizing: 'border-box'
  },
  fieldset: {
    boxSizing: 'border-box'
  },
  legend: {
    boxSizing: 'border-box'
  },
  pre: {
    boxSizing: 'border-box',
    whiteSpace: 'pre'
  },
  code: {
    boxSizing: 'border-box',
    fontFamily: 'Consolas, monaco, monospace'
  },
  p: {
    boxSizing: 'border-box'
  },
  a: {
    boxSizing: 'border-box'
  },
  h1: {
    boxSizing: 'border-box',
    height: '1rem'
  },
  h2: {
    boxSizing: 'border-box',
    height: '2rem'
  },
  h3: {
    boxSizing: 'border-box',
    height: '4rem'
  },
  h4: {
    boxSizing: 'border-box',
    height: '8rem'
  },
  h5: {
    boxSizing: 'border-box',
    height: '16rem'
  },
  h6: {
    boxSizing: 'border-box'
  },
  ul: {
    boxSizing: 'border-box'
  },
  ol: {
    boxSizing: 'border-box'
  },
  li: {
    boxSizing: 'border-box'
  },
  dl: {
    boxSizing: 'border-box'
  },
  dt: {
    boxSizing: 'border-box',
    display: 'table'
  },
  dd: {
    boxSizing: 'border-box'
  },
  textarea: {
    boxSizing: 'border-box'
  },
  input_type__email: {
    boxSizing: 'border-box'
  },
  input_type__number: {
    boxSizing: 'border-box'
  },
  input_type__password: {
    boxSizing: 'border-box'
  },
  input_type__tel: {
    boxSizing: 'border-box'
  },
  input_type__text: {
    boxSizing: 'border-box'
  },
  input_type__url: {
    boxSizing: 'border-box'
  },
  border_box: {
    boxSizing: 'border-box'
  },
  cf_before: {
    content: '\' \'',
    display: 'table'
  },
  cf_after: {
    clear: 'both'
  },
  cf: {
    '*zoom': 1
  },
  cl: {
    clear: 'left'
  },
  cr: {
    clear: 'right'
  },
  cb: {
    clear: 'both'
  },
  cn: {
    clear: 'none'
  },
  top_0: {
    top: 0
  },
  right_0: {
    right: 0
  },
  bottom_0: {
    bottom: 0
  },
  left_0: {
    left: 0
  },
  top_1: {
    top: '1rem'
  },
  right_1: {
    right: '1rem'
  },
  bottom_1: {
    bottom: '1rem'
  },
  left_1: {
    left: '1rem'
  },
  top_2: {
    top: '2rem'
  },
  right_2: {
    right: '2rem'
  },
  bottom_2: {
    bottom: '2rem'
  },
  left_2: {
    left: '2rem'
  },
  top__1: {
    top: '-1rem'
  },
  right__1: {
    right: '-1rem'
  },
  bottom__1: {
    bottom: '-1rem'
  },
  left__1: {
    left: '-1rem'
  },
  top__2: {
    top: '-2rem'
  },
  top__3: {
    top: '-3rem'
  },
  top__4: {
    top: '-4rem'
  },
  top__5: {
    top: '-5rem'
  },
  top__6: {
    top: '-6rem'
  },
  right__2: {
    right: '-2rem'
  },
  bottom__2: {
    bottom: '-2rem'
  },
  left__2: {
    left: '-2rem'
  },
  absolute__fill: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  dn: {
    display: 'none'
  },
  di: {
    display: 'inline'
  },
  db: {
    display: 'block'
  },
  dib: {
    display: 'inline-block'
  },
  dit: {
    display: 'inline-table'
  },
  dtc: {
    display: 'table-cell'
  },
  dt_row: {
    display: 'table-row'
  },
  dt_row_group: {
    display: 'table-row-group'
  },
  dt_column: {
    display: 'table-column'
  },
  dt_column_group: {
    display: 'table-column-group'
  },
  dt__fixed: {
    tableLayout: 'fixed',
    width: '100%'
  },
  flex: {
    display: 'flex'
  },
  inline_flex: {
    display: 'inline-flex'
  },
  flex_auto: {
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
  },
  flex_none: {
    flex: 'none'
  },
  flex_column: {
    flexDirection: 'column'
  },
  flex_row: {
    flexDirection: 'row'
  },
  flex_wrap: {
    flexWrap: 'wrap'
  },
  items_start: {
    alignItems: 'flex-start'
  },
  items_end: {
    alignItems: 'flex-end'
  },
  items_center: {
    alignItems: 'center'
  },
  items_baseline: {
    alignItems: 'baseline'
  },
  items_stretch: {
    alignItems: 'stretch'
  },
  self_start: {
    alignSelf: 'flex-start'
  },
  self_end: {
    alignSelf: 'flex-end'
  },
  self_center: {
    alignSelf: 'center'
  },
  self_baseline: {
    alignSelf: 'baseline'
  },
  self_stretch: {
    alignSelf: 'stretch'
  },
  justify_start: {
    justifyContent: 'flex-start'
  },
  justify_end: {
    justifyContent: 'flex-end'
  },
  justify_center: {
    justifyContent: 'center'
  },
  justify_between: {
    justifyContent: 'space-between'
  },
  justify_around: {
    justifyContent: 'space-around'
  },
  content_start: {
    alignContent: 'flex-start'
  },
  content_end: {
    alignContent: 'flex-end'
  },
  content_center: {
    alignContent: 'center'
  },
  content_between: {
    alignContent: 'space-between'
  },
  content_around: {
    alignContent: 'space-around'
  },
  content_stretch: {
    alignContent: 'stretch'
  },
  order_0: {
    order: 0
  },
  order_1: {
    order: 1
  },
  order_2: {
    order: 2
  },
  order_3: {
    order: 3
  },
  order_4: {
    order: 4
  },
  order_5: {
    order: 5
  },
  order_6: {
    order: 6
  },
  order_7: {
    order: 7
  },
  order_8: {
    order: 8
  },
  order_last: {
    order: 99999
  },
  fl: {
    'float': 'left',
    _display: 'inline'
  },
  fr: {
    'float': 'right',
    _display: 'inline'
  },
  fn: {
    'float': 'none'
  },
  sans_serif: {
    fontFamily: '-apple-system, BlinkMacSystemFont,\'avenir next\', avenir, helvetica, \'helvetica neue\', ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif'
  },
  serif: {
    fontFamily: 'georgia, times, serif'
  },
  system_sans_serif: {
    fontFamily: 'sans-serif'
  },
  system_serif: {
    fontFamily: 'serif'
  },
  courier: {
    fontFamily: '\'Courier Next\', courier, monospace'
  },
  helvetica: {
    fontFamily: '\'helvetica neue\', helvetica, sans-serif'
  },
  avenir: {
    fontFamily: '\'avenir next\', avenir, sans-serif'
  },
  athelas: {
    fontFamily: 'athelas, georgia, serif'
  },
  georgia: {
    fontFamily: 'georgia, serif'
  },
  times: {
    fontFamily: 'times, serif'
  },
  bodoni: {
    fontFamily: '\'Bodoni MT\',  serif'
  },
  calisto: {
    fontFamily: '\'Calisto MT\',  serif'
  },
  garamond: {
    fontFamily: 'garamond, serif'
  },
  baskerville: {
    fontFamily: 'baskerville, serif'
  },
  i: {
    fontStyle: 'italic'
  },
  fs_normal: {
    fontStyle: 'normal'
  },
  normal: {
    fontWeight: 'normal'
  },
  b: {
    fontWeight: 'bold'
  },
  fw1: {
    fontWeight: 100
  },
  fw2: {
    fontWeight: 200
  },
  fw3: {
    fontWeight: 300
  },
  fw4: {
    fontWeight: 400
  },
  fw5: {
    fontWeight: 500
  },
  fw6: {
    fontWeight: 600
  },
  fw7: {
    fontWeight: 700
  },
  fw8: {
    fontWeight: 800
  },
  fw9: {
    fontWeight: 900
  },
  input_reset: {
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none'
  },
  button_reset___moz_focus_inner: {
    border: 0,
    padding: 0
  },
  input_reset___moz_focus_inner: {
    border: 0,
    padding: 0
  },
  h_25: {
    height: '25%'
  },
  h_50: {
    height: '50%'
  },
  h_75: {
    height: '75%'
  },
  h_100: {
    height: '100%'
  },
  min_h_100: {
    minHeight: '100%'
  },
  vh_25: {
    height: '25vh'
  },
  vh_50: {
    height: '50vh'
  },
  vh_75: {
    height: '75vh'
  },
  vh_100: {
    height: '100vh'
  },
  min_vh_100: {
    minHeight: '100vh'
  },
  h_auto: {
    height: 'auto'
  },
  h_inherit: {
    height: 'inherit'
  },
  dim: {
    opacity: 1,
    transition: 'opacity .15s ease-in'
  },
  dim_focus: {
    opacity: 0.5,
    transition: 'opacity .15s ease-in'
  },
  dim_active: {
    opacity: 0.8,
    transition: 'opacity .15s ease-out'
  },
  hide_child__child: {
    opacity: 0,
    transition: 'opacity .15s ease-in'
  },
  hide_child_hover__child: {
    opacity: 1,
    transition: 'opacity .15s ease-in'
  },
  hide_child_focus__child: {
    opacity: 1,
    transition: 'opacity .15s ease-in'
  },
  hide_child_active__child: {
    opacity: 1,
    transition: 'opacity .15s ease-in'
  },
  underline_hover_focus: {
    textDecoration: 'underline'
  },
  grow: {
    '-moz-osx-font-smoothing': 'grayscale',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    transition: 'transform 0.25s ease-out'
  },
  grow_focus: {
    transform: 'scale(1.05)'
  },
  grow_active: {
    transform: 'scale(.90)'
  },
  grow_large: {
    '-moz-osx-font-smoothing': 'grayscale',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    transition: 'transform .25s ease-in-out'
  },
  grow_large_focus: {
    transform: 'scale(1.2)'
  },
  grow_large_active: {
    transform: 'scale(.95)'
  },
  shadow_hover__after: {
    boxShadow: '0px 0px 8px 2px rgba( 0, 0, 0, .2 )',
    opacity: 0,
    transition: 'opacity .25s ease-in-out'
  },
  shadow_hover_hover__after: {
    opacity: 1
  },
  shadow_hover_focus__after: {
    opacity: 1
  },
  bg_animate: {
    transition: 'backgroundColor .15s ease-in-out'
  },
  bg_animate_focus: {
    transition: 'backgroundColor .15s ease-in-out'
  },
  img: {
    maxWidth: '100%'
  },
  tracked: {
    letterSpacing: '.1em'
  },
  tracked_tight: {
    letterSpacing: '-.05em'
  },
  tracked_mega: {
    letterSpacing: '.25em'
  },
  lh_solid: {
    lineHeight: 1
  },
  lh_title: {
    lineHeight: 1.25
  },
  lh_copy: {
    lineHeight: 1.5
  },
  link: {
    textDecoration: 'none',
    transition: 'color .15s ease-in'
  },
  link_link: {
    transition: 'color .15s ease-in'
  },
  link_visited: {
    transition: 'color .15s ease-in'
  },
  link_active: {
    transition: 'color .15s ease-in'
  },
  link_focus: {
    transition: 'color .15s ease-in'
  },
  list: {
    listStyleType: 'none'
  },
  mw_100: {
    maxWidth: '100%'
  },
  mw1: {
    maxWidth: '1rem'
  },
  mw2: {
    maxWidth: '2rem'
  },
  mw3: {
    maxWidth: '4rem'
  },
  mw4: {
    maxWidth: '8rem'
  },
  mw5: {
    maxWidth: '16rem'
  },
  mw6: {
    maxWidth: '32rem'
  },
  mw7: {
    maxWidth: '48rem'
  },
  mw8: {
    maxWidth: '64rem'
  },
  mw9: {
    maxWidth: '96rem'
  },
  mw_none: {
    maxWidth: 'none'
  },
  o_100: {
    opacity: 1
  },
  o_90: {
    opacity: 0.9
  },
  o_80: {
    opacity: 0.8
  },
  o_70: {
    opacity: 0.7
  },
  o_60: {
    opacity: 0.6
  },
  o_50: {
    opacity: 0.5
  },
  o_40: {
    opacity: 0.4
  },
  o_30: {
    opacity: 0.3
  },
  o_20: {
    opacity: 0.2
  },
  o_10: {
    opacity: 0.1
  },
  o_05: {
    opacity: 0.05
  },
  o_025: {
    opacity: 0.025
  },
  o_0: {
    opacity: 0
  },
  outline: {
    outline: '1px solid'
  },
  outline_transparent: {
    outline: '1px solid transparent'
  },
  outline_0: {
    outline: 0
  },
  overflow_visible: {
    overflow: 'visible'
  },
  overflow_hidden: {
    overflow: 'hidden'
  },
  overflow_scroll: {
    overflow: 'scroll'
  },
  overflow_auto: {
    overflow: 'auto'
  },
  overflow_x_visible: {
    overflowX: 'visible'
  },
  overflow_x_hidden: {
    overflowX: 'hidden'
  },
  overflow_x_scroll: {
    overflowX: 'scroll'
  },
  overflow_x_auto: {
    overflowX: 'auto'
  },
  overflow_y_visible: {
    overflowY: 'visible'
  },
  overflow_y_hidden: {
    overflowY: 'hidden'
  },
  overflow_y_scroll: {
    overflowY: 'scroll'
  },
  overflow_y_auto: {
    overflowY: 'auto'
  },
  'static': {
    position: 'static'
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  },
  fixed: {
    position: 'fixed'
  },
  rotate_45: {
    transform: 'rotate(45deg)'
  },
  rotate_90: {
    transform: 'rotate(90deg)'
  },
  rotate_135: {
    transform: 'rotate(135deg)'
  },
  rotate_180: {
    transform: 'rotate(180deg)'
  },
  rotate_225: {
    transform: 'rotate(225deg)'
  },
  rotate_270: {
    transform: 'rotate(270deg)'
  },
  rotate_315: {
    transform: 'rotate(315deg)'
  },
  black_90: {
    color: 'var(--black-90)'
  },
  black_80: {
    color: 'var(--black-80)'
  },
  black_70: {
    color: 'var(--black-70)'
  },
  black_60: {
    color: 'var(--black-60)'
  },
  black_50: {
    color: 'var(--black-50)'
  },
  black_40: {
    color: 'var(--black-40)'
  },
  black_30: {
    color: 'var(--black-30)'
  },
  black_20: {
    color: 'var(--black-20)'
  },
  black_10: {
    color: 'var(--black-10)'
  },
  black_05: {
    color: 'var(--black-05)'
  },
  white_90: {
    color: 'var(--white-90)'
  },
  white_80: {
    color: 'var(--white-80)'
  },
  white_70: {
    color: 'var(--white-70)'
  },
  white_60: {
    color: 'var(--white-60)'
  },
  white_50: {
    color: 'var(--white-50)'
  },
  white_40: {
    color: 'var(--white-40)'
  },
  white_30: {
    color: 'var(--white-30)'
  },
  white_20: {
    color: 'var(--white-20)'
  },
  white_10: {
    color: 'var(--white-10)'
  },
  black: {
    color: 'var(--black)'
  },
  near_black: {
    color: 'var(--near-black)'
  },
  dark_gray: {
    color: 'var(--dark-gray)'
  },
  mid_gray: {
    color: 'var(--mid-gray)'
  },
  gray: {
    color: 'var(--gray)'
  },
  silver: {
    color: 'var(--silver)'
  },
  light_silver: {
    color: 'var(--light-silver)'
  },
  moon_gray: {
    color: 'var(--moon-gray)'
  },
  light_gray: {
    color: 'var(--light-gray)'
  },
  near_white: {
    color: 'var(--near-white)'
  },
  white: {
    color: 'var(--white)'
  },
  dark_red: {
    color: 'var(--dark-red)'
  },
  red: {
    color: 'var(--red)'
  },
  light_red: {
    color: 'var(--light-red)'
  },
  orange: {
    color: 'var(--orange)'
  },
  gold: {
    color: 'var(--gold)'
  },
  yellow: {
    color: 'var(--yellow)'
  },
  light_yellow: {
    color: 'var(--light-yellow)'
  },
  purple: {
    color: 'var(--purple)'
  },
  light_purple: {
    color: 'var(--light-purple)'
  },
  dark_pink: {
    color: 'var(--dark-pink)'
  },
  hot_pink: {
    color: 'var(--hot-pink)'
  },
  pink: {
    color: 'var(--pink)'
  },
  light_pink: {
    color: 'var(--light-pink)'
  },
  dark_green: {
    color: 'var(--dark-green)'
  },
  green: {
    color: 'var(--green)'
  },
  light_green: {
    color: 'var(--light-green)'
  },
  navy: {
    color: 'var(--navy)'
  },
  dark_blue: {
    color: 'var(--dark-blue)'
  },
  blue: {
    color: 'var(--blue)'
  },
  light_blue: {
    color: 'var(--light-blue)'
  },
  lightest_blue: {
    color: 'var(--lightest-blue)'
  },
  washed_blue: {
    color: 'var(--washed-blue)'
  },
  washed_green: {
    color: 'var(--washed-green)'
  },
  washed_yellow: {
    color: 'var(--washed-yellow)'
  },
  washed_red: {
    color: 'var(--washed-red)'
  },
  bg_black_90: {
    backgroundColor: 'var(--black-90)'
  },
  bg_black_80: {
    backgroundColor: 'var(--black-80)'
  },
  bg_black_70: {
    backgroundColor: 'var(--black-70)'
  },
  bg_black_60: {
    backgroundColor: 'var(--black-60)'
  },
  bg_black_50: {
    backgroundColor: 'var(--black-50)'
  },
  bg_black_40: {
    backgroundColor: 'var(--black-40)'
  },
  bg_black_30: {
    backgroundColor: 'var(--black-30)'
  },
  bg_black_20: {
    backgroundColor: 'var(--black-20)'
  },
  bg_black_10: {
    backgroundColor: 'var(--black-10)'
  },
  bg_black_05: {
    backgroundColor: 'var(--black-05)'
  },
  bg_white_90: {
    backgroundColor: 'var(--white-90)'
  },
  bg_white_80: {
    backgroundColor: 'var(--white-80)'
  },
  bg_white_70: {
    backgroundColor: 'var(--white-70)'
  },
  bg_white_60: {
    backgroundColor: 'var(--white-60)'
  },
  bg_white_50: {
    backgroundColor: 'var(--white-50)'
  },
  bg_white_40: {
    backgroundColor: 'var(--white-40)'
  },
  bg_white_30: {
    backgroundColor: 'var(--white-30)'
  },
  bg_white_20: {
    backgroundColor: 'var(--white-20)'
  },
  bg_white_10: {
    backgroundColor: 'var(--white-10)'
  },
  bg_black: {
    backgroundColor: 'var(--black)'
  },
  bg_near_black: {
    backgroundColor: 'var(--near-black)'
  },
  bg_dark_gray: {
    backgroundColor: 'var(--dark-gray)'
  },
  bg_mid_gray: {
    backgroundColor: 'var(--mid-gray)'
  },
  bg_gray: {
    backgroundColor: 'var(--gray)'
  },
  bg_silver: {
    backgroundColor: 'var(--silver)'
  },
  bg_light_silver: {
    backgroundColor: 'var(--light-silver)'
  },
  bg_moon_gray: {
    backgroundColor: 'var(--moon-gray)'
  },
  bg_light_gray: {
    backgroundColor: 'var(--light-gray)'
  },
  bg_near_white: {
    backgroundColor: 'var(--near-white)'
  },
  bg_white: {
    backgroundColor: 'var(--white)'
  },
  bg_transparent: {
    backgroundColor: 'var(--transparent)'
  },
  bg_dark_red: {
    backgroundColor: 'var(--dark-red)'
  },
  bg_red: {
    backgroundColor: 'var(--red)'
  },
  bg_light_red: {
    backgroundColor: 'var(--light-red)'
  },
  bg_orange: {
    backgroundColor: 'var(--orange)'
  },
  bg_gold: {
    backgroundColor: 'var(--gold)'
  },
  bg_yellow: {
    backgroundColor: 'var(--yellow)'
  },
  bg_light_yellow: {
    backgroundColor: 'var(--light-yellow)'
  },
  bg_purple: {
    backgroundColor: 'var(--purple)'
  },
  bg_light_purple: {
    backgroundColor: 'var(--light-purple)'
  },
  bg_dark_pink: {
    backgroundColor: 'var(--dark-pink)'
  },
  bg_hot_pink: {
    backgroundColor: 'var(--hot-pink)'
  },
  bg_pink: {
    backgroundColor: 'var(--pink)'
  },
  bg_light_pink: {
    backgroundColor: 'var(--light-pink)'
  },
  bg_dark_green: {
    backgroundColor: 'var(--dark-green)'
  },
  bg_green: {
    backgroundColor: 'var(--green)'
  },
  bg_light_green: {
    backgroundColor: 'var(--light-green)'
  },
  bg_navy: {
    backgroundColor: 'var(--navy)'
  },
  bg_dark_blue: {
    backgroundColor: 'var(--dark-blue)'
  },
  bg_blue: {
    backgroundColor: 'var(--blue)'
  },
  bg_light_blue: {
    backgroundColor: 'var(--light-blue)'
  },
  bg_lightest_blue: {
    backgroundColor: 'var(--lightest-blue)'
  },
  bg_washed_blue: {
    backgroundColor: 'var(--washed-blue)'
  },
  bg_washed_green: {
    backgroundColor: 'var(--washed-green)'
  },
  bg_washed_yellow: {
    backgroundColor: 'var(--washed-yellow)'
  },
  bg_washed_red: {
    backgroundColor: 'var(--washed-red)'
  },
  hover_black_focus: {
    color: 'var(--black)'
  },
  hover_near_black_focus: {
    color: 'var(--near-black)'
  },
  hover_dark_gray_focus: {
    color: 'var(--dark-gray)'
  },
  hover_mid_gray_focus: {
    color: 'var(--mid-gray)'
  },
  hover_gray_focus: {
    color: 'var(--gray)'
  },
  hover_silver_focus: {
    color: 'var(--silver)'
  },
  hover_light_silver_focus: {
    color: 'var(--light-silver)'
  },
  hover_moon_gray_focus: {
    color: 'var(--moon-gray)'
  },
  hover_light_gray_focus: {
    color: 'var(--light-gray)'
  },
  hover_near_white_focus: {
    color: 'var(--near-white)'
  },
  hover_white_focus: {
    color: 'var(--white)'
  },
  hover_bg_black_focus: {
    backgroundColor: 'var(--black)'
  },
  hover_bg_near_black_focus: {
    backgroundColor: 'var(--near-black)'
  },
  hover_bg_dark_gray_focus: {
    backgroundColor: 'var(--mid-gray)'
  },
  hover_bg_gray_focus: {
    backgroundColor: 'var(--gray)'
  },
  hover_bg_silver_focus: {
    backgroundColor: 'var(--silver)'
  },
  hover_bg_light_silver_focus: {
    backgroundColor: 'var(--light-silver)'
  },
  hover_bg_moon_gray_focus: {
    backgroundColor: 'var(--moon-gray)'
  },
  hover_bg_light_gray_focus: {
    backgroundColor: 'var(--light-gray)'
  },
  hover_bg_near_white_focus: {
    backgroundColor: 'var(--near-white)'
  },
  hover_bg_white_focus: {
    backgroundColor: 'var(--white)'
  },
  hover_bg_transparent_focus: {
    backgroundColor: 'var(--transparent)'
  },
  hover_dark_red_focus: {
    color: 'var(--dark-red)'
  },
  hover_red_focus: {
    color: 'var(--red)'
  },
  hover_light_red_focus: {
    color: 'var(--light-red)'
  },
  hover_orange_focus: {
    color: 'var(--orange)'
  },
  hover_gold_focus: {
    color: 'var(--gold)'
  },
  hover_yellow_focus: {
    color: 'var(--yellow)'
  },
  hover_light_yellow_focus: {
    color: 'var(--light-yellow)'
  },
  hover_purple_focus: {
    color: 'var(--purple)'
  },
  hover_light_purple_focus: {
    color: 'var(--light-purple)'
  },
  hover_dark_pink_focus: {
    color: 'var(--dark-pink)'
  },
  hover_hot_pink_focus: {
    color: 'var(--hot-pink)'
  },
  hover_pink_focus: {
    color: 'var(--pink)'
  },
  hover_light_pink_focus: {
    color: 'var(--light-pink)'
  },
  hover_dark_green_focus: {
    color: 'var(--dark-green)'
  },
  hover_green_focus: {
    color: 'var(--green)'
  },
  hover_light_green_focus: {
    color: 'var(--light-green)'
  },
  hover_navy_focus: {
    color: 'var(--navy)'
  },
  hover_dark_blue_focus: {
    color: 'var(--dark-blue)'
  },
  hover_blue_focus: {
    color: 'var(--blue)'
  },
  hover_light_blue_focus: {
    color: 'var(--light-blue)'
  },
  hover_lightest_blue_focus: {
    color: 'var(--lightest-blue)'
  },
  hover_washed_blue_focus: {
    color: 'var(--washed-blue)'
  },
  hover_washed_green_focus: {
    color: 'var(--washed-green)'
  },
  hover_washed_yellow_focus: {
    color: 'var(--washed-yellow)'
  },
  hover_washed_red_focus: {
    color: 'var(--washed-red)'
  },
  hover_bg_dark_red_focus: {
    backgroundColor: 'var(--dark-red)'
  },
  hover_bg_red_focus: {
    backgroundColor: 'var(--red)'
  },
  hover_bg_light_red_focus: {
    backgroundColor: 'var(--light-red)'
  },
  hover_bg_orange_focus: {
    backgroundColor: 'var(--orange)'
  },
  hover_bg_gold_focus: {
    backgroundColor: 'var(--gold)'
  },
  hover_bg_yellow_focus: {
    backgroundColor: 'var(--yellow)'
  },
  hover_bg_light_yellow_focus: {
    backgroundColor: 'var(--light-yellow)'
  },
  hover_bg_purple_focus: {
    backgroundColor: 'var(--purple)'
  },
  hover_bg_light_purple_focus: {
    backgroundColor: 'var(--light-purple)'
  },
  hover_bg_dark_pink_focus: {
    backgroundColor: 'var(--dark-pink)'
  },
  hover_bg_hot_pink_focus: {
    backgroundColor: 'var(--hot-pink)'
  },
  hover_bg_pink_focus: {
    backgroundColor: 'var(--pink)'
  },
  hover_bg_light_pink_focus: {
    backgroundColor: 'var(--light-pink)'
  },
  hover_bg_dark_green_focus: {
    backgroundColor: 'var(--dark-green)'
  },
  hover_bg_green_focus: {
    backgroundColor: 'var(--green)'
  },
  hover_bg_light_green_focus: {
    backgroundColor: 'var(--light-green)'
  },
  hover_bg_navy_focus: {
    backgroundColor: 'var(--navy)'
  },
  hover_bg_dark_blue_focus: {
    backgroundColor: 'var(--dark-blue)'
  },
  hover_bg_blue_focus: {
    backgroundColor: 'var(--blue)'
  },
  hover_bg_light_blue_focus: {
    backgroundColor: 'var(--light-blue)'
  },
  hover_bg_lightest_blue_focus: {
    backgroundColor: 'var(--lightest-blue)'
  },
  hover_bg_washed_blue_focus: {
    backgroundColor: 'var(--washed-blue)'
  },
  hover_bg_washed_green_focus: {
    backgroundColor: 'var(--washed-green)'
  },
  hover_bg_washed_yellow_focus: {
    backgroundColor: 'var(--washed-yellow)'
  },
  hover_bg_washed_red_focus: {
    backgroundColor: 'var(--washed-red)'
  },
  pa0: {
    padding: 'var(--spacing-none)'
  },
  pa1: {
    padding: 'var(--spacing-extra-small)'
  },
  pa2: {
    padding: 'var(--spacing-small)'
  },
  pa3: {
    padding: 'var(--spacing-medium)'
  },
  pa4: {
    padding: 'var(--spacing-large)'
  },
  pa5: {
    padding: 'var(--spacing-extra-large)'
  },
  pa6: {
    padding: 'var(--spacing-extra-extra-large)'
  },
  pa7: {
    padding: 'var(--spacing-extra-extra-extra-large)'
  },
  pl0: {
    paddingLeft: 'var(--spacing-none)'
  },
  pl1: {
    paddingLeft: 'var(--spacing-extra-small)'
  },
  pl2: {
    paddingLeft: 'var(--spacing-small)'
  },
  pl3: {
    paddingLeft: 'var(--spacing-medium)'
  },
  pl4: {
    paddingLeft: 'var(--spacing-large)'
  },
  pl5: {
    paddingLeft: 'var(--spacing-extra-large)'
  },
  pl6: {
    paddingLeft: 'var(--spacing-extra-extra-large)'
  },
  pl7: {
    paddingLeft: 'var(--spacing-extra-extra-extra-large)'
  },
  pr0: {
    paddingRight: 'var(--spacing-none)'
  },
  pr1: {
    paddingRight: 'var(--spacing-extra-small)'
  },
  pr2: {
    paddingRight: 'var(--spacing-small)'
  },
  pr3: {
    paddingRight: 'var(--spacing-medium)'
  },
  pr4: {
    paddingRight: 'var(--spacing-large)'
  },
  pr5: {
    paddingRight: 'var(--spacing-extra-large)'
  },
  pr6: {
    paddingRight: 'var(--spacing-extra-extra-large)'
  },
  pr7: {
    paddingRight: 'var(--spacing-extra-extra-extra-large)'
  },
  pb0: {
    paddingBottom: 'var(--spacing-none)'
  },
  pb1: {
    paddingBottom: 'var(--spacing-extra-small)'
  },
  pb2: {
    paddingBottom: 'var(--spacing-small)'
  },
  pb3: {
    paddingBottom: 'var(--spacing-medium)'
  },
  pb4: {
    paddingBottom: 'var(--spacing-large)'
  },
  pb5: {
    paddingBottom: 'var(--spacing-extra-large)'
  },
  pb6: {
    paddingBottom: 'var(--spacing-extra-extra-large)'
  },
  pb7: {
    paddingBottom: 'var(--spacing-extra-extra-extra-large)'
  },
  pt0: {
    paddingTop: 'var(--spacing-none)'
  },
  pt1: {
    paddingTop: 'var(--spacing-extra-small)'
  },
  pt2: {
    paddingTop: 'var(--spacing-small)'
  },
  pt3: {
    paddingTop: 'var(--spacing-medium)'
  },
  pt4: {
    paddingTop: 'var(--spacing-large)'
  },
  pt5: {
    paddingTop: 'var(--spacing-extra-large)'
  },
  pt6: {
    paddingTop: 'var(--spacing-extra-extra-large)'
  },
  pt7: {
    paddingTop: 'var(--spacing-extra-extra-extra-large)'
  },
  pv0: {
    paddingTop: 'var(--spacing-none)',
    paddingBottom: 'var(--spacing-none)'
  },
  pv1: {
    paddingTop: 'var(--spacing-extra-small)',
    paddingBottom: 'var(--spacing-extra-small)'
  },
  pv2: {
    paddingTop: 'var(--spacing-small)',
    paddingBottom: 'var(--spacing-small)'
  },
  pv3: {
    paddingTop: 'var(--spacing-medium)',
    paddingBottom: 'var(--spacing-medium)'
  },
  pv4: {
    paddingTop: 'var(--spacing-large)',
    paddingBottom: 'var(--spacing-large)'
  },
  pv5: {
    paddingTop: 'var(--spacing-extra-large)',
    paddingBottom: 'var(--spacing-extra-large)'
  },
  pv6: {
    paddingTop: 'var(--spacing-extra-extra-large)',
    paddingBottom: 'var(--spacing-extra-extra-large)'
  },
  pv7: {
    paddingTop: 'var(--spacing-extra-extra-extra-large)',
    paddingBottom: 'var(--spacing-extra-extra-extra-large)'
  },
  ph0: {
    paddingLeft: 'var(--spacing-none)',
    paddingRight: 'var(--spacing-none)'
  },
  ph1: {
    paddingLeft: 'var(--spacing-extra-small)',
    paddingRight: 'var(--spacing-extra-small)'
  },
  ph2: {
    paddingLeft: 'var(--spacing-small)',
    paddingRight: 'var(--spacing-small)'
  },
  ph3: {
    paddingLeft: 'var(--spacing-medium)',
    paddingRight: 'var(--spacing-medium)'
  },
  ph4: {
    paddingLeft: 'var(--spacing-large)',
    paddingRight: 'var(--spacing-large)'
  },
  ph5: {
    paddingLeft: 'var(--spacing-extra-large)',
    paddingRight: 'var(--spacing-extra-large)'
  },
  ph6: {
    paddingLeft: 'var(--spacing-extra-extra-large)',
    paddingRight: 'var(--spacing-extra-extra-large)'
  },
  ph7: {
    paddingLeft: 'var(--spacing-extra-extra-extra-large)',
    paddingRight: 'var(--spacing-extra-extra-extra-large)'
  },
  ma0: {
    margin: 'var(--spacing-none)'
  },
  ma1: {
    margin: 'var(--spacing-extra-small)'
  },
  ma2: {
    margin: 'var(--spacing-small)'
  },
  ma3: {
    margin: 'var(--spacing-medium)'
  },
  ma4: {
    margin: 'var(--spacing-large)'
  },
  ma5: {
    margin: 'var(--spacing-extra-large)'
  },
  ma6: {
    margin: 'var(--spacing-extra-extra-large)'
  },
  ma7: {
    margin: 'var(--spacing-extra-extra-extra-large)'
  },
  ml0: {
    marginLeft: 'var(--spacing-none)'
  },
  ml1: {
    marginLeft: 'var(--spacing-extra-small)'
  },
  ml2: {
    marginLeft: 'var(--spacing-small)'
  },
  ml3: {
    marginLeft: 'var(--spacing-medium)'
  },
  ml4: {
    marginLeft: 'var(--spacing-large)'
  },
  ml5: {
    marginLeft: 'var(--spacing-extra-large)'
  },
  ml6: {
    marginLeft: 'var(--spacing-extra-extra-large)'
  },
  ml7: {
    marginLeft: 'var(--spacing-extra-extra-extra-large)'
  },
  mr0: {
    marginRight: 'var(--spacing-none)'
  },
  mr1: {
    marginRight: 'var(--spacing-extra-small)'
  },
  mr2: {
    marginRight: 'var(--spacing-small)'
  },
  mr3: {
    marginRight: 'var(--spacing-medium)'
  },
  mr4: {
    marginRight: 'var(--spacing-large)'
  },
  mr5: {
    marginRight: 'var(--spacing-extra-large)'
  },
  mr6: {
    marginRight: 'var(--spacing-extra-extra-large)'
  },
  mr7: {
    marginRight: 'var(--spacing-extra-extra-extra-large)'
  },
  mb0: {
    marginBottom: 'var(--spacing-none)'
  },
  mb1: {
    marginBottom: 'var(--spacing-extra-small)'
  },
  mb2: {
    marginBottom: 'var(--spacing-small)'
  },
  mb3: {
    marginBottom: 'var(--spacing-medium)'
  },
  mb4: {
    marginBottom: 'var(--spacing-large)'
  },
  mb5: {
    marginBottom: 'var(--spacing-extra-large)'
  },
  mb6: {
    marginBottom: 'var(--spacing-extra-extra-large)'
  },
  mb7: {
    marginBottom: 'var(--spacing-extra-extra-extra-large)'
  },
  mt0: {
    marginTop: 'var(--spacing-none)'
  },
  mt1: {
    marginTop: 'var(--spacing-extra-small)'
  },
  mt2: {
    marginTop: 'var(--spacing-small)'
  },
  mt3: {
    marginTop: 'var(--spacing-medium)'
  },
  mt4: {
    marginTop: 'var(--spacing-large)'
  },
  mt5: {
    marginTop: 'var(--spacing-extra-large)'
  },
  mt6: {
    marginTop: 'var(--spacing-extra-extra-large)'
  },
  mt7: {
    marginTop: 'var(--spacing-extra-extra-extra-large)'
  },
  mv0: {
    marginTop: 'var(--spacing-none)',
    marginBottom: 'var(--spacing-none)'
  },
  mv1: {
    marginTop: 'var(--spacing-extra-small)',
    marginBottom: 'var(--spacing-extra-small)'
  },
  mv2: {
    marginTop: 'var(--spacing-small)',
    marginBottom: 'var(--spacing-small)'
  },
  mv3: {
    marginTop: 'var(--spacing-medium)',
    marginBottom: 'var(--spacing-medium)'
  },
  mv4: {
    marginTop: 'var(--spacing-large)',
    marginBottom: 'var(--spacing-large)'
  },
  mv5: {
    marginTop: 'var(--spacing-extra-large)',
    marginBottom: 'var(--spacing-extra-large)'
  },
  mv6: {
    marginTop: 'var(--spacing-extra-extra-large)',
    marginBottom: 'var(--spacing-extra-extra-large)'
  },
  mv7: {
    marginTop: 'var(--spacing-extra-extra-extra-large)',
    marginBottom: 'var(--spacing-extra-extra-extra-large)'
  },
  mh0: {
    marginLeft: 'var(--spacing-none)',
    marginRight: 'var(--spacing-none)'
  },
  mh1: {
    marginLeft: 'var(--spacing-extra-small)',
    marginRight: 'var(--spacing-extra-small)'
  },
  mh2: {
    marginLeft: 'var(--spacing-small)',
    marginRight: 'var(--spacing-small)'
  },
  mh3: {
    marginLeft: 'var(--spacing-medium)',
    marginRight: 'var(--spacing-medium)'
  },
  mh4: {
    marginLeft: 'var(--spacing-large)',
    marginRight: 'var(--spacing-large)'
  },
  mh5: {
    marginLeft: 'var(--spacing-extra-large)',
    marginRight: 'var(--spacing-extra-large)'
  },
  mh6: {
    marginLeft: 'var(--spacing-extra-extra-large)',
    marginRight: 'var(--spacing-extra-extra-large)'
  },
  mh7: {
    marginLeft: 'var(--spacing-extra-extra-extra-large)',
    marginRight: 'var(--spacing-extra-extra-extra-large)'
  },
  collapse: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  striped__moon_gray_nth_child_odd: {
    backgroundColor: 'var(--moon-gray)'
  },
  striped__light_gray_nth_child_odd: {
    backgroundColor: 'var(--light-gray)'
  },
  striped__near_white_nth_child_odd: {
    backgroundColor: 'var(--near-white)'
  },
  tl: {
    textAlign: 'left'
  },
  tr: {
    textAlign: 'right'
  },
  tc: {
    textAlign: 'center'
  },
  strike: {
    textDecoration: 'line-through'
  },
  underline: {
    textDecoration: 'underline'
  },
  no_underline: {
    textDecoration: 'none'
  },
  ttc: {
    textTransform: 'capitalize'
  },
  ttl: {
    textTransform: 'lowercase'
  },
  ttu: {
    textTransform: 'uppercase'
  },
  ttn: {
    textTransform: 'none'
  },
  f_6: {
    fontSize: '6rem'
  },
  f_headline: {
    fontSize: '6rem'
  },
  f_5: {
    fontSize: '5rem'
  },
  f_subheadline: {
    fontSize: '5rem'
  },
  f1: {
    fontSize: '3rem'
  },
  f2: {
    fontSize: '2.25rem'
  },
  f3: {
    fontSize: '1.5rem'
  },
  f4: {
    fontSize: '1.25rem'
  },
  f5: {
    fontSize: '1rem'
  },
  f6: {
    fontSize: '.875rem'
  },
  measure: {
    maxWidth: '30em'
  },
  measure_wide: {
    maxWidth: '34em'
  },
  measure_narrow: {
    maxWidth: '20em'
  },
  indent: {
    textIndent: '1em',
    marginTop: 0,
    marginBottom: 0
  },
  small_caps: {
    fontVariant: 'small-caps'
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  overflow_container: {
    overflowY: 'scroll'
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  v_base: {
    verticalAlign: 'baseline'
  },
  v_mid: {
    verticalAlign: 'middle'
  },
  v_top: {
    verticalAlign: 'top'
  },
  v_btm: {
    verticalAlign: 'bottom'
  },
  clip: {
    position: 'fixed',
    _position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)'
  },
  ws_normal: {
    whiteSpace: 'normal'
  },
  nowrap: {
    whiteSpace: 'nowrap'
  },
  w1: {
    width: '1rem'
  },
  w2: {
    width: '2rem'
  },
  w3: {
    width: '4rem'
  },
  w4: {
    width: '8rem'
  },
  w5: {
    width: '16rem'
  },
  w_10: {
    width: '10%'
  },
  w_20: {
    width: '20%'
  },
  w_25: {
    width: '25%'
  },
  w_30: {
    width: '30%'
  },
  w_33: {
    width: '33%'
  },
  w_34: {
    width: '34%'
  },
  w_40: {
    width: '40%'
  },
  w_50: {
    width: '50%'
  },
  w_60: {
    width: '60%'
  },
  w_70: {
    width: '70%'
  },
  w_75: {
    width: '75%'
  },
  w_80: {
    width: '80%'
  },
  w_90: {
    width: '90%'
  },
  w_100: {
    width: '100%'
  },
  w_third: {
    width: 'calc(100% / 3)'
  },
  w_two_thirds: {
    width: 'calc(100% / 1.5)'
  },
  w_auto: {
    width: 'auto'
  },
  z_0: {
    zIndex: 0
  },
  z_1: {
    zIndex: 1
  },
  z_2: {
    zIndex: 2
  },
  z_3: {
    zIndex: 3
  },
  z_4: {
    zIndex: 4
  },
  z_5: {
    zIndex: 5
  },
  z_999: {
    zIndex: 999
  },
  z_9999: {
    zIndex: 9999
  },
  z_max: {
    zIndex: 2147483647
  },
  z_inherit: {
    zIndex: 'inherit'
  },
  z_initial: {
    zIndex: 'initial'
  },
  z_unset: {
    zIndex: 'unset'
  },
  nested_list_reset: {
    paddingLeft: 0,
    marginLeft: 0,
    listStyleType: 'none'
  },
  __expression__: {
    '@media screen and (minWidth: 60em)': '(--breakpoint-large)'
  },
  aspect_ratio_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '0',
      position: 'relative'
    }
  },
  aspect_ratio__16x9_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '56.25%'
    }
  },
  aspect_ratio__9x16_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '177.77%'
    }
  },
  aspect_ratio__4x3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '75%'
    }
  },
  aspect_ratio__3x4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '133.33%'
    }
  },
  aspect_ratio__6x4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '66.6%'
    }
  },
  aspect_ratio__4x6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '150%'
    }
  },
  aspect_ratio__8x5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '62.5%'
    }
  },
  aspect_ratio__5x8_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '160%'
    }
  },
  aspect_ratio__7x5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '71.42%'
    }
  },
  aspect_ratio__5x7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '140%'
    }
  },
  aspect_ratio__1x1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: '100%'
    }
  },
  // aspect_ratio__object_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     position: 'absolute',
  //     top: '0',
  //     right: '0',
  //     bottom: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //     zIndex: '100'
  //   }
  // },
  bg_center_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }
  },
  bg_top_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center'
    }
  },
  bg_right_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center right'
    }
  },
  bg_bottom_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center'
    }
  },
  bg_left_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center left'
    }
  },
  cover_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundSize: 'cover'
    }
  },
  contain_ns: {
    '@media screen and (minWidth: 30em)': {
      backgroundSize: 'contain'
    }
  },
  br0_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '0'
    }
  },
  br1_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '.125rem'
    }
  },
  br2_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '.25rem'
    }
  },
  br3_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '.5rem'
    }
  },
  br4_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '1rem'
    }
  },
  br_100_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '100%'
    }
  },
  br_pill_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRadius: '9999px'
    }
  },
  br__bottom_ns: {
    '@media screen and (minWidth: 30em)': {
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }
  },
  br__top_ns: {
    '@media screen and (minWidth: 30em)': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  br__right_ns: {
    '@media screen and (minWidth: 30em)': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0'
    }
  },
  br__left_ns: {
    '@media screen and (minWidth: 30em)': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  b__dotted_ns: {
    '@media screen and (minWidth: 30em)': {
      borderStyle: 'dotted'
    }
  },
  b__dashed_ns: {
    '@media screen and (minWidth: 30em)': {
      borderStyle: 'dashed'
    }
  },
  b__solid_ns: {
    '@media screen and (minWidth: 30em)': {
      borderStyle: 'solid'
    }
  },
  b__none_ns: {
    '@media screen and (minWidth: 30em)': {
      borderStyle: 'none'
    }
  },
  bw0_ns: {
    '@media screen and (minWidth: 30em)': {
      borderWidth: '0'
    }
  },
  bw1_ns: {
    '@media screen and (minWidth: 30em)': {
      borderWidth: '.125rem'
    }
  },
  bw2_ns: {
    '@media screen and (minWidth: 30em)': {
      borderWidth: '.25rem'
    }
  },
  bw3_ns: {
    '@media screen and (minWidth: 30em)': {
      borderWidth: '.5rem'
    }
  },
  bw4_ns: {
    '@media screen and (minWidth: 30em)': {
      borderWidth: '1rem'
    }
  },
  bw5_ns: {
    '@media screen and (minWidth: 30em)': {
      borderWidth: '2rem'
    }
  },
  bt_0_ns: {
    '@media screen and (minWidth: 30em)': {
      borderTopWidth: '0'
    }
  },
  br_0_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRightWidth: '0'
    }
  },
  bb_0_ns: {
    '@media screen and (minWidth: 30em)': {
      borderBottomWidth: '0'
    }
  },
  bl_0_ns: {
    '@media screen and (minWidth: 30em)': {
      borderLeftWidth: '0'
    }
  },
  ba_ns: {
    '@media screen and (minWidth: 30em)': {
      borderStyle: 'solid',
      borderWidth: '1px'
    }
  },
  bt_ns: {
    '@media screen and (minWidth: 30em)': {
      borderTopStyle: 'solid',
      borderTopWidth: '1px'
    }
  },
  br_ns: {
    '@media screen and (minWidth: 30em)': {
      borderRightStyle: 'solid',
      borderRightWidth: '1px'
    }
  },
  bb_ns: {
    '@media screen and (minWidth: 30em)': {
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px'
    }
  },
  bl_ns: {
    '@media screen and (minWidth: 30em)': {
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px'
    }
  },
  bn_ns: {
    '@media screen and (minWidth: 30em)': {
      borderStyle: 'none',
      borderWidth: '0'
    }
  },
  shadow_1_ns: {
    '@media screen and (minWidth: 30em)': {
      boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_2_ns: {
    '@media screen and (minWidth: 30em)': {
      boxShadow: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_3_ns: {
    '@media screen and (minWidth: 30em)': {
      boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_4_ns: {
    '@media screen and (minWidth: 30em)': {
      boxShadow: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_5_ns: {
    '@media screen and (minWidth: 30em)': {
      boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
    }
  },
  cl_ns: {
    '@media screen and (minWidth: 30em)': {
      clear: 'left'
    }
  },
  cr_ns: {
    '@media screen and (minWidth: 30em)': {
      clear: 'right'
    }
  },
  cb_ns: {
    '@media screen and (minWidth: 30em)': {
      clear: 'both'
    }
  },
  cn_ns: {
    '@media screen and (minWidth: 30em)': {
      clear: 'none'
    }
  },
  top_0_ns: {
    '@media screen and (minWidth: 30em)': {
      top: '0'
    }
  },
  left_0_ns: {
    '@media screen and (minWidth: 30em)': {
      left: '0'
    }
  },
  right_0_ns: {
    '@media screen and (minWidth: 30em)': {
      right: '0'
    }
  },
  bottom_0_ns: {
    '@media screen and (minWidth: 30em)': {
      bottom: '0'
    }
  },
  top_1_ns: {
    '@media screen and (minWidth: 30em)': {
      top: '1rem'
    }
  },
  left_1_ns: {
    '@media screen and (minWidth: 30em)': {
      left: '1rem'
    }
  },
  right_1_ns: {
    '@media screen and (minWidth: 30em)': {
      right: '1rem'
    }
  },
  bottom_1_ns: {
    '@media screen and (minWidth: 30em)': {
      bottom: '1rem'
    }
  },
  top_2_ns: {
    '@media screen and (minWidth: 30em)': {
      top: '2rem'
    }
  },
  left_2_ns: {
    '@media screen and (minWidth: 30em)': {
      left: '2rem'
    }
  },
  right_2_ns: {
    '@media screen and (minWidth: 30em)': {
      right: '2rem'
    }
  },
  bottom_2_ns: {
    '@media screen and (minWidth: 30em)': {
      bottom: '2rem'
    }
  },
  top__1_ns: {
    '@media screen and (minWidth: 30em)': {
      top: '-1rem'
    }
  },
  right__1_ns: {
    '@media screen and (minWidth: 30em)': {
      right: '-1rem'
    }
  },
  bottom__1_ns: {
    '@media screen and (minWidth: 30em)': {
      bottom: '-1rem'
    }
  },
  left__1_ns: {
    '@media screen and (minWidth: 30em)': {
      left: '-1rem'
    }
  },
  top__2_ns: {
    '@media screen and (minWidth: 30em)': {
      top: '-2rem'
    }
  },
  right__2_ns: {
    '@media screen and (minWidth: 30em)': {
      right: '-2rem'
    }
  },
  bottom__2_ns: {
    '@media screen and (minWidth: 30em)': {
      bottom: '-2rem'
    }
  },
  left__2_ns: {
    '@media screen and (minWidth: 30em)': {
      left: '-2rem'
    }
  },
  absolute__fill_ns: {
    '@media screen and (minWidth: 30em)': {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  },
  dn_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'none'
    }
  },
  di_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'inline'
    }
  },
  db_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'block'
    }
  },
  dib_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'inline-block'
    }
  },
  dit_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'inline-table'
    }
  },
  dt_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'table'
    }
  },
  dtc_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'table-cell'
    }
  },
  dt_row_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'table-row'
    }
  },
  dt_row_group_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'table-row-group'
    }
  },
  dt_column_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'table-column'
    }
  },
  dt_column_group_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'table-column-group'
    }
  },
  dt__fixed_ns: {
    '@media screen and (minWidth: 30em)': {
      tableLayout: 'fixed',
      width: '100%'
    }
  },
  flex_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'flex'
    }
  },
  inline_flex_ns: {
    '@media screen and (minWidth: 30em)': {
      display: 'inline-flex'
    }
  },
  flex_auto_ns: {
    '@media screen and (minWidth: 30em)': {
      flex: '1 1 auto',
      minWidth: '0',
      minHeight: '0'
    }
  },
  flex_none_ns: {
    '@media screen and (minWidth: 30em)': {
      flex: 'none'
    }
  },
  flex_column_ns: {
    '@media screen and (minWidth: 30em)': {
      flexDirection: 'column'
    }
  },
  flex_row_ns: {
    '@media screen and (minWidth: 30em)': {
      flexDirection: 'row'
    }
  },
  flex_wrap_ns: {
    '@media screen and (minWidth: 30em)': {
      flexWrap: 'wrap'
    }
  },
  items_start_ns: {
    '@media screen and (minWidth: 30em)': {
      alignItems: 'flex-start'
    }
  },
  items_end_ns: {
    '@media screen and (minWidth: 30em)': {
      alignItems: 'flex-end'
    }
  },
  items_center_ns: {
    '@media screen and (minWidth: 30em)': {
      alignItems: 'center'
    }
  },
  items_baseline_ns: {
    '@media screen and (minWidth: 30em)': {
      alignItems: 'baseline'
    }
  },
  items_stretch_ns: {
    '@media screen and (minWidth: 30em)': {
      alignItems: 'stretch'
    }
  },
  self_start_ns: {
    '@media screen and (minWidth: 30em)': {
      alignSelf: 'flex-start'
    }
  },
  self_end_ns: {
    '@media screen and (minWidth: 30em)': {
      alignSelf: 'flex-end'
    }
  },
  self_center_ns: {
    '@media screen and (minWidth: 30em)': {
      alignSelf: 'center'
    }
  },
  self_baseline_ns: {
    '@media screen and (minWidth: 30em)': {
      alignSelf: 'baseline'
    }
  },
  self_stretch_ns: {
    '@media screen and (minWidth: 30em)': {
      alignSelf: 'stretch'
    }
  },
  justify_start_ns: {
    '@media screen and (minWidth: 30em)': {
      justifyContent: 'flex-start'
    }
  },
  justify_end_ns: {
    '@media screen and (minWidth: 30em)': {
      justifyContent: 'flex-end'
    }
  },
  justify_center_ns: {
    '@media screen and (minWidth: 30em)': {
      justifyContent: 'center'
    }
  },
  justify_between_ns: {
    '@media screen and (minWidth: 30em)': {
      justifyContent: 'space-between'
    }
  },
  justify_around_ns: {
    '@media screen and (minWidth: 30em)': {
      justifyContent: 'space-around'
    }
  },
  content_start_ns: {
    '@media screen and (minWidth: 30em)': {
      alignContent: 'flex-start'
    }
  },
  content_end_ns: {
    '@media screen and (minWidth: 30em)': {
      alignContent: 'flex-end'
    }
  },
  content_center_ns: {
    '@media screen and (minWidth: 30em)': {
      alignContent: 'center'
    }
  },
  content_between_ns: {
    '@media screen and (minWidth: 30em)': {
      alignContent: 'space-between'
    }
  },
  content_around_ns: {
    '@media screen and (minWidth: 30em)': {
      alignContent: 'space-around'
    }
  },
  content_stretch_ns: {
    '@media screen and (minWidth: 30em)': {
      alignContent: 'stretch'
    }
  },
  // order_0_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '0'
  //   }
  // },
  // order_1_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '1'
  //   }
  // },
  // order_2_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '2'
  //   }
  // },
  // order_3_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '3'
  //   }
  // },
  // order_4_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '4'
  //   }
  // },
  // order_5_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '5'
  //   }
  // },
  // order_6_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '6'
  //   }
  // },
  // order_7_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '7'
  //   }
  // },
  // order_8_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '8'
  //   }
  // },
  // order_last_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     order: '99999'
  //   }
  // },
  fl_ns: {
    '@media screen and (minWidth: 30em)': {
      'float': 'left',
      _display: 'inline'
    }
  },
  fr_ns: {
    '@media screen and (minWidth: 30em)': {
      'float': 'right',
      _display: 'inline'
    }
  },
  fn_ns: {
    '@media screen and (minWidth: 30em)': {
      'float': 'none'
    }
  },
  i_ns: {
    '@media screen and (minWidth: 30em)': {
      fontStyle: 'italic'
    }
  },
  fs_normal_ns: {
    '@media screen and (minWidth: 30em)': {
      fontStyle: 'normal'
    }
  },
  normal_ns: {
    '@media screen and (minWidth: 30em)': {
      fontWeight: 'normal'
    }
  },
  b_ns: {
    '@media screen and (minWidth: 30em)': {
      fontWeight: 'bold'
    }
  },
  // fw1_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '100'
  //   }
  // },
  // fw2_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '200'
  //   }
  // },
  // fw3_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '300'
  //   }
  // },
  // fw4_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '400'
  //   }
  // },
  // fw5_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '500'
  //   }
  // },
  // fw6_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '600'
  //   }
  // },
  // fw7_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '700'
  //   }
  // },
  // fw8_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '800'
  //   }
  // },
  // fw9_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     fontWeight: '900'
  //   }
  // },
  h1_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '1rem'
    }
  },
  h2_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '2rem'
    }
  },
  h3_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '4rem'
    }
  },
  h4_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '8rem'
    }
  },
  h5_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '16rem'
    }
  },
  h_25_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '25%'
    }
  },
  h_50_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '50%'
    }
  },
  h_75_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '75%'
    }
  },
  h_100_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '100%'
    }
  },
  min_h_100_ns: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      minHeight: '100%'
    }
  },
  vh_25_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '25vh'
    }
  },
  vh_50_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '50vh'
    }
  },
  vh_75_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '75vh'
    }
  },
  vh_100_ns: {
    '@media screen and (minWidth: 30em)': {
      height: '100vh'
    }
  },
  min_vh_100_ns: {
    '@media screen and (minWidth: 30em)': {
      minHeight: '100vh'
    }
  },
  h_auto_ns: {
    '@media screen and (minWidth: 30em)': {
      height: 'auto'
    }
  },
  h_inherit_ns: {
    '@media screen and (minWidth: 30em)': {
      height: 'inherit'
    }
  },
  tracked_ns: {
    '@media screen and (minWidth: 30em)': {
      letterSpacing: '.1em'
    }
  },
  tracked_tight_ns: {
    '@media screen and (minWidth: 30em)': {
      letterSpacing: '-.05em'
    }
  },
  tracked_mega_ns: {
    '@media screen and (minWidth: 30em)': {
      letterSpacing: '.25em'
    }
  },
  lh_solid_ns: {
    '@media screen and (minWidth: 30em)': {
      lineHeight: '1'
    }
  },
  lh_title_ns: {
    '@media screen and (minWidth: 30em)': {
      lineHeight: '1.25'
    }
  },
  lh_copy_ns: {
    '@media screen and (minWidth: 30em)': {
      lineHeight: '1.5'
    }
  },
  mw_100_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '100%'
    }
  },
  mw1_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '1rem'
    }
  },
  mw2_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '2rem'
    }
  },
  mw3_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '4rem'
    }
  },
  mw4_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '8rem'
    }
  },
  mw5_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '16rem'
    }
  },
  mw6_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '32rem'
    }
  },
  mw7_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '48rem'
    }
  },
  mw8_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '64rem'
    }
  },
  mw9_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '96rem'
    }
  },
  mw_none_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: 'none'
    }
  },
  outline_ns: {
    '@media screen and (minWidth: 30em)': {
      outline: '1px solid'
    }
  },
  outline_transparent_ns: {
    '@media screen and (minWidth: 30em)': {
      outline: '1px solid transparent'
    }
  },
  outline_0_ns: {
    '@media screen and (minWidth: 30em)': {
      outline: '0'
    }
  },
  overflow_visible_ns: {
    '@media screen and (minWidth: 30em)': {
      overflow: 'visible'
    }
  },
  overflow_hidden_ns: {
    '@media screen and (minWidth: 30em)': {
      overflow: 'hidden'
    }
  },
  overflow_scroll_ns: {
    '@media screen and (minWidth: 30em)': {
      overflow: 'scroll'
    }
  },
  overflow_auto_ns: {
    '@media screen and (minWidth: 30em)': {
      overflow: 'auto'
    }
  },
  overflow_x_visible_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowX: 'visible'
    }
  },
  overflow_x_hidden_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowX: 'hidden'
    }
  },
  overflow_x_scroll_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowX: 'scroll'
    }
  },
  overflow_x_auto_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowX: 'auto'
    }
  },
  overflow_y_visible_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowY: 'visible'
    }
  },
  overflow_y_hidden_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowY: 'hidden'
    }
  },
  overflow_y_scroll_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowY: 'scroll'
    }
  },
  overflow_y_auto_ns: {
    '@media screen and (minWidth: 30em)': {
      overflowY: 'auto'
    }
  },
  static_ns: {
    '@media screen and (minWidth: 30em)': {
      position: 'static'
    }
  },
  relative_ns: {
    '@media screen and (minWidth: 30em)': {
      position: 'relative'
    }
  },
  absolute_ns: {
    '@media screen and (minWidth: 30em)': {
      position: 'absolute'
    }
  },
  fixed_ns: {
    '@media screen and (minWidth: 30em)': {
      position: 'fixed'
    }
  },
  rotate_45_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(45deg)'
    }
  },
  rotate_90_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(90deg)'
    }
  },
  rotate_135_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(135deg)'
    }
  },
  rotate_180_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(180deg)'
    }
  },
  rotate_225_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(225deg)'
    }
  },
  rotate_270_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(270deg)'
    }
  },
  rotate_315_ns: {
    '@media screen and (minWidth: 30em)': {
      transform: 'rotate(315deg)'
    }
  },
  pa0_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-none)'
    }
  },
  pa1_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-extra-small)'
    }
  },
  pa2_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-small)'
    }
  },
  pa3_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-medium)'
    }
  },
  pa4_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-large)'
    }
  },
  pa5_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-extra-large)'
    }
  },
  pa6_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-extra-extra-large)'
    }
  },
  pa7_ns: {
    '@media screen and (minWidth: 30em)': {
      padding: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pl0_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-none)'
    }
  },
  pl1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-small)'
    }
  },
  pl2_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-small)'
    }
  },
  pl3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-medium)'
    }
  },
  pl4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-large)'
    }
  },
  pl5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-large)'
    }
  },
  pl6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-extra-large)'
    }
  },
  pl7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pr0_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-none)'
    }
  },
  pr1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-extra-small)'
    }
  },
  pr2_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-small)'
    }
  },
  pr3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-medium)'
    }
  },
  pr4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-large)'
    }
  },
  pr5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-extra-large)'
    }
  },
  pr6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-extra-extra-large)'
    }
  },
  pr7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pb0_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-none)'
    }
  },
  pb1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-extra-small)'
    }
  },
  pb2_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-small)'
    }
  },
  pb3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-medium)'
    }
  },
  pb4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-large)'
    }
  },
  pb5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-extra-large)'
    }
  },
  pb6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  pb7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pt0_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-none)'
    }
  },
  pt1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-small)'
    }
  },
  pt2_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-small)'
    }
  },
  pt3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-medium)'
    }
  },
  pt4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-large)'
    }
  },
  pt5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-large)'
    }
  },
  pt6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-extra-large)'
    }
  },
  pt7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pv0_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-none)',
      paddingBottom: 'var(--spacing-none)'
    }
  },
  pv1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-small)',
      paddingBottom: 'var(--spacing-extra-small)'
    }
  },
  pv2_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-small)',
      paddingBottom: 'var(--spacing-small)'
    }
  },
  pv3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-medium)',
      paddingBottom: 'var(--spacing-medium)'
    }
  },
  pv4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-large)',
      paddingBottom: 'var(--spacing-large)'
    }
  },
  pv5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-large)',
      paddingBottom: 'var(--spacing-extra-large)'
    }
  },
  pv6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-extra-large)',
      paddingBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  pv7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingTop: 'var(--spacing-extra-extra-extra-large)',
      paddingBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ph0_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-none)',
      paddingRight: 'var(--spacing-none)'
    }
  },
  ph1_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-small)',
      paddingRight: 'var(--spacing-extra-small)'
    }
  },
  ph2_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-small)',
      paddingRight: 'var(--spacing-small)'
    }
  },
  ph3_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-medium)',
      paddingRight: 'var(--spacing-medium)'
    }
  },
  ph4_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-large)',
      paddingRight: 'var(--spacing-large)'
    }
  },
  ph5_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-large)',
      paddingRight: 'var(--spacing-extra-large)'
    }
  },
  ph6_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-extra-large)',
      paddingRight: 'var(--spacing-extra-extra-large)'
    }
  },
  ph7_ns: {
    '@media screen and (minWidth: 30em)': {
      paddingLeft: 'var(--spacing-extra-extra-extra-large)',
      paddingRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ma0_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-none)'
    }
  },
  ma1_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-extra-small)'
    }
  },
  ma2_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-small)'
    }
  },
  ma3_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-medium)'
    }
  },
  ma4_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-large)'
    }
  },
  ma5_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-extra-large)'
    }
  },
  ma6_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-extra-extra-large)'
    }
  },
  ma7_ns: {
    '@media screen and (minWidth: 30em)': {
      margin: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ml0_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-none)'
    }
  },
  ml1_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-small)'
    }
  },
  ml2_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-small)'
    }
  },
  ml3_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-medium)'
    }
  },
  ml4_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-large)'
    }
  },
  ml5_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-large)'
    }
  },
  ml6_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-extra-large)'
    }
  },
  ml7_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mr0_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-none)'
    }
  },
  mr1_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-extra-small)'
    }
  },
  mr2_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-small)'
    }
  },
  mr3_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-medium)'
    }
  },
  mr4_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-large)'
    }
  },
  mr5_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-extra-large)'
    }
  },
  mr6_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-extra-extra-large)'
    }
  },
  mr7_ns: {
    '@media screen and (minWidth: 30em)': {
      marginRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mb0_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-none)'
    }
  },
  mb1_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-extra-small)'
    }
  },
  mb2_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-small)'
    }
  },
  mb3_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-medium)'
    }
  },
  mb4_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-large)'
    }
  },
  mb5_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-extra-large)'
    }
  },
  mb6_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  mb7_ns: {
    '@media screen and (minWidth: 30em)': {
      marginBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mt0_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-none)'
    }
  },
  mt1_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-small)'
    }
  },
  mt2_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-small)'
    }
  },
  mt3_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-medium)'
    }
  },
  mt4_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-large)'
    }
  },
  mt5_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-large)'
    }
  },
  mt6_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-extra-large)'
    }
  },
  mt7_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mv0_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-none)',
      marginBottom: 'var(--spacing-none)'
    }
  },
  mv1_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-small)',
      marginBottom: 'var(--spacing-extra-small)'
    }
  },
  mv2_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-small)',
      marginBottom: 'var(--spacing-small)'
    }
  },
  mv3_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-medium)',
      marginBottom: 'var(--spacing-medium)'
    }
  },
  mv4_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-large)',
      marginBottom: 'var(--spacing-large)'
    }
  },
  mv5_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-large)',
      marginBottom: 'var(--spacing-extra-large)'
    }
  },
  mv6_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-extra-large)',
      marginBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  mv7_ns: {
    '@media screen and (minWidth: 30em)': {
      marginTop: 'var(--spacing-extra-extra-extra-large)',
      marginBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mh0_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-none)',
      marginRight: 'var(--spacing-none)'
    }
  },
  mh1_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-small)',
      marginRight: 'var(--spacing-extra-small)'
    }
  },
  mh2_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-small)',
      marginRight: 'var(--spacing-small)'
    }
  },
  mh3_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-medium)',
      marginRight: 'var(--spacing-medium)'
    }
  },
  mh4_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-large)',
      marginRight: 'var(--spacing-large)'
    }
  },
  mh5_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-large)',
      marginRight: 'var(--spacing-extra-large)'
    }
  },
  mh6_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-extra-large)',
      marginRight: 'var(--spacing-extra-extra-large)'
    }
  },
  mh7_ns: {
    '@media screen and (minWidth: 30em)': {
      marginLeft: 'var(--spacing-extra-extra-extra-large)',
      marginRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  tl_ns: {
    '@media screen and (minWidth: 30em)': {
      textAlign: 'left'
    }
  },
  tr_ns: {
    '@media screen and (minWidth: 30em)': {
      textAlign: 'right'
    }
  },
  tc_ns: {
    '@media screen and (minWidth: 30em)': {
      textAlign: 'center'
    }
  },
  strike_ns: {
    '@media screen and (minWidth: 30em)': {
      textDecoration: 'line-through'
    }
  },
  underline_ns: {
    '@media screen and (minWidth: 30em)': {
      textDecoration: 'underline'
    }
  },
  no_underline_ns: {
    '@media screen and (minWidth: 30em)': {
      textDecoration: 'none'
    }
  },
  ttc_ns: {
    '@media screen and (minWidth: 30em)': {
      textTransform: 'capitalize'
    }
  },
  ttl_ns: {
    '@media screen and (minWidth: 30em)': {
      textTransform: 'lowercase'
    }
  },
  ttu_ns: {
    '@media screen and (minWidth: 30em)': {
      textTransform: 'uppercase'
    }
  },
  ttn_ns: {
    '@media screen and (minWidth: 30em)': {
      textTransform: 'none'
    }
  },
  f_6_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '6rem'
    }
  },
  f_headline_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '6rem'
    }
  },
  f_5_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '5rem'
    }
  },
  f_subheadline_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '5rem'
    }
  },
  f1_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '3rem'
    }
  },
  f2_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '2.25rem'
    }
  },
  f3_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '1.5rem'
    }
  },
  f4_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '1.25rem'
    }
  },
  f5_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '1rem'
    }
  },
  f6_ns: {
    '@media screen and (minWidth: 30em)': {
      fontSize: '.875rem'
    }
  },
  measure_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '30em'
    }
  },
  measure_wide_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '34em'
    }
  },
  measure_narrow_ns: {
    '@media screen and (minWidth: 30em)': {
      maxWidth: '20em'
    }
  },
  indent_ns: {
    '@media screen and (minWidth: 30em)': {
      textIndent: '1em',
      marginTop: '0',
      marginBottom: '0'
    }
  },
  small_caps_ns: {
    '@media screen and (minWidth: 30em)': {
      'font-variant': 'small-caps'
    }
  },
  truncate_ns: {
    '@media screen and (minWidth: 30em)': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  v_base_ns: {
    '@media screen and (minWidth: 30em)': {
      verticalAlign: 'baseline'
    }
  },
  v_mid_ns: {
    '@media screen and (minWidth: 30em)': {
      verticalAlign: 'middle'
    }
  },
  v_top_ns: {
    '@media screen and (minWidth: 30em)': {
      verticalAlign: 'top'
    }
  },
  v_btm_ns: {
    '@media screen and (minWidth: 30em)': {
      verticalAlign: 'bottom'
    }
  },
  // clip_ns: {
  //   '@media screen and (minWidth: 30em)': {
  //     position: 'fixed !important',
  //     _position: 'absolute !important',
  //     clip: 'rect(1px, 1px, 1px, 1px)'
  //   }
  // },
  ws_normal_ns: {
    '@media screen and (minWidth: 30em)': {
      whiteSpace: 'normal'
    }
  },
  nowrap_ns: {
    '@media screen and (minWidth: 30em)': {
      whiteSpace: 'nowrap'
    }
  },
  pre_ns: {
    '@media screen and (minWidth: 30em)': {
      whiteSpace: 'pre'
    }
  },
  w1_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '1rem'
    }
  },
  w2_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '2rem'
    }
  },
  w3_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '4rem'
    }
  },
  w4_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '8rem'
    }
  },
  w5_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '16rem'
    }
  },
  w_10_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '10%'
    }
  },
  w_20_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '20%'
    }
  },
  w_25_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '25%'
    }
  },
  w_30_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '30%'
    }
  },
  w_33_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '33%'
    }
  },
  w_34_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '34%'
    }
  },
  w_40_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '40%'
    }
  },
  w_50_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '50%'
    }
  },
  w_60_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '60%'
    }
  },
  w_70_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '70%'
    }
  },
  w_75_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '75%'
    }
  },
  w_80_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '80%'
    }
  },
  w_90_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '90%'
    }
  },
  w_100_ns: {
    '@media screen and (minWidth: 30em)': {
      width: '100%'
    }
  },
  w_third_ns: {
    '@media screen and (minWidth: 30em)': {
      width: 'calc(100% / 3)'
    }
  },
  w_two_thirds_ns: {
    '@media screen and (minWidth: 30em)': {
      width: 'calc(100% / 1.5)'
    }
  },
  w_auto_ns: {
    '@media screen and (minWidth: 30em)': {
      width: 'auto'
    }
  },
  aspect_ratio_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '0',
      position: 'relative'
    }
  },
  aspect_ratio__16x9_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '56.25%'
    }
  },
  aspect_ratio__9x16_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '177.77%'
    }
  },
  aspect_ratio__4x3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '75%'
    }
  },
  aspect_ratio__3x4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '133.33%'
    }
  },
  aspect_ratio__6x4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '66.6%'
    }
  },
  aspect_ratio__4x6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '150%'
    }
  },
  aspect_ratio__8x5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '62.5%'
    }
  },
  aspect_ratio__5x8_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '160%'
    }
  },
  aspect_ratio__7x5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '71.42%'
    }
  },
  aspect_ratio__5x7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '140%'
    }
  },
  aspect_ratio__1x1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: '100%'
    }
  },
  // aspect_ratio__object_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     position: 'absolute',
  //     top: '0',
  //     right: '0',
  //     bottom: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //     zIndex: '100'
  //   }
  // },
  bg_center_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }
  },
  bg_top_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center'
    }
  },
  bg_right_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center right'
    }
  },
  bg_bottom_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center'
    }
  },
  bg_left_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center left'
    }
  },
  cover_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundSize: 'cover'
    }
  },
  contain_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      backgroundSize: 'contain'
    }
  },
  br0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '0'
    }
  },
  br1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '.125rem'
    }
  },
  br2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '.25rem'
    }
  },
  br3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '.5rem'
    }
  },
  br4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '1rem'
    }
  },
  br_100_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '100%'
    }
  },
  br_pill_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRadius: '9999px'
    }
  },
  br__bottom_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }
  },
  br__top_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  br__right_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0'
    }
  },
  br__left_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  b__dotted_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderStyle: 'dotted'
    }
  },
  b__dashed_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderStyle: 'dashed'
    }
  },
  b__solid_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderStyle: 'solid'
    }
  },
  b__none_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderStyle: 'none'
    }
  },
  bw0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderWidth: '0'
    }
  },
  bw1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderWidth: '.125rem'
    }
  },
  bw2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderWidth: '.25rem'
    }
  },
  bw3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderWidth: '.5rem'
    }
  },
  bw4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderWidth: '1rem'
    }
  },
  bw5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderWidth: '2rem'
    }
  },
  bt_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderTopWidth: '0'
    }
  },
  br_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRightWidth: '0'
    }
  },
  bb_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderBottomWidth: '0'
    }
  },
  bl_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderLeftWidth: '0'
    }
  },
  ba_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderStyle: 'solid',
      borderWidth: '1px'
    }
  },
  bt_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderTopStyle: 'solid',
      borderTopWidth: '1px'
    }
  },
  br_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderRightStyle: 'solid',
      borderRightWidth: '1px'
    }
  },
  bb_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px'
    }
  },
  bl_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px'
    }
  },
  bn_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      borderStyle: 'none',
      borderWidth: '0'
    }
  },
  shadow_1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      boxShadow: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      boxShadow: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
    }
  },
  cl_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      clear: 'left'
    }
  },
  cr_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      clear: 'right'
    }
  },
  cb_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      clear: 'both'
    }
  },
  cn_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      clear: 'none'
    }
  },
  top_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      top: '0'
    }
  },
  left_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      left: '0'
    }
  },
  right_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      right: '0'
    }
  },
  bottom_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      bottom: '0'
    }
  },
  top_1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      top: '1rem'
    }
  },
  left_1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      left: '1rem'
    }
  },
  right_1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      right: '1rem'
    }
  },
  bottom_1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      bottom: '1rem'
    }
  },
  top_2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      top: '2rem'
    }
  },
  left_2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      left: '2rem'
    }
  },
  right_2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      right: '2rem'
    }
  },
  bottom_2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      bottom: '2rem'
    }
  },
  top__1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      top: '-1rem'
    }
  },
  right__1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      right: '-1rem'
    }
  },
  bottom__1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      bottom: '-1rem'
    }
  },
  left__1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      left: '-1rem'
    }
  },
  top__2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      top: '-2rem'
    }
  },
  right__2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      right: '-2rem'
    }
  },
  bottom__2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      bottom: '-2rem'
    }
  },
  left__2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      left: '-2rem'
    }
  },
  absolute__fill_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  },
  dn_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'none'
    }
  },
  di_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'inline'
    }
  },
  db_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'block'
    }
  },
  dib_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'inline-block'
    }
  },
  dit_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'inline-table'
    }
  },
  dt_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'table'
    }
  },
  dtc_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'table-cell'
    }
  },
  dt_row_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'table-row'
    }
  },
  dt_row_group_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'table-row-group'
    }
  },
  dt_column_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'table-column'
    }
  },
  dt_column_group_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'table-column-group'
    }
  },
  dt__fixed_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      tableLayout: 'fixed',
      width: '100%'
    }
  },
  flex_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'flex'
    }
  },
  inline_flex_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      display: 'inline-flex'
    }
  },
  flex_auto_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      flex: '1 1 auto',
      minWidth: '0',
      minHeight: '0'
    }
  },
  flex_none_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      flex: 'none'
    }
  },
  flex_column_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      flexDirection: 'column'
    }
  },
  flex_row_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      flexDirection: 'row'
    }
  },
  flex_wrap_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      flexWrap: 'wrap'
    }
  },
  items_start_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignItems: 'flex-start'
    }
  },
  items_end_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignItems: 'flex-end'
    }
  },
  items_center_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignItems: 'center'
    }
  },
  items_baseline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignItems: 'baseline'
    }
  },
  items_stretch_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignItems: 'stretch'
    }
  },
  self_start_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignSelf: 'flex-start'
    }
  },
  self_end_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignSelf: 'flex-end'
    }
  },
  self_center_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignSelf: 'center'
    }
  },
  self_baseline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignSelf: 'baseline'
    }
  },
  self_stretch_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignSelf: 'stretch'
    }
  },
  justify_start_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      justifyContent: 'flex-start'
    }
  },
  justify_end_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      justifyContent: 'flex-end'
    }
  },
  justify_center_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      justifyContent: 'center'
    }
  },
  justify_between_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      justifyContent: 'space-between'
    }
  },
  justify_around_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      justifyContent: 'space-around'
    }
  },
  content_start_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignContent: 'flex-start'
    }
  },
  content_end_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignContent: 'flex-end'
    }
  },
  content_center_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignContent: 'center'
    }
  },
  content_between_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignContent: 'space-between'
    }
  },
  content_around_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignContent: 'space-around'
    }
  },
  content_stretch_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      alignContent: 'stretch'
    }
  },
  // order_0_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '0'
  //   }
  // },
  // order_1_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '1'
  //   }
  // },
  // order_2_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '2'
  //   }
  // },
  // order_3_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '3'
  //   }
  // },
  // order_4_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '4'
  //   }
  // },
  // order_5_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '5'
  //   }
  // },
  // order_6_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '6'
  //   }
  // },
  // order_7_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '7'
  //   }
  // },
  // order_8_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '8'
  //   }
  // },
  // order_last_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     order: '99999'
  //   }
  // },
  fl_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      'float': 'left',
      _display: 'inline'
    }
  },
  fr_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      'float': 'right',
      _display: 'inline'
    }
  },
  fn_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      'float': 'none'
    }
  },
  i_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontStyle: 'italic'
    }
  },
  fs_normal_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontStyle: 'normal'
    }
  },
  normal_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontWeight: 'normal'
    }
  },
  b_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontWeight: 'bold'
    }
  },
  // fw1_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '100'
  //   }
  // },
  // fw2_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '200'
  //   }
  // },
  // fw3_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '300'
  //   }
  // },
  // fw4_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '400'
  //   }
  // },
  // fw5_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '500'
  //   }
  // },
  // fw6_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '600'
  //   }
  // },
  // fw7_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '700'
  //   }
  // },
  // fw8_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '800'
  //   }
  // },
  // fw9_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     fontWeight: '900'
  //   }
  // },
  h1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '1rem'
    }
  },
  h2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '2rem'
    }
  },
  h3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '4rem'
    }
  },
  h4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '8rem'
    }
  },
  h5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '16rem'
    }
  },
  h_25_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '25%'
    }
  },
  h_50_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '50%'
    }
  },
  h_75_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '75%'
    }
  },
  h_100_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '100%'
    }
  },
  vh_25_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '25vh'
    }
  },
  vh_50_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '50vh'
    }
  },
  vh_75_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '75vh'
    }
  },
  vh_100_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: '100vh'
    }
  },
  min_vh_100_m: {
    '@media screen and (minWidth: 60em)': {
      minHeight: '100vh'
    }
  },
  h_auto_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: 'auto'
    }
  },
  h_inherit_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      height: 'inherit'
    }
  },
  tracked_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      letterSpacing: '.1em'
    }
  },
  tracked_tight_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      letterSpacing: '-.05em'
    }
  },
  tracked_mega_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      letterSpacing: '.25em'
    }
  },
  lh_solid_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      lineHeight: '1'
    }
  },
  lh_title_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      lineHeight: '1.25'
    }
  },
  lh_copy_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      lineHeight: '1.5'
    }
  },
  mw_100_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '100%'
    }
  },
  mw1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '1rem'
    }
  },
  mw2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '2rem'
    }
  },
  mw3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '4rem'
    }
  },
  mw4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '8rem'
    }
  },
  mw5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '16rem'
    }
  },
  mw6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '32rem'
    }
  },
  mw7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '48rem'
    }
  },
  mw8_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '64rem'
    }
  },
  mw9_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '96rem'
    }
  },
  mw_none_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: 'none'
    }
  },
  outline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      outline: '1px solid'
    }
  },
  outline_transparent_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      outline: '1px solid transparent'
    }
  },
  outline_0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      outline: '0'
    }
  },
  outline_l: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      outline: '1px solid'
    }
  },
  outline_transparent_l: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      outline: '1px solid transparent'
    }
  },
  outline_0_l: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      outline: '0'
    }
  },
  overflow_visible_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflow: 'visible'
    }
  },
  overflow_hidden_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflow: 'hidden'
    }
  },
  overflow_scroll_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflow: 'scroll'
    }
  },
  overflow_auto_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflow: 'auto'
    }
  },
  overflow_x_visible_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowX: 'visible'
    }
  },
  overflow_x_hidden_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowX: 'hidden'
    }
  },
  overflow_x_scroll_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowX: 'scroll'
    }
  },
  overflow_x_auto_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowX: 'auto'
    }
  },
  overflow_y_visible_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowY: 'visible'
    }
  },
  overflow_y_hidden_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowY: 'hidden'
    }
  },
  overflow_y_scroll_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowY: 'scroll'
    }
  },
  overflow_y_auto_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      overflowY: 'auto'
    }
  },
  static_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      position: 'static'
    }
  },
  relative_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      position: 'relative'
    }
  },
  absolute_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      position: 'absolute'
    }
  },
  fixed_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      position: 'fixed'
    }
  },
  rotate_45_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(45deg)'
    }
  },
  rotate_90_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(90deg)'
    }
  },
  rotate_135_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(135deg)'
    }
  },
  rotate_180_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(180deg)'
    }
  },
  rotate_225_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(225deg)'
    }
  },
  rotate_270_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(270deg)'
    }
  },
  rotate_315_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      transform: 'rotate(315deg)'
    }
  },
  pa0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-none)'
    }
  },
  pa1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-extra-small)'
    }
  },
  pa2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-small)'
    }
  },
  pa3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-medium)'
    }
  },
  pa4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-large)'
    }
  },
  pa5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-extra-large)'
    }
  },
  pa6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-extra-extra-large)'
    }
  },
  pa7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      padding: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pl0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-none)'
    }
  },
  pl1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-small)'
    }
  },
  pl2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-small)'
    }
  },
  pl3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-medium)'
    }
  },
  pl4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-large)'
    }
  },
  pl5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-large)'
    }
  },
  pl6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-large)'
    }
  },
  pl7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pr0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-none)'
    }
  },
  pr1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-small)'
    }
  },
  pr2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-small)'
    }
  },
  pr3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-medium)'
    }
  },
  pr4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-large)'
    }
  },
  pr5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-large)'
    }
  },
  pr6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-extra-large)'
    }
  },
  pr7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pb0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-none)'
    }
  },
  pb1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-small)'
    }
  },
  pb2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-small)'
    }
  },
  pb3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-medium)'
    }
  },
  pb4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-large)'
    }
  },
  pb5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-large)'
    }
  },
  pb6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  pb7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pt0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-none)'
    }
  },
  pt1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-small)'
    }
  },
  pt2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-small)'
    }
  },
  pt3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-medium)'
    }
  },
  pt4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-large)'
    }
  },
  pt5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-large)'
    }
  },
  pt6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-large)'
    }
  },
  pt7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pv0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-none)',
      paddingBottom: 'var(--spacing-none)'
    }
  },
  pv1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-small)',
      paddingBottom: 'var(--spacing-extra-small)'
    }
  },
  pv2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-small)',
      paddingBottom: 'var(--spacing-small)'
    }
  },
  pv3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-medium)',
      paddingBottom: 'var(--spacing-medium)'
    }
  },
  pv4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-large)',
      paddingBottom: 'var(--spacing-large)'
    }
  },
  pv5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-large)',
      paddingBottom: 'var(--spacing-extra-large)'
    }
  },
  pv6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-large)',
      paddingBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  pv7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-extra-large)',
      paddingBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ph0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-none)',
      paddingRight: 'var(--spacing-none)'
    }
  },
  ph1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-small)',
      paddingRight: 'var(--spacing-extra-small)'
    }
  },
  ph2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-small)',
      paddingRight: 'var(--spacing-small)'
    }
  },
  ph3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-medium)',
      paddingRight: 'var(--spacing-medium)'
    }
  },
  ph4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-large)',
      paddingRight: 'var(--spacing-large)'
    }
  },
  ph5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-large)',
      paddingRight: 'var(--spacing-extra-large)'
    }
  },
  ph6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-large)',
      paddingRight: 'var(--spacing-extra-extra-large)'
    }
  },
  ph7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-extra-large)',
      paddingRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ma0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-none)'
    }
  },
  ma1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-extra-small)'
    }
  },
  ma2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-small)'
    }
  },
  ma3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-medium)'
    }
  },
  ma4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-large)'
    }
  },
  ma5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-extra-large)'
    }
  },
  ma6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-extra-extra-large)'
    }
  },
  ma7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      margin: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ml0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-none)'
    }
  },
  ml1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-small)'
    }
  },
  ml2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-small)'
    }
  },
  ml3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-medium)'
    }
  },
  ml4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-large)'
    }
  },
  ml5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-large)'
    }
  },
  ml6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-large)'
    }
  },
  ml7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mr0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-none)'
    }
  },
  mr1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-extra-small)'
    }
  },
  mr2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-small)'
    }
  },
  mr3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-medium)'
    }
  },
  mr4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-large)'
    }
  },
  mr5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-extra-large)'
    }
  },
  mr6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-extra-extra-large)'
    }
  },
  mr7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mb0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-none)'
    }
  },
  mb1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-small)'
    }
  },
  mb2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-small)'
    }
  },
  mb3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-medium)'
    }
  },
  mb4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-large)'
    }
  },
  mb5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-large)'
    }
  },
  mb6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  mb7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mt0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-none)'
    }
  },
  mt1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-small)'
    }
  },
  mt2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-small)'
    }
  },
  mt3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-medium)'
    }
  },
  mt4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-large)'
    }
  },
  mt5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-large)'
    }
  },
  mt6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-large)'
    }
  },
  mt7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mv0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-none)',
      marginBottom: 'var(--spacing-none)'
    }
  },
  mv1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-small)',
      marginBottom: 'var(--spacing-extra-small)'
    }
  },
  mv2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-small)',
      marginBottom: 'var(--spacing-small)'
    }
  },
  mv3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-medium)',
      marginBottom: 'var(--spacing-medium)'
    }
  },
  mv4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-large)',
      marginBottom: 'var(--spacing-large)'
    }
  },
  mv5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-large)',
      marginBottom: 'var(--spacing-extra-large)'
    }
  },
  mv6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-large)',
      marginBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  mv7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-extra-large)',
      marginBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mh0_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-none)',
      marginRight: 'var(--spacing-none)'
    }
  },
  mh1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-small)',
      marginRight: 'var(--spacing-extra-small)'
    }
  },
  mh2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-small)',
      marginRight: 'var(--spacing-small)'
    }
  },
  mh3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-medium)',
      marginRight: 'var(--spacing-medium)'
    }
  },
  mh4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-large)',
      marginRight: 'var(--spacing-large)'
    }
  },
  mh5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-large)',
      marginRight: 'var(--spacing-extra-large)'
    }
  },
  mh6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-large)',
      marginRight: 'var(--spacing-extra-extra-large)'
    }
  },
  mh7_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-extra-large)',
      marginRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  tl_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textAlign: 'left'
    }
  },
  tr_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textAlign: 'right'
    }
  },
  tc_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textAlign: 'center'
    }
  },
  strike_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textDecoration: 'line-through'
    }
  },
  underline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textDecoration: 'underline'
    }
  },
  no_underline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textDecoration: 'none'
    }
  },
  ttc_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textTransform: 'capitalize'
    }
  },
  ttl_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textTransform: 'lowercase'
    }
  },
  ttu_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textTransform: 'uppercase'
    }
  },
  ttn_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textTransform: 'none'
    }
  },
  f_6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '6rem'
    }
  },
  f_headline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '6rem'
    }
  },
  f_5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '5rem'
    }
  },
  f_subheadline_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '5rem'
    }
  },
  f1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '3rem'
    }
  },
  f2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '2.25rem'
    }
  },
  f3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '1.5rem'
    }
  },
  f4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '1.25rem'
    }
  },
  f5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '1rem'
    }
  },
  f6_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      fontSize: '.875rem'
    }
  },
  measure_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '30em'
    }
  },
  measure_wide_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '34em'
    }
  },
  measure_narrow_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      maxWidth: '20em'
    }
  },
  indent_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      textIndent: '1em',
      marginTop: '0',
      marginBottom: '0'
    }
  },
  small_caps_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      'font-variant': 'small-caps'
    }
  },
  truncate_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  v_base_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      verticalAlign: 'baseline'
    }
  },
  v_mid_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      verticalAlign: 'middle'
    }
  },
  v_top_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      verticalAlign: 'top'
    }
  },
  v_btm_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      verticalAlign: 'bottom'
    }
  },
  // clip_m: {
  //   '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
  //     position: 'fixed !important',
  //     _position: 'absolute !important',
  //     clip: 'rect(1px, 1px, 1px, 1px)'
  //   }
  // },
  ws_normal_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      whiteSpace: 'normal'
    }
  },
  nowrap_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      whiteSpace: 'nowrap'
    }
  },
  pre_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      whiteSpace: 'pre'
    }
  },
  w1_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '1rem'
    }
  },
  w2_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '2rem'
    }
  },
  w3_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '4rem'
    }
  },
  w4_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '8rem'
    }
  },
  w5_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '16rem'
    }
  },
  w_10_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '10%'
    }
  },
  w_20_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '20%'
    }
  },
  w_25_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '25%'
    }
  },
  w_30_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '30%'
    }
  },
  w_33_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '33%'
    }
  },
  w_34_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '34%'
    }
  },
  w_40_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '40%'
    }
  },
  w_50_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '50%'
    }
  },
  w_60_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '60%'
    }
  },
  w_70_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '70%'
    }
  },
  w_75_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '75%'
    }
  },
  w_80_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '80%'
    }
  },
  w_90_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '90%'
    }
  },
  w_100_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: '100%'
    }
  },
  w_third_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: 'calc(100% / 3)'
    }
  },
  w_two_thirds_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: 'calc(100% / 1.5)'
    }
  },
  w_auto_m: {
    '@media screen and (minWidth: 30em) and (maxWidth: 60em)': {
      width: 'auto'
    }
  },
  aspect_ratio_l: {
    '@media screen and (minWidth: 60em)': {
      height: '0',
      position: 'relative'
    }
  },
  aspect_ratio__16x9_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '56.25%'
    }
  },
  aspect_ratio__9x16_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '177.77%'
    }
  },
  aspect_ratio__4x3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '75%'
    }
  },
  aspect_ratio__3x4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '133.33%'
    }
  },
  aspect_ratio__6x4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '66.6%'
    }
  },
  aspect_ratio__4x6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '150%'
    }
  },
  aspect_ratio__8x5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '62.5%'
    }
  },
  aspect_ratio__5x8_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '160%'
    }
  },
  aspect_ratio__7x5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '71.42%'
    }
  },
  aspect_ratio__5x7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '140%'
    }
  },
  aspect_ratio__1x1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: '100%'
    }
  },
  // aspect_ratio__object_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     position: 'absolute',
  //     top: '0',
  //     right: '0',
  //     bottom: '0',
  //     left: '0',
  //     width: '100%',
  //     height: '100%',
  //     zIndex: '100'
  //   }
  // },
  bg_center_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }
  },
  bg_top_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center'
    }
  },
  bg_right_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center right'
    }
  },
  bg_bottom_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center'
    }
  },
  bg_left_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center left'
    }
  },
  cover_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundSize: 'cover'
    }
  },
  contain_l: {
    '@media screen and (minWidth: 60em)': {
      backgroundSize: 'contain'
    }
  },
  br0_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '0'
    }
  },
  br1_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '.125rem'
    }
  },
  br2_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '.25rem'
    }
  },
  br3_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '.5rem'
    }
  },
  br4_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '1rem'
    }
  },
  br_100_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '100%'
    }
  },
  br_pill_l: {
    '@media screen and (minWidth: 60em)': {
      borderRadius: '9999px'
    }
  },
  br__bottom_l: {
    '@media screen and (minWidth: 60em)': {
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0'
    }
  },
  br__top_l: {
    '@media screen and (minWidth: 60em)': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  br__right_l: {
    '@media screen and (minWidth: 60em)': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0'
    }
  },
  br__left_l: {
    '@media screen and (minWidth: 60em)': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0'
    }
  },
  b__dotted_l: {
    '@media screen and (minWidth: 60em)': {
      borderStyle: 'dotted'
    }
  },
  b__dashed_l: {
    '@media screen and (minWidth: 60em)': {
      borderStyle: 'dashed'
    }
  },
  b__solid_l: {
    '@media screen and (minWidth: 60em)': {
      borderStyle: 'solid'
    }
  },
  b__none_l: {
    '@media screen and (minWidth: 60em)': {
      borderStyle: 'none'
    }
  },
  bw0_l: {
    '@media screen and (minWidth: 60em)': {
      borderWidth: '0'
    }
  },
  bw1_l: {
    '@media screen and (minWidth: 60em)': {
      borderWidth: '.125rem'
    }
  },
  bw2_l: {
    '@media screen and (minWidth: 60em)': {
      borderWidth: '.25rem'
    }
  },
  bw3_l: {
    '@media screen and (minWidth: 60em)': {
      borderWidth: '.5rem'
    }
  },
  bw4_l: {
    '@media screen and (minWidth: 60em)': {
      borderWidth: '1rem'
    }
  },
  bw5_l: {
    '@media screen and (minWidth: 60em)': {
      borderWidth: '2rem'
    }
  },
  bt_0_l: {
    '@media screen and (minWidth: 60em)': {
      borderTopWidth: '0'
    }
  },
  br_0_l: {
    '@media screen and (minWidth: 60em)': {
      borderRightWidth: '0'
    }
  },
  bb_0_l: {
    '@media screen and (minWidth: 60em)': {
      borderBottomWidth: '0'
    }
  },
  bl_0_l: {
    '@media screen and (minWidth: 60em)': {
      borderLeftWidth: '0'
    }
  },
  ba_l: {
    '@media screen and (minWidth: 60em)': {
      borderStyle: 'solid',
      borderWidth: '1px'
    }
  },
  bt_l: {
    '@media screen and (minWidth: 60em)': {
      borderTopStyle: 'solid',
      borderTopWidth: '1px'
    }
  },
  br_l: {
    '@media screen and (minWidth: 60em)': {
      borderRightStyle: 'solid',
      borderRightWidth: '1px'
    }
  },
  bb_l: {
    '@media screen and (minWidth: 60em)': {
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px'
    }
  },
  bl_l: {
    '@media screen and (minWidth: 60em)': {
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px'
    }
  },
  bn_l: {
    '@media screen and (minWidth: 60em)': {
      borderStyle: 'none',
      borderWidth: '0'
    }
  },
  shadow_1_l: {
    '@media screen and (minWidth: 60em)': {
      boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_2_l: {
    '@media screen and (minWidth: 60em)': {
      boxShadow: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_3_l: {
    '@media screen and (minWidth: 60em)': {
      boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_4_l: {
    '@media screen and (minWidth: 60em)': {
      boxShadow: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )'
    }
  },
  shadow_5_l: {
    '@media screen and (minWidth: 60em)': {
      boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
    }
  },
  cl_l: {
    '@media screen and (minWidth: 60em)': {
      clear: 'left'
    }
  },
  cr_l: {
    '@media screen and (minWidth: 60em)': {
      clear: 'right'
    }
  },
  cb_l: {
    '@media screen and (minWidth: 60em)': {
      clear: 'both'
    }
  },
  cn_l: {
    '@media screen and (minWidth: 60em)': {
      clear: 'none'
    }
  },
  top_0_l: {
    '@media screen and (minWidth: 60em)': {
      top: '0'
    }
  },
  left_0_l: {
    '@media screen and (minWidth: 60em)': {
      left: '0'
    }
  },
  right_0_l: {
    '@media screen and (minWidth: 60em)': {
      right: '0'
    }
  },
  bottom_0_l: {
    '@media screen and (minWidth: 60em)': {
      bottom: '0'
    }
  },
  top_1_l: {
    '@media screen and (minWidth: 60em)': {
      top: '1rem'
    }
  },
  left_1_l: {
    '@media screen and (minWidth: 60em)': {
      left: '1rem'
    }
  },
  right_1_l: {
    '@media screen and (minWidth: 60em)': {
      right: '1rem'
    }
  },
  bottom_1_l: {
    '@media screen and (minWidth: 60em)': {
      bottom: '1rem'
    }
  },
  top_2_l: {
    '@media screen and (minWidth: 60em)': {
      top: '2rem'
    }
  },
  left_2_l: {
    '@media screen and (minWidth: 60em)': {
      left: '2rem'
    }
  },
  right_2_l: {
    '@media screen and (minWidth: 60em)': {
      right: '2rem'
    }
  },
  bottom_2_l: {
    '@media screen and (minWidth: 60em)': {
      bottom: '2rem'
    }
  },
  top__1_l: {
    '@media screen and (minWidth: 60em)': {
      top: '-1rem'
    }
  },
  right__1_l: {
    '@media screen and (minWidth: 60em)': {
      right: '-1rem'
    }
  },
  bottom__1_l: {
    '@media screen and (minWidth: 60em)': {
      bottom: '-1rem'
    }
  },
  left__1_l: {
    '@media screen and (minWidth: 60em)': {
      left: '-1rem'
    }
  },
  top__2_l: {
    '@media screen and (minWidth: 60em)': {
      top: '-2rem'
    }
  },
  right__2_l: {
    '@media screen and (minWidth: 60em)': {
      right: '-2rem'
    }
  },
  bottom__2_l: {
    '@media screen and (minWidth: 60em)': {
      bottom: '-2rem'
    }
  },
  left__2_l: {
    '@media screen and (minWidth: 60em)': {
      left: '-2rem'
    }
  },
  absolute__fill_l: {
    '@media screen and (minWidth: 60em)': {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0'
    }
  },
  dn_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'none'
    }
  },
  di_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'inline'
    }
  },
  db_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'block'
    }
  },
  dib_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'inline-block'
    }
  },
  dit_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'inline-table'
    }
  },
  dt_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'table'
    }
  },
  dtc_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'table-cell'
    }
  },
  dt_row_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'table-row'
    }
  },
  dt_row_group_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'table-row-group'
    }
  },
  dt_column_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'table-column'
    }
  },
  dt_column_group_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'table-column-group'
    }
  },
  dt__fixed_l: {
    '@media screen and (minWidth: 60em)': {
      tableLayout: 'fixed',
      width: '100%'
    }
  },
  flex_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'flex'
    }
  },
  inline_flex_l: {
    '@media screen and (minWidth: 60em)': {
      display: 'inline-flex'
    }
  },
  flex_auto_l: {
    '@media screen and (minWidth: 60em)': {
      flex: '1 1 auto',
      minWidth: '0',
      minHeight: '0'
    }
  },
  flex_none_l: {
    '@media screen and (minWidth: 60em)': {
      flex: 'none'
    }
  },
  flex_column_l: {
    '@media screen and (minWidth: 60em)': {
      flexDirection: 'column'
    }
  },
  flex_row_l: {
    '@media screen and (minWidth: 60em)': {
      flexDirection: 'row'
    }
  },
  flex_wrap_l: {
    '@media screen and (minWidth: 60em)': {
      flexWrap: 'wrap'
    }
  },
  items_start_l: {
    '@media screen and (minWidth: 60em)': {
      alignItems: 'flex-start'
    }
  },
  items_end_l: {
    '@media screen and (minWidth: 60em)': {
      alignItems: 'flex-end'
    }
  },
  items_center_l: {
    '@media screen and (minWidth: 60em)': {
      alignItems: 'center'
    }
  },
  items_baseline_l: {
    '@media screen and (minWidth: 60em)': {
      alignItems: 'baseline'
    }
  },
  items_stretch_l: {
    '@media screen and (minWidth: 60em)': {
      alignItems: 'stretch'
    }
  },
  self_start_l: {
    '@media screen and (minWidth: 60em)': {
      alignSelf: 'flex-start'
    }
  },
  self_end_l: {
    '@media screen and (minWidth: 60em)': {
      alignSelf: 'flex-end'
    }
  },
  self_center_l: {
    '@media screen and (minWidth: 60em)': {
      alignSelf: 'center'
    }
  },
  self_baseline_l: {
    '@media screen and (minWidth: 60em)': {
      alignSelf: 'baseline'
    }
  },
  self_stretch_l: {
    '@media screen and (minWidth: 60em)': {
      alignSelf: 'stretch'
    }
  },
  justify_start_l: {
    '@media screen and (minWidth: 60em)': {
      justifyContent: 'flex-start'
    }
  },
  justify_end_l: {
    '@media screen and (minWidth: 60em)': {
      justifyContent: 'flex-end'
    }
  },
  justify_center_l: {
    '@media screen and (minWidth: 60em)': {
      justifyContent: 'center'
    }
  },
  justify_between_l: {
    '@media screen and (minWidth: 60em)': {
      justifyContent: 'space-between'
    }
  },
  justify_around_l: {
    '@media screen and (minWidth: 60em)': {
      justifyContent: 'space-around'
    }
  },
  content_start_l: {
    '@media screen and (minWidth: 60em)': {
      alignContent: 'flex-start'
    }
  },
  content_end_l: {
    '@media screen and (minWidth: 60em)': {
      alignContent: 'flex-end'
    }
  },
  content_center_l: {
    '@media screen and (minWidth: 60em)': {
      alignContent: 'center'
    }
  },
  content_between_l: {
    '@media screen and (minWidth: 60em)': {
      alignContent: 'space-between'
    }
  },
  content_around_l: {
    '@media screen and (minWidth: 60em)': {
      alignContent: 'space-around'
    }
  },
  content_stretch_l: {
    '@media screen and (minWidth: 60em)': {
      alignContent: 'stretch'
    }
  },
  // order_0_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '0'
  //   }
  // },
  // order_1_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '1'
  //   }
  // },
  // order_2_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '2'
  //   }
  // },
  // order_3_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '3'
  //   }
  // },
  // order_4_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '4'
  //   }
  // },
  // order_5_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '5'
  //   }
  // },
  // order_6_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '6'
  //   }
  // },
  // order_7_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '7'
  //   }
  // },
  // order_8_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '8'
  //   }
  // },
  // order_last_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     order: '99999'
  //   }
  // },
  fl_l: {
    '@media screen and (minWidth: 60em)': {
      'float': 'left',
      _display: 'inline'
    }
  },
  fr_l: {
    '@media screen and (minWidth: 60em)': {
      'float': 'right',
      _display: 'inline'
    }
  },
  fn_l: {
    '@media screen and (minWidth: 60em)': {
      'float': 'none'
    }
  },
  i_l: {
    '@media screen and (minWidth: 60em)': {
      fontStyle: 'italic'
    }
  },
  fs_normal_l: {
    '@media screen and (minWidth: 60em)': {
      fontStyle: 'normal'
    }
  },
  normal_l: {
    '@media screen and (minWidth: 60em)': {
      fontWeight: 'normal'
    }
  },
  b_l: {
    '@media screen and (minWidth: 60em)': {
      fontWeight: 'bold'
    }
  },
  // fw1_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '100'
  //   }
  // },
  // fw2_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '200'
  //   }
  // },
  // fw3_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '300'
  //   }
  // },
  // fw4_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '400'
  //   }
  // },
  // fw5_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '500'
  //   }
  // },
  // fw6_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '600'
  //   }
  // },
  // fw7_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '700'
  //   }
  // },
  // fw8_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '800'
  //   }
  // },
  // fw9_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     fontWeight: '900'
  //   }
  // },
  h1_l: {
    '@media screen and (minWidth: 60em)': {
      height: '1rem'
    }
  },
  h2_l: {
    '@media screen and (minWidth: 60em)': {
      height: '2rem'
    }
  },
  h3_l: {
    '@media screen and (minWidth: 60em)': {
      height: '4rem'
    }
  },
  h4_l: {
    '@media screen and (minWidth: 60em)': {
      height: '8rem'
    }
  },
  h5_l: {
    '@media screen and (minWidth: 60em)': {
      height: '16rem'
    }
  },
  h_25_l: {
    '@media screen and (minWidth: 60em)': {
      height: '25%'
    }
  },
  h_50_l: {
    '@media screen and (minWidth: 60em)': {
      height: '50%'
    }
  },
  h_75_l: {
    '@media screen and (minWidth: 60em)': {
      height: '75%'
    }
  },
  h_100_l: {
    '@media screen and (minWidth: 60em)': {
      height: '100%'
    }
  },
  min_h_100_l: {
    '@media screen and (minWidth: 60em)': {
      minHeight: '100%'
    }
  },
  vh_25_l: {
    '@media screen and (minWidth: 60em)': {
      height: '25vh'
    }
  },
  vh_50_l: {
    '@media screen and (minWidth: 60em)': {
      height: '50vh'
    }
  },
  vh_75_l: {
    '@media screen and (minWidth: 60em)': {
      height: '75vh'
    }
  },
  vh_100_l: {
    '@media screen and (minWidth: 60em)': {
      height: '100vh'
    }
  },
  h_auto_l: {
    '@media screen and (minWidth: 60em)': {
      height: 'auto'
    }
  },
  h_inherit_l: {
    '@media screen and (minWidth: 60em)': {
      height: 'inherit'
    }
  },
  tracked_l: {
    '@media screen and (minWidth: 60em)': {
      letterSpacing: '.1em'
    }
  },
  tracked_tight_l: {
    '@media screen and (minWidth: 60em)': {
      letterSpacing: '-.05em'
    }
  },
  tracked_mega_l: {
    '@media screen and (minWidth: 60em)': {
      letterSpacing: '.25em'
    }
  },
  lh_solid_l: {
    '@media screen and (minWidth: 60em)': {
      lineHeight: '1'
    }
  },
  lh_title_l: {
    '@media screen and (minWidth: 60em)': {
      lineHeight: '1.25'
    }
  },
  lh_copy_l: {
    '@media screen and (minWidth: 60em)': {
      lineHeight: '1.5'
    }
  },
  mw_100_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '100%'
    }
  },
  mw1_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '1rem'
    }
  },
  mw2_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '2rem'
    }
  },
  mw3_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '4rem'
    }
  },
  mw4_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '8rem'
    }
  },
  mw5_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '16rem'
    }
  },
  mw6_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '32rem'
    }
  },
  mw7_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '48rem'
    }
  },
  mw8_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '64rem'
    }
  },
  mw9_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '96rem'
    }
  },
  mw_none_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: 'none'
    }
  },
  overflow_visible_l: {
    '@media screen and (minWidth: 60em)': {
      overflow: 'visible'
    }
  },
  overflow_hidden_l: {
    '@media screen and (minWidth: 60em)': {
      overflow: 'hidden'
    }
  },
  overflow_scroll_l: {
    '@media screen and (minWidth: 60em)': {
      overflow: 'scroll'
    }
  },
  overflow_auto_l: {
    '@media screen and (minWidth: 60em)': {
      overflow: 'auto'
    }
  },
  overflow_x_visible_l: {
    '@media screen and (minWidth: 60em)': {
      overflowX: 'visible'
    }
  },
  overflow_x_hidden_l: {
    '@media screen and (minWidth: 60em)': {
      overflowX: 'hidden'
    }
  },
  overflow_x_scroll_l: {
    '@media screen and (minWidth: 60em)': {
      overflowX: 'scroll'
    }
  },
  overflow_x_auto_l: {
    '@media screen and (minWidth: 60em)': {
      overflowX: 'auto'
    }
  },
  overflow_y_visible_l: {
    '@media screen and (minWidth: 60em)': {
      overflowY: 'visible'
    }
  },
  overflow_y_hidden_l: {
    '@media screen and (minWidth: 60em)': {
      overflowY: 'hidden'
    }
  },
  overflow_y_scroll_l: {
    '@media screen and (minWidth: 60em)': {
      overflowY: 'scroll'
    }
  },
  overflow_y_auto_l: {
    '@media screen and (minWidth: 60em)': {
      overflowY: 'auto'
    }
  },
  static_l: {
    '@media screen and (minWidth: 60em)': {
      position: 'static'
    }
  },
  relative_l: {
    '@media screen and (minWidth: 60em)': {
      position: 'relative'
    }
  },
  absolute_l: {
    '@media screen and (minWidth: 60em)': {
      position: 'absolute'
    }
  },
  fixed_l: {
    '@media screen and (minWidth: 60em)': {
      position: 'fixed'
    }
  },
  rotate_45_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(45deg)'
    }
  },
  rotate_90_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(90deg)'
    }
  },
  rotate_135_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(135deg)'
    }
  },
  rotate_180_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(180deg)'
    }
  },
  rotate_225_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(225deg)'
    }
  },
  rotate_270_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(270deg)'
    }
  },
  rotate_315_l: {
    '@media screen and (minWidth: 60em)': {
      transform: 'rotate(315deg)'
    }
  },
  pa0_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-none)'
    }
  },
  pa1_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-extra-small)'
    }
  },
  pa2_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-small)'
    }
  },
  pa3_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-medium)'
    }
  },
  pa4_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-large)'
    }
  },
  pa5_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-extra-large)'
    }
  },
  pa6_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-extra-extra-large)'
    }
  },
  pa7_l: {
    '@media screen and (minWidth: 60em)': {
      padding: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pl0_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-none)'
    }
  },
  pl1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-small)'
    }
  },
  pl2_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-small)'
    }
  },
  pl3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-medium)'
    }
  },
  pl4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-large)'
    }
  },
  pl5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-large)'
    }
  },
  pl6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-large)'
    }
  },
  pl7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pr0_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-none)'
    }
  },
  pr1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-small)'
    }
  },
  pr2_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-small)'
    }
  },
  pr3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-medium)'
    }
  },
  pr4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-large)'
    }
  },
  pr5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-large)'
    }
  },
  pr6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-extra-large)'
    }
  },
  pr7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pb0_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-none)'
    }
  },
  pb1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-small)'
    }
  },
  pb2_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-small)'
    }
  },
  pb3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-medium)'
    }
  },
  pb4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-large)'
    }
  },
  pb5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-large)'
    }
  },
  pb6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  pb7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pt0_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-none)'
    }
  },
  pt1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-small)'
    }
  },
  pt2_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-small)'
    }
  },
  pt3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-medium)'
    }
  },
  pt4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-large)'
    }
  },
  pt5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-large)'
    }
  },
  pt6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-large)'
    }
  },
  pt7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  pv0_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-none)',
      paddingBottom: 'var(--spacing-none)'
    }
  },
  pv1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-small)',
      paddingBottom: 'var(--spacing-extra-small)'
    }
  },
  pv2_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-small)',
      paddingBottom: 'var(--spacing-small)'
    }
  },
  pv3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-medium)',
      paddingBottom: 'var(--spacing-medium)'
    }
  },
  pv4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-large)',
      paddingBottom: 'var(--spacing-large)'
    }
  },
  pv5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-large)',
      paddingBottom: 'var(--spacing-extra-large)'
    }
  },
  pv6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-large)',
      paddingBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  pv7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingTop: 'var(--spacing-extra-extra-extra-large)',
      paddingBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ph0_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-none)',
      paddingRight: 'var(--spacing-none)'
    }
  },
  ph1_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-small)',
      paddingRight: 'var(--spacing-extra-small)'
    }
  },
  ph2_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-small)',
      paddingRight: 'var(--spacing-small)'
    }
  },
  ph3_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-medium)',
      paddingRight: 'var(--spacing-medium)'
    }
  },
  ph4_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-large)',
      paddingRight: 'var(--spacing-large)'
    }
  },
  ph5_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-large)',
      paddingRight: 'var(--spacing-extra-large)'
    }
  },
  ph6_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-large)',
      paddingRight: 'var(--spacing-extra-extra-large)'
    }
  },
  ph7_l: {
    '@media screen and (minWidth: 60em)': {
      paddingLeft: 'var(--spacing-extra-extra-extra-large)',
      paddingRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ma0_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-none)'
    }
  },
  ma1_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-extra-small)'
    }
  },
  ma2_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-small)'
    }
  },
  ma3_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-medium)'
    }
  },
  ma4_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-large)'
    }
  },
  ma5_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-extra-large)'
    }
  },
  ma6_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-extra-extra-large)'
    }
  },
  ma7_l: {
    '@media screen and (minWidth: 60em)': {
      margin: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  ml0_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-none)'
    }
  },
  ml1_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-small)'
    }
  },
  ml2_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-small)'
    }
  },
  ml3_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-medium)'
    }
  },
  ml4_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-large)'
    }
  },
  ml5_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-large)'
    }
  },
  ml6_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-large)'
    }
  },
  ml7_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mr0_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-none)'
    }
  },
  mr1_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-extra-small)'
    }
  },
  mr2_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-small)'
    }
  },
  mr3_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-medium)'
    }
  },
  mr4_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-large)'
    }
  },
  mr5_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-extra-large)'
    }
  },
  mr6_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-extra-extra-large)'
    }
  },
  mr7_l: {
    '@media screen and (minWidth: 60em)': {
      marginRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mb0_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-none)'
    }
  },
  mb1_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-small)'
    }
  },
  mb2_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-small)'
    }
  },
  mb3_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-medium)'
    }
  },
  mb4_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-large)'
    }
  },
  mb5_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-large)'
    }
  },
  mb6_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  mb7_l: {
    '@media screen and (minWidth: 60em)': {
      marginBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mt0_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-none)'
    }
  },
  mt1_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-small)'
    }
  },
  mt2_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-small)'
    }
  },
  mt3_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-medium)'
    }
  },
  mt4_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-large)'
    }
  },
  mt5_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-large)'
    }
  },
  mt6_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-large)'
    }
  },
  mt7_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mv0_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-none)',
      marginBottom: 'var(--spacing-none)'
    }
  },
  mv1_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-small)',
      marginBottom: 'var(--spacing-extra-small)'
    }
  },
  mv2_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-small)',
      marginBottom: 'var(--spacing-small)'
    }
  },
  mv3_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-medium)',
      marginBottom: 'var(--spacing-medium)'
    }
  },
  mv4_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-large)',
      marginBottom: 'var(--spacing-large)'
    }
  },
  mv5_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-large)',
      marginBottom: 'var(--spacing-extra-large)'
    }
  },
  mv6_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-large)',
      marginBottom: 'var(--spacing-extra-extra-large)'
    }
  },
  mv7_l: {
    '@media screen and (minWidth: 60em)': {
      marginTop: 'var(--spacing-extra-extra-extra-large)',
      marginBottom: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  mh0_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-none)',
      marginRight: 'var(--spacing-none)'
    }
  },
  mh1_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-small)',
      marginRight: 'var(--spacing-extra-small)'
    }
  },
  mh2_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-small)',
      marginRight: 'var(--spacing-small)'
    }
  },
  mh3_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-medium)',
      marginRight: 'var(--spacing-medium)'
    }
  },
  mh4_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-large)',
      marginRight: 'var(--spacing-large)'
    }
  },
  mh5_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-large)',
      marginRight: 'var(--spacing-extra-large)'
    }
  },
  mh6_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-large)',
      marginRight: 'var(--spacing-extra-extra-large)'
    }
  },
  mh7_l: {
    '@media screen and (minWidth: 60em)': {
      marginLeft: 'var(--spacing-extra-extra-extra-large)',
      marginRight: 'var(--spacing-extra-extra-extra-large)'
    }
  },
  tl_l: {
    '@media screen and (minWidth: 60em)': {
      textAlign: 'left'
    }
  },
  tr_l: {
    '@media screen and (minWidth: 60em)': {
      textAlign: 'right'
    }
  },
  tc_l: {
    '@media screen and (minWidth: 60em)': {
      textAlign: 'center'
    }
  },
  strike_l: {
    '@media screen and (minWidth: 60em)': {
      textDecoration: 'line-through'
    }
  },
  underline_l: {
    '@media screen and (minWidth: 60em)': {
      textDecoration: 'underline'
    }
  },
  no_underline_l: {
    '@media screen and (minWidth: 60em)': {
      textDecoration: 'none'
    }
  },
  ttc_l: {
    '@media screen and (minWidth: 60em)': {
      textTransform: 'capitalize'
    }
  },
  ttl_l: {
    '@media screen and (minWidth: 60em)': {
      textTransform: 'lowercase'
    }
  },
  ttu_l: {
    '@media screen and (minWidth: 60em)': {
      textTransform: 'uppercase'
    }
  },
  ttn_l: {
    '@media screen and (minWidth: 60em)': {
      textTransform: 'none'
    }
  },
  f_6_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '6rem'
    }
  },
  f_headline_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '6rem'
    }
  },
  f_5_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '5rem'
    }
  },
  f_subheadline_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '5rem'
    }
  },
  f1_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '3rem'
    }
  },
  f2_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '2.25rem'
    }
  },
  f3_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '1.5rem'
    }
  },
  f4_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '1.25rem'
    }
  },
  f5_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '1rem'
    }
  },
  f6_l: {
    '@media screen and (minWidth: 60em)': {
      fontSize: '.875rem'
    }
  },
  measure_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '30em'
    }
  },
  measure_wide_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '34em'
    }
  },
  measure_narrow_l: {
    '@media screen and (minWidth: 60em)': {
      maxWidth: '20em'
    }
  },
  indent_l: {
    '@media screen and (minWidth: 60em)': {
      textIndent: '1em',
      marginTop: '0',
      marginBottom: '0'
    }
  },
  small_caps_l: {
    '@media screen and (minWidth: 60em)': {
      'font-variant': 'small-caps'
    }
  },
  truncate_l: {
    '@media screen and (minWidth: 60em)': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  v_base_l: {
    '@media screen and (minWidth: 60em)': {
      verticalAlign: 'baseline'
    }
  },
  v_mid_l: {
    '@media screen and (minWidth: 60em)': {
      verticalAlign: 'middle'
    }
  },
  v_top_l: {
    '@media screen and (minWidth: 60em)': {
      verticalAlign: 'top'
    }
  },
  v_btm_l: {
    '@media screen and (minWidth: 60em)': {
      verticalAlign: 'bottom'
    }
  },
  // clip_l: {
  //   '@media screen and (minWidth: 60em)': {
  //     position: 'fixed !important',
  //     _position: 'absolute !important',
  //     clip: 'rect(1px, 1px, 1px, 1px)'
  //   }
  // },
  ws_normal_l: {
    '@media screen and (minWidth: 60em)': {
      whiteSpace: 'normal'
    }
  },
  nowrap_l: {
    '@media screen and (minWidth: 60em)': {
      whiteSpace: 'nowrap'
    }
  },
  pre_l: {
    '@media screen and (minWidth: 60em)': {
      whiteSpace: 'pre'
    }
  },
  w1_l: {
    '@media screen and (minWidth: 60em)': {
      width: '1rem'
    }
  },
  w2_l: {
    '@media screen and (minWidth: 60em)': {
      width: '2rem'
    }
  },
  w3_l: {
    '@media screen and (minWidth: 60em)': {
      width: '4rem'
    }
  },
  w4_l: {
    '@media screen and (minWidth: 60em)': {
      width: '8rem'
    }
  },
  w5_l: {
    '@media screen and (minWidth: 60em)': {
      width: '16rem'
    }
  },
  w_10_l: {
    '@media screen and (minWidth: 60em)': {
      width: '10%'
    }
  },
  w_20_l: {
    '@media screen and (minWidth: 60em)': {
      width: '20%'
    }
  },
  w_25_l: {
    '@media screen and (minWidth: 60em)': {
      width: '25%'
    }
  },
  w_30_l: {
    '@media screen and (minWidth: 60em)': {
      width: '30%'
    }
  },
  w_33_l: {
    '@media screen and (minWidth: 60em)': {
      width: '33%'
    }
  },
  w_34_l: {
    '@media screen and (minWidth: 60em)': {
      width: '34%'
    }
  },
  w_40_l: {
    '@media screen and (minWidth: 60em)': {
      width: '40%'
    }
  },
  w_50_l: {
    '@media screen and (minWidth: 60em)': {
      width: '50%'
    }
  },
  w_60_l: {
    '@media screen and (minWidth: 60em)': {
      width: '60%'
    }
  },
  w_70_l: {
    '@media screen and (minWidth: 60em)': {
      width: '70%'
    }
  },
  w_75_l: {
    '@media screen and (minWidth: 60em)': {
      width: '75%'
    }
  },
  w_80_l: {
    '@media screen and (minWidth: 60em)': {
      width: '80%'
    }
  },
  w_90_l: {
    '@media screen and (minWidth: 60em)': {
      width: '90%'
    }
  },
  w_100_l: {
    '@media screen and (minWidth: 60em)': {
      width: '100%'
    }
  },
  w_third_l: {
    '@media screen and (minWidth: 60em)': {
      width: 'calc(100% / 3)'
    }
  },
  w_two_thirds_l: {
    '@media screen and (minWidth: 60em)': {
      width: 'calc(100% / 1.5)'
    }
  },
  w_auto_l: {
    '@media screen and (minWidth: 60em)': {
      width: 'auto'
    }
  },
  ':hover': {
    transition: 'color .15s ease-in'
  },
  underline_hover: {
    ':hover': {
      textDecoration: 'underline'
    }
  },
  pointer: {
    ':hover': {
      cursor: 'pointer'
    }
  },
  hover_black: {
    ':hover': {
      color: 'var(--black)'
    }
  },
  hover_near_black: {
    ':hover': {
      color: 'var(--near-black)'
    }
  },
  hover_dark_gray: {
    ':hover': {
      color: 'var(--dark-gray)'
    }
  },
  hover_mid_gray: {
    ':hover': {
      color: 'var(--mid-gray)'
    }
  },
  hover_gray: {
    ':hover': {
      color: 'var(--gray)'
    }
  },
  hover_silver: {
    ':hover': {
      color: 'var(--silver)'
    }
  },
  hover_light_silver: {
    ':hover': {
      color: 'var(--light-silver)'
    }
  },
  hover_moon_gray: {
    ':hover': {
      color: 'var(--moon-gray)'
    }
  },
  hover_light_gray: {
    ':hover': {
      color: 'var(--light-gray)'
    }
  },
  hover_near_white: {
    ':hover': {
      color: 'var(--near-white)'
    }
  },
  hover_white: {
    ':hover': {
      color: 'var(--white)'
    }
  },
  hover_bg_black: {
    ':hover': {
      backgroundColor: 'var(--black)'
    }
  },
  hover_bg_near_black: {
    ':hover': {
      backgroundColor: 'var(--near-black)'
    }
  },
  hover_bg_dark_gray: {
    ':hover': {
      backgroundColor: 'var(--dark-gray)'
    }
  },
  hover_bg_mid_gray: {
    ':hover': {
      backgroundColor: 'var(--mid-gray)'
    }
  },
  hover_bg_gray: {
    ':hover': {
      backgroundColor: 'var(--gray)'
    }
  },
  hover_bg_silver: {
    ':hover': {
      backgroundColor: 'var(--silver)'
    }
  },
  hover_bg_light_silver: {
    ':hover': {
      backgroundColor: 'var(--light-silver)'
    }
  },
  hover_bg_moon_gray: {
    ':hover': {
      backgroundColor: 'var(--moon-gray)'
    }
  },
  hover_bg_light_gray: {
    ':hover': {
      backgroundColor: 'var(--light-gray)'
    }
  },
  hover_bg_near_white: {
    ':hover': {
      backgroundColor: 'var(--near-white)'
    }
  },
  hover_bg_white: {
    ':hover': {
      backgroundColor: 'var(--white)'
    }
  },
  hover_bg_transparent: {
    ':hover': {
      backgroundColor: 'var(--transparent)'
    }
  },
  hover_dark_red: {
    ':hover': {
      color: 'var(--dark-red)'
    }
  },
  hover_red: {
    ':hover': {
      color: 'var(--red)'
    }
  },
  hover_light_red: {
    ':hover': {
      color: 'var(--light-red)'
    }
  },
  hover_orange: {
    ':hover': {
      color: 'var(--orange)'
    }
  },
  hover_gold: {
    ':hover': {
      color: 'var(--gold)'
    }
  },
  hover_yellow: {
    ':hover': {
      color: 'var(--yellow)'
    }
  },
  hover_light_yellow: {
    ':hover': {
      color: 'var(--light-yellow)'
    }
  },
  hover_purple: {
    ':hover': {
      color: 'var(--purple)'
    }
  },
  hover_light_purple: {
    ':hover': {
      color: 'var(--light-purple)'
    }
  },
  hover_dark_pink: {
    ':hover': {
      color: 'var(--dark-pink)'
    }
  },
  hover_hot_pink: {
    ':hover': {
      color: 'var(--hot-pink)'
    }
  },
  hover_pink: {
    ':hover': {
      color: 'var(--pink)'
    }
  },
  hover_light_pink: {
    ':hover': {
      color: 'var(--light-pink)'
    }
  },
  hover_dark_green: {
    ':hover': {
      color: 'var(--dark-green)'
    }
  },
  hover_green: {
    ':hover': {
      color: 'var(--green)'
    }
  },
  hover_light_green: {
    ':hover': {
      color: 'var(--light-green)'
    }
  },
  hover_navy: {
    ':hover': {
      color: 'var(--navy)'
    }
  },
  hover_dark_blue: {
    ':hover': {
      color: 'var(--dark-blue)'
    }
  },
  hover_blue: {
    ':hover': {
      color: 'var(--blue)'
    }
  },
  hover_light_blue: {
    ':hover': {
      color: 'var(--light-blue)'
    }
  },
  hover_lightest_blue: {
    ':hover': {
      color: 'var(--lightest-blue)'
    }
  },
  hover_washed_blue: {
    ':hover': {
      color: 'var(--washed-blue)'
    }
  },
  hover_washed_green: {
    ':hover': {
      color: 'var(--washed-green)'
    }
  },
  hover_washed_yellow: {
    ':hover': {
      color: 'var(--washed-yellow)'
    }
  },
  hover_washed_red: {
    ':hover': {
      color: 'var(--washed-red)'
    }
  },
  hover_bg_dark_red: {
    ':hover': {
      backgroundColor: 'var(--dark-red)'
    }
  },
  hover_bg_red: {
    ':hover': {
      backgroundColor: 'var(--red)'
    }
  },
  hover_bg_light_red: {
    ':hover': {
      backgroundColor: 'var(--light-red)'
    }
  },
  hover_bg_orange: {
    ':hover': {
      backgroundColor: 'var(--orange)'
    }
  },
  hover_bg_gold: {
    ':hover': {
      backgroundColor: 'var(--gold)'
    }
  },
  hover_bg_yellow: {
    ':hover': {
      backgroundColor: 'var(--yellow)'
    }
  },
  hover_bg_light_yellow: {
    ':hover': {
      backgroundColor: 'var(--light-yellow)'
    }
  },
  hover_bg_purple: {
    ':hover': {
      backgroundColor: 'var(--purple)'
    }
  },
  hover_bg_light_purple: {
    ':hover': {
      backgroundColor: 'var(--light-purple)'
    }
  },
  hover_bg_dark_pink: {
    ':hover': {
      backgroundColor: 'var(--dark-pink)'
    }
  },
  hover_bg_hot_pink: {
    ':hover': {
      backgroundColor: 'var(--hot-pink)'
    }
  },
  hover_bg_pink: {
    ':hover': {
      backgroundColor: 'var(--pink)'
    }
  },
  hover_bg_light_pink: {
    ':hover': {
      backgroundColor: 'var(--light-pink)'
    }
  },
  hover_bg_dark_green: {
    ':hover': {
      backgroundColor: 'var(--dark-green)'
    }
  },
  hover_bg_green: {
    ':hover': {
      backgroundColor: 'var(--green)'
    }
  },
  hover_bg_light_green: {
    ':hover': {
      backgroundColor: 'var(--light-green)'
    }
  },
  hover_bg_navy: {
    ':hover': {
      backgroundColor: 'var(--navy)'
    }
  },
  hover_bg_dark_blue: {
    ':hover': {
      backgroundColor: 'var(--dark-blue)'
    }
  },
  hover_bg_blue: {
    ':hover': {
      backgroundColor: 'var(--blue)'
    }
  },
  hover_bg_light_blue: {
    ':hover': {
      backgroundColor: 'var(--light-blue)'
    }
  },
  hover_bg_lightest_blue: {
    ':hover': {
      backgroundColor: 'var(--lightest-blue)'
    }
  },
  hover_bg_washed_blue: {
    ':hover': {
      backgroundColor: 'var(--washed-blue)'
    }
  },
  hover_bg_washed_green: {
    ':hover': {
      backgroundColor: 'var(--washed-green)'
    }
  },
  hover_bg_washed_yellow: {
    ':hover': {
      backgroundColor: 'var(--washed-yellow)'
    }
  },
  hover_bg_washed_red: {
    ':hover': {
      backgroundColor: 'var(--washed-red)'
    }
  }
}
