import * as React from 'react'
import * as ClassNames from 'classnames'
import styled, { css } from 'src/styles/index'

interface Props {
  name: string
  onClick?: () => void
  disabled?: boolean
  fontSize?: number
  color?: string
  sizeH?: number
  classes?: string[]
  style?: { [key: string]: string }
}

const Button: React.SFC<Props> = props => {
  const { name, onClick, classes } = props
  return (
    <ScButton className={ClassNames(classes)} type={'button'} {...props} onClick={onClick}>
      {name}
    </ScButton>
  )
}

export default Button

export const ScButton = styled.button`
  ${({ theme, sizeH = 32, fontSize = 14, color = 'primary' }: any) => css`
    position: relative;
    display: inline-block;
    height: ${sizeH}px;
    background: ${color === 'black' ? theme.color.white : theme.color[color]};
    border: solid 1px ${theme.color[color]};
    padding: 0 ${theme.base.size * 3}px;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    font-size: ${fontSize}px;
    white-space: nowrap;
    outline: none;
    touch-action: manipulation;
    cursor: pointer;
    color: ${color === 'black' ? theme.color[color] : theme.color.white};

    &:link,
    &:active,
    &:hover,
    &:visited {
      text-decoration: none;
    }

    &:hover {
      opacity: 0.8;
    }

    &.disabled,
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `};
`
