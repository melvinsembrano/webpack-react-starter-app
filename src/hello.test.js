import React from 'react'
import {shallow} from 'enzyme'
import Hello from './hello'

test('I am h1', () => {
  const hello = shallow(
    <Hello name="world" />
  )
  expect(hello.is('h1')).toEqual(true)
})

test('I can say Hello', () => {
  const hello = shallow(
    <Hello name="world" />
  )
  expect(hello.text()).toEqual('Hello world!')
})
