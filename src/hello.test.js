import React from 'react'
import {shallow} from 'enzyme'
import Hello from './hello'

test('I can see Hello', () => {
  const hello = shallow(
    <Hello name="world" />
  )
  expect(hello.is('h1')).toEqual(true)
  expect(hello.text()).toEqual('Hello world!')
})
