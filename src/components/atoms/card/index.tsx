import * as React from 'react'
import * as ClassNames from 'classnames'
import styled, { SCThemeProps, css } from 'src/styles/index'

interface CardProps {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

interface CardContentProps {
  contentH?: number
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

type ICardCompProps = SCThemeProps<CardProps>
type ICardContentCompProps = SCThemeProps<CardContentProps>

export const Card: React.SFC<CardProps> = props => {
  const { children } = props
  return (
    <ScCard className={ClassNames(props.classes)} {...props}>
      {children}
    </ScCard>
  )
}

export const CardContent: React.SFC<CardContentProps> = props => {
  const { children } = props
  return (
    <ScCardContent className={ClassNames(props.classes)} {...props}>
      {children}
    </ScCardContent>
  )
}

export const ScCard = styled.div`
  ${({ theme, color = 'white' }: ICardCompProps) => css`
    background: ${theme.color[color]};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;

    &.shadowless {
      box-shadow: none;
    }
  `};
`

export const ScCardContent = styled.div`
  ${({ theme, contentH }: ICardContentCompProps) => css`
    padding: ${theme.base.size * 2}px;
    min-height: ${contentH ? contentH + 'px' : 'auto'};
    max-height: ${contentH ? contentH + 'px' : 'auto'};
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      padding: ${theme.base.size * 3}px;
    }
  `};
`
