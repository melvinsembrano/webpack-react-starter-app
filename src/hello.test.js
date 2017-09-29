import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Hello from './hello'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

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
