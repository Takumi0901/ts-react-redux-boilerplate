import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { utilityStyles } from 'src/styles/utility'
import { IThemeInterface } from 'src/styles'

const baseStyles = (theme: IThemeInterface) => injectGlobal`
  ${reset}
  html{
    font-size: ${theme.base.fontSize};
  }
  body {
    margin: 0;
    background: ${theme.color.white};
    color: ${theme.color.black};
    font-family: ${theme.base.fontFamily};
    font-size: 1em;
    line-height: ${theme.base.lineHeight};
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
  a {
    cursor: pointer;

    &:link,
    &:visited {
      color: ${theme.color.black};
      text-decoration: none;
    }
  
    &:hover {
      opacity: .9;
      text-decoration: underline;
    }
  }
  h1,h2,h3,h4,h5, h6 {
    font-weight: 800;
  }
  #root {
    font-size: ${theme.font.size};
  }
  ${utilityStyles()}
`

export default baseStyles
