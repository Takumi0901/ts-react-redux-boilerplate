import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>

const BASE = {
  gridCol: 16,
  gridMaxWidth: 100,
  gridColGutters: 2
}

export interface IThemeInterface {
  base: {
    size: number
    viewport: {
      phone: number
      desktop: number
      largeDesktop: number
    }
    maxWidth: string
    fontFamily: string
    fontSize: string
    lineHeight: number
  }
  font: {
    size: string
  }
  color: {
    black: string
    white: string
    grey: string
    primary: string
    info: string
    action: string
    warning: string
    caution: string
  }
  grid: {
    col: number
    maxWidth: number
    gutters: number
    colWidth: number
    colWidthGutters: number
  }
}

export const theme = {
  base: {
    size: 8,
    viewport: {
      phone: 768,
      desktop: 769,
      largeDesktop: 1020
    },
    maxWidth: '1200px',
    fontFamily: '"Yu Gothic", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif',
    fontSize: '62.5%',
    lineHeight: 1.6
  },
  font: {
    size: '1.4rem'
  },
  color: {
    black: '#333',
    white: '#fff',
    grey: '#626262',
    primary: '#4BA0E0',
    info: '#43e5d3',
    action: '#4174c1',
    warning: '#EA9137',
    caution: '#db4437'
  },
  grid: {
    col: BASE.gridCol,
    maxWidth: BASE.gridMaxWidth,
    gutters: BASE.gridColGutters,
    colWidth: BASE.gridMaxWidth / BASE.gridCol,
    colWidthGutters: (BASE.gridMaxWidth + BASE.gridColGutters) / BASE.gridCol
  }
}

export default styled
export { css, injectGlobal, keyframes, ThemeProvider }
