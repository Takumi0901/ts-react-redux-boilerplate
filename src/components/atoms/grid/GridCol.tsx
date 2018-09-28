import * as React from 'react'
import * as ClassNames from 'classnames'
import styled, { IThemeInterface, SCThemeProps } from 'src/styles/index'

interface Props {
  size?: number
  classes?: string[]
  style?: { [key: string]: string }
}

type ICompProps = SCThemeProps<Props>

const GridCol: React.SFC<Props> = props => {
  const { classes, children } = props
  return (
    <ScGridCol {...props} className={ClassNames(classes)}>
      {children}
    </ScGridCol>
  )
}

export default GridCol

export const ScGridCol = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  ${({ size, theme }: ICompProps) => size && getGridSize({ size: size, theme: theme })};
  ${({ size, theme }: ICompProps) => getGridGuttersSize({ size: size, theme: theme })};
  ${({ theme }: ICompProps) => getGridMargin(theme)};
  ${({ theme }: ICompProps) => getGridQuery(theme)};
  ${({ theme }: ICompProps) => getGridQueryCol2(theme)};
`

const getGridSize = ({ size, theme }: ICompProps) => {
  return `
    width: ${theme.grid.colWidth * size}%;
  `
}

const getGridGuttersSize = ({ size, theme }: ICompProps) => {
  if (size) {
    return `
      .grid-gutters > & {
        width: ${theme.grid.colWidthGutters * size - theme.grid.gutters}%;
        margin-left: ${theme.grid.gutters}%;
          &:first-child {
            margin-left: 0;
          }
      }
    `
  } else {
    return `
      .grid-gutters > & {
        margin-left: ${theme.grid.gutters}%;
          &:first-child {
            margin-left: 0;
          }
      }
    `
  }
}

const getGridMargin = (theme: IThemeInterface) => {
  return `
    .grid-margin > & {
      margin-bottom: ${theme.base.size * 2}px;
    }
  `
}

const getGridQuery = (theme: IThemeInterface) => {
  return `
    @media (max-width: ${theme.base.viewport.desktop}px) {
      .grid-query > & {
        width: 100% !important;
        display: block !important;
        margin: 0 0 ${theme.base.size * 3}px;
        padding: 0 !important;
        &.u-d-pc {
          display: none !important;
          margin: 0;
        }
      }
    }
  `
}

const getGridQueryCol2 = (theme: IThemeInterface) => {
  return `
    @media (max-width: ${theme.base.viewport.desktop}px) {
      .grid-query-col2 > & {
        width: 50% !important;
      }
    }
  `
}