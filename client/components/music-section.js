import React, { Component } from 'react'
import Parser from 'html-react-parser'

export default class MusicSection extends Component {
  render() {
    const { user } = this.props
    const links = []
    for (const key in user) {
      if (key.startsWith('soundcloudLink')) {
        links.push(Parser((user[key]).replace(/'/, "'")))
      }
    }
    return (
      <div>
        {links.map((link, index) => <div key={ index }>{ link }</div>)}
      </div>
    )
  }
}
