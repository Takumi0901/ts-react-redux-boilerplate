import * as React from 'react'

declare module '@storybook/react' {
  export interface Story {
    addWithJSX(storyName: string, callback: RenderFunction): this
  }
}

import { storiesOf } from '@storybook/react'
import Button from './index'
import { wInfo } from '../../../../.storybook/utils'

storiesOf('atoms', module).addWithJSX(
  'Button',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    name={'button'}
    onClick={() => alert('hello there')}
  />
  ~~~`)(() => <Button name={'button'} onClick={() => alert('hello there')} />)
)
