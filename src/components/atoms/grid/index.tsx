import * as React from 'react'
import * as ClassNames from 'classnames'
import styled, { SCThemeProps } from 'src/styles/index'

interface Props {
  gutters?: boolean
  margin?: boolean
  query?: boolean
  vAlign?: string
  align?: string
  direction?: string
  classes?: string[]
  queryCol2?: boolean
  style?: { [key: string]: string }
}

type ICompProps = SCThemeProps<Props>

const Grid: React.SFC<Props> = props => {
  const { classes, gutters, margin, query, children, queryCol2 } = props
  return (
    <ScGrid
      {...props}
      className={ClassNames(classes, {
        'grid-gutters': gutters,
        'grid-margin': margin,
        'grid-query': query,
        'grid-query-col2': queryCol2
      })}
    >
      {children}
    </ScGrid>
  )
}

export default Grid

export const ScGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  ${({ theme, query }: ICompProps) =>
    query &&
    `
    display: block;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      display: flex;   
    }
  `};
  ${({ vAlign }: ICompProps) => vAlign && getGridVAlign(vAlign)};
  ${({ align }: ICompProps) => align && getGridAlign(align)};
  ${({ direction }: ICompProps) => direction && getGridDirection(direction)};
`

const getGridVAlign = (vAlign: string) => {
  if (vAlign === 'top') {
    return `
      align-items: flex-start;
    `
  } else if (vAlign === 'middle') {
    return `
      align-items: center;
    `
  } else if (vAlign === 'bottom') {
    return `
      align-items: flex-end;
    `
  } else if (vAlign === 'stretch') {
    return `
      align-items: stretch;
    `
  } else if (vAlign === 'baseline') {
    return `
      align-items: baseline;
    `
  }
}

const getGridAlign = (align: string) => {
  if (align === 'left') {
    return `
      justify-content: flex-start;
    `
  } else if (align === 'center') {
    return `
      justify-content: center;
    `
  } else if (align === 'right') {
    return `
      justify-content: flex-end;
    `
  } else if (align === 'between') {
    return `
      justify-content: space-between;
    `
  }
}

const getGridDirection = (direction: string) => {
  if (direction === 'row') {
    return `
      flex-direction: row;
    `
  } else if (direction === 'reverse') {
    return `
      flex-direction: row-reverse;
    `
  }
}
