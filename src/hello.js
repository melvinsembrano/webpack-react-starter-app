// @flow
import React from 'react'

type Props = {
  name: string
}
export default class Hello extends React.Component<Props> {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
}
